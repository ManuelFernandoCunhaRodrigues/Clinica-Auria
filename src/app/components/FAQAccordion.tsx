"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Qual é o primeiro passo para começar o tratamento?",
    a: "O primeiro passo é agendar uma consulta de avaliação. Nela, o dentista realiza um diagnóstico completo e explica com clareza as opções disponíveis para o seu caso, sem pressa e sem pressão.",
  },
  {
    q: "Vocês atendem por plano odontológico?",
    a: "Atualmente trabalhamos com atendimento particular. Entre em contato pelo WhatsApp para saber mais sobre as formas de pagamento e parcelamento disponíveis.",
  },
  {
    q: "Como funciona o clareamento dental na Clínica Auria?",
    a: "Realizamos uma avaliação prévia para verificar a indicação e definir o protocolo mais adequado. O procedimento é supervisionado, seguro e adaptado à sensibilidade de cada paciente.",
  },
  {
    q: "Quanto tempo leva um tratamento de ortodontia?",
    a: "O tempo varia conforme cada caso. Na consulta inicial apresentamos um plano com estimativa de duração, metas e etapas claras para que você acompanhe cada fase do tratamento.",
  },
  {
    q: "Como posso agendar minha avaliação?",
    a: "Você pode agendar diretamente pelo WhatsApp. Nossa equipe responde rapidamente e encontra o melhor horário para você.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-[#E8E4DC]">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left group"
          >
            <span className="font-sans text-[13.5px] font-semibold text-[#26302E] group-hover:text-[#5F7C74] transition-colors">
              {faq.q}
            </span>
            <svg
              className={`w-4 h-4 shrink-0 text-[#5F7C74] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {open === i && (
            <p className="mt-3 text-[13px] text-[#4A5550] leading-[1.75] pr-8 font-sans">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
