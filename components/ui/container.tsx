import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em]",
        dark ? "text-gold-300" : "text-gold-600",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-px w-8",
          dark ? "bg-gold-400/60" : "bg-gold-600/50"
        )}
        aria-hidden
      />
      {children}
    </p>
  );
}
