import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <Section className="border-y border-hairline bg-surface">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Ingyenes konzultáció</p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.02]">
            Nézzük meg, mire lenne szüksége a cégednek.
          </h2>
          <p className="mx-auto mt-7 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Egy rövid, ingyenes konzultáción megismerjük a vállalkozásodat, és
            megmutatjuk, milyen tartalom- és marketingrendszert építenénk fel
            számodra.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <CtaButton className="px-8 py-4">
              Lefoglalom az ingyenes konzultációt
            </CtaButton>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            30–45 perc • Online Google Meet • Kötelezettség nélkül
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
