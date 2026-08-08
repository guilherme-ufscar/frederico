// ─────────────────────────────────────────────────────────────
// DADOS CENTRAIS DO SITE
// TODO(descoberta): substituir placeholders pelos dados reais.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Federico Ferreira Advocacia",
  shortName: "Federico Ferreira",
  domain: "advfredericoferreira.com",
  tagline: "Advocacia de tese firme, linguagem clara e nenhuma promessa vazia.",
  // WhatsApp oficial do escritório (55 + DDD 53 + número)
  whatsapp: "5553991439881",
  whatsappDisplay: "(53) 99143-9881",
  // TODO: e-mail real do escritório
  email: "contato@advfredericoferreira.com",
  phone: "(53) 99143-9881",
  // TODO: endereço real
  address: {
    street: "Av. Exemplo, 1234 — Sala 56",
    city: "São Paulo/SP",
    cep: "00000-000",
  },
  hours: "Segunda a sexta, das 9h às 18h",
  // OAB confirmada no logotipo oficial: OAB/RS 140.886
  oab: "OAB/RS 140.886",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
  // Nome de registro confirmado pelo logotipo do cliente: FEDERICO FERREIRA
  domainNote: "Nome confirmado: Federico Ferreira (logotipo + domínio).",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Area = {
  slug: string;
  numero: string;
  titulo: string;
  gancho: string;
  intro: string;
  publicos: { titulo: string; descricao: string; itens: string[] }[];
  dor: { titulo: string; texto: string };
  faq: { pergunta: string; resposta: string }[];
  cta: string;
};

