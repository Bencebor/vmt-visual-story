import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { CLIENTS, type Client } from "@/data/site";

function ClientItem({ client }: { client: Client }) {
  return (
    <li className="flex shrink-0 items-center px-8 md:px-14">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          className="h-8 w-auto opacity-45 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-10"
        />
      ) : (
        <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-muted-foreground transition-colors duration-500 hover:text-foreground md:text-2xl">
          {client.name}
        </span>
      )}
    </li>
  );
}

export function Partners() {
  return (
    <Section className="overflow-hidden">
      <Reveal>
        <SectionHead eyebrow="Partnerek" title="Akikkel már együtt dolgoztunk." />
      </Reveal>

      <Reveal delay={120} className="mt-16">
        <div
          className="marquee-mask relative -mx-5 border-y border-hairline py-10 md:-mx-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <ClientItem key={`${client.name}-${i}`} client={client} />
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
