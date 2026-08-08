import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { areas } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return { title: "Área não encontrada" };
  return {
    title: area.titulo,
    description: area.intro,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero da área */}
        <section className="grain relative overflow-hidden bg-navy-900 pb-20 pt-44 text-paper md:pb-24 md:pt-56">
          {/* Imagem de cenário com overlay */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/columns.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <Container className="relative">
            <Reveal>
              <Eyebrow dark>
                Área de atuação · {area.numero}
              </Eyebrow>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-tight md:text-6xl">
                {area.titulo}
              </h1>
              <p className="mt-6 max-w-2xl font-display text-xl font-light italic leading-relaxed text-gold-300">
                “{area.gancho}”
              </p>
            </Reveal>
          </Container>
          <div
            className="pointer-events-none absolute -bottom-8 right-4 select-none font-display text-[14rem] font-light leading-none text-paper/[0.04] md:text-[20rem]"
            aria-hidden
          >
            {area.numero}
          </div>
        </section>

        {/* Intro */}
        <section className="bg-paper py-20 md:py-24">
          <Container>
            <div className="grid gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-7">
                <p className="text-xl leading-relaxed text-navy-900 md:text-2xl">
                  {area.intro}
                </p>
              </Reveal>
            </div>

            {/* Bloco de dor */}
            <Reveal delay={0.1}>
              <div className="mt-16 border-l-2 border-gold-500 pl-6 md:pl-8">
                <h2 className="font-display text-2xl font-medium text-navy-900 md:text-3xl">
                  {area.dor.titulo}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                  {area.dor.texto}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* O que atendemos */}
        <section className="bg-paper-dim py-20 md:py-24">
          <Container>
            <div className="grid gap-10 md:grid-cols-2">
              {area.publicos.map((pub, i) => (
                <Reveal key={pub.titulo} delay={i * 0.08}>
                  <div className="h-full rounded-lg border border-navy-800/10 bg-paper p-8 md:p-10">
                    <p className="font-display text-3xl font-light text-gold-600/60">
                      0{i + 1}
                    </p>
                    <h2 className="mt-6 font-display text-2xl font-medium text-navy-900">
                      {pub.titulo}
                    </h2>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                      {pub.descricao}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {pub.itens.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                          <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-gold-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ da área */}
        <section className="bg-paper py-20 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>Dúvidas comuns</Eyebrow>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-navy-900 md:text-4xl">
                  Perguntas frequentes sobre {area.titulo.toLowerCase()}
                </h2>
              </Reveal>
              <div className="mt-10 divide-y divide-navy-800/10 border-y border-navy-800/10">
                {area.faq.map((item, i) => (
                  <Reveal key={item.pergunta} delay={i * 0.05}>
                    <details className="group py-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-lg font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
                        {item.pergunta}
                        <span className="relative h-3 w-3 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden>
                          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gold-600" />
                          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold-600" />
                        </span>
                      </summary>
                      <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
                        {item.resposta}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA da área */}
        <section className="grain relative overflow-hidden bg-navy-900 py-20 text-center text-paper md:py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <Container className="relative">
            <Reveal>
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
                {area.cta}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-paper/70">
                {area.titulo} é a nossa especialidade. Conte seu caso — a
                primeira conversa é sem compromisso.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <WhatsAppButton
                  message={`Olá! Gostaria de falar sobre um caso de ${area.titulo.toLowerCase()}.`}
                >
                  {area.cta}
                </WhatsAppButton>
                <a
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/25 px-8 py-4 text-[0.95rem] font-medium text-paper transition-all duration-300 hover:border-gold-300/60 hover:text-gold-300"
                >
                  Enviar mensagem
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
