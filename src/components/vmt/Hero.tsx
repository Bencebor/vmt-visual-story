import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setOffset(Math.min(window.scrollY, 900)),
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      className="grain-overlay relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${offset * 0.25}px, 0)` }}
      >
        <img
          src={heroImage}
          alt="VMT forgatás közben – operatőr kamerával"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-background) 4%, transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-20 pt-32 md:px-10 md:pb-24">
        <p className="eyebrow animate-fade-in">
          Visual Media Team — tartalom &amp; social media marketing
        </p>

        <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.6rem,8.5vw,7rem)] font-extrabold leading-[0.92]">
          Tartalom, ami dolgozik a cégedért.
        </h1>

        <div className="mt-8 grid gap-8 border-t border-hairline pt-8 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <p className="max-w-[34ch] font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
            Videó. Fotó. Social media. Marketing. Egy csapatban, havi
            rendszerességgel.
          </p>
          <p className="max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
            Kis- és középvállalkozásoknak készítünk személyre szabott
            tartalmakat és marketingrendszert az ötlettől a megvalósításig.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton>Kérj személyre szabott marketingtervet</CtaButton>
          <CtaButton href="#munkaink" variant="outline" withArrow={false}>
            Nézd meg a munkáinkat
          </CtaButton>
        </div>

        <div className="mt-14 flex items-center gap-3 text-muted-foreground">
          <span
            aria-hidden="true"
            className="relative block h-10 w-px overflow-hidden bg-border"
          >
            <span className="absolute inset-x-0 top-0 h-4 animate-[bounce_2.4s_ease-in-out_infinite] bg-primary" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
            Görgess
          </span>
        </div>
      </div>
    </section>
  );
}
