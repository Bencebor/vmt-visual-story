import { useEffect, useState } from "react";
import { Film, Image as ImageIcon, Handshake } from "lucide-react";
import { Section, SectionHead } from "./Section";
import { Reveal, useInView } from "./Reveal";

const STATS = [
  { value: 1200, suffix: "+", label: "elkészített videó", icon: Film },
  { value: 3000, suffix: "+", label: "statikus tartalom", icon: ImageIcon },
  { value: 30, suffix: "+", label: "együttműködő vállalkozás", icon: Handshake },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("hu-HU")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <Section className="border-y border-hairline bg-surface">
      <Reveal>
        <SectionHead eyebrow="Számokban" title="Amit eddig elkészítettünk." />
      </Reveal>

      <dl className="mt-16 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 120} className="bg-surface">
            <div className="group relative h-full overflow-hidden p-8 md:p-12">
              <stat.icon
                className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-primary"
                aria-hidden="true"
              />
              <dd className="mt-12 font-display text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-none">
                <Counter target={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-4 text-sm text-muted-foreground">
                {stat.label}
              </dt>
              <span
                aria-hidden="true"
                className="mt-8 block h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100"
              />
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
