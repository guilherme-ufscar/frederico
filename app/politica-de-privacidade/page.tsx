import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do Federico Ferreira Advocacia, em conformidade com a LGPD (Lei nº 13.709/2018).",
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  const updated = "Janeiro de 2026";

  return (
    <>
      <Header />
      <main>
        <section className="grain relative overflow-hidden bg-navy-900 pb-16 pt-44 text-paper md:pt-56">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <Container className="relative">
            <Reveal>
              <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-tight md:text-5xl">
                Política de Privacidade
              </h1>
              <p className="mt-4 text-sm text-paper/50">Atualizada em {updated}</p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-paper py-16 md:py-20">
          <Container>
            <Reveal>
              <div className="max-w-3xl space-y-10 text-[0.95rem] leading-relaxed text-ink">
                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    1. Quem somos
                  </h2>
                  <p>
                    O escritório <strong>{site.name}</strong> (OAB {site.oab}) é o
                    controlador dos dados pessoais tratados por meio deste site,
                    conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº
                    13.709/2018).
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    2. Quais dados coletamos
                  </h2>
                  <p>Coletamos apenas os dados que você fornece voluntariamente:</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Nome, WhatsApp/e-mail e área de interesse, enviados pelo formulário de contato;</li>
                    <li>Dados do seu caso, que você descreve na mensagem;</li>
                    <li>Dados de navegação anônimos, se utilizarmos ferramentas de análise sem identificação pessoal.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    3. Para que usamos
                  </h2>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Responder ao seu contato e dar andamento à sua solicitação;</li>
                    <li>Exercer a defesa de direitos em juízo ou fora dele (legítimo interesse do titular, art. 7º, V, LGPD);</li>
                    <li>Cumprir obrigações legais e regulatórias, incluindo sigilo profissional (art. 7º, II, LGPD).</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    4. Compartilhamento
                  </h2>
                  <p>
                    Não vendemos nem compartilhamos seus dados com terceiros para
                    fins de marketing. Dados podem ser compartilhados apenas com
                    autoridades e órgãos competentes, por obrigação legal, ou com
                    prestadores de serviço estritamente necessários (como
                    plataforma de envio de e-mails), sempre sob contrato e com as
                    garantias da LGPD.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    5. Seus direitos
                  </h2>
                  <p>
                    Você pode, a qualquer momento, solicitar confirmação, acesso,
                    correção, anonimização ou eliminação dos seus dados, além de
                    revogar o consentimento dado. Para isso, basta nos escrever
                    em{" "}
                    <a href={`mailto:${site.email}`} className="text-gold-600 underline underline-offset-2">
                      {site.email}
                    </a>
                    . Atenderemos no prazo legal.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    6. Sigilo e segurança
                  </h2>
                  <p>
                    Os dados relativos ao seu caso estão protegidos pelo sigilo
                    profissional do advogado (Estatuto da Advocacia — Lei nº
                    8.906/1994). Adotamos medidas técnicas e organizacionais
                    adequadas para proteger as informações contra acesso não
                    autorizado, perda ou alteração.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-display text-2xl font-medium text-navy-900">
                    7. Contato
                  </h2>
                  <p>
                    Dúvidas sobre esta política:{" "}
                    <a href={`mailto:${site.email}`} className="text-gold-600 underline underline-offset-2">
                      {site.email}
                    </a>{" "}
                    ou {site.whatsappDisplay}.
                  </p>
                </section>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
