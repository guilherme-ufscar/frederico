import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    n: "01",
    titulo: "Você conta o caso",
    texto:
      "Pelo WhatsApp ou formulário, sem compromisso e sem juridiquês. Você fala do jeito que sabe — a gente entende do jeito que a gente sabe.",
  },
  {
    n: "02",
    titulo: "Analisamos e dizemos o que é possível",
    texto:
      "Com sinceridade: o que dá, o que não dá e quais são os riscos. Se não houver caminho, dizemos antes de você gastar um centavo.",
  },
  {
    n: "03",
    titulo: "Você decide com clareza",
    texto:
      "E, se seguirmos juntos, cuidamos de cada etapa até o fim — com atualização constante e zero surpresa.",
  },
];

export function Process() {
  return (
    <section className="grain relative overflow-hidden bg-navy-900 py-24 text-paper md:py-32">
      <Container>
        <Reveal>
          <Eyebrow dark>Como trabalhamos</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
            Sem mistério. Sem juridiquês.{" "}
            <em className="font-light italic text-gold-300">Sem surpresa.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-paper/10 bg-paper/10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="group h-full bg-navy-900 p-8 transition-colors duration-500 hover:bg-navy-800 md:p-10">
                <span className="font-display text-4xl font-light text-gold-400/60">
                  {step.n}
                </span>
                <h3 className="mt-8 font-display text-xl font-medium text-paper">
                  {step.titulo}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-paper/65">
                  {step.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
