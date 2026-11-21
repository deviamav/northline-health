"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#doctors", label: dict.nav.doctors },
    { href: "#journey", label: dict.nav.journey },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open ? "bg-white/85 shadow-[0_1px_0_rgb(15_42_67/0.07)] backdrop-blur-lg" : ""
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 text-navy sm:px-8">
        <Link href={localePath(locale)} aria-label="Northline Health">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 text-[0.95rem] font-medium md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-navy/70 transition-colors hover:text-navy">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} label={dict.footer.language} />
          <a
            href="#book"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-deep sm:inline-block"
          >
            {dict.cta}
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-navy/5 md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-navy transition-all ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[5px] h-0.5 w-5 rounded bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-navy transition-all ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="px-5 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/10 py-4 font-display text-2xl font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-5 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
          >
            {dict.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
