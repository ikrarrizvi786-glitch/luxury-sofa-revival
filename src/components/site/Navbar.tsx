import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#before-after", label: "Before & After" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl shadow-soft"
          : "bg-gradient-to-b from-ink/55 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border font-display text-lg ${
              scrolled ? "border-gold/60 text-gold" : "border-white/50 text-white"
            }`}
          >
            M
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-lg leading-tight sm:text-xl ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              My Home Style
            </span>
            <span
              className={`block text-[0.6rem] tracking-[0.3em] uppercase ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Sofa Repair
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[0.78rem] tracking-[0.12em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#quote" className="btn-gold">
            Get Free Quote
          </a>
        </nav>

        <div className="flex items-center gap-3 xl:hidden">
          <a
            href={BUSINESS.tel}
            className={`hidden text-[0.7rem] tracking-[0.14em] uppercase sm:block ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {BUSINESS.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors ${
              scrolled ? "border-border text-foreground" : "border-white/50 text-white"
            }`}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-3 font-display text-2xl text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href="#quote" onClick={() => setOpen(false)} className="btn-gold mt-5 w-full">
            Get Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
