import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function CtaBand() {
  return (
    <section className="grain relative overflow-hidden bg-navy-900 py-24 text-center text-paper md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-600/25 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
            Próximo passo
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
            Seu caso merece uma{" "}
            <em className="font-light italic text-gold-300">resposta clara.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            Conte o que aconteceu. Na primeira conversa, você já sai sabendo o
            que é possível — e o que não é.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              message="Olá! Encontrei o site do escritório e gostaria de conversar sobre um caso."
            >
              Conversar pelo WhatsApp
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
  );
}
