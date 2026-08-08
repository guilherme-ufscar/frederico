# Escopo do Projeto — Frederico Correia Advocacia

> **Domínio:** advfredericoferreira.com
> **Tipo:** Site institucional
> **Áreas de atuação:** Previdenciário · Trabalhista · Empresarial
> **Objetivo:** transmitir autoridade técnica e confiança, gerar contatos qualificados (WhatsApp/formulário) e posicionar o escritório nas buscas locais e por área.

---

## ⚠️ 1. Ponto de atenção antes de tudo

O nome do escritório é **"Frederico Correia"** mas o domínio é **advfredericoFERREIRA.com**. Isso precisa ser resolvido antes do desenvolvimento:

- Se o sobrenome correto for **Correia** → tentar registrar `advfredericocorreia.com.br` (e manter o atual como redirecionamento);
- Se o domínio já estiver consolidado/divulgado → ajustar a marca para casar com ele.

Nome e domínio divergentes geram desconfiança no visitante e confundem o Google. **Decidir na fase de descoberta.**

---

## 2. Posicionamento e Direção Criativa

### O problema da categoria
Sites de advocacia no Brasil são quase todos iguais: foto de coluna grega, "excelência e compromisso com o cliente", balança da justiça, dourado genérico. Isso não diferencia ninguém — e o público (leigo, ansioso, com um problema concreto) não se enxerga nesse discurso.

### A oportunidade
O cliente chega num momento de **incerteza**: o INSS negou, a demissão veio errada, a empresa está crescendo sem contrato. O que ele precisa não é de "excelência" — é de **clareza**: alguém que olhe o caso, diga o que é possível, e fale numa língua que ele entenda.

**Posicionamento sugerido:**
> *"Advocacia de tese firme, linguagem clara e nenhuma promessa vazia."*

O site inteiro comunica isso: textos sem juridiquês, layout sóbrio e preciso, hierarquia que guia o visitante do problema até o contato.

### Três caminhos criativos (escolher um na descoberta)

**Caminho A — "Contrapeso" (recomendado)**
Conceito: do outro lado da mesa existe uma estrutura enorme (INSS, grandes empresas, burocracia). O escritório é o contrapeso do indivíduo.
- Tom: firme, protetor, direto.
- Melhor para: peso maior em Previdenciário e Trabalhista (público pessoa física).
- Exemplo de headline: *"Do outro lado da mesa, ninguém vai defender você. É exatamente para isso que existimos."*

**Caminho B — "Tradução"**
Conceito: o direito é um idioma que exclui; o escritório traduz. Diagnóstico claro, etapas explicadas, zero mistério.
- Tom: acessível, didático, calmo.
- Melhor para: público leigo que tem medo de advogado.
- Exemplo de headline: *"Todo direito tem um caminho. Nosso trabalho é mostrar o seu."*

**Caminho C — "Precisão"**
Conceito: estratégia e rigor técnico; decisão jurídica não se toma no escuro.
- Tom: sofisticado, analítico, discreto.
- Melhor para: peso maior em Empresarial (B2B).
- Exemplo de headline: *"Decisões jurídicas importantes não se tomam no escuro."*

> Recomendação: **Caminho A como guarda-chuva da marca**, com cada página de área adaptando o tom ao seu público (Empresarial mais contido e estratégico, Previdenciário mais acolhedor).

---

## 3. Identidade Visual

### 3.1 Cores

Partindo das cores do cliente (mantidas como núcleo da marca), expandimos para um sistema completo:

