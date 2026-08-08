import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { areas } from "@/lib/site";

export function AreasGrid() {
  return (
    <section id="areas" className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow>Áreas de atuação</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-navy-900 md:text-5xl">
                Três frentes. Uma única forma de trabalhar:{" "}
                <em className="font-light italic text-gold-600">com clareza.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-4">
            <p className="text-base leading-relaxed text-ink-soft">
              Cada área com um time de atuação dedicado e a mesma régua:
              análise técnica honesta, comunicação clara e nenhuma promessa
              vazia.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-navy-800/10 bg-navy-800/10 md:grid-cols-3">
          {areas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 0.08}>
              <Link
                href={`/areas/${area.slug}`}
                className="group relative flex h-full min-h-[22rem] flex-col justify-between bg-paper p-8 transition-colors duration-500 hover:bg-navy-900 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-light text-navy-800/15 transition-colors duration-500 group-hover:text-gold-400/40">
                    {area.numero}
                  </span>
                  <span className="mt-2 inline-block h-px w-8 bg-gold-500/40 transition-all duration-500 group-hover:w-12 group-hover:bg-gold-400" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-medium text-navy-900 transition-colors duration-500 group-hover:text-paper">
                    {area.titulo}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/70">
                    {area.gancho}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    Entender melhor
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
