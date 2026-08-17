import { useState } from "react";
import pdlcDiagram from "@/imports/AI-PDLC-Diagram.jpg";
import gainsightMapping from "@/imports/Gainsight-ProductMapping.jpg";
import notebookLMImg from "@/imports/NotebookLM-ProductDiscovery.jpg";
import insightSectionsImg from "@/imports/Discovery-UserInsightsSections.jpg";

// ─── i18n ────────────────────────────────────────────────────────────────────

type Lang = "en" | "pt";

const translations = {
  en: {
    nav: {
      brand: "AI Product Portfolio",
      links: ["Methodology", "Discovery", "Design"],
      cta: "Case Studies",
    },
    hero: {
      eyebrow: "B2B · Fleet · Construction",
      h1a: "Product Designer",
      h1b: "& Product Manager",
      h1c: "AI-Powered",
      sub: "8+ years developing B2B SaaS solutions in Transportation & Construction. Bridging deep user discovery, product analytics, and AI-driven execution to compress the discovery-to-delivery cycle.",
      subNote: "This space centralizes practical artifacts, methodologies and product processes I use in my day to day to demonstrate AI in product discovery, specs and delivery.",
      badges: ["AI Acceleration (PDLC)", "Code-Aware Design", "Data-Driven Discovery"],
      ctaPrimary: "Explore Case Studies",
      ctaSecondary: "View Specs & Research",
    },
    metrics: [
      { label: "AI PDLC Acceleration", value: "4×", sub: "faster spec-to-story" },
      { label: "Synthesized VOC Coverage", value: "200+", sub: "calls analyzed" },
      { label: "Discovery Cycle Reduction", value: "60%", sub: "time per insight" },
      { label: "Design-to-Dev Handoff", value: "0", sub: "rework cycles" },
    ],
    pdlc: {
      eyebrow: "Core Methodology",
      h2a: "Product Development Cycle",
      h2b: "AI-Powered (AI PDLC)",
      sub: "Compressing discovery-to-delivery cycles with Human-in-the-Loop oversight and a focus on finding the right problems.",
      workflowLabel: "Workflow Pattern",
      stages: ["Discovery", "Viability", "Build & Test", "Delivery"],
      cards: [
        {
          id: "framework",
          tag: "T0 → T3 Pipeline",
          title: "Accelerated AI PDLC Framework",
          body: "Structured discovery-to-delivery lifecycle compressed via AI-assisted problem validation, rapid PRD drafting, and parallel hypothesis testing. Human-in-the-Loop review gates at every stage prevent drift from user reality.",
          detail: [
            "T0 · Problem Discovery & Signal Collection",
            "T1 · Viability & Stakeholder Alignment",
            "T2 · Spec Drafting & Edge Case Validation",
            "T3 · Build Readiness & Acceptance Criteria",
          ],
          hasSlot: true,
          slotLabel: "AI PDLC Workflow Diagram",
        },
        {
          id: "gems",
          tag: "Workflow Agents",
          title: "Custom AI GEMs & Workflow Agents",
          body: "Domain-specific AI assistants fine-tuned on product, logistics, and IoT contexts. Agents draft PRDs, synthesize user feedback clusters, generate edge case matrices, and flag assumption gaps — all reviewed and curated by a human PM.",
          detail: [
            "PRD & Spec Drafting Agent",
            "Discovery Synthesis Agent",
            "Edge Case & Risk Validator",
            "Acceptance Criteria Generator",
          ],
          hasSlot: false,
          slotLabel: "",
        },
        {
          id: "notebooklm",
          tag: "Synthesized Intelligence",
          title: "NotebookLM Insight Repositories",
          body: "Dozens of customer call transcripts, Win/Loss interviews, and support logs aggregated into grounded, citable insight repositories. Enables rapid cross-referencing and evidence-backed product decisions.",
          detail: [
            "Call Transcript Indexing",
            "Win/Loss Signal Aggregation",
            "Grounded Citation Linking",
            "Quarterly VOC Insight Snapshots",
          ],
          hasSlot: false,
          slotLabel: "",
        },
      ],
    },
    discovery: {
      eyebrow: "Research & Analytics",
      h2a: "Discovery, Voice of Customer",
      h2b: "& Data Analytics",
      colA: {
        tag: "Qualitative",
        h3a: "Voice of Customer (VOC)",
        h3b: "& Insight Synthesis",
        items: [
          ["User Interviews", "Structured discovery sessions mapped to Jobs-to-be-Done frameworks"],
          ["Win/Loss Analysis", "Synthesizing competitive and churn signals into prioritization inputs"],
          ["Insight Documents", "Structured documents aligning problems to evidence"],
          ["Problem Alignment", "Cross-functional workshops to validate problem priority and scope"],
        ] as [string, string][],
        tabs: ["Discovery Notebook", "Docs w/ User Insights"],
        slotLabel: "VOC Notebook & Insight Spec Document",
      },
      colB: {
        tag: "Quantitative",
        h3a: "Data-Driven",
        h3b: "Product Decisions",
        items: [
          ["Gainsight Product Mapper", "Feature taxonomy and adoption heatmaps for B2B enterprise accounts"],
          ["Funnel Analysis", "Identifying drop-off points and friction in critical user workflows"],
          ["Hotjar Surveys", "In-context sentiment capture tied to feature interaction moments"],
          ["Google Analytics", "Behavioral flow mapping and retention cohort analysis by feature"],
        ] as [string, string][],
        slotLabel: "Gainsight — Feature Tree & Adoption Analytics",
      },
    },
    prototyping: {
      eyebrow: "Design & Engineering",
      h2a: "Prototyping, Usability &",
      h2b: "Code-Aware Architecture",
      card1: {
        tag: "Rapid Prototyping",
        h3: "Rapid Prototyping & Usability Testing",
        body: "Interactive high and low-fidelity prototypes in Figma enabling early validation with real users before a single line of production code is written. Continuous usability testing cycles with structured task analysis and fast-feedback loops directly with engineering teams.",
        chips: ["Hi-Fi Figma Prototypes", "Low-Fi Wireframe Testing", "Task-Based Usability Studies", "Fast-Feedback Loops with Eng"],
      },
      card2: {
        tag: "Code-Aware Design",
        h3: "Code-Aware Design & Systems Engineering",
        body: "Computer Science degree foundation bridging Design and Front-End Engineering. Deep understanding of Atomic Design, Design Tokens, Component Systems, and technical feasibility checks. Designs are delivered with zero rework because constraints are understood before any pixel is placed.",
        stackLabel: "Competency Stack",
        stack: [
          ["Atomic Design", "Atoms → Molecules → Organisms"],
          ["Design Tokens", "Figma Variables → CSS Custom Properties"],
          ["Component Systems", "Libraries documented in Storybook"],
          ["Feasibility Checks", "Constraint validation with Eng before design"],
        ] as [string, string][],
      },
    },
    footer: {
      brand: "AI Product Portfolio",
      brandDesc: "AI-Powered Product Manager & Product Designer specializing in B2B SaaS, Fleet Telematics, and Enterprise IoT platforms.",
      quickLinksLabel: "Quick Links",
      quickLinks: ["Methodology", "VOC & Discovery", "Design System"],
      connectLabel: "Connect",
      contactItems: ["LinkedIn", "Email"],
      copyright: "© 2025 AI Product Portfolio. All rights reserved.",
      available: "Available for opportunities",
    },
  },
  pt: {
    nav: {
      brand: "Portfólio de Produto IA",
      links: ["Metodologia", "Descoberta", "Design"],
      cta: "Cases de Uso",
    },
    hero: {
      eyebrow: "B2B · Frota · Construção",
      h1a: "Product Designer",
      h1b: "& Product Manager",
      h1c: "Potencializado por IA",
      sub: "8+ anos desenvolvendo soluções B2B SaaS em Transporte & Construção. Conectando descoberta profunda de usuário, analytics de produto e execução orientada por IA para comprimir o ciclo de descoberta à entrega.",
      subNote: "Este espaço reúne artefatos práticos, metodologias e processos de produto que utilizo no dia a dia para demonstrar a aplicação de inteligência artificial em descoberta, especificação e entrega.",
      badges: ["Aceleração com IA (PDLC)", "Design Orientado a Código", "Descoberta Baseada em Dados"],
      ctaPrimary: "Explorar Cases de Uso",
      ctaSecondary: "Ver Specs & Pesquisa",
    },
    metrics: [
      { label: "Aceleração AI PDLC", value: "4×", sub: "mais rápido spec-to-story" },
      { label: "Cobertura VOC Sintetizada", value: "200+", sub: "chamadas analisadas" },
      { label: "Redução no Ciclo de Descoberta", value: "60%", sub: "tempo por insight" },
      { label: "Handoff Design-para-Dev", value: "0", sub: "ciclos de retrabalho" },
    ],
    pdlc: {
      eyebrow: "Metodologia Central",
      h2a: "Ciclo de Desenvolvimento de Produto",
      h2b: "Potencializado por IA (AI PDLC)",
      sub: "Comprimindo os ciclos de descoberta à entrega com supervisão Human-in-the-Loop e foco em encontrar os problemas certos.",
      workflowLabel: "Padrão de Fluxo",
      stages: ["Descoberta", "Viabilidade", "Build & Teste", "Entrega"],
      cards: [
        {
          id: "framework",
          tag: "Pipeline T0 → T3",
          title: "Framework AI PDLC Acelerado",
          body: "Ciclo estruturado de descoberta à entrega comprimido via validação de problema assistida por IA, elaboração rápida de PRD e testes de hipóteses em paralelo. Gates de revisão Human-in-the-Loop em cada etapa evitam desvio da realidade do usuário.",
          detail: [
            "T0 · Descoberta de Problema & Coleta de Sinais",
            "T1 · Viabilidade & Alinhamento com Stakeholders",
            "T2 · Elaboração de Spec & Validação de Edge Cases",
            "T3 · Prontidão para Build & Critérios de Aceite",
          ],
          hasSlot: true,
          slotLabel: "Diagrama do Fluxo AI PDLC",
        },
        {
          id: "gems",
          tag: "Agentes de Fluxo",
          title: "GEMs de IA & Agentes de Workflow Customizados",
          body: "Assistentes de IA específicos de domínio ajustados em contextos de produto, logística e IoT. Agentes elaboram PRDs, sintetizam clusters de feedback de usuário, geram matrizes de edge cases e sinalizam lacunas de suposição — tudo revisado e curado por um humano. Exemplos de Agentes:",
          detail: [
            "Agente de Elaboração de PRD & Spec",
            "Agente de Síntese de Discovery",
            "Validador de Edge Cases & Riscos",
          ],
          hasSlot: false,
          slotLabel: "",
        },
        {
          id: "notebooklm",
          tag: "Inteligência Sintetizada",
          title: "Repositórios de Insights no NotebookLM",
          body: "Dezenas de transcrições de chamadas com clientes, entrevistas de Win/Loss e logs de suporte agregados em repositórios de insights fundamentados e citáveis. Permite referência cruzada rápida e decisões de produto baseadas em evidências.",
          detail: [
            "Indexação de Transcrições de Chamadas",
            "Agregação de Sinais Win/Loss",
            "Linkagem de Citações Fundamentadas",
            "Snapshots Trimestrais de Insights VOC",
          ],
          hasSlot: false,
          slotLabel: "",
        },
      ],
    },
    discovery: {
      eyebrow: "Pesquisa & Analytics",
      h2a: "Descoberta, Voz do Cliente",
      h2b: "& Análise de Dados",
      colA: {
        tag: "Qualitativo",
        h3a: "Voz do Cliente (VOC)",
        h3b: "& Síntese de Insights",
        items: [
          ["Entrevistas com Usuários", "Sessões de descoberta estruturadas mapeadas ao framework Jobs-to-be-Done"],
          ["Análise Win/Loss", "Síntese de sinais de competição e churn em insumos de priorização"],
          ["Documentos de Insight", "Documentos estruturados alinhando problemas a evidências"],
          ["Alinhamento de Problema", "Workshops cross-funcionais para validar prioridade e escopo do problema"],
        ] as [string, string][],
        tabs: ["Notebook de Discovery", "Doc de User Insights"],
        slotLabel: "Notebook VOC & Documento de Spec de Insight",
      },
      colB: {
        tag: "Quantitativo",
        h3a: "Decisões de Produto",
        h3b: "Orientadas por Dados",
        items: [
          ["Gainsight Product Mapper", "Mapeamento de features e métricas de produto"],
          ["Análise de Funil", "Identificação de pontos de abandono e atrito em fluxos críticos do usuário"],
          ["Hotjar Surveys", "Captura contextual de sentimento ligada a momentos de interação com features"],
          ["Google Analytics", "Mapeamento de fluxo comportamental e análise de coorte de retenção por feature"],
        ] as [string, string][],
        slotLabel: "Gainsight — Árvore de Features & Analytics de Adoção",
      },
    },
    prototyping: {
      eyebrow: "Design & Engenharia",
      h2a: "Prototipagem, Usabilidade &",
      h2b: "Arquitetura Orientada a Código",
      card1: {
        tag: "Prototipagem Rápida",
        h3: "Prototipagem Rápida & Testes de Usabilidade",
        body: "Protótipos interativos de alta e baixa fidelidade no Figma permitindo validação antecipada com usuários reais antes que uma única linha de código de produção seja escrita. Ciclos contínuos de teste de usabilidade com análise de tarefas estruturada e loops de feedback rápido diretamente com equipes de engenharia.",
        chips: ["Protótipos Hi-Fi no Figma", "Testes de Wireframe Low-Fi", "Estudos de Usabilidade por Tarefa", "Loops de Feedback Rápido com Eng"],
      },
      card2: {
        tag: "Design Orientado a Código",
        h3: "Design Orientado a Código & Engenharia de Sistema",
        body: "Base em Ciência da Computação conectando Design e Engenharia Front-End. Entendimento de Design Atômico, Design Tokens, Sistemas de Componentes e verificações de viabilidade técnica. Designs são entregues visando minimizar retrabalho porque as restrições são compreendidas antes de qualquer pixel ser posicionado.",
        stackLabel: "Stack de Competências",
        stack: [
          ["Design Atômico", "Átomos → Moléculas → Organismos"],
          ["Design Tokens", "Figma Variables → CSS Custom Properties"],
          ["Sistemas de Componentes", "Bibliotecas documentadas no Storybook"],
          ["Verificações de Viabilidade", "Validação de restrições com Eng antes do design"],
        ] as [string, string][],
      },
    },
    footer: {
      brand: "Portfólio de Produto IA",
      brandDesc: "Product Designer & Product Manager potencializado por IA especializado em B2B SaaS, Telemetria de Frota e Construções.",
      quickLinksLabel: "Links Rápidos",
      quickLinks: ["Metodologia", "VOC & Descoberta", "Sistema de Design"],
      connectLabel: "Conectar",
      contactItems: ["LinkedIn", "E-mail"],
      copyright: "© 2026 Portfólio de Produto IA. Todos os direitos reservados.",
      available: "Disponível para oportunidades",
    },
  },
} as const;

