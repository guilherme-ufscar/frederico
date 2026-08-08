import Link from "next/link";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { site, whatsappLink } from "@/lib/site";

const areasFooter = [
  { href: "/areas/previdenciario", label: "Direito Previdenciário" },
  { href: "/areas/trabalhista", label: "Direito Trabalhista" },
  { href: "/areas/empresarial", label: "Direito Empresarial" },
];

const links = [
  { href: "/escritorio", label: "O Escritório" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
];

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-navy-950 text-paper/70">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* Logotipo completo (fundo removido) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparente.png"
              alt={`Logotipo ${site.name}`}
              className="h-20 w-auto"
              width={220}
              height={147}
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {site.tagline}
            </p>
            <p className="mt-8 text-xs text-paper/40">{site.oab}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-400">
              Áreas de atuação
            </p>
            <ul className="mt-5 space-y-3">
              {areasFooter.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-sm transition-colors hover:text-gold-300"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-400">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink("Olá, gostaria de conversar com o escritório.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {site.address.street}
                <br />
                {site.address.city} · {site.address.cep}
              </li>
              <li className="text-paper/45">{site.hours}</li>
            </ul>
            <div className="mt-6 space-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-xs text-paper/40 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p>
            Advocacia com publicidade conforme o Provimento 205/2021 da OAB.
          </p>
        </div>
      </Container>
    </footer>
  );
}
