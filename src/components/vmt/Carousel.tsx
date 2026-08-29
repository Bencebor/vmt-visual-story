import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Carousel({
  children,
  ariaLabel,
  itemClassName = "w-[74vw] sm:w-[300px] lg:w-[320px]",
  autoScroll = false,
}: {
  children: ReactNode[];
  ariaLabel: string;
  itemClassName?: string;
  /** lassú, folyamatos automatikus görgetés (hoverre megáll) */
  autoScroll?: boolean;
}) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [state, setState] = useState({ start: true, end: false });
  const [paused, setPaused] = useState(false);


  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setState({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  useEffect(() => {
    if (!autoScroll || paused) return;
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 28);
    return () => window.clearInterval(id);
  }, [autoScroll, paused]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const amount = card ? card.clientWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <ul
        ref={trackRef}
        aria-label={ariaLabel}
        className={`no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10 ${autoScroll ? "" : "snap-x snap-mandatory scroll-smooth"}`}
      >

        {children.map((child, i) => (
          <li key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={state.start}
          aria-label={`${ariaLabel}: előző`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-secondary disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={state.end}
          aria-label={`${ariaLabel}: következő`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-secondary disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
