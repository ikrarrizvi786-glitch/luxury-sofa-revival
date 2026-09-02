import { BUSINESS, SERVICES, whatsappLink } from "@/lib/business";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

const QUICK = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#before-after", label: "Before & After" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#how", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-3xl text-ink-foreground">My Home Style</h3>
            <p className="mt-1 text-[0.62rem] tracking-[0.3em] text-gold uppercase">Sofa Repair</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/65">
              Craft-led sofa repair, custom furniture and upholstery for homes across Delhi NCR since day one.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href={BUSINESS.tel}
                aria-label="Call us"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink("Hello, I found you online and need furniture help.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                aria-label="Email us"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.28em] text-gold uppercase">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="transition-colors hover:text-gold">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.28em] text-gold uppercase">Services</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="transition-colors hover:text-gold">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.62rem] tracking-[0.28em] text-gold uppercase">Service Areas</p>
            <p className="mt-3 text-sm text-ink-foreground/70">{BUSINESS.areas.join(" · ")}</p>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.28em] text-gold uppercase">Get In Touch</p>
            <ul className="mt-6 space-y-4 text-sm text-ink-foreground/70">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={BUSINESS.tel} className="hover:text-gold">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex min-w-0 gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-gold">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <a href="#quote" className="btn-gold mt-7 w-full">
              Get Free Quote
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/15 pt-8 text-xs text-ink-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Sofa Repair · Custom Sofa · Bed · Curtains · Recliner</p>
        </div>
      </div>
    </footer>
  );
}
