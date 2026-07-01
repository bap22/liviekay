import Link from "next/link";

const SectionHeader = ({ id, label, title }: { id: string; label: string; title: string }) => (
  <div id={id} className="mb-12 scroll-mt-24">
    <p
      className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-3"
      style={{ fontFamily: "var(--font-lato), sans-serif" }}
    >
      {label}
    </p>
    <h2
      className="text-4xl md:text-5xl font-light text-[#2d2d2d] mb-4"
      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
    >
      {title}
    </h2>
    <div className="flex items-center gap-4">
      <div className="h-px w-16 bg-[#c8a8e9]"></div>
      <span className="text-[#c8a8e9]">✦</span>
    </div>
  </div>
);

const ServiceRow = ({ name, price, note }: { name: string; price: string; note?: string }) => (
  <div className="flex items-baseline justify-between py-4 border-b border-[#ede4f8] group">
    <div>
      <p
        className="text-lg text-[#2d2d2d] group-hover:text-[#9b72cc] transition-colors"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {name}
      </p>
      {note && (
        <p
          className="text-xs text-[#999] mt-1"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          {note}
        </p>
      )}
    </div>
    <p
      className="text-lg font-semibold text-[#9b72cc] ml-8 whitespace-nowrap"
      style={{ fontFamily: "var(--font-lato), sans-serif" }}
    >
      {price}
    </p>
  </div>
);

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#f3ecfb] to-[#ede4f8] py-24 px-6 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          Livie Kay Esthetics
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-[#2d2d2d] mb-6"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Services & Pricing
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#c8a8e9]"></div>
          <span className="text-[#c8a8e9]">✦</span>
          <div className="h-px w-16 bg-[#c8a8e9]"></div>
        </div>
        <p
          className="text-base text-[#777] max-w-lg mx-auto"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          All services are personalized to your unique needs. Free consultations available — text to book.
        </p>
      </section>

      {/* Jump nav */}
      <section className="bg-white border-b border-[#ede4f8] sticky top-[73px] z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
          {[
            { href: "#facial", label: "Facials" },
            { href: "#addons", label: "Add-Ons" },
            { href: "#piercings", label: "Piercings" },
            { href: "#brows", label: "Brow Lamination" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase text-[#555] hover:text-[#9b72cc] transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-20">

          {/* Facials */}
          <div>
            <SectionHeader id="facial" label="Signature Service" title="Facials" />
            <div className="bg-[#faf8fc] border border-[#ede4f8] p-8 md:p-12">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <h3
                    className="text-3xl font-light text-[#2d2d2d]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Traditional Facial
                  </h3>
                  <p
                    className="text-sm text-[#777] mt-1"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    Approx. 60–75 minutes
                  </p>
                </div>
                <p
                  className="text-4xl font-light text-[#9b72cc]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  $75
                </p>
              </div>
              <p
                className="text-base text-[#555] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Our signature facial experience — designed to cleanse, restore, and rejuvenate your skin from the inside out.
              </p>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#9b72cc] mb-4"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Includes
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: "◉", label: "20 min Massage" },
                  { icon: "◎", label: "Cleansing" },
                  { icon: "✦", label: "Exfoliating" },
                  { icon: "◈", label: "Mask" },
                  { icon: "⟡", label: "LED Therapy" },
                  { icon: "✧", label: "Serum" },
                  { icon: "◉", label: "Moisturizer" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-[#c8a8e9] text-sm">{item.icon}</span>
                    <p
                      className="text-sm text-[#555]"
                      style={{ fontFamily: "var(--font-lato), sans-serif" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-Ons */}
          <div>
            <SectionHeader id="addons" label="Enhance Your Facial" title="Add-On Services" />
            <p
              className="text-base text-[#555] mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Customize your facial with any of the following add-on treatments for enhanced results.
            </p>
            <ServiceRow name="Microneedling" price="$45" note="Stimulates collagen production for smoother, firmer skin" />
            <ServiceRow name="Microdermabrasion" price="$35" note="Exfoliates and resurfaces for a brighter complexion" />
            <ServiceRow name="Dermaplaning" price="$25" note="Removes dead skin & peach fuzz for silky smooth skin" />
            <ServiceRow name="Chemical Peel" price="$35" note="Targeted peel to address texture, tone & clarity" />
          </div>

          {/* Piercings */}
          <div>
            <SectionHeader id="piercings" label="Professional Piercing" title="Piercings" />
            <p
              className="text-base text-[#555] mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Clean, professional ear piercings performed with precision and care. All piercings include high-quality jewelry.
            </p>
            <ServiceRow name="Matching Lobes" price="$40" note="Both ears pierced together" />
            <ServiceRow name="Singular Lobe" price="$25" note="Single ear lobe piercing" />
            <ServiceRow name="Helix" price="$45" note="Upper cartilage piercing" />
            <ServiceRow name="Conch" price="$50" note="Inner ear cartilage piercing" />
          </div>

          {/* Brow Lamination */}
          <div>
            <SectionHeader id="brows" label="Brow Services" title="Brow Lamination" />
            <p
              className="text-base text-[#555] mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Achieve perfectly groomed, fluffy brows that stay in place. Results last 6–8 weeks.
            </p>
            <ServiceRow name="Brow Lamination" price="$40" />
            <ServiceRow name="Add Brow Tint" price="+ $5" note="Optional add-on with lamination" />
          </div>

          {/* Free consultations */}
          <div className="bg-gradient-to-br from-[#ede4f8] to-[#f3ecfb] p-10 md:p-16 text-center">
            <div className="text-4xl text-[#c8a8e9] mb-4">✦</div>
            <h3
              className="text-3xl md:text-4xl font-light text-[#2d2d2d] mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Free Consultations
            </h3>
            <p
              className="text-base text-[#555] max-w-md mx-auto mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Not sure where to start? Book a free consultation and we&apos;ll find the perfect treatment plan for your skin and goals.
            </p>
            <a
              href="sms:3852502345"
              className="inline-block bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Text to Book — 385-250-2345
            </a>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#2d2d2d] py-16 px-6 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#c8a8e9] mb-4"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          Ready?
        </p>
        <h3
          className="text-3xl md:text-4xl font-light text-white mb-8"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Book Your Appointment
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="sms:3852502345"
            className="bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Text 385-250-2345
          </a>
          <Link
            href="/"
            className="border border-[#c8a8e9] text-[#c8a8e9] hover:bg-[#c8a8e9] hover:text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
