import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="grain relative flex min-h-[80vh] items-center overflow-hidden bg-navy-900 pt-24 text-paper">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <Container className="relative text-center">
            <p className="font-display text-[7rem] font-light leading-none text-gold-400/25 md:text-[11rem]">
              404
            </p>
            <h1 className="mx-auto mt-4 max-w-xl font-display text-3xl font-medium leading-tight md:text-4xl">
              Esta página não existe — mas seu caso,{" "}
              <em className="font-light italic text-gold-300">sim.</em>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-paper/60">
              O caminho certo para o seu problema está a uma mensagem de
              distância.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <WhatsAppButton
                message="Olá! Encontrei um erro no site e quero conversar sobre um caso."
              >
                Conversar pelo WhatsApp
              </WhatsAppButton>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-sm border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-gold-300/60 hover:text-gold-300"
              >
                Voltar ao início
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
