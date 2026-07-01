import Link from "next/link";
import Image from "next/image";
import BeholdWidget from "@behold/react";

const FloralSvg = () => (
  <svg viewBox="0 0 400 200" className="w-full opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="200" cy="60" rx="30" ry="50" stroke="#c8a8e9" strokeWidth="1.5" transform="rotate(-15 200 60)"/>
    <ellipse cx="200" cy="60" rx="30" ry="50" stroke="#c8a8e9" strokeWidth="1.5" transform="rotate(15 200 60)"/>
    <ellipse cx="200" cy="60" rx="30" ry="50" stroke="#c8a8e9" strokeWidth="1.5" transform="rotate(45 200 60)"/>
    <ellipse cx="200" cy="60" rx="30" ry="50" stroke="#c8a8e9" strokeWidth="1.5" transform="rotate(-45 200 60)"/>
    <circle cx="200" cy="60" r="12" stroke="#c8a8e9" strokeWidth="1.5"/>
    <path d="M170 60 Q185 30 200 20 Q215 30 230 60" stroke="#c8a8e9" strokeWidth="1"/>
    <path d="M100 120 Q150 80 200 60" stroke="#c8a8e9" strokeWidth="1"/>
    <path d="M300 120 Q250 80 200 60" stroke="#c8a8e9" strokeWidth="1"/>
    <ellipse cx="120" cy="100" rx="18" ry="28" stroke="#c8a8e9" strokeWidth="1" transform="rotate(-30 120 100)"/>
    <ellipse cx="120" cy="100" rx="18" ry="28" stroke="#c8a8e9" strokeWidth="1" transform="rotate(30 120 100)"/>
    <ellipse cx="280" cy="100" rx="18" ry="28" stroke="#c8a8e9" strokeWidth="1" transform="rotate(30 280 100)"/>
    <ellipse cx="280" cy="100" rx="18" ry="28" stroke="#c8a8e9" strokeWidth="1" transform="rotate(-30 280 100)"/>
  </svg>
);

