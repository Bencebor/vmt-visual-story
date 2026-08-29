import { Mail, Phone } from "lucide-react";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import { CONTACT, TEAM } from "@/data/site";

export function Contact() {
  return (
    <Section id="kapcsolat">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHead
            eyebrow="Beszéljünk"
            title="Kapcsolat"
            text="Hívj minket, írj e-mailt, vagy foglalj rögtön időpontot egy ingyenes konzultációra."
          />
          <div className="mt-10">
            <CtaButton>Ingyenes konzultáció</CtaButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="border-t border-hairline">
            {TEAM.map((person) => (
              <li
                key={person.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline py-7 sm:flex sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {person.role}
                  </p>
                </div>
                <a
                  href={person.phoneHref}
                  className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">{person.phone}</span>
                </a>
              </li>
            ))}
            <li className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline py-7 sm:flex sm:justify-between">
              <div className="min-w-0">
                <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  E-mail
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Általános megkeresés
                </p>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="truncate">{CONTACT.email}</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
