import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BOOKING_URL } from "@/data/site";
import wordmark from "@/assets/vmt-wordmark.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Fő navigáció"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-18 md:px-10"
      >
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="VMT – Visual Media Team, ugrás az oldal tetejére"
        >
          <img
            src={wordmark.url}
            alt="VMT – Visual Media Team"
            width={527}
            height={146}
            className="logo-light h-6 w-auto sm:h-7"
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 sm:inline-flex"
          >
            Ingyenes konzultáció
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="vmt-mobile-menu"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="vmt-mobile-menu"
        hidden={!open}
        className="border-t border-hairline bg-background lg:hidden"
      >
        <ul className="mx-auto flex max-w-[1400px] flex-col px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-hairline py-4 font-display text-2xl font-semibold tracking-tight text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-primary px-5 py-4 text-center text-sm font-semibold text-primary-foreground"
            >
              Ingyenes konzultáció
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