type T = typeof translations.en;

// ─── Sub-components ──────────────────────────────────────────────────────────

function TagPill({ label, color = "blue" }: { label: string; color?: "blue" | "cyan" | "navy" }) {
  const styles = {
    blue: "bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20",
    cyan: "bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/20",
    navy: "bg-slate-100 text-slate-600 border border-slate-200",
  };
  return (
    <span
      className={`inline-block font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded ${styles[color]}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label}
    </span>
  );
}

function ImageSlot({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`${aspect} bg-slate-100 border border-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 text-slate-400 select-none`}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-xs font-mono text-center px-4 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
        {label}
      </span>
    </div>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-0.5 bg-slate-100 border border-slate-200 rounded-lg p-0.5">
      {(["en", "pt"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 rounded text-xs font-semibold transition-all duration-200 ${
            lang === l
              ? "bg-[#0066FF] text-white shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {l === "en" ? "EN" : "PT"}
        </button>
      ))}
    </div>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function Hero({
  t,
  lang,
  setLang,
}: {
  t: T;
  lang: Lang;
  setLang: (l: Lang) => void;
  onExplore?: () => void;
  onSpecs?: () => void;
}) {
  const tn = t.nav;
  const th = t.hero;
  return (
    <section className="bg-white border-b border-slate-200">
      {/* Nav bar */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded bg-[#0066FF] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" fill="white" />
              <rect x="8" y="1" width="5" height="5" fill="white" opacity="0.6" />
              <rect x="1" y="8" width="5" height="5" fill="white" opacity="0.6" />
              <rect x="8" y="8" width="5" height="5" fill="white" opacity="0.3" />
            </svg>
          </div>
          <span
            className="text-slate-900 font-semibold text-sm tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {tn.brand}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {tn.links.map((item) => (
            <button
              key={item}
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#0066FF]" />
            <span
              className="text-[#0066FF] text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {th.eyebrow}
            </span>
          </div>

          <h1
            className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {th.h1a}
            <br />
            <span className="text-[#0066FF]">{th.h1b}</span>
            <br />
            <span className="text-slate-400 font-light">{th.h1c}</span>
          </h1>

          <p
              className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {th.sub}
          </p>

          {(th as { subNote?: string }).subNote && (
            <p
              className="text-sm font-medium text-slate-500 border-l-2 border-[#0066FF] pl-3 mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {(th as { subNote?: string }).subNote}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            {th.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium px-3.5 py-2 rounded-full"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] flex-shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <img
              src="/perfil.jpg"
              alt="João Augusto Provin"
              className="w-42 h-42 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500/20 shadow-xl mb-3"
            />
            <h3
              className="text-2xl font-bold text-slate-800 dark:text-slate-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              João Augusto Provin
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function PDLCSection({ t }: { t: T }) {
  const tp = t.pdlc;
  const [active, setActive] = useState(tp.cards[0].id);
  const card = tp.cards.find((c) => c.id === active) ?? tp.cards[0];

  return (
    <section className="bg-[#0B132B] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00D2FF]" />
            <span className="text-[#00D2FF] text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              {tp.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {tp.h2a}
            <br />
            <span className="text-slate-400 font-light">{tp.h2b}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {tp.sub}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          {tp.cards.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                active === c.id
                  ? "bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8 items-start">
          <div className="w-full">
            <TagPill label={card.tag} color="cyan" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mt-4 mb-4 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              {card.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-4xl text-base" style={{ fontFamily: "var(--font-body)" }}>
              {card.body}
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {card.detail.map((d, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="w-5 h-5 rounded bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                  </span>
                  <span className="font-mono text-xs leading-5 text-slate-300" style={{ fontFamily: "var(--font-mono)" }}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {card.hasSlot && (
            <div className="w-full flex flex-col gap-6">
              <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#060B19] shadow-2xl">
                <img src={pdlcDiagram} alt={card.slotLabel} className="w-full h-auto object-contain" />
              </div>

              <div className="flex gap-2 flex-wrap">
                {tp.stages.map((stage, i) => (
                  <span
                    key={stage}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 border border-white/10 rounded px-2.5 py-1.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="text-[#0066FF]">T{i}</span> {stage}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const VOC_TAB_IMAGES: Record<number, string | null> = {
  0: notebookLMImg,
  1: insightSectionsImg,
  2: null,
};

function DiscoverySection({ t }: { t: T }) {
  const td = t.discovery;
  const [activeVocTab, setActiveVocTab] = useState(0);
  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066FF]" />
            <span className="text-[#0066FF] text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              {td.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {td.h2a}
            <br />
            <span className="text-slate-400 font-light">{td.h2b}</span>
          </h2>
        </div>

        <div className="flex flex-col w-full gap-8">
          {/* Card 1: Qualitativo */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm p-6 lg:p-8">
            <div className="flex flex-col w-full">
              <div>
                  <TagPill label={td.colA.tag} color="blue" />
                <h3 className="text-2xl font-bold text-slate-900 mt-3" style={{ fontFamily: "var(--font-display)" }}>
                    {td.colA.h3a}{" "}
                    <span className="text-slate-500 font-normal">{td.colA.h3b}</span>
                  </h3>
                          </div>

              {/* Lista de tópicos em Grid Responsivo 4 colunas */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-6">
                {td.colA.items.map(([title, desc]) => (
                  <li key={title} className="flex gap-3 w-full">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF] flex-shrink-0 mt-1.5" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900 mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                        {title}
                          </div>
                      <div className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Abas e Imagem em largura total */}
              <div className="flex flex-col w-full">
                <div className="flex border border-slate-200 rounded-t-lg bg-slate-100 overflow-hidden">
                  {td.colA.tabs.map((tab, i) => (
                    <button
                      key={tab}
                      onClick={() => setActiveVocTab(i)}
                      className={`px-4 py-2.5 text-xs font-mono font-medium transition-colors duration-150 ${
                        activeVocTab === i
                          ? "bg-white text-[#0066FF] border-b-2 border-b-[#0066FF] font-semibold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="w-full min-h-[420px] rounded-b-lg border border-t-0 border-slate-200 bg-slate-50/50 flex items-center justify-center p-2 overflow-hidden relative">
                  {VOC_TAB_IMAGES[activeVocTab] ? (
                    <img
                      src={VOC_TAB_IMAGES[activeVocTab]!}
                      alt={td.colA.tabs[activeVocTab]}
                      className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-sm mx-auto"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-center text-slate-400 p-6">
                      <div>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2 text-slate-400">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        <span className="text-xs font-mono text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                          {td.colA.tabs[activeVocTab]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Quantitativo */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm p-6 lg:p-8">
            <div className="flex flex-col w-full">
              <div>
                  <TagPill label={td.colB.tag} color="cyan" />
                <h3 className="text-2xl font-bold text-slate-900 mt-3" style={{ fontFamily: "var(--font-display)" }}>
                    {td.colB.h3a}{" "}
                    <span className="text-slate-500 font-normal">{td.colB.h3b}</span>
                  </h3>
                          </div>

              {/* Lista de tópicos em Grid Responsivo 4 colunas */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-6">
                {td.colB.items.map(([title, desc]) => (
                  <li key={title} className="flex gap-3 w-full">
                    <span className="w-2 h-2 rounded-full bg-[#00D2FF] flex-shrink-0 mt-1.5" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900 mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                        {title}
                          </div>
                      <div className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Slot de Imagem em largura total */}
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-slate-50/50 overflow-hidden">
                  <img
                    src={gainsightMapping}
                    alt={td.colB.slotLabel}
                    className="w-full h-auto max-h-[450px] object-contain mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrototypingSection({ t }: { t: T }) {
  const tp = t.prototyping;
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066FF]" />
            <span className="text-[#0066FF] text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              {tp.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {tp.h2a}
            <br />
            <span className="text-slate-400 font-light">{tp.h2b}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="group rounded-xl border border-slate-200 hover:border-[#0066FF]/40 p-8 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                <path d="M9 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <TagPill label={tp.card1.tag} />
            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {tp.card1.h3}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              {tp.card1.body}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {tp.card1.chips.map((item) => (
                <div key={item} className="bg-slate-50 rounded border border-slate-200 px-3 py-2 text-xs text-slate-600" style={{ fontFamily: "var(--font-body)" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="group rounded-xl border border-slate-200 hover:border-[#0066FF]/40 p-8 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#0B132B] border border-slate-700 flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <TagPill label={tp.card2.tag} />
            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {tp.card2.h3}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              {tp.card2.body}
            </p>
            <div className="bg-[#0B132B] rounded-lg p-4">
              <div className="text-[10px] font-mono text-[#00D2FF] tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                {tp.card2.stackLabel}
              </div>
              {tp.card2.stack.map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-xs font-mono text-slate-300" style={{ fontFamily: "var(--font-mono)" }}>{k}</span>
                  <span className="text-[10px] text-slate-500" style={{ fontFamily: "var(--font-body)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: T }) {
  const tf = t.footer;
  const icons = [
    <svg key="li" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>,
    <svg key="em" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>,
    <svg key="gh" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>,
  ];

  return (
    <footer className="bg-[#0B132B] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-[#0066FF] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="5" height="5" fill="white" />
                  <rect x="8" y="1" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="1" y="8" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="8" y="8" width="5" height="5" fill="white" opacity="0.3" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                {tf.brand}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              {tf.brandDesc}
            </p>
          </div>

          <div>
            <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              {tf.quickLinksLabel}
            </div>
            <ul className="space-y-2">
              {tf.quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              {tf.connectLabel}
            </div>
            <ul className="space-y-3">
              {tf.contactItems.map((label, i) => (
                <li key={label}>
                  <a href="#" className="flex items-center gap-2.5 text-slate-400 hover:text-[#00D2FF] text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}>
                    <span className="text-slate-500">{icons[i]}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            {tf.copyright}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-500 text-xs font-mono" style={{ fontFamily: "var(--font-mono)" }}>
              {tf.available}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = translations[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "var(--font-body)" }} className="bg-slate-50 text-slate-900">
      <Hero
        t={t}
        lang={lang}
        setLang={setLang}
        onSpecs={() => scrollTo("discovery")}
      />
      <div id="methodology">
        <PDLCSection t={t} />
      </div>
      <div id="discovery">
        <DiscoverySection t={t} />
      </div>
      <div id="design">
        <PrototypingSection t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}
