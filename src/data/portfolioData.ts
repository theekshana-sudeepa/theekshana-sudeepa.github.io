import type {
  CredentialItem,
  ExperienceItem,
  ExpertiseItem,
  NavSection,
  Profile,
  Project,
  ProjectCategory,
  SkillGroup,
  SocialLink,
  StatItem,
} from "../types/portfolio";

export const PROFILE: Profile = {
  name: "Theekshana Sudeepa",
  firstName: "Theekshana",
  lastName: "Sudeepa",
  monogram: "T",
  location: "Colombo, Sri Lanka",
  website: "https://theekshana-sudeepa.github.io/",
  websiteHost: "theekshana-sudeepa.github.io",
  github: "https://github.com/theekshana-sudeepa",
  linkedin: "https://www.linkedin.com/in/theekshana-sudeepa/",
  status: "Open to Software Engineer & Integration Roles",
  phrases: [
    "TypeScript & React Engineer",
    "UI/UX & Integration Systems Builder",
    "Enterprise Java & WSO2 IAM Developer",
    "AI & MCP Workflow Engineer",
    "Full-Stack Systems Architect",
  ],
};

export const NAV_SECTIONS: readonly NavSection[] = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "connect", label: "Connect" },
];

export const STATS: readonly StatItem[] = [
  {
    value: "50+",
    label: "Organizations Served",
    detail: "Production Inner Mental Wellness EAP & national public-sector platform delivery",
  },
  {
    value: "33+",
    label: "Interactive Web Tools",
    detail: "Lexora Workspace browser suite engineered for fast, accessible client-side UX",
  },
  {
    value: "20+",
    label: "Public Repositories",
    detail: "Open-source systems across TypeScript, React, Enterprise Java, WSO2 IAM & MCP",
  },
];

export const CREDENTIALS: readonly CredentialItem[] = [
  { text: "TypeScript, React 19 & UI/UX Systems", iconKey: "spark", color: "#4A9DFF" },
  { text: "Enterprise Java & WSO2 / Asgardeo IAM", iconKey: "shield", color: "#34D399" },
  { text: "WSO2 APIM Open-Source Contributor", iconKey: "code", color: "#F472B6" },
  { text: "BSc (Hons) Software Engineering · Final Stage", iconKey: "degree", color: "#A78BFA" },
  { text: "AI/MCP & Distributed Integrations", iconKey: "chip", color: "#FBBF24" },
];

export const TRACK_RECORD: readonly ExperienceItem[] = [
  {
    tag: "Production · 50+ Orgs",
    title: "Inner Mental Wellness — Corporate EAP Platform",
    summary:
      "Architected Sri Lanka's first Employee Assistance Program serving 50+ organizations with anonymous therapy booking, browser consultations, organization analytics, and Stripe Webhook billing.",
    stack: ["Laravel", "Vue.js", "MySQL", "AWS", "Stripe"],
  },
  {
    tag: "Production · UI/UX Systems",
    title: "Lexora Workspace — 33-Tool Web Suite",
    summary:
      "Engineered a responsive 33-tool browser productivity and developer suite emphasizing sub-second client-side workflows, clean component architecture, and accessible UI/UX design.",
    stack: ["TypeScript", "React", "UI/UX", "Client-Side Architecture"],
  },
  {
    tag: "Open Source · WSO2 Ecosystem",
    title: "WSO2 API Manager Contributor & CIAM Builder",
    summary:
      "Contributed technical documentation improvements to WSO2 API Manager (wso2/docs-apim) alongside engineering a React 19 & TypeScript OIDC PKCE / RS256 JWKS integration reference for WSO2 IS & Asgardeo.",
    stack: ["WSO2 APIM", "WSO2 IS / Asgardeo", "OIDC PKCE", "TypeScript"],
  },
  {
    tag: "National Initiative & Degree",
    title: "Public-Sector Platform & BSc (Hons) Engineering",
    summary:
      "Built the digital platform and custom CMS for a national child-safeguarding programme (Ministry of Education & Police Child & Women Bureau); final-stage BSc (Hons) Software Engineering undergraduate (BCU / JIAT).",
    stack: ["Jakarta EE 10", "PHP 8", "MySQL", "System Design"],
  },
];

export const EXPERTISE: readonly ExpertiseItem[] = [
  {
    title: "TypeScript, React & UI/UX Engineering",
    desc: "Crafting responsive, accessible React 19 and Next.js 16 interfaces with strict TypeScript, offline-first PWA workflows, design systems, and crisp developer ergonomics.",
    gradient: "linear-gradient(135deg, #4A9DFF 0%, #6366F1 100%)",
    iconColor: "#4A9DFF",
    iconKey: "saas",
  },
  {
    title: "AI-Native Integrations & MCP",
    desc: "Building Model Context Protocol (MCP) tool integrations, multi-step LLM orchestration with Vercel AI SDK, and automated document/catalog OCR pipelines.",
    gradient: "linear-gradient(135deg, #A78BFA 0%, #EC4899 100%)",
    iconColor: "#A78BFA",
    iconKey: "ai",
  },
  {
    title: "Enterprise Java, WSO2 & IAM",
    desc: "Engineering Jakarta EE 10, EJB 4.0, and Hibernate 6 backends alongside WSO2 Identity Server / Asgardeo OIDC PKCE, stateless RS256 JWKS verification, and JWT RBAC.",
    gradient: "linear-gradient(135deg, #34D399 0%, #06B6D4 100%)",
    iconColor: "#34D399",
    iconKey: "enterprise",
  },
  {
    title: "Full-Stack APIs, Cloud & Mobile",
    desc: "Shipping multi-tenant Express/Prisma services, idempotent financial ledgers, AWS/OCI Infrastructure-as-Code, React Native apps, and real-time JSR-356 WebSockets.",
    gradient: "linear-gradient(135deg, #FBBF24 0%, #F97316 100%)",
    iconColor: "#FBBF24",
    iconKey: "hardware",
  },
];

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  "All",
  "AI & Full-Stack",
  "Enterprise & IAM",
  "Mobile & Systems",
];