const services = [
  {
    title: "Facial",
    icon: "✦",
    desc: "Traditional Facial — $75",
    detail: "Includes 20 min massage, cleansing, exfoliating, mask, LED, serum & moisturizer",
    href: "/services#facial",
    image: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Piercings",
    icon: "◈",
    desc: "From $25",
    detail: "Lobes, Helix, and Conch piercings using professional-grade jewelry",
    href: "/services#piercings",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Brow Lamination",
    icon: "⟡",
    desc: "From $40",
    detail: "Lamination with optional brow tint add-on for perfectly shaped brows",
    href: "/services#brows",
    image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Add-Ons",
    icon: "✧",
    desc: "From $25",
    detail: "Microneedling, Microdermabrasion, Dermaplaning & Chemical Peels",
    href: "/services#addons",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    quote: "My skin has never looked better! The facial was so relaxing and thorough. Olivia is incredibly knowledgeable and made me feel so comfortable.",
    name: "Sarah M.",
  },
  {
    quote: "Got my brow lamination done and I&apos;m obsessed. She&apos;s so talented and the results last so long. Already booked my next appointment!",
    name: "Emma R.",
  },
  {
    quote: "The piercing experience was clean, professional, and painless. I love my new helix piercing. 10/10 recommend!",
    name: "Taylor K.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf8fc] via-[#f3ecfb] to-[#ede4f8]">
        <div className="absolute inset-0 flex items-start justify-center pt-10 pointer-events-none">
          <div className="w-full max-w-2xl">
            <FloralSvg />
          </div>
        </div>

        <div className="relative text-center px-6 py-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#c8a8e9]"></div>
            <span className="text-[#c8a8e9] text-lg">✦</span>
            <div className="h-px w-16 bg-[#c8a8e9]"></div>
          </div>

          <p
            className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Welcome to
          </p>

          <h1
            className="text-6xl md:text-8xl font-light text-[#2d2d2d] leading-none mb-2"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Livie Kay
          </h1>
          <h2
            className="text-2xl md:text-4xl font-light tracking-[0.3em] text-[#9b72cc] uppercase mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Esthetics
          </h2>

          <p
            className="text-base md:text-lg text-[#555] max-w-lg mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Professional skincare, piercings & brow services — crafted with care and intention for your most confident self.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="border border-[#c8a8e9] text-[#9b72cc] hover:bg-[#ede4f8] text-xs tracking-widest uppercase py-4 px-10 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              View Services
            </Link>
          </div>

          <p
            className="mt-8 text-xs text-[#9b72cc] tracking-widest"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            ✦ FREE CONSULTATIONS AVAILABLE ✦
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-[#c8a8e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              What We Offer
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2d2d2d]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Services
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#c8a8e9]"></div>
              <span className="text-[#c8a8e9]">✦</span>
              <div className="h-px w-16 bg-[#c8a8e9]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ede4f8]">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white flex flex-col group hover:bg-[#faf8fc] transition-colors overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#9b72cc]/10 group-hover:bg-[#9b72cc]/20 transition-colors" />
                  <span className="absolute top-4 right-4 text-2xl text-white drop-shadow">{s.icon}</span>
                </div>
                <div className="p-8 flex flex-col gap-3 flex-1">
                  <h3
                    className="text-2xl font-light text-[#2d2d2d] group-hover:text-[#9b72cc] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm font-semibold text-[#9b72cc]"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {s.desc}
                  </p>
                  <p
                    className="text-sm text-[#777] leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {s.detail}
                  </p>
                  <span
                    className="text-xs tracking-widest uppercase text-[#c8a8e9] group-hover:text-[#9b72cc] transition-colors flex items-center gap-2 mt-2"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    Learn more
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border border-[#c8a8e9] text-[#9b72cc] hover:bg-[#ede4f8] text-xs tracking-widest uppercase py-4 px-10 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              View Full Menu & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-[#faf8fc] to-[#ede4f8]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#c8a8e9] opacity-30 pointer-events-none z-10"></div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/olivia.jpg"
                  alt="Olivia — Licensed Esthetician at Livie Kay Esthetics"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                  <p
                    className="text-white text-xs tracking-[0.35em] uppercase"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    Licensed Esthetician
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                About
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-[#2d2d2d]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Meet Your<br />Esthetician
              </h2>
            </div>
            <div className="h-px w-16 bg-[#c8a8e9]"></div>
            <p
              className="text-base text-[#555] leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Hi, I&apos;m Olivia — a licensed esthetician passionate about helping you feel confident in your skin. Whether you&apos;re looking for a relaxing facial, a fresh set of brows, or a new piercing, I&apos;m here to provide personalized, professional care in a welcoming environment.
            </p>
            <p
              className="text-base text-[#555] leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Every service is tailored to your unique skin type and goals. Not sure where to start? A free consultation is always available — let&apos;s chat about what&apos;s right for you.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {["Licensed & trained esthetician", "Personalized treatments for every skin type", "Free consultations always available", "Follow along on Instagram"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#c8a8e9]"></div>
                  <p
                    className="text-sm text-[#555]"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="https://www.instagram.com/olivia.esthetic6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#9b72cc] hover:text-[#c8a8e9] transition-colors mt-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Client Love
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2d2d2d]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What They&apos;re Saying
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[#c8a8e9]"></div>
              <span className="text-[#c8a8e9]">✦</span>
              <div className="h-px w-16 bg-[#c8a8e9]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#faf8fc] p-8 flex flex-col gap-4 border-t-2 border-[#c8a8e9]">
                <div className="text-[#c8a8e9] text-3xl">&ldquo;</div>
                <p
                  className="text-base text-[#555] leading-relaxed italic flex-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  dangerouslySetInnerHTML={{ __html: t.quote }}
                />
                <p
                  className="text-xs tracking-widest uppercase text-[#9b72cc] font-semibold"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 px-6 bg-[#faf8fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <a
              href="https://www.instagram.com/olivia.esthetic6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-[#9b72cc] mb-4 hover:text-[#c8a8e9] transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @olivia.esthetic6
            </a>
            <h2
              className="text-3xl md:text-4xl font-light text-[#2d2d2d]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Follow Along
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-12 bg-[#c8a8e9]"></div>
              <span className="text-[#c8a8e9] text-sm">✦</span>
              <div className="h-px w-12 bg-[#c8a8e9]"></div>
            </div>
          </div>

          {/* Behold.so widget — set NEXT_PUBLIC_BEHOLD_FEED_ID in .env.local after setup at behold.so */}
          <div id="behold-instagram-feed" className="w-full min-h-[160px]">
            {process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ? (
              <BeholdWidget feedId={process.env.NEXT_PUBLIC_BEHOLD_FEED_ID} />
            ) : (
              // Fallback grid shown until Behold feed is configured
              <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/olivia.esthetic6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square bg-[#ede4f8] flex items-center justify-center group overflow-hidden"
                  >
                    <svg className="w-6 h-6 text-[#c8a8e9] group-hover:text-[#9b72cc] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div className="absolute inset-0 bg-[#9b72cc]/0 group-hover:bg-[#9b72cc]/10 transition-colors" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/olivia.esthetic6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#c8a8e9] text-[#9b72cc] hover:bg-[#ede4f8] text-xs tracking-widest uppercase py-3 px-8 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 px-6 bg-[#2d2d2d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <FloralSvg />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#c8a8e9] mb-4"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Ready to Glow?
          </p>
          <h2
            className="text-4xl md:text-6xl font-light mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Let&apos;s Connect
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#c8a8e9]"></div>
            <span className="text-[#c8a8e9]">✦</span>
            <div className="h-px w-16 bg-[#c8a8e9]"></div>
          </div>
          <p
            className="text-base text-gray-400 mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Have questions or ready to book? Reach out by text or phone — I&apos;d love to hear from you. Free consultations are always available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors flex items-center gap-3"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Book an Appointment
            </Link>
            <a
              href="sms:3852502345"
              className="border border-[#c8a8e9] text-[#c8a8e9] hover:bg-[#c8a8e9] hover:text-white text-xs tracking-widest uppercase py-4 px-10 transition-colors flex items-center gap-3"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Text 385-250-2345
            </a>
          </div>

          <a
            href="https://www.instagram.com/olivia.esthetic6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 text-sm text-gray-400 hover:text-[#c8a8e9] transition-colors"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            See my work on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
