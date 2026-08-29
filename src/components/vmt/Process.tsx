import { useEffect, useRef, useState } from "react";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Ingyenes meeting",
    text: "Megismerjük a vállalkozásodat, a céljaidat és a jelenlegi marketingedet.",
  },
  {
    n: "02",
    title: "Stratégia",
    text: "Meghatározzuk, milyen kommunikációra és tartalomra van szükséged.",
  },
  {
    n: "03",
    title: "Forgatás",
    text: "Elkészítjük a szükséges videós és fotós tartalmakat.",
  },
  {
    n: "04",
    title: "Tartalom",
    text: "Vágás, grafika, képszerkesztés és minden szükséges utómunka.",
  },
  {
    n: "05",
    title: "Posztolás",
    text: "A tartalmak megfelelő időzítéssel megjelennek a kiválasztott platformokon.",
  },
  {
    n: "06",
    title: "Elérés",
    text: "A megfelelő tartalmakat szükség esetén hirdetésekkel is támogatjuk.",
  },
  {
    n: "07",
    title: "Értékesítés növelése",
    text: "Folyamatosan figyeljük az eredményeket, és ezek alapján optimalizáljuk a következő időszakot.",
  },
];

export function Process() {
  const listRef = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    let frame = 0;
    const compute = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.62;
      const p = (anchor - rect.top) / rect.height;
      const clamped = Math.min(Math.max(p, 0), 1);
      setProgress(clamped);
      setActive(Math.floor(clamped * STEPS.length) - 1);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section id="folyamat">
      <Reveal>
        <SectionHead
          eyebrow="Így dolgozunk"
          title="Az első meetingtől a mérhető eredményekig."
          text="Egy folyamat, hét lépésben. Minden szakasznak megvan a helye és a célja a kommunikációdban."
        />
      </Reveal>

      <ol ref={listRef} className="relative mt-20 md:mt-28">
        {/* rail */}
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-[13px] top-4 w-px bg-border md:left-[calc(50%-0.5px)] lg:left-[13px]"
        />
        <span
          aria-hidden="true"
          className="absolute left-[13px] top-4 w-px origin-top bg-primary transition-[height] duration-200 ease-out md:left-[calc(50%-0.5px)] lg:left-[13px]"
          style={{ height: `calc((100% - 3rem) * ${progress})` }}
        />

        {STEPS.map((step, i) => {
          const isActive = i <= active;
          return (
            <li
              key={step.n}
              className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-6 pb-14 last:pb-0 md:grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[28px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12"
            >
              {/* desktop-left spacer / alternating column */}
              <div className="hidden md:block lg:hidden" />

              <div className="relative flex justify-center md:order-none">
                <span
                  className={cn(
                    "mt-3 h-7 w-7 rounded-full border transition-all duration-500",
                    isActive
                      ? "scale-110 border-primary bg-primary shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-primary)_18%,transparent)]"
                      : "border-border bg-background",
                  )}
                  aria-hidden="true"
                />
              </div>

              <div
                className={cn(
                  "min-w-0 transition-all duration-700 md:col-span-1 lg:col-span-2",
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-40",
                )}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={cn(
                      "font-mono text-sm transition-colors duration-500",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl font-bold md:text-3xl lg:text-4xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
