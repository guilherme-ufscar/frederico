import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

/**
 * Botão de WhatsApp — CTA primário do site.
 * Abre o wa.me com mensagem pré-preenchida personalizada.
 */
export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className,
}: {
  message: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-dark";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_1px_0_rgba(11,22,36,0.15),0_8px_24px_-8px_rgba(209,178,125,0.5)]",
    outline:
      "border border-navy-800/25 text-navy-800 hover:border-navy-800/60 hover:bg-navy-800/[0.03]",
    "outline-dark":
      "border border-paper/25 text-paper hover:border-gold-300/60 hover:text-gold-300",
  } as const;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-sm px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500",
        styles[variant],
        className
      )}
    >
      <WhatsAppIcon className="h-[1.15em] w-[1.15em]" />
      {children}
    </a>
  );
}
