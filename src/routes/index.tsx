import { createFileRoute } from "@tanstack/react-router";

import { BUSINESS, SERVICES, whatsappLink } from "@/lib/business";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/site/Icons";

import heroSofa from "@/assets/hero-sofa.jpg";
import imgRepair from "@/assets/service-sofa-repair.jpg";
import imgCustom from "@/assets/service-custom-sofa.jpg";
import imgBed from "@/assets/service-bed.jpg";
import imgCurtains from "@/assets/service-curtains.jpg";
import imgRecliner from "@/assets/service-recliner.jpg";
import ba1b from "@/assets/ba-1-before.jpg";
import ba1a from "@/assets/ba-1-after.jpg";
import ba2b from "@/assets/ba-2-before.jpg";
import ba2a from "@/assets/ba-2-after.jpg";
import ba3b from "@/assets/ba-3-before.jpg";
import ba3a from "@/assets/ba-3-after.jpg";

const TITLE = "Sofa Repair in Delhi, Noida & Faridabad | My Home Style";
const DESC =
  "Premium sofa repair, custom sofas, beds, curtains and recliner upholstery across Delhi, Noida & Faridabad. Free quotes. Call 93136 69868.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICE_IMAGES: Record<string, string> = {
  "sofa-repair": imgRepair,
  "custom-sofa": imgCustom,
  bed: imgBed,
  curtains: imgCurtains,
  recliner: imgRecliner,
};

const COMPARISONS = [
  { before: ba1b, after: ba1a, title: "Three-Seater Classic", note: "Torn arms & collapsed foam reborn in ivory velvet." },
  { before: ba2b, after: ba2a, title: "L-Shape Sectional", note: "Shredded fabric replaced with premium greige weave." },
  { before: ba3b, after: ba3a, title: "Leather Recliner", note: "Cracked leather and footrest fully restored." },
];

const WHY = [
  { title: "Premium Materials", body: "Hand-picked fabrics, leathers and high-density foam sourced from trusted mills." },
  { title: "Skilled Craftsmanship", body: "Master upholsterers with decades of frame, spring and stitching experience." },
  { title: "Custom Designs", body: "Any size, shape or style — built exactly to your room and taste." },
  { title: "Professional Finishing", body: "Crisp piping, tight seams and a showroom-grade final finish, every time." },
  { title: "Transparent Quotes", body: "Clear, itemised pricing shared upfront. No surprises after the work begins." },
  { title: "Delhi NCR Service", body: "Doorstep pickup and delivery across Delhi, Noida and Faridabad." },
];

const STEPS = [
  { n: "01", title: "Share Requirement", body: "Send photos and details on WhatsApp or through the quote form." },
  { n: "02", title: "Get Quote", body: "We assess the work and share a transparent, itemised price." },
  { n: "03", title: "Professional Work", body: "Our craftsmen restore, rebuild and re-upholster with care." },
  { n: "04", title: "Beautiful Final Result", body: "Your furniture returns looking better than the day you bought it." },
];

