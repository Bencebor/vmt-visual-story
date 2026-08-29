import { Compass, Video, Camera, Share2 } from "lucide-react";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Compass,
    title: "Stratégia",
    text: "Megismerjük a cégedet, a célközönségedet és a céljaidat, majd ezek alapján felépítjük a havi kommunikációdat.",
  },
  {
    icon: Video,
    title: "Videó",
    text: "Reels, TikTok, reklámfilm és egyéb videós tartalmak – a koncepciótól a forgatáson át a kész videóig.",
  },
  {
    icon: Camera,
    title: "Fotó & statikus tartalom",
    text: "Professzionális fotók, social media kreatívok és egyéb vizuális tartalmak a márkádhoz igazítva.",
  },
  {
    icon: Share2,
    title: "Social media & marketing",
    text: "Instagram, TikTok és Facebook tartalmak tervezése, kezelése és a kampányok támogatása.",
  },
];

export function Services() {
  return (
    <Section id="szolgaltatas">
      <Reveal>
        <SectionHead
          eyebrow="Amit csinálunk"
          title={
            <>
              Nem csak tartalmat készítünk.
              <br />
              <span className="text-muted-foreground">
                Rendszert építünk mögé.
              </span>
            </>
          }
          text="Megismerjük a vállalkozásodat, megtervezzük a kommunikációdat, elkészítjük a szükséges tartalmakat, majd segítünk azok célba juttatásában."
        />
      </Reveal>

      <ul className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal as="li" key={service.title} delay={i * 90}>
            <article className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
              <span className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              <service.icon
                className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <h3 className="mt-14 font-display text-xl font-semibold md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
