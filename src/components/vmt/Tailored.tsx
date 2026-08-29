import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

const CHAIN = [
  "Tartalom mennyisége",
  "Videók",
  "Fotók",
  "Statikus tartalmak",
  "Social media",
  "Hirdetés",
  "Havi díj",
];

export function Tailored() {
  return (
    <Section className="border-y border-hairline bg-surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHead
            eyebrow="Személyre szabott"
            title="Nincs két egyforma vállalkozás."
            text="Ezért mi sem sabloncsomagokban gondolkodunk. Egy rövid egyeztetés után megismerjük a cégedet, és személyre szabott havi marketingtervet készítünk."
          />
          <div className="mt-10">
            <CtaButton>Kérj személyre szabott marketingtervet</CtaButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ol className="flex flex-col">
            {CHAIN.map((item, i) => (
              <li
                key={item}
                className="group flex items-center gap-5 border-b border-hairline py-5 first:border-t"
              >
                <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 font-display text-lg font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-xl">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-border transition-colors duration-500 group-hover:bg-primary"
                />
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
            A hirdetési költség külön tétel, amelyet a célok és a kampányok
            alapján javaslunk. A kampányokat folyamatosan figyeljük és
            optimalizáljuk.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
