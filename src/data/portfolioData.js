export const PROFILE = {
  name: "Theekshana Sudeepa",
  firstName: "Theekshana",
  lastName: "Sudeepa",
  monogram: "T",
  email: "hello@thikka.me",
  location: "Colombo, Sri Lanka",
  website: "https://thikka.me",
  github: "https://github.com/theekshana-sudeepa",
  linkedin: "https://www.linkedin.com/in/theekshana-sudeepa/",
  status: "Open to Software Engineering Roles & Collaborations",
  phrases: [
    "Full-Stack Software Engineer",
    "Enterprise Java & IAM Builder",
    "AI & Agentic Systems Engineer",
    "Distributed Systems Architect",
    "Product-Focused Developer",
  ],
};

export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "connect", label: "Connect" },
];

export const STATS = [
  {
    value: "20+",
    label: "Public Repositories",
    detail: "Open-source systems across Java, TypeScript, C#, and React Native",
  },
  {
    value: "50+",
    label: "Organizations Reached",
    detail: "Production EAP & national public-sector platform architecture",
  },
  {
    value: "4",
    label: "Engineering Domains",
    detail: "AI/MCP · Full-Stack SaaS · Enterprise Java/IAM · Mobile & IoT",
  },
];

export const CREDENTIALS = [
  { text: "BSc (Hons) Software Engineering · Final Stage", iconKey: "degree", color: "#A78BFA" },
  { text: "Enterprise Java & WSO2 IAM", iconKey: "shield", color: "#34D399" },
  { text: "AI & MCP Systems Builder", iconKey: "spark", color: "#4A9DFF" },
  { text: "WSO2 APIM Open-Source Contributor", iconKey: "code", color: "#F472B6" },
  { text: "Hardware & IoT Tinkerer", iconKey: "chip", color: "#FBBF24" },
];

export const TRACK_RECORD = [
  {
    tag: "Production · 50+ Orgs",
    title: "Corporate EAP Platform Architecture",
    summary:
      "Architected Sri Lanka's first Employee Assistance Program serving 50+ organizations with anonymous therapy booking, browser consultations, org analytics, and Stripe Webhook billing.",
    stack: ["Laravel", "Vue.js", "MySQL", "AWS", "Stripe"],
  },
  {
    tag: "National Initiative",
    title: "Child-Safeguarding Digital Platform",
    summary:
      "Built the digital platform and custom lightweight CMS for a national child-safeguarding programme run jointly with the Ministry of Education and Police Child & Women Bureau.",
    stack: ["PHP 8", "MySQL", "Custom CMS"],
  },
  {
    tag: "Open Source · Pull Shark ×2",
    title: "WSO2 API Manager Contributor",
    summary:
      "Contributed technical documentation improvements to WSO2 API Manager (wso2/docs-apim) alongside hands-on OIDC PKCE & RS256 JWKS reference integrations.",
    stack: ["WSO2 APIM", "WSO2 IS", "OIDC", "Open Source"],
  },
  {
    tag: "Academic Foundation",
    title: "BSc (Hons) in Software Engineering",
    summary:
      "Final-stage undergraduate (Birmingham City University / JIAT) holding UK Level 5 Higher Diploma (120 Credits) and Level 4 Diploma (120 Credits) in Software Engineering.",
    stack: ["Jakarta EE", "Distributed Systems", "Design Patterns"],
  },
];

