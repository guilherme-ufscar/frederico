"use client";

import { useState } from "react";
import { whatsappLink, site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-sm border border-navy-800/20 bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/50 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          nome: data.get("nome"),
          whatsapp: data.get("whatsapp"),
          area: data.get("area"),
          mensagem: data.get("mensagem"),
          consentimento: data.get("consentimento") === "on",
          // honeypot — bots preenchem, humanos não veem
          website: data.get("website") || "",
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Falha no envio");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gold-500/30 bg-gold-200/20 p-8 text-center">
        <p className="font-display text-2xl font-medium text-navy-900">
          Mensagem enviada.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Retornamos em até 1 dia útil. Se for urgente, fale agora pelo{" "}
          <a
            href={whatsappLink("Olá! Enviei uma mensagem pelo site e gostaria de adiantar meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-600 underline underline-offset-2"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-navy-900">
            Nome
          </label>
          <input id="nome" name="nome" required autoComplete="name" className={inputCls} placeholder="Seu nome completo" />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-navy-900">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            className={inputCls}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-navy-900">
          Área do caso
        </label>
        <select id="area" name="area" required className={inputCls} defaultValue="">
          <option value="" disabled>
            Selecione a área
          </option>
          <option>Direito Previdenciário</option>
          <option>Direito Trabalhista</option>
          <option>Direito Empresarial</option>
          <option>Outro / Não sei</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-navy-900">
          Conte seu caso
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          className={inputCls}
          placeholder="Explique com suas palavras. Sem juridiquês — a gente entende."
        />
      </div>

      {/* Honeypot escondido */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Não preencha</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          name="consentimento"
          required
          className="mt-0.5 h-4 w-4 accent-[#a98a52]"
        />
        <span>
          Autorizo o uso dos meus dados para responder a este contato, conforme a{" "}
          <a href="/politica-de-privacidade" className="text-gold-600 underline underline-offset-2">
            Política de Privacidade
          </a>
          . (LGPD)
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-navy-800 px-7 py-4 text-[0.95rem] font-semibold text-paper transition-all duration-300 hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Não conseguimos enviar sua mensagem. Tente novamente ou fale direto
          pelo WhatsApp: {site.whatsappDisplay}.
        </p>
      )}
    </form>
  );
}
