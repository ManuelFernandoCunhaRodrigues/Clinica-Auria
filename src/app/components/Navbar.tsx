"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  ["Serviços",      "#servicos"],
  ["Sobre",         "#sobre"],
  ["Equipe",        "#equipe"],
  ["Localização",   "#localizacao"],
  ["FAQ",           "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: "#f0ebe3", borderColor: "#ddd5c8" }}>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-4 flex items-center justify-between max-w-[1400px] mx-auto">

        {/* Logo */}
        <div className="w-10 h-10 relative overflow-hidden rounded-lg shrink-0">
          <Image src="/logo.png" alt="Clínica Auria" fill className="object-cover object-left" priority />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-[13.5px]" style={{ color: "#3d5550" }}>
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:opacity-70 transition-opacity">{l}</a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/55119999999999"
          target="_blank" rel="noopener noreferrer"
          className="hidden md:block font-sans text-[13px] font-semibold text-white px-5 py-2.5 rounded-lg transition-opacity hover:opacity-85"
          style={{ background: "#2d4f47" }}
        >
          Agendar Avaliação
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#2d4f47" }}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
              : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-5 flex flex-col gap-1"
          style={{ background: "#f0ebe3", borderColor: "#ddd5c8" }}
        >
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="font-sans text-[15px] font-medium py-3 border-b"
              style={{ color: "#3d5550", borderColor: "#e8e0d5" }}
            >
              {l}
            </a>
          ))}
          <a
            href="https://wa.me/55119999999999"
            target="_blank" rel="noopener noreferrer"
            className="mt-4 text-center font-sans text-[14px] font-semibold text-white px-5 py-3.5 rounded-lg"
            style={{ background: "#2d4f47" }}
          >
            Agendar Avaliação
          </a>
        </div>
      )}
    </header>
  );
}
