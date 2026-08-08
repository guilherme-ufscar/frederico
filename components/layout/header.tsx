"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Início" },
  { href: "/areas/previdenciario", label: "Previdenciário" },
  { href: "/areas/trabalhista", label: "Trabalhista" },
  { href: "/areas/empresarial", label: "Empresarial" },
  { href: "/escritorio", label: "O Escritório" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
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
        scrolled
          ? "border-b border-navy-800/10 bg-paper/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:h-32 md:px-10">
        <Link
          href="/"
          className="flex items-center leading-none"
          onClick={() => setOpen(false)}
        >
          {/* Logo completa oficial (já contém nome + OAB/RS) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-transparente.png"
            alt={`${site.name} — logotipo`}
            className={cn(
              "h-12 w-auto transition-opacity duration-300 md:h-24",
              scrolled || open ? "opacity-95" : "opacity-100"
            )}
            width={240}
            height={160}
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors duration-300",
                scrolled ? "text-ink hover:text-gold-600" : "text-paper/85 hover:text-gold-300"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contato"
            className={cn(
              "whitespace-nowrap rounded-sm border px-4 py-2 text-sm font-medium transition-all duration-300",
              scrolled
                ? "border-navy-800/25 text-navy-800 hover:border-gold-500 hover:text-gold-600"
                : "border-paper/30 text-paper hover:border-gold-300 hover:text-gold-300"
            )}
          >
            Conversar sobre meu caso
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span
            className={cn(
              "absolute h-px w-6 transition-all duration-300",
              open ? "rotate-45 bg-paper" : "-translate-y-[5px] bg-navy-800",
              scrolled && !open && "bg-navy-800"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 transition-all duration-300",
              open ? "-rotate-45 bg-paper" : "translate-y-[5px] bg-navy-800",
              scrolled && !open && "bg-navy-800"
            )}
          />
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-navy-950 px-10 transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-6" aria-label="Menu móvel">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <span className="font-display text-xs text-gold-400">
                0{i + 1}
              </span>
              <span className="font-display text-3xl font-medium text-paper transition-colors group-hover:text-gold-300">
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950"
          >
            Conversar sobre meu caso
          </Link>
        </nav>
      </div>
    </header>
  );
}
