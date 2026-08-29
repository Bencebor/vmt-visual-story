import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { TEAM } from "@/data/site";

export function About() {
  return (
    <Section id="rolunk" className="border-y border-hairline bg-surface">
      <Reveal>
        <SectionHead eyebrow="Rólunk" title="Ketten. Két terület. Egy közös rendszer." />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
        {TEAM.map((person, i) => (
          <Reveal key={person.name} delay={i * 140}>
            <article className="group h-full overflow-hidden rounded-sm border border-hairline bg-background">
              <div className="relative aspect-4/5 overflow-hidden sm:aspect-3/2 md:aspect-4/5">
                <img
                  src={person.photo}
                  alt={`${person.name} – ${person.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent"
                />
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{person.role}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {person.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-hairline px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:border-border hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-14 max-w-[24ch] font-display text-2xl font-semibold leading-snug md:text-4xl">
          A kreatív és a marketing ugyanannak a folyamatnak a része.
        </p>
      </Reveal>
    </Section>
  );
}
