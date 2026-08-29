import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    n: "01",
    title: "Megértjük",
    text: "Megismerjük a vállalkozásodat és azt, hogy hová szeretnél eljutni.",
  },
  {
    n: "02",
    title: "Megtervezzük",
    text: "Meghatározzuk, milyen tartalomra és milyen mennyiségben van szükséged.",
  },
  {
    n: "03",
    title: "Megvalósítjuk",
    text: "Elkészítjük, publikáljuk és folyamatosan optimalizáljuk a tartalmaidat.",
  },
];

export function WhyVmt() {
  return (
    <Section>
      <Reveal>
        <SectionHead
          eyebrow="Miért VMT"
          title="A kreatív tartalom és a marketing nálunk egy folyamat."
          text="Nem különálló videókat, fotókat vagy posztokat készítünk. A cél az, hogy minden elkészült tartalomnak legyen helye a kommunikációd egészében."
        />
      </Reveal>

      <ol className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
        {POINTS.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 120}>
            <div className="group border-t border-border pt-6 transition-colors duration-500 hover:border-primary">
              <span className="font-mono text-sm text-primary">{p.n}</span>
              <h3 className="mt-6 font-display text-3xl font-bold md:text-4xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