function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-4xl leading-[1.1] sm:text-5xl ${
          light ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <span className="gold-rule mx-auto mt-6 block" />
      {sub && (
        <p className={`mt-6 text-base leading-relaxed ${light ? "text-ink-foreground/65" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingButtons />

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
          <img
            src={heroSofa}
            alt="Luxury cream velvet sofa in an elegant Delhi living room"
            width={1920}
            height={1280}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />

          <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Delhi · Noida · Faridabad</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink-foreground sm:text-6xl lg:text-7xl">
                Give Your Sofa a<span className="block italic text-gold-soft">Second Life.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
                Premium Sofa Repair, Custom Furniture & Upholstery Solutions Across Delhi, Noida & Faridabad.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#quote" className="btn-gold">
                  Get Free Quote
                </a>
                <a href={BUSINESS.tel} className="btn-outline-light">
                  <PhoneIcon className="h-4 w-4" />
                  Call Now
                </a>
              </div>

              <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-foreground/20 pt-8">
                {[
                  ["15+", "Years of craft"],
                  ["2500+", "Pieces restored"],
                  ["100%", "Doorstep service"],
                ].map(([v, k]) => (
                  <div key={k}>
                    <dt className="font-display text-3xl text-gold-soft">{v}</dt>
                    <dd className="mt-1 text-[0.65rem] tracking-[0.2em] text-ink-foreground/60 uppercase">{k}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-5 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="What We Do"
                title="Our Signature Services"
                sub="Five specialised craft services, delivered with the finish of a bespoke furniture atelier."
              />
            </Reveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.id} delay={i * 90}>
                  <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[s.id]}
                        alt={s.title}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                      <span className="gold-rule mt-3 block" />
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                      <a href="#quote" className="btn-outline-ink mt-7 w-full">
                        Get Free Quote
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}

              <Reveal delay={450}>
                <div className="flex h-full flex-col justify-center border border-gold/40 bg-secondary p-9">
                  <p className="eyebrow">Not Sure?</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-foreground">
                    Send a photo, get an honest quote.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Share a picture of your furniture on WhatsApp and our craftsmen will tell you exactly what it needs.
                  </p>
                  <a
                    href={whatsappLink("Hi, here's a photo of my furniture. Could you share a quote?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ink mt-8"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp a Photo
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section id="before-after" className="bg-secondary/60 px-5 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="The Transformation"
                title="Before & After"
                sub="Drag the handle to see the same sofa, rebuilt and re-upholstered by our craftsmen."
              />
            </Reveal>

            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {COMPARISONS.map((c, i) => (
                <Reveal key={c.title} delay={i * 120}>
                  <figure>
                    <div className="shadow-soft">
                      <BeforeAfterSlider before={c.before} after={c.after} alt={c.title} />
                    </div>
                    <figcaption className="mt-5">
                      <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section id="why-us" className="bg-ink px-5 py-24 text-ink-foreground sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                light
                eyebrow="Why Choose Us"
                title="Craft You Can Feel"
                sub="Every piece is treated like bespoke furniture — because to your home, it is."
              />
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden border border-ink-foreground/12 bg-ink-foreground/12 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 70} className="bg-ink">
                  <div className="h-full p-9">
                    <span className="font-display text-4xl text-gold/50">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 font-display text-2xl text-ink-foreground">{w.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="px-5 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead eyebrow="The Process" title="How It Works" />
            </Reveal>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="relative border-t border-border pt-7">
                    <span className="absolute -top-4 left-0 bg-background pr-4 font-display text-3xl text-gold">
                      {s.n}
                    </span>
                    <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section id="areas" className="bg-secondary/60 px-5 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHead
                eyebrow="Where We Work"
                title="Serving All of Delhi NCR"
                sub="Free pickup and delivery from our Green Park workshop across the capital region."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { city: "Delhi", areas: "Green Park · Hauz Khas · Saket · Vasant Kunj · South Ex · Dwarka · Rohini" },
                { city: "Noida", areas: "Sector 18 · 62 · 75 · 128 · Greater Noida · Noida Extension" },
                { city: "Faridabad", areas: "Sector 15 · 21 · Neharpar · Ballabgarh · Greenfield Colony" },
              ].map((a, i) => (
                <Reveal key={a.city} delay={i * 100}>
                  <div className="h-full border border-border bg-card p-9 transition-all duration-500 hover:border-gold/60 hover:shadow-soft">
                    <PinIcon className="h-6 w-6 text-gold" />
                    <h3 className="mt-5 font-display text-3xl text-foreground">{a.city}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.areas}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="px-5 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionHead
                eyebrow="No Obligation"
                title="Request a Free Quote"
                sub="Tell us what you need and add a photo — we'll respond with honest pricing."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-14 border border-border bg-card p-8 shadow-soft sm:p-12">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-secondary/60 px-5 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="eyebrow">Visit Or Call</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
                  {BUSINESS.name}
                </h2>
                <span className="gold-rule mt-6 block" />
                <ul className="mt-8 space-y-5 text-muted-foreground">
                  <li className="flex gap-4">
                    <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>{BUSINESS.address}</span>
                  </li>
                  <li className="flex gap-4">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <a href={BUSINESS.tel} className="text-foreground hover:text-gold">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex min-w-0 gap-4">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <a href={`mailto:${BUSINESS.email}`} className="break-all text-foreground hover:text-gold">
                      {BUSINESS.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={BUSINESS.tel} className="btn-ink">
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={whatsappLink("Hello, I'd like to discuss my furniture requirement.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-ink"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a href="#quote" className="btn-gold">
                    Get Free Quote
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden border border-border shadow-soft">
                <iframe
                  title="Our workshop location in Green Park, New Delhi"
                  src="https://www.google.com/maps?q=Green%20Park%2C%20New%20Delhi%20110016&output=embed"
                  loading="lazy"
                  className="h-[420px] w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
