import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQAccordion from "./components/FAQAccordion";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconWhatsApp() {
  return (
    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconSmile() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  { title: "Avaliação Odontológica",  desc: "Diagnóstico completo e planejamento personalizado" },
  { title: "Limpeza e Prevenção",     desc: "Manutenção da saúde bucal com técnicas modernas" },
  { title: "Clareamento Dental",      desc: "Sorriso mais branco e radiante com segurança" },
  { title: "Restaurações",            desc: "Restauro de dentes com materiais de qualidade premium" },
  { title: "Próteses",                desc: "Soluções completas para reposição de dentes" },
  { title: "Ortodontia",              desc: "Alinhamento perfeito com aparelhos modernos" },
  { title: "Implantes",               desc: "Implantes osseointegrados com alta durabilidade" },
  { title: "Endodontia",              desc: "Tratamento de canal com precisão e conforto" },
];

const stats = [
  { value: "500+", label: "Pacientes Satisfeitos" },
  { value: "15+",  label: "Anos de Experiência" },
  { value: "98%",  label: "Satisfação dos Pacientes" },
  { value: "10+",  label: "Profissionais Qualificados" },
];

const whyChoose = [
  { icon: <IconHeart />,  title: "Atendimento Humanizado",      desc: "Cuidado genuíno com cada paciente" },
  { icon: <IconAward />,  title: "Planejamento Individual",     desc: "Tratamento customizado para suas necessidades" },
  { icon: <IconZap />,    title: "Tecnologia e Precisão",       desc: "Equipamentos modernos e técnicas avançadas" },
  { icon: <IconShield />, title: "Conforto e Segurança",        desc: "Ambiente acolhedor e protocolos rigorosos" },
  { icon: <IconSmile />,  title: "Ambiente Acolhedor",          desc: "Espaço sofisticado e tranquilo" },
  { icon: <IconUsers />,  title: "Acompanhamento com Clareza",  desc: "Comunicação transparente em cada etapa" },
];

const teamMembers = [
  {
    src:  "/dentista-clinico.jpg",
    name: "Dr. Especialista",
    role: "Dentista Clínico",
    desc: "Especializado em tratamentos gerais com foco em conforto do paciente",
  },
  {
    src:  "/especialista-em-estetica.jpg",
    name: "Dra. Esteta",
    role: "Especialista em Estética",
    desc: "Referência em procedimentos estéticos e harmonização do sorriso",
  },
  {
    src:  "/ortodontista.jpg",
    name: "Dra. Ortodontista",
    role: "Ortodontista",
    desc: "Especializada em alinhamento dental com tecnologia avançada",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col w-full" style={{ background: "#f0ebe3" }}>

      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <h1
              className="font-display font-bold leading-[1.08]"
              style={{ fontSize: "clamp(1.9rem, 5vw, 3.4rem)", color: "#1a2e2a" }}
            >
              Cuidado com o seu sorriso, do primeiro contato até o resultado final.
            </h1>
            <p className="font-sans text-[14px] sm:text-[14.5px] leading-[1.8]" style={{ color: "#4a6560" }}>
              Na Clínica Auria, cada tratamento é planejado com atenção, tecnologia e cuidado humano. Você entende cada etapa, sente segurança no processo e chega ao resultado com tranquilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <a
                href="https://wa.me/55119999999999"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white font-sans text-[13.5px] font-semibold px-6 py-3.5 rounded-lg transition-opacity hover:opacity-85 w-full sm:w-auto"
                style={{ background: "#2d4f47" }}
              >
                <IconWhatsApp />
                Agendar Avaliação pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center font-sans text-[13.5px] font-semibold px-6 py-3.5 rounded-lg border transition-colors hover:opacity-80 w-full sm:w-auto"
                style={{ color: "#2d4f47", borderColor: "#2d4f47" }}
              >
                Conhecer Serviços
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-lg"
            style={{ height: "clamp(260px, 45vw, 520px)" }}
          >
            <Image
              src="/img-backgron.png"
              alt="Clínica Auria Odontologia"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══════════════ SERVIÇOS ══════════════ */}
      <section id="servicos" className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: "rgba(255,255,255,0.55)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">

          <div className="text-center flex flex-col gap-3 max-w-[600px] px-2">
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1a2e2a" }}>
              Nossos Serviços
            </h2>
            <p className="font-sans text-[14px] leading-[1.7]" style={{ color: "#4a6560" }}>
              Oferecemos uma gama completa de tratamentos odontológicos com excelência e cuidado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-2xl border"
                style={{ background: "#ffffff", borderColor: "#e4ddd2" }}
              >
                <h3 className="font-sans font-bold text-[14px] mb-2" style={{ color: "#1a2e2a" }}>{s.title}</h3>
                <p className="font-sans text-[13px] leading-[1.65]" style={{ color: "#5a8478" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SOBRE ══════════════ */}
      <section id="sobre" className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: "#f0ebe3" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Image */}
          <div
            className="w-full lg:flex-1 relative rounded-2xl overflow-hidden shadow-lg"
            style={{ height: "clamp(240px, 40vw, 440px)" }}
          >
            <Image
              src="/clinica-interior.webp"
              alt="Clínica Auria Odontologia"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:flex-1 flex flex-col gap-5">
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1a2e2a" }}
            >
              Clínica Auria Odontologia
            </h2>
            <div className="flex flex-col gap-4 font-sans text-[14px] leading-[1.85]" style={{ color: "#4a6560" }}>
              <p>
                Somos uma clínica odontológica moderna e acolhedora, dedicada a transformar sorrisos com excelência e humanidade. Nosso ambiente sofisticado e nossa equipe altamente qualificada garantem um atendimento de primeira classe.
              </p>
              <p>
                Cada paciente é único, e nós nos comprometemos a entender suas necessidades e desejos, oferecendo soluções personalizadas que combinam tecnologia avançada com cuidado genuíno.
              </p>
            </div>
            <a
              href="https://wa.me/55119999999999"
              target="_blank" rel="noopener noreferrer"
              className="self-start text-white font-sans text-[13.5px] font-semibold px-6 py-3.5 rounded-lg transition-opacity hover:opacity-85"
              style={{ background: "#2d4f47" }}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 md:py-16" style={{ background: "#4a7a6b" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display font-bold leading-none" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                {s.value}
              </span>
              <span className="font-sans text-[12px] md:text-[13px] mt-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ POR QUE ESCOLHER ══════════════ */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: "#f7f4ef" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">

          <div className="text-center flex flex-col gap-3 max-w-[560px] px-2">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1a2e2a" }}
            >
              Por Que Escolher a Auria
            </h2>
            <p className="font-sans text-[14px]" style={{ color: "#4a6560" }}>
              Diferenciais que fazem a Clínica Auria única no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full">
            {whyChoose.map((w) => (
              <div
                key={w.title}
                className="p-5 md:p-6 rounded-2xl border flex flex-col gap-4"
                style={{ background: "#ffffff", borderColor: "#e4ddd2" }}
              >
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: "#5a8478", color: "#5a8478" }}
                >
                  {w.icon}
                </div>
                <h3 className="font-sans font-bold text-[15px]" style={{ color: "#1a2e2a" }}>{w.title}</h3>
                <p className="font-sans text-[13px] leading-[1.65]" style={{ color: "#5a8478" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ EQUIPE ══════════════ */}
      <section id="equipe" className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: "#f0ebe3" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">

          <div className="text-center flex flex-col gap-2">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1a2e2a" }}
            >
              Nossa Equipe
            </h2>
            <p className="font-sans text-[14px]" style={{ color: "#4a6560" }}>
              Profissionais dedicados e experientes ao seu serviço
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full">
            {teamMembers.map((member) => (
              <div
                key={member.src}
                className="rounded-2xl border flex flex-col p-4 gap-4"
                style={{ background: "#ffffff", borderColor: "#e4ddd2" }}
              >
                <div className="w-full h-[220px] sm:h-[200px] md:h-[220px] relative rounded-xl overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-center text-center gap-1 pb-2">
                  <p className="font-display font-bold text-[1.1rem]" style={{ color: "#1a2e2a" }}>{member.name}</p>
                  <p className="font-sans text-[13px]" style={{ color: "#5a8478" }}>{member.role}</p>
                  <p className="font-sans text-[12.5px] leading-[1.6] mt-1" style={{ color: "#5a8478" }}>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section id="faq" className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: "rgba(255,255,255,0.55)" }}>
        <div className="max-w-[680px] mx-auto flex flex-col gap-8 md:gap-10">
          <div className="text-center flex flex-col gap-2">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1a2e2a" }}
            >
              Perguntas Frequentes
            </h2>
            <p className="font-sans text-[14px]" style={{ color: "#4a6560" }}>
              Respondemos as perguntas mais comuns para facilitar sua decisão.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ══════════════ LOCALIZAÇÃO ══════════════ */}
      <section id="localizacao" className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: "#f0ebe3" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">

          <div className="flex flex-col gap-2">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a2e2a" }}
            >
              Nossa Localização
            </h2>
            <p className="font-sans text-[14px]" style={{ color: "#4a6560" }}>
              Venha nos visitar. Estamos prontos para atender você.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">

            {/* Mapa */}
            <div className="w-full lg:flex-1 rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "#e4ddd2", minHeight: "320px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975938560935!2d-46.6565952!3d-23.5631548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ3LjQiUyA0NsKwMzknMjMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Clínica Auria"
              />
            </div>

            {/* Informações */}
            <div
              className="w-full lg:w-[300px] shrink-0 rounded-2xl border p-6 flex flex-col gap-6"
              style={{ background: "#ffffff", borderColor: "#e4ddd2" }}
            >
              <h3 className="font-display font-bold text-[1.2rem]" style={{ color: "#1a2e2a" }}>
                Clínica Auria Odontologia
              </h3>

              <div className="flex flex-col gap-4">
                {/* Endereço */}
                <div className="flex gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#5a8478" }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-sans font-semibold text-[13px]" style={{ color: "#1a2e2a" }}>Endereço</p>
                    <p className="font-sans text-[13px] leading-[1.6]" style={{ color: "#4a6560" }}>
                      Rua (a preencher), 000<br />Bairro — Cidade, SP
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#5a8478" }}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  <div>
                    <p className="font-sans font-semibold text-[13px]" style={{ color: "#1a2e2a" }}>Horário de Atendimento</p>
                    <p className="font-sans text-[13px] leading-[1.6]" style={{ color: "#4a6560" }}>
                      Seg–Sex: 8h às 18h<br />Sáb: 8h às 13h
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#5a8478" }}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-5.99-5.99 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 005.99 5.99l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <p className="font-sans font-semibold text-[13px]" style={{ color: "#1a2e2a" }}>WhatsApp</p>
                    <p className="font-sans text-[13px]" style={{ color: "#4a6560" }}>(11) 99999-9999</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank" rel="noopener noreferrer"
                className="text-center font-sans text-[13.5px] font-semibold text-white py-3.5 rounded-lg transition-opacity hover:opacity-85 mt-auto"
                style={{ background: "#2d4f47" }}
              >
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="px-4 sm:px-8 md:px-12 lg:px-20 py-10" style={{ background: "#1a2e2a" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="w-10 h-10 relative overflow-hidden rounded-lg shrink-0">
            <Image src="/logo.png" alt="Clínica Auria" fill className="object-cover object-left" />
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-[12.5px]" style={{ color: "#6a8a84" }}>
            {[["Serviços", "#servicos"], ["Sobre", "#sobre"], ["Equipe", "#equipe"], ["FAQ", "#faq"]].map(([l, h]) => (
              <a key={l} href={h} className="hover:text-white transition-colors">{l}</a>
            ))}
          </nav>

          <p className="font-sans text-[11.5px] text-center sm:text-right" style={{ color: "#4a6a64" }}>
            © 2024 Clínica Auria Odontologia
          </p>
        </div>
      </footer>

    </div>
  );
}
