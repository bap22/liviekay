"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  { group: "Facial", options: ["Traditional Facial — $75"] },
  {
    group: "Facial Add-Ons",
    options: [
      "Add-On: Microneedling — $45",
      "Add-On: Microdermabrasion — $35",
      "Add-On: Dermaplaning — $25",
      "Add-On: Chemical Peel — $35",
    ],
  },
  {
    group: "Piercings",
    options: [
      "Piercing: Matching Lobes — $40",
      "Piercing: Singular Lobe — $25",
      "Piercing: Helix — $45",
      "Piercing: Conch — $50",
    ],
  },
  {
    group: "Brow Lamination",
    options: ["Brow Lamination — $40", "Brow Lamination + Tint — $45"],
  },
  { group: "Other", options: ["Free Consultation"] },
];

type Status = "idle" | "sending" | "success" | "error";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    timeSlot: "",
    notes: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.timeSlot) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full border border-[#ede4f8] bg-white px-4 py-3 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#c8a8e9] transition-colors placeholder:text-[#bbb]";
  const labelClass =
    "block text-xs tracking-[0.2em] uppercase text-[#9b72cc] mb-2";

  if (status === "success") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center">
          <div className="text-5xl text-[#c8a8e9] mb-6">✦</div>
          <h1
            className="text-4xl font-light text-[#2d2d2d] mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Request Sent!
          </h1>
          <div className="h-px w-16 bg-[#c8a8e9] mx-auto mb-6"></div>
          <p
            className="text-base text-[#555] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Thanks, {form.name}! Olivia received your booking request and will reach out to confirm
            your appointment. In the meantime you can always text or call{" "}
            <a href="tel:3852502345" className="text-[#9b72cc] font-semibold">
              385-250-2345
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="border border-[#c8a8e9] text-[#9b72cc] hover:bg-[#ede4f8] text-xs tracking-widest uppercase py-4 px-10 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f3ecfb] to-[#ede4f8] py-20 px-6 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          Schedule Your Visit
        </p>
        <h1
          className="text-5xl md:text-6xl font-light text-[#2d2d2d] mb-6"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Book an Appointment
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#c8a8e9]"></div>
          <span className="text-[#c8a8e9]">✦</span>
          <div className="h-px w-16 bg-[#c8a8e9]"></div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="name">
                  Name <span className="text-[#c8a8e9]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone <span className="text-[#c8a8e9]">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(xxx) xxx-xxxx"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={labelClass} htmlFor="email">
                Email <span className="text-[#aaa] normal-case tracking-normal font-light">(optional — for confirmation)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            {/* Service */}
            <div>
              <label className={labelClass} htmlFor="service">
                Service <span className="text-[#c8a8e9]">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
                required
              >
                <option value="">Select a service…</option>
                {SERVICES.map((group) => (
                  <optgroup key={group.group} label={group.group}>
                    {group.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="date">
                  Preferred Date <span className="text-[#c8a8e9]">*</span>
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="timeSlot">
                  Preferred Time <span className="text-[#c8a8e9]">*</span>
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={form.timeSlot}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                  required
                >
                  <option value="">Select a time…</option>
                  <option value="morning">Morning (9am – 12pm)</option>
                  <option value="afternoon">Afternoon (12pm – 5pm)</option>
                  <option value="evening">Evening (5pm – 7pm)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className={labelClass} htmlFor="notes">
                Notes or Questions
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Anything Olivia should know about your skin, concerns, or questions…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error */}
            {errorMsg && (
              <p
                className="text-sm text-red-500"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#c8a8e9] hover:bg-[#9b72cc] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs tracking-widest uppercase py-4 px-12 transition-colors"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {status === "sending" ? "Sending…" : "Send Booking Request"}
              </button>
              <p
                className="text-xs text-[#999]"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Or text directly:{" "}
                <a href="sms:3852502345" className="text-[#9b72cc] hover:underline">
                  385-250-2345
                </a>
              </p>
            </div>

            <p
              className="text-xs text-[#bbb] leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              This sends a booking request to Olivia. She&apos;ll reach out to confirm your exact time.
              Your information is only used to schedule your appointment.
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="h-px flex-1 bg-[#ede4f8]"></div>
            <span className="text-[#c8a8e9] text-sm">✦</span>
            <div className="h-px flex-1 bg-[#ede4f8]"></div>
          </div>

          {/* Other ways to reach */}
          <div className="text-center">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#9b72cc] mb-6"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Other Ways to Reach Olivia
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="sms:3852502345"
                className="flex items-center gap-2 text-sm text-[#555] hover:text-[#9b72cc] transition-colors"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#c8a8e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Text 385-250-2345
              </a>
              <span className="text-[#ede4f8] hidden sm:inline">|</span>
              <a
                href="tel:3852502345"
                className="flex items-center gap-2 text-sm text-[#555] hover:text-[#9b72cc] transition-colors"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#c8a8e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 385-250-2345
              </a>
              <span className="text-[#ede4f8] hidden sm:inline">|</span>
              <a
                href="https://www.instagram.com/olivia.esthetic6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#555] hover:text-[#9b72cc] transition-colors"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#c8a8e9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram DM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
