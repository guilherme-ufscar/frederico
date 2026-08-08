import type { NextRequest } from "next/server";

type Body = {
  nome?: string;
  whatsapp?: string;
  area?: string;
  mensagem?: string;
  consentimento?: boolean;
  website?: string;
};

/**
 * Endpoint do formulário de contato.
 *
 * V1: valida e loga a mensagem (o envio de e-mail entra quando o cliente
 * fornecer SMTP/Resend). Sempre responde 200 — nunca vaza para o usuário
 * se o envio real está configurado (anti-spam básico).
 */
export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Honeypot: bots preenchem o campo escondido.
  if (body.website) {
    return Response.json({ ok: true });
  }

  const nome = body.nome?.trim() ?? "";
  const whatsapp = body.whatsapp?.trim() ?? "";
  const area = body.area?.trim() ?? "";
  const mensagem = body.mensagem?.trim() ?? "";

  if (!nome || !whatsapp || !mensagem || body.consentimento !== true) {
    return Response.json({ ok: false, error: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  // TODO: integrar Resend/SMTP com RESEND_API_KEY quando o cliente fornecer.
  // await sendEmail({ nome, whatsapp, area, mensagem });
  console.info("[contact]", JSON.stringify({ nome, whatsapp, area, mensagem, at: new Date().toISOString() }));

  return Response.json({ ok: true });
}
