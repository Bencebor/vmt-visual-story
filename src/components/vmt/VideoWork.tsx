import { Play, Instagram } from "lucide-react";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { Carousel } from "./Carousel";
import { REELS_ROW_1, REELS_ROW_2, type Reel } from "@/data/site";

function VideoCard({ reel }: { reel: Reel }) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-sm border border-hairline bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-9/16 overflow-hidden">
        <img
          src={reel.cover}
          alt={`${reel.title} – Instagram reel megnyitása`}
          loading="lazy"
          width={720}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:opacity-0" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur">
          <Instagram className="h-3 w-3" aria-hidden="true" />
          Reel
        </span>
        <span className="absolute bottom-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
          <Play className="h-4 w-4 fill-current" aria-hidden="true" />
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-3 border-t border-hairline px-4 py-4">
        <h3 className="min-w-0 truncate font-display text-sm font-semibold">
          {reel.title}
        </h3>
        <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {reel.client}
        </span>
      </div>
    </a>
  );
}

export function VideoWork() {
  return (
    <Section id="munkaink">
      <Reveal>
        <SectionHead
          eyebrow="Portfólió"
          title="Munkáink."
          text="Néhány projekt, amit az elmúlt időszakban készítettünk."
        />
      </Reveal>

      <Reveal delay={80} className="mt-14">
        <Carousel ariaLabel="Videós munkák, első sor">
          {REELS_ROW_1.map((reel) => (
            <VideoCard key={reel.url} reel={reel} />
          ))}
        </Carousel>
      </Reveal>

      <Reveal delay={80} className="mt-14">
        <Carousel ariaLabel="Videós munkák, második sor">
          {REELS_ROW_2.map((reel) => (
            <VideoCard key={reel.url} reel={reel} />
          ))}
        </Carousel>
      </Reveal>
    </Section>
  );
}
