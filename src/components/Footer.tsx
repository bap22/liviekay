import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div>
              <p
                className="text-2xl font-bold tracking-widest"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                LIVIE KAY
              </p>
              <p
                className="text-xs tracking-[0.35em] text-[#c8a8e9] uppercase"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Esthetics
              </p>
            </div>
            <p
              className="text-sm text-gray-400 leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Professional esthetic services tailored to you. Your skin deserves the best.
            </p>
            <a
              href="https://www.instagram.com/olivia.esthetic6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#c8a8e9] hover:text-white transition-colors text-sm"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @olivia.esthetic6
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase text-[#c8a8e9] mb-6"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase text-[#c8a8e9] mb-6"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="sms:3852502345"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#c8a8e9] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Text: 385-250-2345
              </a>
              <a
                href="tel:3852502345"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#c8a8e9] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: 385-250-2345
              </a>
              <div
                className="text-sm text-gray-400"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#c8a8e9] inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Free Consultations Available
              </div>
            </div>
            <a
              href="sms:3852502345"
              className="inline-block mt-6 bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-3 px-6 transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p
            className="text-xs text-gray-600"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            © {new Date().getFullYear()} Livie Kay Esthetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