| Token | Hex | Uso |
|---|---|---|
| `navy-950` | `#0B1624` | Fundo mais escuro (footer, seções de contraste máximo) |
| `navy-900` | `#0F1E33` | Fundo de seções escuras alternadas |
| `navy-800` | `#142740` | **Cor de marca** — hero, títulos sobre claro, botões |
| `navy-600` | `#2A4368` | Hover, detalhes |
| `gold-300` | `#E2CBA0` | Hover de elementos dourados sobre fundo escuro |
| `gold-400` | `#D1B27D` | **Cor de marca** — detalhes, filetes, eyebrows, ícones |
| `gold-600` | `#A98A52` | Dourado sobre fundo claro (só em textos grandes/detalhes) |
| `paper` | `#F8F6F1` | Fundo claro principal (off-white quente, não branco puro) |
| `paper-dim` | `#EFEBE2` | Fundo de cards sobre paper |
| `ink` | `#1E2A38` | Texto sobre fundo claro |
| `ink-soft` | `#54637A` | Texto secundário |

**Observações técnicas:**
- Contraste `gold-400` sobre `navy-800` ≈ **7.4:1** — passa WCAG AA e AAA para texto. O par central da marca é acessível.
- Dourado sobre fundo claro usa sempre o tom escurecido (`gold-600`), e apenas em elementos grandes — em corpo de texto, sempre navy.
- Se na prática o `#D1B27D` parecer "apagado" em telas pequenas, subir para `#D9BD8C` como variante — decisão no refinamento visual.

### 3.2 Tipografia

A Inter sozinha é excelente para UI, mas fria demais para carregar a personalidade de um escritório. Solução (mantendo a Inter, como pedido):

| Papel | Fonte | Por quê |
|---|---|---|
| **Display / títulos** | **Fraunces** (serifada, pesos 300–600, eixo óptico alto) | Serifa editorial com autoridade sem ser "jurídica velha". É o padrão de sites premium atuais. |
| **Corpo / UI** | **Inter** (400/500/600) | Legibilidade máxima, pedido do cliente. |

- Ambas **auto-hospedadas** via `next/font` (zero requisição externa → melhor performance e conformidade LGPD, sem Google Fonts).
- Alternativa caso Fraunces não agrade na prova visual: **Instrument Serif** (mais fina e contemporânea) ou **Newsreader** (mais clássica).

**Escala:**
- Hero: 44–72px, Fraunces peso 350–450, line-height 1.05, leve tracking negativo
- H2: 32–40px Fraunces
- Eyebrow (rótulos de seção): 12–13px Inter 600, **caixa alta, tracking +0.14em, cor gold** — assinatura visual do site
- Corpo: 16–18px Inter, line-height 1.65
- Números de seção (01, 02, 03): Fraunces, grandes, dourado com opacidade baixa — recurso editorial

### 3.3 Linguagem visual (tendências aplicadas)

- **Minimalismo editorial:** muito espaço em branco, filetes finos (hairlines de 1px em navy 10% ou gold 25%), poucos elementos por viewport.
- **Seções escuras intercaladas** com claras (hero navy → serviços paper → sobre navy → contato paper): ritmo sem pesar.
- **Grão sutil** (noise overlay ~3% de opacidade) nas seções escuras: tira o aspecto de "template".
- **Fotografia real, não stock genérico:** retrato profissional do advogado + detalhes de arquitetura/texturas. Tratamento duotone navy nas fotos secundárias para unidade. *Sem foto de coluna grega, martelo ou balança.*
- **Grid de serviços em bento** (cards de tamanhos variados) ou lista numerada editorial — decidir no wireframe.
- **Layout sticky de duas colunas** na página "O Escritório" (coluna esquerda fixa, conteúdo rola à direita).

### 3.4 Motion (sóbrio, nunca decorativo em excesso)

