export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 3C8.85 3 3 8.85 3 16.04c0 2.3.6 4.54 1.75 6.52L3 29l6.6-1.72a13 13 0 0 0 6.44 1.68h.01c7.19 0 13.04-5.85 13.04-13.04A12.95 12.95 0 0 0 25.2 6.8 12.95 12.95 0 0 0 16.04 3Zm0 23.77h-.01a10.8 10.8 0 0 1-5.5-1.51l-.4-.23-3.92 1.02 1.05-3.82-.26-.4a10.78 10.78 0 0 1-1.65-5.79c0-5.97 4.86-10.83 10.84-10.83 2.9 0 5.62 1.13 7.66 3.18a10.75 10.75 0 0 1 3.17 7.66c0 5.98-4.86 10.72-10.98 10.72Zm5.95-8.02c-.33-.17-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.17-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.17-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.67.15-.15.33-.38.5-.58.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.75s1.18 3.19 1.35 3.41c.16.22 2.33 3.56 5.65 4.99.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.09 1.93-.79 2.21-1.56.27-.77.27-1.42.19-1.56-.08-.14-.3-.22-.63-.39Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
