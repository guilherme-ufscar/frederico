import { site } from "@/lib/site";

/**
 * JSON-LD LegalService — schema estruturado para escritórios de advocacia.
 * Ajuda o Google a entender o que o site é e a exibir rich snippets.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: `https://${site.domain}`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.cep,
      addressCountry: "BR",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: "BR",
    knowsAbout: [
      "Direito Previdenciário",
      "Direito Trabalhista",
      "Direito Empresarial",
      "Aposentadoria",
      "Revisão de benefício INSS",
      "Reclamação trabalhista",
    ],
    slogan: site.tagline,
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