- Revelação de seções no scroll: fade + translateY 16–24px, 500–700ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`, stagger de 60–80ms entre elementos.
- Hero: entrada escalonada ao carregar (eyebrow → headline → subtítulo → CTA).
- Hover em cards: elevação sutil (translateY -4px) + borda gold.
- Nav: transparente sobre o hero, vira sólido navy com blur ao rolar.
- **Obrigatório:** respeitar `prefers-reduced-motion` (desligar animações para quem pedir).
- Nada de parallax agressivo, nada de spinners decorativos: o tom é de firmeza, não de espetáculo.

---

## 4. Arquitetura de Informação

```
/                        → Home
/areas/previdenciario    → Página da área
/areas/trabalhista       → Página da área
/areas/empresarial       → Página da área
/escritorio              → Sobre o escritório / Frederico
/artigos                 → Blog (fase 2, opcional — SEO)
/artigos/[slug]
/contato                 → Contato + mapa + WhatsApp
/politica-de-privacidade → LGPD
```

**Por que páginas separadas por área (e não uma seção só):** cada área captura buscas próprias ("advogado previdenciário em [cidade]", "advogado trabalhista para empresa"). Uma página dedicada por área é o que ranqueia.

**Elementos globais:**
- Header: logo (wordmark) à esquerda, nav enxuta, CTA dourado "Conversar sobre meu caso".
- Footer escuro: contato, OAB, links, horário, mapa simplificado, política de privacidade.
- Botão de **WhatsApp** acessível (CTA primário — no Brasil, é onde o cliente de advocacia converte). Estilo discreto, não o balão verde gigante de landing page de infoproduto.

---

## 5. Estrutura de Conteúdo e Textos (drafts)

> Textos abaixo são **rascunhos de trabalho** para validar o tom — todos revisáveis com o cliente. Regra de ouro: específico > genérico; benefício > característica; zero juridiquês.

### 5.1 Home

**Hero (fundo navy, título serifado, filete gold):**
- Eyebrow: `FREDERICO CORREIA ADVOCACIA`
- Headline (opção recomendada, Caminho A):
  > **"Do outro lado da mesa, ninguém vai defender você. É exatamente para isso que existimos."**
- Alternativa mais contida:
  > **"Todo direito tem um caminho. Nosso trabalho é mostrar o seu."**
- Subtítulo:
  > *"Atuação em Direito Previdenciário, Trabalhista e Empresarial — com análise honesta do seu caso e linguagem que você entende."*
- CTA primário: **"Conversar sobre meu caso"** (→ WhatsApp)
- CTA secundário: **"Conhecer as áreas de atuação"** (âncora)

**Faixa de áreas (bento ou lista numerada 01–03):**
Cada card: número editorial + título + uma frase-gancho + link "Entender melhor →"

1. **Previdenciário** — *"Você contribuiu a vida inteira. A aposentadoria não pode virar uma surpresa ruim."*
2. **Trabalhista** — *"A relação de trabalho raramente é equilibrada. Nosso trabalho é equilibrar."*
3. **Empresarial** — *"Crescer já é difícil o suficiente sem surpresa jurídica."*

**Seção "Como trabalhamos" (3 passos, mata a objeção do medo de advogado):**
1. **Você conta o caso** — pelo WhatsApp ou formulário, sem compromisso e sem juridiquês.
2. **Analisamos e dizemos o que é possível** — com sinceridade: o que dá, o que não dá e quais são os riscos.
3. **Você decide com clareza** — e, se seguirmos juntos, cuidamos de cada etapa até o fim.

**Seção "O escritório" (resumo + foto, link para página completa):**
> Draft: *"[X] anos dedicados a causas previdenciárias, trabalhistas e empresariais. Um escritório que prefere explicar duas vezes a prometer uma."*
> *(preencher anos e dados reais com o cliente — jamais inventar)*

**Prova social (com cautela OAB):**
Depoimentos são permitidos desde que não prometam resultado. Formato sóbrio: 2–3 citações reais com nome abreviado e contexto ("Cliente de aposentadoria especial"). Sem estrelas, sem contadores, sem "nota 10".

**FAQ (4–6 perguntas, com schema FAQ para SEO):**
- "Quanto custa uma consulta?"
- "Meu caso tem garantia de ganho?" → resposta honesta (e que reforça posicionamento): *"Nenhum advogado sério pode garantir resultado — e quem promete deveria acender um alerta. O que garantimos é análise técnica honesta e atuação completa."*
- "Atendem online / em outras cidades?"
- "O que levar para a primeira conversa?"

**CTA final (faixa navy):**
> *"Seu caso merece uma resposta clara."* → botão WhatsApp.

### 5.2 Página: Previdenciário

- **Gancho:** *"O INSS nega mais do que deveria. A diferença entre perder e receber, muitas vezes, é um recurso bem feito."*
- **O que atendemos** (lista escaneável): aposentadorias (idade, tempo de contribuição, especial, rural), benefícios negados, BPC/LOAS, auxílio por incapacidade, pensão por morte, revisões, planejamento previdenciário.
- **Bloco de dor específica:** *"Recebeu uma carta de indeferimento? Não é o fim do processo — é o começo da parte que conhecemos bem."*
- **Serviços administrativos E judiciais** (muita gente não sabe que dá para recorrer sem processo).
- CTA: *"Quero uma análise do meu caso"* → WhatsApp com mensagem pré-preenchida (`wa.me/55XXXXXXXXXXX?text=Olá, gostaria de falar sobre um caso previdenciário`).

### 5.3 Página: Trabalhista

- **Gancho:** *"Na relação de trabalho, quase sempre um lado tem mais estrutura que o outro."*
- **Dois públicos, dois blocos claros:**
  - **Para trabalhadores:** verbas rescisórias, demissão sem justa causa, horas extras, assédio moral, vínculo empregatício não reconhecido, gestante.
  - **Para empresas:** defesa em reclamações trabalhistas, prevenção de passivo, orientação em demissões.
- Separar os dois públicos evita a pergunta "vocês atendem o meu lado?" — respondida visualmente de imediato.

### 5.4 Página: Empresarial

- **Gancho:** *"A maioria dos problemas jurídicos de uma empresa nasce silenciosa: um contrato malfeito, uma contratação apressada, uma sociedade sem acordo."*
- **Blocos:** abertura e estruturação de empresas, contratos, assessoria preventiva (mensal ou pontual), cobrança e recuperação de crédito, questões societárias.
- Tom mais contido e estratégico que as outras duas páginas (público B2B).
- CTA próprio: *"Agendar uma conversa"* (formulário/e-mail pode funcionar melhor que WhatsApp para este público — testar os dois).

### 5.5 Página: O Escritório

- Retrato profissional + história real do Frederico (formação, trajetória, por que essas três áreas).
- Bloco de princípios escritos com voz própria, não valores genéricos. Exemplo:
  - **Clareza antes de tudo** — *"Se você não entendeu, a culpa é nossa."*
  - **Honestidade sobre expectativa** — *"Dizemos o que é possível, não o que você quer ouvir."*
  - **Presença** — *"Processo parado é cliente sem resposta. Não deixamos nenhum dos dois acontecer."*
- Número de OAB visível (exigência e sinal de credibilidade).
- Fotos do espaço físico se houver.

### 5.6 Contato

- Formulário curto: nome, WhatsApp/e-mail, área (select), mensagem.
- Botão de WhatsApp em destaque, telefone, e-mail, endereço + Google Maps incorporado, horário de atendimento.
- Pós-envio: mensagem de confirmação com expectativa de retorno ("retornamos em até X horas úteis").

### 5.7 Microcopy importante

- Botões: "Conversar sobre meu caso" / "Enviar mensagem" — nunca "Enviar" ou "Submit" secos.
- 404: *"Esta página não existe — mas seu caso, sim. Fale com a gente."* + botão de contato.
- Formulário (LGPD): checkbox *"Autorizo o uso dos meus dados para responder a este contato, conforme a Política de Privacidade."*

---

## 6. Stack Técnica

### 6.1 Decisão principal

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Next.js 16 (App Router)** | SSG/ISR para performance e SEO, metadata API, API routes para o formulário, ecossistema maduro |
| Linguagem | **TypeScript** | Site institucional é projeto de vida longa; tipos evitam regressão |
| Estilo | **Tailwind CSS v4** | Design system via tokens direto no CSS, iteração visual rápida |
| Animação | **Motion (framer-motion)** | Reveals no scroll e micro-interações com controle fino |
| Conteúdo | **MDX em repositório** (para v1) | Sem custo de CMS; migração futura simples se precisar |
| Fontes | `next/font` (Inter + Fraunces auto-hospedadas) | Zero dependência externa |
| E-mail (form) | **Resend** (ou SMTP do próprio domínio) | Transacional simples e barato |
| Analytics | **Umami ou Plausible** (auto-hospedável, sem cookies) | LGPD-friendly; GA4 só se o cliente exigir, com banner de consentimento |
| Anti-spam | honeypot + **Cloudflare Turnstile** | Sem fricção de CAPTCHA tradicional |

**Alternativa válida:** Astro, se o objetivo for o site mais leve possível e o time preferir menos React. Para este escopo recomendo Next.js pela flexibilidade futura (blog, landing pages de campanha) e pela familiaridade do mercado.

### 6.2 Estrutura do projeto

```
frederico-correia-advocacia/
├─ app/
│  ├─ (site)/
│  │  ├─ page.tsx                    # Home
│  │  ├─ areas/previdenciario/page.tsx
│  │  ├─ areas/trabalhista/page.tsx
│  │  ├─ areas/empresarial/page.tsx
│  │  ├─ escritorio/page.tsx
│  │  └─ contato/page.tsx
│  ├─ artigos/[slug]/page.tsx         # fase 2
│  ├─ api/contact/route.ts            # endpoint do formulário
│  ├─ layout.tsx
│  ├─ not-found.tsx
│  └─ sitemap.ts / robots.ts
├─ components/
│  ├─ ui/          # Button, Card, Accordion, Input...
│  ├─ layout/      # Header, Footer, Container
│  └─ sections/    # Hero, AreasGrid, Steps, FAQ, CTA...
├─ content/
│  └─ faq.mdx, principios.mdx...     # textos versionados
├─ lib/            # tokens, helpers, SEO/schema
├─ public/         # imagens (AVIF/WebP), favicon, og-image
├─ styles/tokens.css
├─ docker-compose.yml
├─ Dockerfile
├─ Caddyfile
└─ package.json
```

### 6.3 Docker — todas as portas internas, só uma exposta

Conforme pedido: a aplicação não expõe porta nenhuma para o host; apenas o proxy reverso é publicado.

**Dockerfile** (multi-stage, output standalone do Next):

```dockerfile
# --- dependências ---
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- build ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- runtime ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

