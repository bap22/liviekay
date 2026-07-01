import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Build an .ics file string for the requested appointment
function buildICS(data: {
  clientName: string;
  service: string;
  date: string;
  timeSlot: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
}) {
  // Parse the date and create a rough start/end time
  const [year, month, day] = data.date.split("-").map(Number);
  const startHour = data.timeSlot === "morning" ? 10 : data.timeSlot === "afternoon" ? 14 : 17;
  const endHour = startHour + 1;

  const pad = (n: number) => String(n).padStart(2, "0");
  const dtStart = `${year}${pad(month)}${pad(day)}T${pad(startHour)}0000`;
  const dtEnd = `${year}${pad(month)}${pad(day)}T${pad(endHour)}0000`;
  const dtStamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const uid = `${dtStamp}-liviekay@liviekay.com`;

  const description = [
    `Client: ${data.clientName}`,
    `Phone: ${data.clientPhone}`,
    `Email: ${data.clientEmail}`,
    `Service: ${data.service}`,
    data.notes ? `Notes: ${data.notes}` : "",
  ]
    .filter(Boolean)
    .join("\\n");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Livie Kay Esthetics//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}Z`,
    `DTSTART;TZID=America/Denver:${dtStart}`,
    `DTEND;TZID=America/Denver:${dtEnd}`,
    `SUMMARY:${data.service} — ${data.clientName}`,
    `DESCRIPTION:${description}`,
    "ORGANIZER;CN=Livie Kay Esthetics:mailto:liviekay@icloud.com",
    `ATTENDEE;CN=${data.clientName};RSVP=FALSE:mailto:${data.clientEmail}`,
    "STATUS:TENTATIVE",
    "BEGIN:VALARM",
    "TRIGGER:-PT1H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Upcoming appointment reminder",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

// Pretty time slot label
function timeLabel(slot: string) {
  return slot === "morning"
    ? "Morning (9am–12pm)"
    : slot === "afternoon"
    ? "Afternoon (12pm–5pm)"
    : "Evening (5pm–7pm)";
}

// Format date nicely
function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, date, timeSlot, notes } = body;

    // Validate required fields
    if (!name || !phone || !service || !date || !timeSlot) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const icsContent = buildICS({
      clientName: name,
      service,
      date,
      timeSlot,
      clientEmail: email || "",
      clientPhone: phone,
      notes: notes || "",
    });

    // Email to Olivia with the .ics calendar attachment
    const ownerEmail = await resend.emails.send({
      from: "Livie Kay Bookings <bookings@liviekay.com>",
      to: "liviekay@icloud.com",
      subject: `New Booking Request — ${name} · ${service}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #2d2d2d;">
          <div style="border-top: 3px solid #c8a8e9; padding-top: 24px; margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 300; color: #2d2d2d; margin: 0 0 4px;">
              New Booking Request
            </h1>
            <p style="color: #9b72cc; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0;">
              Livie Kay Esthetics
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; width: 120px;">
                Client
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-size: 16px;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">
                Phone
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-size: 16px;">
                <a href="tel:${phone}" style="color: #9b72cc; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ${
              email
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-size: 16px;">
                <a href="mailto:${email}" style="color: #9b72cc; text-decoration: none;">${email}</a>
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">
                Service
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-size: 16px; color: #9b72cc; font-weight: 600;">
                ${service}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">
                Date
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-size: 16px;">
                ${formatDate(date)}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">
                Time
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #ede4f8; font-size: 16px;">
                ${timeLabel(timeSlot)}
              </td>
            </tr>
            ${
              notes
                ? `<tr>
              <td style="padding: 12px 0; font-family: Arial, sans-serif; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">
                Notes
              </td>
              <td style="padding: 12px 0; font-size: 15px; color: #555; line-height: 1.6;">
                ${notes}
              </td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 32px; padding: 20px; background: #f3ecfb; border-left: 3px solid #c8a8e9;">
            <p style="font-family: Arial, sans-serif; font-size: 13px; color: #555; margin: 0 0 12px;">
              📅 The .ics file attached will add this appointment to your iCloud Calendar. Click it to confirm the time.
            </p>
            <p style="font-family: Arial, sans-serif; font-size: 13px; color: #555; margin: 0;">
              💬 Reply to confirm with the client or call/text them at
              <a href="tel:${phone}" style="color: #9b72cc;">${phone}</a>.
            </p>
          </div>

          <p style="font-family: Arial, sans-serif; font-size: 11px; color: #bbb; margin-top: 32px; text-align: center;">
            Livie Kay Esthetics · 385-250-2345
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `booking-${name.replace(/\s+/g, "-").toLowerCase()}.ics`,
          content: Buffer.from(icsContent).toString("base64"),
        },
      ],
    });

    if (ownerEmail.error) {
      console.error("Resend error:", ownerEmail.error);
      return NextResponse.json({ error: "Failed to send booking email." }, { status: 500 });
    }

    // Optional: send client confirmation if they provided an email
    if (email) {
      await resend.emails.send({
        from: "Livie Kay Esthetics <bookings@liviekayesthetics.com>",
        to: email,
        subject: `Your booking request was received — Livie Kay Esthetics`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #2d2d2d;">
            <div style="border-top: 3px solid #c8a8e9; padding-top: 24px; margin-bottom: 24px;">
              <h1 style="font-size: 24px; font-weight: 300; margin: 0 0 4px;">Thanks, ${name}!</h1>
              <p style="color: #9b72cc; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0;">
                Livie Kay Esthetics
              </p>
            </div>
            <p style="font-family: Arial, sans-serif; font-size: 14px; color: #555; line-height: 1.7;">
              Your booking request for <strong>${service}</strong> on <strong>${formatDate(date)}</strong> (${timeLabel(timeSlot)}) has been received.
            </p>
            <p style="font-family: Arial, sans-serif; font-size: 14px; color: #555; line-height: 1.7;">
              Olivia will reach out to confirm your exact appointment time. In the meantime, feel free to text or call: <a href="tel:3852502345" style="color: #9b72cc;">385-250-2345</a>.
            </p>
            <div style="margin-top: 24px; padding: 16px; background: #f3ecfb; text-align: center;">
              <p style="font-family: Arial, sans-serif; font-size: 11px; color: #9b72cc; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 4px;">
                Free Consultations Availableß
              </p>
              <p style="font-family: Georgia, serif; font-size: 16px; color: #2d2d2d; margin: 0; font-style: italic;">
                Can't wait to work with you ✦
              </p>
            </div>
            <p style="font-family: Arial, sans-serif; font-size: 11px; color: #bbb; margin-top: 24px; text-align: center;">
              Livie Kay Esthetics · 385-250-2345 · liviekay@icloud.com
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
