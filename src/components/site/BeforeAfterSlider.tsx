import { useCallback, useEffect, useRef, useState } from "react";

export function BeforeAfterSlider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      className="group relative aspect-[3/2] w-full cursor-ew-resize touch-none overflow-hidden rounded-sm bg-muted select-none @container"
    >
      <img
        src={after}
        alt={`${alt} — after restoration`}
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${alt} — before restoration`}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-[100cqw] max-w-none object-cover"
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-sm bg-ink/80 px-3 py-1 text-[0.6rem] tracking-[0.28em] text-ink-foreground uppercase backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-sm bg-gold px-3 py-1 text-[0.6rem] tracking-[0.28em] text-accent-foreground uppercase">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-gold-soft"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-background text-foreground shadow-luxe">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m10 7-5 5 5 5M14 7l5 5-5 5" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label={`${alt} before and after comparison`}
        onChange={(e) => setPos(Number(e.target.value))}
        className="sr-only"
      />
    </div>
  );
}
