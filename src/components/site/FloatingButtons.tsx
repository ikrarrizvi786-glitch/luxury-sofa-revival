import { BUSINESS, whatsappLink } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-7">
      <a
        href={whatsappLink(`Hello ${BUSINESS.name}, I would like a free quote for my furniture.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-luxe transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={BUSINESS.tel}
        aria-label={`Call ${BUSINESS.phoneDisplay}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-ink text-ink-foreground shadow-luxe ring-1 ring-gold/50 transition-transform duration-300 hover:scale-110"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
