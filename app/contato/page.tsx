import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Frederico Ferreira Advocacia. Primeira conversa sem compromisso: conte seu caso e receba uma análise honesta sobre caminhos e riscos.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="grain relative overflow-hidden bg-navy-900 pb-20 pt-44 text-paper md:pb-24 md:pt-56">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <Container className="relative">
            <Reveal>
              <Eyebrow dark>Contato</Eyebrow>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-tight md:text-6xl">
                Conte seu caso.{" "}
                <em className="font-light italic text-gold-300">A gente entende.</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
                Primeira conversa sem compromisso. Você explica com suas
                palavras — e sai sabendo o que é possível.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-paper py-20 md:py-28">
          <Container>
            <div className="grid gap-14 md:grid-cols-12">
              {/* Formulário */}
              <div className="md:col-span-7">
                <Reveal>
                  <ContactForm />
                </Reveal>
              </div>

              {/* Informações de contato */}
              <div className="md:col-span-5">
                <Reveal delay={0.1}>
                  <div className="space-y-8">
                    <div>
                      <Eyebrow>WhatsApp</Eyebrow>
                      <a
                        href={whatsappLink("Olá! Gostaria de conversar com o escritório.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2.5 font-display text-2xl font-medium text-navy-900 transition-colors hover:text-gold-600"
                      >
                        <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                        {site.whatsappDisplay}
                      </a>
                      <p className="mt-1 text-sm text-ink-soft">
                        Resposta rápida em horário comercial.
                      </p>
                    </div>

                    <div>
                      <Eyebrow>E-mail</Eyebrow>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-3 block font-display text-xl font-medium text-navy-900 transition-colors hover:text-gold-600"
                      >
                        {site.email}
                      </a>
                    </div>

                    <div>
                      <Eyebrow>Endereço</Eyebrow>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">
                        {site.address.street}
                        <br />
                        {site.address.city} · {site.address.cep}
                      </p>
                    </div>

                    <div>
                      <Eyebrow>Horário</Eyebrow>
                      <p className="mt-3 text-[0.95rem] text-ink">{site.hours}</p>
                    </div>

                    <div className="rounded-lg border border-navy-800/10 bg-paper-dim p-6">
                      <p className="text-sm leading-relaxed text-ink-soft">
                        <span className="font-semibold text-navy-900">
                          Atendimento online:
                        </span>{" "}
                        grande parte dos casos previdenciários e trabalhistas
                        pode ser conduzida integralmente por videoconferência —
                        de qualquer cidade do Brasil.
                      </p>
                    </div>
                  </div>
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