export const PROJECTS: readonly Project[] = [
  {
    id: "kasa",
    category: "AI & Full-Stack",
    eyebrow: "Agentic Commerce · Kapruka MCP",
    name: "Kasa",
    desc: "Emotionally intelligent, trilingual AI shopping concierge built with Next.js 16, React 19, strict TypeScript, Vercel AI SDK, and live Kapruka Model Context Protocol (MCP) product search.",
    status: "Open Source",
    accent: "#4A9DFF",
    tech: ["Next.js 16", "React 19", "TypeScript", "Vercel AI SDK", "Kapruka MCP"],
    repoUrl: "https://github.com/theekshana-sudeepa/kasa",
    iconKey: "ai",
  },
  {
    id: "sillara",
    category: "AI & Full-Stack",
    eyebrow: "Offline-First · Multi-Tenant POS PWA",
    name: "Sillara",
    desc: "Offline-first, multi-tenant Point-of-Sale PWA and B2B retail supply network engineered with React 19, TypeScript, Express, Prisma, MySQL 8, and AI catalog OCR ingestion.",
    status: "Flagship",
    accent: "#A78BFA",
    tech: ["React 19", "TypeScript", "Offline-First PWA", "Prisma", "MySQL 8", "AI OCR"],
    repoUrl: "https://github.com/theekshana-sudeepa/sillara",
    iconKey: "store",
  },
  {
    id: "autobilling",
    category: "AI & Full-Stack",
    eyebrow: "Fintech · Idempotent Billing & IaC",
    name: "AutoBilling",
    desc: "Self-hosted recurring billing, PDF invoicing, and automated payment chasing engine with React 19, TypeScript, Express, Prisma, idempotent ledger workflows, and AWS/OCI Infrastructure-as-Code.",
    status: "Flagship",
    accent: "#38BDF8",
    tech: ["React 19", "TypeScript", "Express", "Prisma", "PDF Engine", "AWS / OCI IaC"],
    repoUrl: "https://github.com/theekshana-sudeepa/autobilling",
    iconKey: "billing",
  },
  {
    id: "wso2-iam",
    category: "Enterprise & IAM",
    eyebrow: "WSO2 Ecosystem · CIAM & OIDC",
    name: "WSO2 Identity & Asgardeo Integration Demo",
    desc: "Enterprise WSO2 Identity Server & Asgardeo CIAM integration pairing a React 19 TypeScript SPA with OIDC PKCE, stateless RS256 JWKS verification, RBAC middleware, and Docker — alongside open-source contributions to wso2/docs-apim.",
    status: "WSO2 · Security",
    accent: "#F59E0B",
    tech: ["React 19", "TypeScript", "OIDC PKCE", "RS256 JWKS", "RBAC", "Docker"],
    repoUrl: "https://github.com/theekshana-sudeepa/wso2-identity-integration-demo",
    secondaryRepoUrl: "https://github.com/wso2/docs-apim",
    secondaryRepoLabel: "wso2/docs-apim",
    iconKey: "shield",
  },
  {
    id: "globaltrade-scm",
    category: "Enterprise & IAM",
    eyebrow: "Enterprise Java · Modular SCM",
    name: "GlobalTrade SCM",
    desc: "Modular enterprise supply chain management platform built with Jakarta EE 10, EJB 4.0, Hibernate 6, JWT-backed RBAC, CDI interceptors, and WildFly 31+ deployment.",
    status: "Enterprise Java",
    accent: "#34D399",
    tech: ["Jakarta EE 10", "EJB 4.0", "Hibernate 6", "JWT RBAC", "WildFly"],
    repoUrl: "https://github.com/theekshana-sudeepa/globaltrade-scm",
    iconKey: "enterprise",
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
    liveUrl: "https://www.nimithi.com/",
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

export const TECH_GROUPS: readonly SkillGroup[] = [
  {
    group: "TypeScript, React & UI/UX",
    sym: "◈",
    items: ["TypeScript", "React 19", "Next.js 16", "Vite 8", "Tailwind CSS", "PWA / Offline-First", "React Native (Expo)"],
  },
  {
    group: "Enterprise Java, IAM & Integration",
    sym: "◉",
    items: ["Java", "Jakarta EE 10", "EJB 4.0", "Hibernate 6", "WSO2 IS / Asgardeo", "WSO2 APIM", "OIDC PKCE / RS256 JWKS"],
  },
  {
    group: "AI, MCP & Backend Services",
    sym: "◆",
    items: ["Model Context Protocol (MCP)", "Vercel AI SDK", "Node.js", "Express", "WebSockets", "PHP / Laravel", "Stripe / PayHere"],
  },
  {
    group: "Data, Cloud & Systems",
    sym: "◧",
    items: ["MySQL 8", "PostgreSQL", "Prisma ORM", "Docker", "AWS / OCI IaC", "GitHub Actions", "C# / ESP32"],
  },
];

export const SOCIALS: readonly SocialLink[] = [
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
    name: "Repositories",
    handle: "20+ Open-Source Systems",
    href: "https://github.com/theekshana-sudeepa?tab=repositories",
    iconKey: "code",
  },
];
