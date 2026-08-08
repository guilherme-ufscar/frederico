"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { site } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="grain relative overflow-hidden bg-navy-900 text-paper">
      {/* Imagem de cenário: arquitetura clássica (sem rosto) com overlay navy */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/courthouse-dubuque.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
      {/* Filete dourado superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      {/* Brilho sutil de fundo */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-navy-600/30 blur-3xl"
        aria-hidden
      />

      <Container className="relative flex min-h-[92vh] flex-col justify-center pb-24 pt-44 md:pt-56">
        <motion.p
          {...fade(0.05)}
          className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-300"
        >
          <span className="inline-block h-px w-10 bg-gold-400/70" aria-hidden />
          {site.name}
        </motion.p>

        <motion.h1
          {...fade(0.15)}
          className="mt-8 max-w-4xl font-display text-[2.6rem] font-medium leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]"
        >
          Do outro lado da mesa, ninguém vai{" "}
          <em className="font-light italic text-gold-300">defender você</em>.
          É exatamente para isso que existimos.
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70"
        >
          Atuação em Direito Previdenciário, Trabalhista e Empresarial — com
          análise honesta do seu caso e linguagem que você entende.
        </motion.p>

        <motion.div {...fade(0.45)} className="mt-12 flex flex-wrap items-center gap-4">
          <WhatsAppButton
            message="Olá! Encontrei o site do escritório e gostaria de conversar sobre um caso."
          >
            Conversar sobre meu caso
          </WhatsAppButton>
          <a
            href="#areas"
            className="inline-flex items-center gap-2 rounded-sm border border-paper/25 px-7 py-3.5 text-[0.95rem] font-medium text-paper transition-all duration-300 hover:border-gold-300/60 hover:text-gold-300"
          >
            Conhecer as áreas de atuação
          </a>
        </motion.div>

        {/* Números editoriais de fundo */}
        <div
          className="pointer-events-none absolute -bottom-10 right-4 select-none font-display text-[16rem] font-light leading-none text-paper/[0.03] md:text-[22rem]"
          aria-hidden
        >
          {new Date().getFullYear()}
        </div>
      </Container>
    </section>
  );
}