> Requer `output: 'standalone'` no `next.config.ts`.

**docker-compose.yml:**

```yaml
services:
  app:
    build: .
    container_name: fc-advocacia-app
    restart: unless-stopped
    expose:
      - "3000"            # interna na rede do compose — NÃO publicada no host
    environment:
      - NODE_ENV=production
      - RESEND_API_KEY=${RESEND_API_KEY}
      - WHATSAPP_NUMBER=${WHATSAPP_NUMBER}
    networks: [internal]

  proxy:
    image: caddy:2
    container_name: fc-advocacia-proxy
    restart: unless-stopped
    ports:
      - "443:443"         # única porta exposta (80 é só redireção p/ HTTPS)
      - "80:80"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config
    depends_on: [app]
    networks: [internal]

networks:
  internal:

volumes:
  caddy_data:
  caddy_config:
```

**Caddyfile** (HTTPS automático com certificado Let's Encrypt):

```
advfredericoferreira.com, www.advfredericoferreira.com {
    redir https://advfredericoferreira.com{uri} permanent  # se preferir sem www
    reverse_proxy app:3000
    encode gzip zstd
}
```

> Se quiser **literalmente uma única porta publicada**, remova a `80:80` e aceite que acessos via `http://` não serão redirecionados (não recomendado). O padrão de mercado é 80+443 no proxy, com tudo o mais interno.

### 6.4 SEO e dados estruturados

- Metadata API do Next: title/description únicos por página, OG images geradas (template navy + dourado com o nome da página).
- **JSON-LD `LegalService`** no layout global (nome, endereço, telefone, áreas, OAB) + `FAQPage` nas páginas com FAQ + `BreadcrumbList`.
- `sitemap.ts` e `robots.ts` gerados; submissão ao Google Search Console.
- URLs em português, curtas e sem acento (`/areas/previdenciario`).
- **SEO local (essencial para advocacia):** Google Business Profile verificado com categoria, fotos e link para o site; endereço consistente em todas as páginas; avaliar página dedicada à cidade se houver atuação local forte.

### 6.5 Performance e qualidade — metas

| Métrica | Meta |
|---|---|
| Lighthouse (mobile) | ≥ 95 em todas as categorias |
| LCP | < 2,0s |
| CLS | < 0,1 |
| JS inicial | mínimo (páginas SSG, sem hidratação pesada) |

- Imagens via `next/image`, AVIF/WebP, com dimensões definidas (zero layout shift).
- Checklist de acessibilidade WCAG 2.1 AA: contraste, foco visível, navegação por teclado no menu e accordion, alt em todas as imagens, labels nos campos do formulário.

### 6.6 Conformidade (dois pontos inegociáveis)

**OAB — Provimento 205/2021 (publicidade na advocacia):**
- Permitida publicidade sóbria e informativa; proibida mercantilização, promessa de resultado, menção a "causa ganha", ostentação e comparações.
- Depoimentos: permitidos, mas sem sugerir garantia de sucesso. Recomendado validar os textos finais com o advogado responsável.
- Número de OAB sempre visível no footer.

**LGPD:**
- Página de Política de Privacidade.
- Formulário coleta apenas o necessário, com base legal de consentimento (checkbox) e finalidade declarada (responder ao contato).
- Analytics sem cookies (Umami/Plausible) dispensa banner agressivo; se usar GA4, incluir gestão de consentimento.

---

## 7. Fases e Cronograma Estimado

| Fase | Entregas | Duração |
|---|---|---|
| **1. Descoberta** | Validar nome/domínio, caminho criativo (A/B/C), coletar dados reais (bio, OAB, fotos, WhatsApp, endereço, depoimentos) | 3–5 dias |
| **2. Design** | Design system (tokens, tipografia, componentes), wireframes, layout final desktop + mobile das 6 páginas principais | 1–1,5 semana |
| **3. Desenvolvimento** | Setup do projeto, páginas, animações, formulário, SEO, Docker | 1,5–2 semanas |
| **4. Conteúdo e revisão** | Textos finais revisados com o cliente, fotos tratadas, validação OAB | 3–5 dias (paralelo ao fim da fase 3) |
| **5. QA e lançamento** | Testes (mobile, performance, a11y, formulário), DNS + deploy, Search Console, Google Business | 3–4 dias |

**Total estimado: 4 a 6 semanas.**

---

## 8. Checklist — o que precisamos do cliente

- [ ] Definição sobre o nome × domínio (Correia ou Ferreira)
- [ ] Número de OAB e nome completo de registro
- [ ] Cidade/endereço de atendimento e se atende online/outras cidades
- [ ] Número de WhatsApp (com DDD) e e-mail de contato
- [ ] Bio: formação, tempo de atuação, trajetória, por que as três áreas
- [ ] Fotos profissionais (retrato; idealmente do espaço físico) — ou orçamento para ensaio
- [ ] 2–3 depoimentos reais de clientes (com autorização)
- [ ] Logo atual (se existir) ou decisão de criar wordmark novo
- [ ] Onde o site será hospedado (VPS própria? Cloud?)
- [ ] Acesso ao registrador do domínio

---

## 9. Decisões em aberto

1. Caminho criativo (A, B ou C) — seção 2.
2. Fraunces aprovada na prova visual ou alternativa (Instrument Serif / Newsreader).
3. Grid de áreas: bento cards vs. lista numerada editorial.
4. Blog na fase 1 ou fase 2 (recomendado fase 2, após o lançamento).
5. Hospedagem definitiva (VPS com Docker, ou plataforma gerenciada — o compose roda em qualquer VPS).
