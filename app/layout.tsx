import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advfredericoferreira.com"),
  title: {
    default: "Federico Ferreira Advocacia | Direito Previdenciário, Trabalhista e Empresarial",
    template: "%s | Federico Ferreira Advocacia",
  },
  description:
    "Advocacia de tese firme e linguagem clara. Atuação em Direito Previdenciário, Trabalhista e Empresarial — análise honesta do seu caso e comunicação sem juridiquês.",
  keywords: [
    "advogado previdenciário",
    "advogado trabalhista",
    "advocacia empresarial",
    "aposentadoria",
    "revisão de benefício INSS",
    "reclamação trabalhista",
  ],
  authors: [{ name: "Federico Ferreira Advocacia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Federico Ferreira Advocacia",
    title: "Federico Ferreira Advocacia",
    description:
      "Do outro lado da mesa, ninguém vai defender você. É exatamente para isso que existimos.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#142740",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
