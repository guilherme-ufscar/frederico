import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

const principios = [
  {
    titulo: "Clareza antes de tudo",
    texto: "Se você não entendeu, a culpa é nossa.",
  },
  {
    titulo: "Honestidade sobre expectativa",
    texto: "Dizemos o que é possível, não o que você quer ouvir.",
  },
  {
    titulo: "Presença",
    texto: "Processo parado é cliente sem resposta. Não deixamos nenhum dos dois acontecer.",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-12">
          {/* Coluna esquerda — foto real do advogado */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="grain relative overflow-hidden rounded-lg bg-navy-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/foto-frederico.webp"
                  alt="Frederico Ferreira, advogado — retrato profissional"
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
          </div>

          {/* Coluna direita — princípios */}
          <div className="md:col-span-7 md:pl-8">
            <Reveal>
              <Eyebrow>O Escritório</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-navy-900 md:text-5xl">
                Um escritório que prefere explicar duas vezes a{" "}
                <em className="font-light italic text-gold-600">prometer uma.</em>
              </h2>
            </Reveal>

            <div className="mt-12 space-y-0">
              {principios.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 0.08}>
                  <div className="flex gap-6 border-t border-navy-800/10 py-6 first:border-t-0">
                    <span className="font-display text-lg font-light text-gold-600/70">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-navy-900">
                        {p.titulo}
                      </h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                        {p.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Link
                href="/escritorio"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
              >
                Conhecer o escritório
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
