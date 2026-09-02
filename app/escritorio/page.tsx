import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "O Escritório",
  description:
    "Conheça o Frederico Ferreira Advocacia: princípios, trajetória e a forma de trabalhar — clareza antes de tudo, honestidade sobre expectativa e presença constante.",
};

const principios = [
  {
    titulo: "Clareza antes de tudo",
    texto:
      "Advogado que esconde a explicação atrás do juridiquês está escondendo algo. Se você não entendeu o seu próprio caso, a culpa é nossa — e corrigimos quantas vezes for preciso.",
  },
  {
    titulo: "Honestidade sobre expectativa",
    texto:
      "Dizemos o que é possível, não o que você quer ouvir. Prometer resultado é o primeiro sinal de um mau profissional. Apontar riscos e caminhos reais é o nosso trabalho.",
  },
  {
    titulo: "Presença",
    texto:
      "Processo parado é cliente sem resposta. Não deixamos nenhum dos dois acontecer: você acompanha cada etapa e sabe exatamente onde o seu caso está — sem precisar cobrar.",
  },
];

export default function EscritorioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="grain relative overflow-hidden bg-navy-900 pb-20 pt-44 text-paper md:pb-28 md:pt-56">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <Container className="relative">
            <Reveal>
              <Eyebrow dark>O Escritório</Eyebrow>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-tight md:text-6xl">
                Um escritório que prefere explicar duas vezes a{" "}
                <em className="font-light italic text-gold-300">prometer uma.</em>
              </h1>
            </Reveal>
          </Container>
        </section>

        {/* Trajetória + princípios sticky */}
        <section className="bg-paper py-20 md:py-28">
          <Container>
            <div className="grid gap-14 md:grid-cols-12">
              {/* Coluna sticky */}
              <div className="md:col-span-5">
                <div className="md:sticky md:top-40">
                  {/* Fotos reais do advogado — novas imagens enviadas */}
                  <Reveal>
                    <div className="grain relative overflow-hidden rounded-lg bg-navy-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/foto-frederico.webp"
                        alt="Frederico Ferreira, advogado — retrato profissional 1"
                        className="aspect-[4/5] w-full object-cover"
                        width={800}
                        height={1000}
                      />
                      <div className="absolute inset-x-0 bottom-0 border-t border-gold-400/30 bg-gradient-to-t from-navy-950/90 to-transparent p-8">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                          {site.shortName}
                        </p>
                        <p className="mt-2 font-display text-xl font-light text-paper/90">
                          Advogado · {site.oab}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.04}>
                    <div className="mt-4 overflow-hidden rounded-lg border border-navy-800/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/foto-frederico-2.webp"
                        alt="Frederico Ferreira, advogado — retrato profissional 2"
                        className="aspect-[4/5] w-full object-cover"
                        width={800}
                        height={1000}
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <div className="mt-8 space-y-4 rounded-lg border border-navy-800/10 p-6 text-sm">
                      <p className="flex justify-between gap-4">
                        <span className="text-ink-soft">OAB</span>
                        <span className="font-medium text-navy-900">{site.oab}</span>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span className="text-ink-soft">Atendimento</span>
                        <span className="font-medium text-navy-900">{site.hours}</span>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span className="text-ink-soft">Áreas</span>
                        <span className="font-medium text-navy-900">
                          Previdenciário · Trabalhista · Empresarial
                        </span>
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Coluna de conteúdo */}
              <div className="md:col-span-7">
                <Reveal>
                  <p className="text-xl leading-relaxed text-navy-900 md:text-2xl">
                    Frederico Ferreira construiu o escritório em torno de uma
                    convicção simples: o direito existe para proteger pessoas —
                    e ele só cumpre esse papel quando quem o procura entende o
                    que está acontecendo.
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-ink-soft">
                    Com atuação dedicada em Direito Previdenciário, Trabalhista
                    e Empresarial e atendimento presencial em Rio Grande/RS
                    (Rua Canabarro, 470A — Centro) e online para todo o Brasil,
                    o escritório une técnica de quem conhece o processo por
                    dentro à comunicação direta — sem juridiquês e sem promessa
                    vazia.
                  </p>
                </Reveal>

                <div className="mt-14">
                  {principios.map((p, i) => (
                    <Reveal key={p.titulo} delay={i * 0.08}>
                      <div className="border-t border-navy-800/10 py-8 first:border-t-0">
                        <p className="font-display text-sm font-light text-gold-600/70">
                          0{i + 1}
                        </p>
                        <h2 className="mt-3 font-display text-2xl font-medium text-navy-900">
                          {p.titulo}
                        </h2>
                        <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">
                          {p.texto}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.2}>
                  {/* Logotipo oficial como assinatura */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-transparente.png"
                    alt={`Logotipo ${site.name}`}
                    className="mt-12 h-24 w-auto"
                    width={240}
                    height={160}
                  />
                </Reveal>
                <Reveal delay={0.25}>
                  <WhatsAppButton
                    message="Olá! Gostaria de conversar com o escritório."
                    className="mt-6"
                  >
                    Conversar com o escritório
                  </WhatsAppButton>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
