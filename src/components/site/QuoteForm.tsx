import { useState } from "react";
import { BUSINESS, SERVICES, whatsappLink } from "@/lib/business";
import { WhatsAppIcon } from "./Icons";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0].title,
    city: "Delhi",
    requirement: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const message = `New Quote Request — ${BUSINESS.name}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
City: ${form.city}
Requirement: ${form.requirement}${fileName ? `\nPhoto: ${fileName} (will send in chat)` : ""}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border-b border-border bg-transparent px-0 py-3 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
  const label = "block text-[0.62rem] tracking-[0.24em] uppercase text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="grid gap-7 sm:grid-cols-2">
      <div className="space-y-1">
        <label className={label} htmlFor="q-name">
          Name
        </label>
        <input
          id="q-name"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className={field}
        />
      </div>
      <div className="space-y-1">
        <label className={label} htmlFor="q-phone">
          Phone
        </label>
        <input
          id="q-phone"
          required
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="10-digit mobile number"
          className={field}
        />
      </div>
      <div className="space-y-1">
        <label className={label} htmlFor="q-email">
          Email
        </label>
        <input
          id="q-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
          className={field}
        />
      </div>
      <div className="space-y-1">
        <label className={label} htmlFor="q-service">
          Service
        </label>
        <select
          id="q-service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={field}
        >
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className={label} htmlFor="q-city">
          City
        </label>
        <select id="q-city" value={form.city} onChange={(e) => update("city", e.target.value)} className={field}>
          {BUSINESS.areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="space-y-1">
        <span className={label}>Furniture Photo</span>
        <label
          htmlFor="q-photo"
          className="flex cursor-pointer items-center justify-between border-b border-border py-3 text-[0.95rem] text-muted-foreground transition-colors hover:border-gold"
        >
          <span className="truncate">{fileName || "Upload a photo"}</span>
          <span className="ml-3 shrink-0 text-[0.62rem] tracking-[0.24em] text-gold uppercase">Browse</span>
        </label>
        <input
          id="q-photo"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </div>
      <div className="space-y-1 sm:col-span-2">
        <label className={label} htmlFor="q-req">
          Requirement
        </label>
        <textarea
          id="q-req"
          rows={3}
          value={form.requirement}
          onChange={(e) => update("requirement", e.target.value)}
          placeholder="Tell us about the furniture, damage or design you have in mind"
          className={`${field} resize-none`}
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-gold w-full sm:w-auto">
          Request My Free Quote
        </button>
        <p className="mt-5 text-sm text-muted-foreground">
          Prefer sending photos directly?{" "}
          <a
            href={whatsappLink(`Hi ${BUSINESS.name}, I'd like a free quote. Sending furniture photos here.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-foreground underline decoration-gold underline-offset-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send them on WhatsApp
          </a>
        </p>
        {sent && (
          <p className="mt-4 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
            Thank you — your request is ready in WhatsApp. Attach your furniture photo there and hit send.
          </p>
        )}
      </div>
    </form>
  );
}
