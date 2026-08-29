import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/data/site";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-accent hover:-translate-y-0.5 shadow-[0_0_0_0_transparent] hover:shadow-[0_12px_30px_-12px_var(--color-primary)]",
  outline:
    "border border-border text-foreground hover:border-foreground/40 hover:bg-secondary hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function CtaButton({
  children,
  href,
  variant = "solid",
  className,
  external,
  withArrow = true,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  withArrow?: boolean;
}) {
  const target = href ?? BOOKING_URL;
  const isExternal = external ?? target.startsWith("http");

  return (
    <a
      href={target}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], className)}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
