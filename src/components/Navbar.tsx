"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
    { href: "/book", label: "Book" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-[#ede4f8] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-tight group">
          <span
            className="text-2xl md:text-3xl font-bold tracking-widest text-[#2d2d2d] group-hover:text-[#9b72cc] transition-colors"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            LIVIE KAY
          </span>
          <span
            className="text-xs tracking-[0.35em] text-[#9b72cc] uppercase"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Esthetics
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-[#9b72cc] ${
                  pathname === l.href ? "text-[#9b72cc]" : "text-[#2d2d2d]"
                }`}
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/book"
          className="hidden md:inline-block bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-3 px-6 transition-colors"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          Book Now
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#2d2d2d]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#ede4f8] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-[#2d2d2d] hover:text-[#9b72cc] transition-colors"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="inline-block bg-[#c8a8e9] hover:bg-[#9b72cc] text-white text-xs tracking-widest uppercase py-3 px-6 transition-colors mt-2"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
