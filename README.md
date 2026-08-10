# Frederico Correia Advocacia — Site Institucional

Site institucional do escritório, construído com **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Motion**.

## Requisitos

- Node.js ≥ 20 (testado com Node 24)
- npm
- Docker + Docker Compose (para produção)

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build de produção

```bash
npm run build      # gera .next/standalone + copia estáticos (postbuild)
npm start          # roda node .next/standalone/server.js
```

> No Windows, se a porta 3000 estiver ocupada por outro projeto, use
> `PORT=3111 HOSTNAME=0.0.0.0 node .next/standalone/server.js`.

## Docker (produção)

A aplicação não expõe porta nenhuma; apenas o proxy Caddy é publicado (80/443).

```bash
docker compose up -d --build          # produção (80/443, HTTPS automático)
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build  # preview local (8080, só HTTP)
docker compose -f docker-compose.prod.yml up -d --build  # servidor aaPanel (nginx na 80/443 faz proxy p/ 127.0.0.1:3000)
```

- `docker-compose.yml` — app (porta 3000 interna, `expose` apenas) + proxy Caddy
- `docker-compose.local.yml` — override de desenvolvimento: só porta 8080, Caddyfile.local (sem Let's Encrypt)
- `docker-compose.prod.yml` — servidor com nginx externo: app publicado em 127.0.0.1:3000 (só localhost)
- `Dockerfile` — multi-stage (build em node:22-alpine, runtime standalone)
- `Caddyfile` — HTTPS automático (Let's Encrypt), headers de segurança
- `.dockerignore` — impede que node_modules do Windows quebre o build Linux

**Deploy no servidor (aaPanel):** `scripts/deploy.py` — backup do site antigo, envio dos arquivos, `docker compose up`, ajuste do vhost do domínio (proxy reverso) com backup automático do `.conf` e reversão em caso de falha do `nginx -t`.

**Antes do deploy:** apontar o DNS de `advfredericoferreira.com` para o servidor.

## Conteúdo e placeholders

Todos os dados editáveis ficam centralizados em **`lib/site.ts`**:

- Telefone/WhatsApp, e-mail, endereço, horário, OAB
- Textos das 3 áreas de atuação (Previdenciário, Trabalhista, Empresarial)
- FAQ e blocos de conteúdo

Procure por `TODO(descoberta)` para os itens que dependem do cliente:

- [ ] Confirmar nome de registro (Correia × Ferreira) — domínio é advfrederico**ferreira**.com
- [ ] Número real do WhatsApp
- [ ] E-mail e endereço reais
- [ ] Número da OAB
- [ ] Biografia/trajetória real do Frederico (página O Escritório)
- [ ] Foto profissional (placeholder atual em `about-preview` e `/escritorio`)
- [ ] Depoimentos reais (com autorização, conforme Provimento 205/2021 da OAB)
- [ ] Integrar envio de e-mail do formulário (Resend/SMTP) — `app/api/contact/route.ts`

## Estrutura

```
app/
├─ layout.tsx                  # Layout raiz: fontes (Inter + Fraunces), metadata, JSON-LD
├─ globals.css                 # Design tokens (cores navy/gold) via Tailwind v4 @theme
├─ page.tsx                    # Home
├─ areas/[slug]/page.tsx       # Páginas das 3 áreas (SSG via generateStaticParams)
├─ escritorio/page.tsx         # Sobre o escritório
├─ contato/page.tsx            # Contato + formulário
├─ politica-de-privacidade/page.tsx
├─ api/contact/route.ts        # Endpoint do formulário (honeypot + validação LGPD)
├─ not-found.tsx               # 404 customizado
├─ sitemap.ts / robots.ts      # SEO
└─ opengraph-image.tsx         # OG image gerada (next/og)
components/
├─ layout/    # Header (scroll state + menu mobile), Footer
├─ sections/  # Hero, AreasGrid, Process, AboutPreview, FAQ, CtaBand
├─ ui/        # Container, Eyebrow, Button, Reveal
├─ forms/     # ContactForm (client)
└─ seo/       # JsonLd (LegalService)
lib/
└─ site.ts    # DADOS CENTRAIS DO SITE
scripts/
└─ copy-standalone.mjs  # pós-build: copia static/public para o standalone
```

## Design

- **Cores:** navy `#142740` (marca) + gold `#D1B27D` (marca) + off-white `#F8F6F1` — contraste do par central ≈ 7.4:1 (WCAG AAA)
- **Tipografia:** Fraunces (display/serifa) + Inter (corpo) — ambas auto-hospedadas via `next/font` (LGPD-friendly)
- **Motion:** reveals no scroll com Motion, respeita `prefers-reduced-motion`
- **Conformidade:** Provimento 205/2021 da OAB (publicidade sóbria) + LGPD (consentimento no formulário, política de privacidade)