export const areas: Area[] = [
  {
    slug: "previdenciario",
    numero: "01",
    titulo: "Direito Previdenciário",
    gancho: "Você contribuiu a vida inteira. A aposentadoria não pode virar uma surpresa ruim.",
    intro:
      "O INSS nega mais do que deveria. A diferença entre perder e receber, muitas vezes, é um recurso bem feito — e é aí que entramos.",
    publicos: [
      {
        titulo: "O que atendemos",
        descricao: "Da análise do histórico ao recurso, cuidamos de cada etapa do seu benefício.",
        itens: [
          "Aposentadoria por idade e por tempo de contribuição",
          "Aposentadoria especial e rural",
          "Benefícios negados pelo INSS (recurso administrativo e judicial)",
          "BPC/LOAS — Benefício de Prestação Continuada",
          "Auxílio por incapacidade (auxílio-doença)",
          "Pensão por morte",
          "Revisões e planejamento previdenciário",
        ],
      },
      {
        titulo: "Administrativo e judicial",
        descricao: "Muita gente não sabe: dá para recorrer sem processo. Mas quando o processo é necessário, ele é feito com técnica.",
        itens: [
          "Recursos contra indeferimento do INSS",
          "Ações judiciais previdenciárias",
          "Cálculos e revisões de benefício",
          "Acompanhamento completo até a concessão",
        ],
      },
    ],
    dor: {
      titulo: "Recebeu uma carta de indeferimento?",
      texto:
        "Não é o fim do processo — é o começo da parte que conhecemos bem. Uma negativa do INSS raramente é a palavra final: na maioria dos casos, há caminho administrativo ou judicial para reverter.",
    },
    faq: [
      {
        pergunta: "Quanto tempo demora um processo previdenciário?",
        resposta:
          "Depende do caso: revisões administrativas podem sair em meses; ações judiciais variam conforme a Vara e a necessidade de perícia. Na primeira conversa, damos uma estimativa realista para o seu caso específico — sem promessa de prazo mágico.",
      },
      {
        pergunta: "Posso recorrer sozinho do indeferimento do INSS?",
        resposta:
          "Tecnicamente, sim. Mas o recurso exige provas, fundamentação correta e prazos que não perdoam. Um recurso mal feito pode atrasar seu benefício em anos. Vale a pena uma análise técnica antes de decidir.",
      },
      {
        pergunta: "O que devo levar para a primeira conversa?",
        resposta:
          "Documentos pessoais, CNIS (extrato previdenciário do Meu INSS), carteiras de trabalho e qualquer carta de indeferimento. Se não tiver tudo, não se preocupe: orientamos o que buscar.",
      },
    ],
    cta: "Quero uma análise do meu caso",
  },
  {
    slug: "trabalhista",
    numero: "02",
    titulo: "Direito Trabalhista",
    gancho: "A relação de trabalho raramente é equilibrada. Nosso trabalho é equilibrar.",
    intro:
      "Na relação de trabalho, quase sempre um lado tem mais estrutura que o outro. Representamos trabalhadores e empresas com o mesmo rigor técnico — e a mesma honestidade sobre o que é possível.",
    publicos: [
      {
        titulo: "Para trabalhadores",
        descricao: "Seus direitos não prescrevem por medo. Conheça o que a lei garante — e o que dá para reivindicar.",
        itens: [
          "Verbas rescisórias e demissão sem justa causa",
          "Horas extras e adicionais não pagos",
          "Assédio moral no ambiente de trabalho",
          "Vínculo empregatício não reconhecido",
          "Estabilidade da gestante e acidente de trabalho",
          "Reversão de justa causa",
        ],
      },
      {
        titulo: "Para empresas",
        descricao: "Prevenir passivo trabalhista custa menos — e é mais previsível — do que defendê-lo depois.",
        itens: [
          "Defesa em reclamações trabalhistas",
          "Auditoria preventiva de passivo trabalhista",
          "Orientação em demissões e acordos",
          "Elaboração de políticas internas",
          "Terceirização e contratos com prestadores",
        ],
      },
    ],
    dor: {
      titulo: "Demissão veio errada? Contrato não respeitado?",
      texto:
        "Verbas não pagas, jornada não registrada, assédio silenciado: situações que se arrastam por anos porque ninguém explicou o que dá para fazer. É exatamente o que fazemos na primeira conversa.",
    },
    faq: [
      {
        pergunta: "Perdi o prazo para reclamar?",
        resposta:
          "A regra geral é de até 2 anos após o fim do contrato, com direitos contados até 5 anos para trás. Mas cada caso é um caso — e alguns direitos têm regras próprias. Uma análise rápida resolve essa dúvida.",
      },
      {
        pergunta: "Preciso de advogado para processar a empresa?",
        resposta:
          "Sim — na Justiça do Trabalho, a parte precisa estar representada por advogado (salvo exceções do rito sumaríssimo e do jus postulandi). E em casos de litígio com estrutura, a técnica faz toda a diferença.",
      },
      {
        pergunta: "A empresa pode me processar se eu cobrar meus direitos?",
        resposta:
          "Reivindicar direitos trabalhistas é exercício legal — e a lei proíbe retaliação e dispensa discriminatória. Se isso acontecer, é um direito adicional que também se defende.",
      },
    ],
    cta: "Conversar sobre meu caso",
  },
  {
    slug: "empresarial",
    numero: "03",
    titulo: "Direito Empresarial",
    gancho: "Crescer já é difícil o suficiente sem surpresa jurídica.",
    intro:
      "A maioria dos problemas jurídicos de uma empresa nasce silenciosa: um contrato malfeito, uma contratação apressada, uma sociedade sem acordo. Nosso papel é resolver o jurídico antes que ele vire problema.",
    publicos: [
      {
        titulo: "Estruturação e contratos",
        descricao: "A base jurídica certa para a empresa crescer sem tropeçar.",
        itens: [
          "Abertura e estruturação de empresas",
          "Elaboração e revisão de contratos",
          "Acordos de sócios e holding",
          "Contratos de prestação de serviços e fornecedores",
        ],
      },
      {
        titulo: "Prevenção e soluções",
        descricao: "Assessoria contínua e atuação firme quando o problema já existe.",
        itens: [
          "Assessoria preventiva mensal ou pontual",
          "Cobrança e recuperação de crédito",
          "Questões societárias e sucessórias",
          "Conflitos entre sócios",
        ],
      },
    ],
    dor: {
      titulo: "Aquele contrato 'padrão da internet'?",
      texto:
        "Ele não protege ninguém — nem você, nem a outra parte. A maior parte dos litígios empresariais nasce de um documento que ninguém leu antes de assinar. Isso é prevenível.",
    },
    faq: [
      {
        pergunta: "Minha empresa é pequena. Preciso de assessoria jurídica?",
        resposta:
          "Pequenas empresas são as que mais sofrem com passivo jurídico — justamente por não terem prevenção. Uma assessoria enxuta costuma custar menos do que uma única ação trabalhista ou um contrato mal feito.",
      },
      {
        pergunta: "Vocês atendem empresas de qualquer porte?",
        resposta:
          "Sim. O modelo muda (assessoria contínua ou demandas pontuais), mas o rigor técnico é o mesmo para uma empresa de um ou de cem funcionários.",
      },
      {
        pergunta: "Como funciona a assessoria mensal?",
        resposta:
          "Você tem um canal direto com o escritório para consultas, revisão de contratos e orientações — com escopo claro e previsibilidade de custo. Sem surpresa no fim do mês.",
      },
    ],
    cta: "Agendar uma conversa",
  },
];
