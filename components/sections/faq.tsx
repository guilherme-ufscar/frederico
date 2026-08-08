"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faq = [
  {
    pergunta: "Quanto custa uma consulta?",
    resposta:
      "Depende da complexidade do caso — e isso se descobre na conversa. O primeiro contato é sem compromisso: você explica a situação e recebe uma orientação honesta sobre caminhos e custos.",
  },
  {
    pergunta: "Meu caso tem garantia de ganho?",
    resposta:
      "Nenhum advogado sério pode garantir resultado — e quem promete deveria acender um alerta. O que garantimos é análise técnica honesta, estratégia bem construída e atuação completa até o fim.",
  },
  {
    pergunta: "Atendem online ou em outras cidades?",
    resposta:
      "Sim. Grande parte dos casos previdenciários e trabalhistas pode ser conduzida integralmente online, com reuniões por vídeo e documentos digitais. Fale conosco para confirmar a viabilidade do seu caso.",
  },
  {
    pergunta: "O que levar para a primeira conversa?",
    resposta:
      "Documentos pessoais, carteira de trabalho, extratos e qualquer carta que você tenha recebido (por exemplo, do INSS). Se não tiver tudo, não se preocupe: orientamos o que buscar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Perguntas frequentes</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-navy-900 md:text-5xl">
                O que as pessoas{" "}
                <em className="font-light italic text-gold-600">perguntam antes</em>{" "}
                de ligar.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">
                Não encontrou sua dúvida? Mande pelo WhatsApp — respondemos
                rápido e sem compromisso.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="divide-y divide-navy-800/10 border-y border-navy-800/10">
              {faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.pergunta} delay={i * 0.05}>
                    <div>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="font-display text-lg font-medium text-navy-900 md:text-xl">
                          {item.pergunta}
                        </span>
                        <span
                          className={cn(
                            "relative h-3 w-3 shrink-0 transition-transform duration-300",
                            isOpen && "rotate-45"
                          )}
                          aria-hidden
                        >
                          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gold-600" />
                          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold-600" />
                        </span>
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-400 ease-out",
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-6 text-[0.95rem] leading-relaxed text-ink-soft">
                            {item.resposta}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
