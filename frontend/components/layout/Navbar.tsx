
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRICING", href: "/pricing" },
  { name: "SERVICES", href: "/services" },
  { name: "GALLERY", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#171717] px-5 pt-4 md:px-9 md:pt-5">
      <nav className="flex h-[76px] items-center justify-between border-b-2 border-[#F3F0E9]">

        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center font-[var(--font-barlow)] text-[44px] font-black italic leading-none tracking-[-2px] md:text-[54px]"
        >
          <span className="text-[#F3F0E9] transition-colors group-hover:text-[#C6FF00]">
            MUSCLE
          </span>
          <span className="ml-2 text-[#C6FF00]">MONK</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden h-full items-center gap-5 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex h-10 items-center justify-center px-4 font-[var(--font-barlow)] text-[19px] font-bold tracking-[0.08em] transition-all duration-200 lg:text-[21px] ${
                  isActive
                    ? "bg-[#C6FF00] text-[#171717]"
                    : "text-[#F3F0E9] hover:text-[#C6FF00] after:absolute after:bottom-0 after:left-4 after:h-[2px] after:w-0 after:bg-[#C6FF00] after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-3xl text-[#C6FF00] md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col border-b border-white/20 bg-[#171717] px-5 py-4 shadow-xl md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 font-[var(--font-barlow)] text-xl font-bold tracking-widest transition-colors ${
                  isActive
                    ? "bg-[#C6FF00] text-[#171717]"
                    : "text-[#F3F0E9] hover:text-[#C6FF00]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
