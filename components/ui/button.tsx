import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_1px_0_rgba(11,22,36,0.15),0_8px_24px_-8px_rgba(209,178,125,0.5)]",
  outline:
    "border border-navy-800/25 text-navy-800 hover:border-navy-800/60 hover:bg-navy-800/[0.03]",
  ghost: "text-navy-800 hover:text-gold-600",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
