import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { STATIC_WORKS } from "@/data/site";

const SPAN: Record<string, string> = {
  portrait: "row-span-2 aspect-3/4",
  square: "aspect-square",
  landscape: "sm:col-span-2 aspect-16/10",
};

export function StaticWork() {
  return (
    <Section className="border-y border-hairline bg-surface">
      <Reveal>
        <SectionHead
          eyebrow="Statikus tartalom"
          title="Nem csak videóban gondolkodunk."
          text="A social media kommunikációhoz egységes vizuális rendszerre van szükség. Fotók, grafikák, kampánykreatívok és egyéb statikus tartalmak egy helyen."
        />
      </Reveal>

      <div className="mt-16 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATIC_WORKS.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 4) * 90}
            className={SPAN[item.format]}
          >
            <figure className="group relative h-full w-full overflow-hidden rounded-sm border border-hairline">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-background/85 to-transparent p-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
