import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative py-24 md:py-36", className)}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-5 font-display text-[clamp(2rem,5.2vw,4rem)] font-bold leading-[1.02]">
        {title}
      </h2>
      {text && (
        <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {text}
        </p>
      )}
    </div>
  );
}
