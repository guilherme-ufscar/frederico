import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Compat: foto antiga sem "r" → nova com "r" (mantém link antigo funcionando)
      { source: "/foto-federico.webp", destination: "/foto-frederico.webp", permanent: true },
      // Velhas rotas sem prefixo /areas → corrige (caso tenha sido indexada)
      { source: "/previdenciario", destination: "/areas/previdenciario", permanent: true },
      { source: "/trabalhista", destination: "/areas/trabalhista", permanent: true },
      { source: "/empresarial", destination: "/areas/empresarial", permanent: true },
      { source: "/areas/previdencia", destination: "/areas/previdenciario", permanent: true },
      { source: "/o-escritorio", destination: "/escritorio", permanent: true },
    ];
  },
};

export default nextConfig;