export const EXPERTISE = [
  {
    title: "AI-Native Systems & MCP",
    desc: "Agentic commerce, Model Context Protocol (MCP) tool servers, LLM orchestration with Vercel AI SDK, and automated document/catalog OCR pipelines.",
    gradient: "linear-gradient(135deg, #4A9DFF 0%, #6366F1 100%)",
    iconColor: "#4A9DFF",
    iconKey: "ai",
  },
  {
    title: "Full-Stack & Offline-First Platforms",
    desc: "Production React 19, Next.js 16, TypeScript, Express, and Prisma systems engineered for multi-tenant isolation, idempotent billing, and zero-downtime UX.",
    gradient: "linear-gradient(135deg, #A78BFA 0%, #EC4899 100%)",
    iconColor: "#A78BFA",
    iconKey: "saas",
  },
  {
    title: "Enterprise Java, IAM & Backends",
    desc: "Jakarta EE 10, EJB 4.0, Hibernate ORM, WSO2 Identity Server / Asgardeo OIDC PKCE, stateless RS256 JWKS verification, RBAC, and JSR-356 WebSockets.",
    gradient: "linear-gradient(135deg, #34D399 0%, #06B6D4 100%)",
    iconColor: "#34D399",
    iconKey: "enterprise",
  },
  {
    title: "Mobile Systems & Hardware / IoT",
    desc: "Cross-platform React Native (Expo) and native Android (Java/Firebase) applications, deterministic simulation engines, custom PCBs, and ESP32 firmware.",
    gradient: "linear-gradient(135deg, #FBBF24 0%, #F97316 100%)",
    iconColor: "#FBBF24",
    iconKey: "hardware",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "AI & Full-Stack",
  "Enterprise & IAM",
  "Mobile & Systems",
];

export const PROJECTS = [
  {
    id: "kasa",
    category: "AI & Full-Stack",
    eyebrow: "Agentic Commerce · MCP",
    name: "Kasa AI Concierge",
    desc: "Emotionally intelligent, trilingual AI shopping concierge for Kapruka.com integrating Next.js 16, Vercel AI SDK, and live Model Context Protocol (MCP) product search.",
    status: "Live",
    accent: "#4A9DFF",
    tech: ["Next.js 16", "TypeScript", "Vercel AI SDK", "MCP"],
    liveUrl: "https://kasa-theta.vercel.app",
    repoUrl: "https://github.com/theekshana-sudeepa/kasa",
    iconKey: "ai",
  },
  {
    id: "sillara",
    category: "AI & Full-Stack",
    eyebrow: "Offline-First · Multi-Tenant POS",
    name: "Sillara Retail OS",
    desc: "Offline-first, multi-tenant Point-of-Sale PWA and B2B retail supply network engineered with React 19, TypeScript, Express, Prisma, MySQL 8, and AI catalog OCR.",
    status: "Flagship",
    accent: "#A78BFA",
    tech: ["React 19", "TypeScript", "Express", "Prisma", "MySQL 8"],
    repoUrl: "https://github.com/theekshana-sudeepa/sillara",
    iconKey: "store",
  },
  {
    id: "autobilling",
    category: "AI & Full-Stack",
    eyebrow: "Fintech · Idempotent Engine",
    name: "AutoBilling Engine",
    desc: "Self-hosted recurring billing, PDF invoicing, and automated payment chasing platform featuring idempotent ledger workflows and AWS/OCI Infrastructure-as-Code.",
    status: "Flagship",
    accent: "#38BDF8",
    tech: ["React 19", "TypeScript", "Prisma", "MySQL", "AWS / OCI"],
    repoUrl: "https://github.com/theekshana-sudeepa/autobilling",
    iconKey: "billing",
  },
  {
    id: "globaltrade-scm",
    category: "Enterprise & IAM",
    eyebrow: "Jakarta EE 10 · Modular SCM",
    name: "GlobalTrade SCM",
    desc: "Enterprise supply chain management platform built with Jakarta EE 10, EJB 4.0, Hibernate 6, JWT-backed RBAC, CDI interceptors, and WildFly 31+ deployment.",
    status: "Enterprise",
    accent: "#34D399",
    tech: ["Java", "Jakarta EE 10", "EJB 4.0", "Hibernate 6", "WildFly"],
    repoUrl: "https://github.com/theekshana-sudeepa/globaltrade-scm",
    iconKey: "enterprise",
  },
  {
    id: "wso2-iam",
    category: "Enterprise & IAM",
    eyebrow: "CIAM · OAuth 2.0 & OIDC",
    name: "WSO2 Identity Integration",
    desc: "Enterprise WSO2 Identity Server & Asgardeo CIAM reference architecture implementing OIDC PKCE flows, stateless RS256 JWKS verification, RBAC middleware, and Docker.",
    status: "Security",
    accent: "#F59E0B",
    tech: ["WSO2 IS", "OIDC PKCE", "RS256 JWKS", "TypeScript", "Docker"],
    repoUrl: "https://github.com/theekshana-sudeepa/wso2-identity-integration-demo",
    iconKey: "shield",
  },
  {
    id: "nimithi",
    category: "AI & Full-Stack",
    eyebrow: "Astronomical · Bilingual Web",
    name: "Nimithi Platform",
    desc: "Bilingual (Sinhala & English) Vedic astronomical engine dynamically calculating real-time planetary positions, Panchanga, and Rahu Kalaya from Swiss Ephemeris data.",
    status: "Live",
    accent: "#10B981",
    tech: ["Next.js", "TypeScript", "Swiss Ephemeris", "i18n"],
    liveUrl: "https://nimithi.com",
    iconKey: "globe",
  },
  {
    id: "tappsy",
    category: "Mobile & Systems",
    eyebrow: "Real-Time · WebSockets",
    name: "Tappsy Messaging Suite",
    desc: "Cross-platform real-time mobile messaging app pairing an Expo SDK 54 TypeScript client with a Java EE JSR-356 WebSockets & Hibernate backend for live presence and receipts.",
    status: "Full-Stack",
    accent: "#F472B6",
    tech: ["React Native", "TypeScript", "Java EE", "WebSockets", "MySQL"],
    repoUrl: "https://github.com/theekshana-sudeepa/Tappsy",
    secondaryRepoUrl: "https://github.com/theekshana-sudeepa/TappsyBackEnd",
    secondaryRepoLabel: "Java Backend",
    iconKey: "message",
  },
  {
    id: "overdraft",
    category: "Mobile & Systems",
    eyebrow: "Deterministic 60 Hz · Zero-GC",
    name: "Overdraft Roguelite",
    desc: "Deterministic 60 Hz Unity C# twin-stick roguelite engineered around push-your-luck score banking, zero-allocation hot paths, and a physics-free counting-sort spatial grid.",
    status: "Systems",
    accent: "#FB7185",
    tech: ["C#", "Unity URP", "Zero-GC", "Spatial Hashing"],
    repoUrl: "https://github.com/theekshana-sudeepa/overdraft-roguelite",
    iconKey: "systems",
  },
];

export const TECH_GROUPS = [
  {
    group: "Backend & Enterprise",
    sym: "◉",
    items: ["Java", "Jakarta EE 10", "Hibernate ORM", "Node.js", "Express", "PHP / Laravel", "C#"],
  },
  {
    group: "Frontend & Mobile",
    sym: "◈",
    items: ["TypeScript", "React 19", "Next.js 16", "React Native (Expo)", "Tailwind CSS", "Vite"],
  },
  {
    group: "AI, IAM & Protocols",
    sym: "◆",
    items: ["Vercel AI SDK", "MCP", "WSO2 IS / Asgardeo", "OAuth 2.0 / OIDC", "WebSockets", "Stripe / PayHere"],
  },
  {
    group: "Data, Cloud & Hardware",
    sym: "◧",
    items: ["MySQL 8", "PostgreSQL", "Prisma ORM", "Supabase", "Docker", "AWS / OCI", "ESP32 / IoT"],
  },
];

export const SOCIALS = [
  {
    name: "LinkedIn",
    handle: "/in/theekshana-sudeepa",
    href: "https://www.linkedin.com/in/theekshana-sudeepa/",
    iconKey: "linkedin",
  },
  {
    name: "GitHub",
    handle: "@theekshana-sudeepa",
    href: "https://github.com/theekshana-sudeepa",
    iconKey: "github",
  },
  {
    name: "Email",
    handle: "hello@thikka.me",
    href: "mailto:hello@thikka.me",
    iconKey: "email",
  },
];
