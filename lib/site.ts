// ─────────────────────────────────────────────────────────────
// DADOS CENTRAIS DO SITE
// Atualizado: endereço Rio Grande confirmado pelo cliente (2026-09)
// Foto em atualização — nova imagem será enviada.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Frederico Ferreira Advocacia",
  shortName: "Frederico Ferreira",
  domain: "advfredericoferreira.com",
  tagline: "Advocacia de tese firme, linguagem clara e nenhuma promessa vazia.",
  // WhatsApp oficial do escritório (55 + DDD 53 + número)
  whatsapp: "5553991439881",
  whatsappDisplay: "(53) 99143-9881",
  email: "contato@advfredericoferreira.com",
  phone: "(53) 99143-9881",
  address: {
    street: "Rua Canabarro, 470A — Centro",
    city: "Rio Grande/RS",
    cep: "96200-000",
  },
  hours: "Segunda a sexta, das 9h às 18h",
  // OAB confirmada no logotipo oficial: OAB/RS 140.886
  oab: "OAB/RS 140.886",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
  domainNote: "Nome confirmado: Frederico Ferreira (logotipo + domínio).",
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
    gancho: "O INSS negou seu benefício? A negativa não significa que você não tenha direito.",
    intro:
      "Atuamos desde a análise inicial do caso até a conclusão do pedido administrativo ou processo judicial, acompanhando cada etapa do benefício.",
    publicos: [
      {
        titulo: "Áreas de atuação",
        descricao: "",
        itens: ["BPC/LOAS", "APOSENTADORIAS", "AUXÍLIO-ACIDENTE", "PENSÃO POR MORTE", "BENEFÍCIO POR INCAPACIDADE"],
      },
      {
        titulo: "Cuidamos de cada etapa do seu benefício previdenciário",
        descricao:
          "Analisamos documentos, histórico de contribuições e benefícios, CNIS, laudos, exames médicos e decisões do INSS para avaliar o seu direito e, em caso de negativa, buscar a solução pela via judicial.",
        itens: [],
      },
    ],
    dor: {
      titulo: "A negativa não significa ausência de direito.",
      texto:
        "Analisamos documentos, CNIS, laudos e decisões do INSS para indicar a via adequada — administrativa ou judicial — e acompanhamos cada etapa até a decisão.",
    },
    faq: [
      {
        pergunta: "O BPC/LOAS exige contribuição ao INSS?",
        resposta:
          "Não. O BPC é um benefício assistencial e não exige contribuições ao INSS. É necessário, porém, preencher os requisitos de idade ou deficiência e renda.",
      },
      {
        pergunta: "Duas pessoas da mesma família podem receber BPC/LOAS?",
        resposta:
          "Sim, desde que cada uma preencha os requisitos para o benefício. O BPC ou benefício previdenciário de até um salário mínimo recebido por pessoa idosa com 65 anos ou mais ou por pessoa com deficiência da mesma família não é considerado no cálculo da renda para a concessão de outro BPC.",
      },
      {
        pergunta: "Voltei a trabalhar depois do acidente. Ainda posso receber auxílio-acidente?",
        resposta:
          "Sim. O auxílio-acidente tem natureza indenizatória e pode ser recebido mesmo que a pessoa continue trabalhando, desde que preenchidos os requisitos para o benefício.",
      },
      {
        pergunta: "Vivia em união estável. Tenho direito à pensão por morte?",
        resposta:
          "Sim, pode ter. O companheiro ou companheira pode ter direito à pensão por morte mediante a comprovação da união estável e dos demais requisitos legais.",
      },
      {
        pergunta: "Meu benefício por incapacidade foi cessado e não consegui pedir prorrogação. O que posso fazer?",
        resposta:
          "O pedido de prorrogação deve ser feito nos últimos 15 dias antes do encerramento do benefício. Se o prazo passou e a incapacidade permanece, é possível analisar a medida adequada para buscar o restabelecimento do benefício, inclusive pela via judicial.",
      },
      {
        pergunta: "Meu pedido está parado no INSS há muito tempo. O que posso fazer?",
        resposta:
          "Quando o INSS demora além do prazo aplicável para analisar o requerimento, pode ser cabível mandado de segurança para exigir que o pedido seja analisado e decidido. O segurado não precisa aguardar indefinidamente por uma resposta.",
      },
    ],
    cta: "Direito Previdenciário é a nossa especialidade. Conte seu caso",
  },
  {
    slug: "trabalhista",
    numero: "02",
    titulo: "Direito Trabalhista",
    gancho: "Rescisão sem acerto, vínculo não assinado, acidente sem CAT, gestante dispensada — a gente olha o que realmente aconteceu.",
    intro:
      "No dia a dia chegam casos de rescisão indireta, verbas não pagas, acidentes e doenças do trabalho, dispensas de gestantes, vínculos não reconhecidos e adicionais de insalubridade/periculosidade. Analisamos com linguagem clara o que dá para reivindicar — e o que não dá.",
    publicos: [
      {
        titulo: "O que mais chega no escritório",
        descricao: "Situações do cotidiano que atendemos com orientação direta e técnica.",
        itens: [
          "Rescisão indireta e dispensa sem justa causa",
          "Verbas rescisórias não pagas (saldo, 13º, férias, FGTS + multa)",
          "Vínculo empregatício não reconhecido e pejotização",
          "Acidente de trabalho e doença ocupacional (com ou sem CAT)",
          "Estabilidade da gestante, licença e dispensa discriminatória",
          "Adicional de insalubridade, periculosidade e horas extras",
          "Assédio moral e reversão de justa causa",
        ],
      },
      {
        titulo: "Como avaliamos o seu caso",
        descricao: "Da carteira ao contracheque, do exame médico ao laudo: prova e conta certas.",
        itens: [
          "Análise de contrato, holerites, TRCT e extratos de FGTS",
          "Provas de jornada, sobreaviso e adicionais",
          "Documentos médicos, CAT e nexo com o trabalho",
          "Cálculo de verbas, adicionais e eventuais indenizações",
          "Definição da via — acordo, reclamação ou defesa preventiva (para empresas)",
        ],
      },
    ],
    dor: {
      titulo: "Veio a dispensa e ficou a dúvida?",
      texto:
        "Se houve pedido de demissão forçado, acidente sem CAT, gestante dispensada, vínculo sem carteira ou adicional não pago, o primeiro passo é entender o que prova e o que a lei garante. É exatamente o que fazemos na primeira conversa — sem promessa vazia.",
    },
    faq: [
      {
        pergunta: "O que é rescisão indireta e quando ela acontece?",
        resposta:
          "É quando o empregador descumpre obrigações graves — atraso reiterado de salário, não recolher FGTS, exigir atividade diversa do contratado ou expor a risco. Com provas, o trabalhador pode pedir o reconhecimento em juízo e receber as verbas como se fosse dispensa sem justa causa.",
      },
      {
        pergunta: "Sofri acidente ou doença do trabalho. E se a empresa não abriu CAT?",
        resposta:
          "A CAT pode ser aberta pelo trabalhador, sindicato ou médico, e não depende só da empresa. Laudos, exames, comprovantes de afastamento e testemunhas ajudam a provar o nexo. Avaliamos o conjunto para orientar sobre benefício e eventual indenização.",
      },
      {
        pergunta: "Gestante pode ser dispensada?",
        resposta:
          "Como regra, há estabilidade desde a confirmação da gravidez até 5 meses após o parto. Dispensa nesse período, salvo justa causa comprovada, pode gerar reintegração ou indenização. Cada caso exige análise de datas e documentos.",
      },
      {
        pergunta: "Trabalhei sem carteira. Tenho direito?",
        resposta:
          "Sim, se houver elementos de vínculo — subordinação, habitualidade, horário e pessoalidade. Prints, escalas, comprovantes de pagamento e testemunhas são provas comuns. Regularizar garante verbas, FGTS e contagem para o INSS.",
      },
    ],
    cta: "Conversar sobre meu caso",
  },
  {
    slug: "empresarial",
    numero: "03",
    titulo: "Direito Empresarial",
    gancho: "Você cuida do seu negócio como se ele fosse crescer para sempre. Mas o protege como se não fosse durar nada.",
    intro:
      "A maioria dos problemas jurídicos da empresa nasce silenciosa: um contrato copiado da internet, um sócio que entrou sem regras, uma saída sem critério de quotas ou uma remuneração sem definição. Nosso papel é dar estrutura antes que o conflito apareça.",
    publicos: [
      {
        titulo: "Contratos que protegem",
        descricao: "Do cliente ao fornecedor, o contrato certo evita litígio e trava prejuízo.",
        itens: [
          "Elaboração e revisão de contratos comerciais, de prestação de serviços e fornecimento",
          "Termos de parceria, distribuição, confidencialidade e não-concorrência",
          "Contratos com prestadores e regras de terceirização",
        ],
      },
      {
        titulo: "Societário e prevenção de conflitos",
        descricao: "Entrada, permanência e saída de sócios com regras claras — no papel, não só na conversa.",
        itens: [
          "Acordo de sócios: quotas, voto, gestão, retirada, falecimento e sucessão",
          "Compra e venda de quotas, alteração contratual e reorganização societária",
          "Regras de entrada e saída de sócios, apuração de haveres e não-concorrência",
          "Prevenção e mediação de conflitos societários",
          "Estruturação jurídica para crescimento com segurança",
        ],
      },
    ],
    dor: {
      titulo: "O contrato ‘padrão da internet’ não protege ninguém.",
      texto:
        "Ele não prevê quem decide, quem paga e quem fica quando o sócio sai. Quando o conflito chega, o custo é sempre maior que o da prevenção. Formalizar bem, com acordo de sócios e contratos sob medida, é mais barato — e mais previsível — que brigar depois.",
    },
    faq: [
      {
        pergunta: "Minha empresa é pequena. Preciso de acordo de sócios e contratos sob medida?",
        resposta:
          "Justamente as pequenas sofrem mais: um sócio que sai sem regra, um contrato mal feito ou uma venda de quotas sem critério trava caixa e operação por meses. Estruturar cedo, com documentos enxutos, costuma custar menos que uma única ação.",
      },
      {
        pergunta: "Como funciona a entrada e saída de sócios e a compra e venda de quotas?",
        resposta:
          "Definimos em acordo e alteração contratual: preço e forma de pagamento, apuração de haveres, prazos, garantias e cláusulas de não-concorrência. Tudo registrado na Junta Comercial, com segurança para quem entra, quem sai e quem permanece.",
      },
      {
        pergunta: "Vocês fazem assessoria contínua ou só demandas pontuais?",
        resposta:
          "Os dois. Assessoria mensal com canal direto para consultas e revisões, ou atuação pontual em contrato, acordo de sócios ou reorganização. Escopo e custo são definidos antes — sem surpresa no fim do mês.",
      },
    ],
    cta: "Estruturar minha empresa com segurança",
  },
];
