import { NAV_LINKS, SOCIALS } from "@/data/site";
import wordmark from "@/assets/vmt-wordmark.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <img
            src={wordmark.url}
            alt="VMT – Visual Media Team"
            width={527}
            height={146}
            loading="lazy"
            className="logo-light h-7 w-auto"
          />
          <p className="mt-6 font-display text-lg font-semibold tracking-tight">
            VMT – Visual Media Team
          </p>
          <p className="mt-2 max-w-[36ch] text-sm text-muted-foreground">
            Tartalom, ami dolgozik a cégedért.
          </p>
        </div>

        <nav aria-label="Lábléc navigáció">
          <p className="eyebrow">Oldal</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Közösségi</p>
          <ul className="mt-5 space-y-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© {new Date().getFullYear()} VMT – Visual Media Team</p>
          <p>Kis- és középvállalkozások tartalom- és marketingpartnere</p>
        </div>
      </div>
    </footer>
  );
}
