import {
  useState,
  useEffect,
  useSyncExternalStore,
  type CSSProperties,
  type ReactElement,
} from "react";
import "./styles/portfolio.css";
import { Icon } from "./components/Icons";
import {
  PROFILE,
  NAV_SECTIONS,
  STATS,
  CREDENTIALS,
  TRACK_RECORD,
  EXPERTISE,
  PROJECT_CATEGORIES,
  PROJECTS,
  TECH_GROUPS,
  SOCIALS,
} from "./data/portfolioData";
import type {
  NavSectionId,
  ParticleSpec,
  ProjectCategory,
  ThemeMode,
} from "./types/portfolio";

interface ChipStyle extends CSSProperties {
  "--chip-color": string;
}

interface TyperState {
  readonly pi: number;
  readonly ci: number;
  readonly del: boolean;
}

interface NavProps {
  readonly scrolled: boolean;
  readonly activeSection: NavSectionId | "";
  readonly theme: ThemeMode;
  readonly onToggleTheme: () => void;
}

interface LabelProps {
  readonly n: string;
  readonly text: string;
}

interface ProjectsProps {
  readonly activeCategory: ProjectCategory;
  readonly onSelectCategory: (category: ProjectCategory) => void;
}

const SECTION_IDS: readonly NavSectionId[] = NAV_SECTIONS.map((s) => s.id);
const SECTION_ID_SET: ReadonlySet<string> = new Set(SECTION_IDS);

function isNavSectionId(value: string): value is NavSectionId {
  return SECTION_ID_SET.has(value);
}

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */

function useReveal(dependency: ProjectCategory): void {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const timers: number[] = [];
    const vh = window.innerHeight || 900;

    document.querySelectorAll(".sa:not(.v),.ia:not(.v)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.96) {
        el.classList.add("v");
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const targetEl = entry.target;
            const delay = Number.parseInt(targetEl.dataset.d ?? "0", 10);
            const t = window.setTimeout(() => targetEl.classList.add("v"), delay);
            timers.push(t);
            io.unobserve(targetEl);
          }
        });
      },
      { threshold: 0.06 }
    );

    document.querySelectorAll(".sa:not(.v),.ia:not(.v)").forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [dependency]);
}

function useActiveSection(sectionIds: readonly NavSectionId[]): NavSectionId | "" {
  const [activeId, setActiveId] = useState<NavSectionId | "">("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topId = visible[0]?.target.id;
        if (topId && isNavSectionId(topId)) {
          setActiveId(topId);
        }
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, [sectionIds]);

  return activeId;
}

function useTyper(phrases: readonly [string, ...string[]]): string {
  const [state, setState] = useState<TyperState>({
    pi: 0,
    ci: phrases[0].length,
    del: false,
  });

  useEffect(() => {
    const phrase = phrases[state.pi] ?? phrases[0];
    let delay = state.del ? 36 : 68;

    if (!state.del && state.ci === phrase.length) {
      delay = 2200;
    }

    const timer = window.setTimeout(() => {
      setState((prev) => {
        const current = phrases[prev.pi] ?? phrases[0];
        if (!prev.del) {
          if (prev.ci < current.length) {
            return { ...prev, ci: prev.ci + 1 };
          }
          return { ...prev, del: true };
        }
        if (prev.ci > 0) {
          return { ...prev, ci: prev.ci - 1 };
        }
        return { pi: (prev.pi + 1) % phrases.length, ci: 0, del: false };
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [state, phrases]);

  const activePhrase = phrases[state.pi] ?? phrases[0];
  return activePhrase.slice(0, state.ci);
}

function subscribeTheme(callback: () => void): () => void {
  window.addEventListener("portfolio-theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("portfolio-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): ThemeMode {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getThemeServerSnapshot(): ThemeMode {
  return "dark";
}

function setDocumentTheme(nextTheme: ThemeMode): void {
  document.documentElement.setAttribute("data-theme", nextTheme);
  try {
    window.localStorage.setItem("portfolio-theme", nextTheme);
  } catch {
    // Ignore private-browsing storage restrictions
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", nextTheme === "dark" ? "#06060A" : "#F8F9FC");
  }
  window.dispatchEvent(new Event("portfolio-theme-change"));
}

/* ─────────────────────────────────────────────
   AMBIENT PARTICLES
───────────────────────────────────────────── */

const STATIC_PARTICLES: readonly ParticleSpec[] = [
  { id: 0, left: "8%", size: 2.2, delay: 1.5, duration: 24, opacity: 0.24 },
  { id: 1, left: "18%", size: 1.8, delay: 7.2, duration: 28, opacity: 0.18 },
  { id: 2, left: "29%", size: 2.8, delay: 3.8, duration: 21, opacity: 0.26 },
  { id: 3, left: "41%", size: 1.7, delay: 11.4, duration: 26, opacity: 0.16 },
  { id: 4, left: "53%", size: 2.5, delay: 5.1, duration: 30, opacity: 0.24 },
  { id: 5, left: "65%", size: 2.0, delay: 14.3, duration: 22, opacity: 0.2 },
  { id: 6, left: "77%", size: 2.9, delay: 2.7, duration: 27, opacity: 0.25 },
  { id: 7, left: "89%", size: 1.8, delay: 9.8, duration: 25, opacity: 0.18 },
];

function Particles(): ReactElement {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}
    >
      {STATIC_PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-5%",
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(var(--particle-rgb), ${p.opacity})`,
            animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */

function Nav({ scrolled, activeSection, theme, onToggleTheme }: NavProps): ReactElement {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const scrollTo = (id: NavSectionId): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        id="main-nav"
        aria-label="Primary navigation"
        className={`floating-nav${scrolled ? " scrolled" : ""}`}
      >
        <button
          type="button"
          className="nav-logo"
          id="nav-logo"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {PROFILE.monogram}
          <span style={{ color: "var(--accent)" }}>.</span>
        </button>

        <span className="nav-divider" aria-hidden="true" />

        <div className="nav-links">
          {NAV_SECTIONS.map((sec) => (
            <button
              type="button"
              key={sec.id}
              className={`nav-item${activeSection === sec.id ? " active" : ""}`}
              onClick={() => scrollTo(sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        <span className="nav-divider" aria-hidden="true" />

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} size={15} />
        </button>

        <button
          type="button"
          className="nav-cta-btn nav-cta-desktop"
          id="nav-cta"
          onClick={() => scrollTo("connect")}
        >
          <span>Let&apos;s Talk</span>
          <svg width={10} height={10} viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 7H13M13 7L8 2M13 7L8 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span
            style={{
              transform: mobileOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
            }}
          />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span
            style={{
              transform: mobileOpen ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none",
            }}
          />
        </button>
      </nav>

      <div
        className="mobile-nav"
        aria-hidden={!mobileOpen}
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-10px)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        {NAV_SECTIONS.map((sec) => (
          <button
            type="button"
            key={sec.id}
            className={`mobile-nav-item${activeSection === sec.id ? " active" : ""}`}
            onClick={() => scrollTo(sec.id)}
          >
            {sec.label}
          </button>
        ))}
        <button
          type="button"
          className="nav-cta-btn"
          style={{ marginTop: 8, justifyContent: "center", padding: "11px 24px", fontSize: 13 }}
          onClick={() => scrollTo("connect")}
        >
          <span>Let&apos;s Talk</span>
        </button>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

function Hero(): ReactElement {
  const typed = useTyper(PROFILE.phrases);

  return (
    <section id="hero" className="hero-section">
      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "6%",
          left: "2%",
          width: "52vw",
          height: "52vw",
          maxWidth: 680,
          maxHeight: 680,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-1) 0%, transparent 70%)",
          animation: "glow1 14s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "2%",
          width: "40vw",
          height: "40vw",
          maxWidth: 540,
          maxHeight: 540,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-2) 0%, transparent 70%)",
          animation: "glow2 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "6%",
          left: "38%",
          width: "34vw",
          height: "34vw",
          maxWidth: 460,
          maxHeight: 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-3) 0%, transparent 70%)",
          animation: "glow3 22s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 880, width: "100%", position: "relative", zIndex: 1 }}>
        <div
          className="hero-badge"
          style={{ animation: "fadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.08s both" }}
        >
          <span className="hero-badge-dot" aria-hidden="true" />
          <span className="hero-badge-text">{PROFILE.status}</span>
        </div>

        <p
          className="hero-hello"
          style={{ animation: "fadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.16s both" }}
        >
          Hello, I&apos;m
        </p>

        <h1 className="hero-name" style={{ marginBottom: 8 }}>
          {[PROFILE.firstName, PROFILE.lastName].map((word, idx) => (
            <span
              key={word}
              style={{ display: "block", overflow: "hidden", lineHeight: 1.02 }}
            >
              <span
                className={idx === 1 ? "at" : undefined}
                style={{
                  display: "block",
                  marginBottom: idx === 0 ? 4 : 0,
                  animation: `revealUp 0.85s cubic-bezier(.16,1,.3,1) ${0.24 + idx * 0.1}s both`,
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div
          className="hero-typer"
          aria-live="polite"
          style={{ animation: "fadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.48s both" }}
        >
          <span style={{ color: "var(--accent)", opacity: 0.8 }}>$ </span>
          <span>{typed}</span>
          <span style={{ animation: "blink 1s step-end infinite", color: "var(--accent)" }}>█</span>
        </div>

        <p
          className="hero-desc"
          style={{ animation: "fadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.58s both" }}
        >
          Software Engineer specializing in TypeScript, React, UI/UX, and Enterprise Java —
          building intuitive developer interfaces, AI/MCP integrations, and resilient WSO2 IAM
          architectures from Colombo, Sri Lanka.
        </p>

        <div
          className="hero-actions"
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.68s both",
          }}
        >
          <a
            href="#projects"
            className="cta-primary"
            id="hero-cta-work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Explore Selected Work</span>
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1V13M7 13L12 8M7 13L2 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="cta-ghost"
            id="hero-cta-github"
          >
            <Icon name="github" size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll to About section"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="mono"
          style={{ fontSize: 10, color: "var(--text-subtle)", letterSpacing: "0.18em" }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "bob 2.4s ease-in-out infinite",
          }}
        />
      </button>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────── */

function Label({ n, text }: LabelProps): ReactElement {
  return (
    <p className="section-label">
      {n} / {text}
    </p>
  );
}

/* ─────────────────────────────────────────────
   ABOUT & TRACK RECORD
───────────────────────────────────────────── */

function About(): ReactElement {
  return (
    <section id="about" className="section-wrap">
      <div className="sa" style={{ marginBottom: 52 }}>
        <Label n="01" text="About" />
        <h2 className="section-heading" style={{ maxWidth: 660 }}>
          Engineering software that{" "}
          <span className="at">connects complex systems</span>{" "}
          with effortless UI/UX.
        </h2>
      </div>

      <div className="about-grid">
        <div className="sa">
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.88,
              color: "var(--text-secondary)",
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            I&apos;m a Software Engineer from{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              Colombo, Sri Lanka
            </strong>{" "}
            in the final stage of my{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              BSc (Hons) in Software Engineering
            </strong>
            , specializing in{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              TypeScript, React, UI/UX engineering, and Enterprise Java
            </strong>{" "}
            (Jakarta EE 10, Hibernate 6, and WSO2 / Asgardeo IAM).
          </p>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.88,
              color: "var(--text-secondary)",
              fontWeight: 300,
              marginBottom: 32,
            }}
          >
            I have shipped production systems including the{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              Inner Mental Wellness
            </strong>{" "}
            EAP platform serving{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              50+ organizations
            </strong>{" "}
            and the{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              33-tool Lexora Workspace
            </strong>{" "}
            web suite, alongside open-source contributions to{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              WSO2 API Manager (wso2/docs-apim)
            </strong>
            , AI/MCP agent integrations, and offline-first React/TypeScript platforms.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {CREDENTIALS.map((c) => {
              const chipStyle: ChipStyle = { "--chip-color": c.color };
              return (
                <span key={c.text} className="ia cred-chip" style={chipStyle}>
                  <span style={{ color: c.color, display: "flex" }}>
                    <Icon name={c.iconKey} size={15} />
                  </span>
                  {c.text}
                </span>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="gc ia"
              data-d={i * 90}
              style={{ padding: "24px 26px", display: "flex", alignItems: "center", gap: 20 }}
            >
              <div
                style={{
                  fontSize: "clamp(34px, 4.6vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.044em",
                  lineHeight: 1,
                  color: "var(--text-primary)",
                  minWidth: 84,
                }}
              >
                {s.value}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14.5,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--text-muted)" }}>
                  {s.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Production & Open-Source Track Record */}
      <div className="track-grid">
        {TRACK_RECORD.map((item, i) => (
          <div
            key={item.title}
            className="gc ia"
            data-d={i * 80}
            style={{ padding: "24px 26px" }}
          >
            <div
              className="mono"
              style={{
                fontSize: 10.5,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {item.tag}
            </div>
            <h3
              style={{
                fontSize: 16.5,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.72,
                color: "var(--text-secondary)",
                fontWeight: 300,
                marginBottom: 14,
              }}
            >
              {item.summary}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {item.stack.map((tech) => (
                <span key={tech} className="mini-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPERTISE
───────────────────────────────────────────── */

function Expertise(): ReactElement {
  return (
    <section id="expertise" className="section-wrap">
      <div className="sa" style={{ marginBottom: 48 }}>
        <Label n="02" text="Expertise" />
        <h2 className="section-heading" style={{ maxWidth: 600 }}>
          What I bring to the <span className="at">architecture.</span>
        </h2>
        <p className="section-lead">
          End-to-end engineering spanning strict TypeScript &amp; React UI/UX, AI/MCP integration
          workflows, WSO2/Asgardeo IAM security, and Enterprise Java backends.
        </p>
      </div>

      <div className="expertise-grid">
        {EXPERTISE.map((item, i) => (
          <div key={item.title} className="expertise-card ia" data-d={i * 90}>
            <div className="card-line" style={{ background: item.gradient }} aria-hidden="true" />
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 15,
                background: "var(--bg-pill)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.iconColor,
                marginBottom: 20,
              }}
            >
              <Icon name={item.iconKey} size={26} />
            </div>

            <h3
              style={{
                fontSize: 18.5,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 10,
                color: "var(--text-primary)",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.76,
                color: "var(--text-secondary)",
                fontWeight: 300,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SELECTED WORK
───────────────────────────────────────────── */

function Projects({ activeCategory, onSelectCategory }: ProjectsProps): ReactElement {
  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-wrap">
      <div className="sa" style={{ marginBottom: 34 }}>
        <Label n="03" text="Selected Work" />
        <h2 className="section-heading">Systems shipped in the open.</h2>
        <p className="section-lead">
          TypeScript, React, AI/MCP, WSO2/Asgardeo IAM, and Enterprise Java systems — every
          repository and deployment below is live, documented, and inspectable.
        </p>
      </div>

      {/* Category Filter */}
      <div className="filter-bar sa" role="tablist" aria-label="Filter projects by domain">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            key={cat}
            className={`filter-tab${activeCategory === cat ? " active" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <article key={p.id} className="gc project-card ia" data-d={i * 60}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 28,
                right: 28,
                height: 1.5,
                background: `linear-gradient(90deg, transparent, ${p.accent}70, transparent)`,
              }}
            />

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 18,
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.eyebrow}
                </span>
                <span
                  className="mono"
                  style={{
                    padding: "4px 12px",
                    borderRadius: "100px",
                    background: `${p.accent}16`,
                    border: `1px solid ${p.accent}45`,
                    fontSize: 11,
                    color: p.accent,
                    letterSpacing: "0.04em",
                    flexShrink: 0,
                  }}
                >
                  {p.status}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span style={{ color: p.accent, display: "flex", flexShrink: 0 }}>
                  <Icon name={p.iconKey} size={24} />
                </span>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    color: "var(--text-primary)",
                  }}
                >
                  {p.name}
                </h3>
              </div>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.74,
                  color: "var(--text-secondary)",
                  fontWeight: 300,
                  marginBottom: 16,
                }}
              >
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t) => (
                  <span key={t} className="mini-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link primary"
                >
                  <span>Live Demo</span>
                  <Icon name="arrowUpRight" size={14} />
                </a>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                >
                  <Icon name="github" size={14} />
                  <span>Source Code</span>
                  <Icon name="arrowUpRight" size={13} />
                </a>
              )}
              {p.secondaryRepoUrl && (
                <a
                  href={p.secondaryRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                >
                  <Icon name="github" size={14} />
                  <span>{p.secondaryRepoLabel ?? "Backend"}</span>
                  <Icon name="arrowUpRight" size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="sa" style={{ textAlign: "center", marginTop: 42 }}>
        <a
          href={`${PROFILE.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-ghost"
        >
          <Icon name="github" size={16} />
          <span>View all 20+ public repositories on GitHub</span>
          <Icon name="arrowUpRight" size={15} />
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TECH STACK
───────────────────────────────────────────── */

function Stack(): ReactElement {
  return (
    <section id="stack" className="section-wrap">
      <div className="sa" style={{ marginBottom: 48 }}>
        <Label n="04" text="Tech Stack" />
        <h2 className="section-heading">Tools of the craft.</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        {TECH_GROUPS.map((g, gi) => (
          <div key={g.group} className="sa" data-d={gi * 70}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="mono" style={{ color: "var(--accent)", fontSize: 14 }}>
                {g.sym}
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {g.group}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {g.items.map((item, ii) => (
                <span key={item} className="tech-pill ia" data-d={gi * 70 + ii * 35}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PHILOSOPHY
───────────────────────────────────────────── */

function Vision(): ReactElement {
  return (
    <section style={{ padding: "96px 6%", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 0%, var(--bg-badge) 50%, transparent 100%)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div className="sa">
          <Label n="05" text="Engineering Philosophy" />
          <div style={{ height: 18 }} />
          <blockquote
            style={{
              fontSize: "clamp(20px, 3.1vw, 32px)",
              fontWeight: 300,
              lineHeight: 1.68,
              letterSpacing: "-0.014em",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ color: "var(--quote-mark)" }}>&ldquo;</span>
            The best systems aren&apos;t built by adding layers — they&apos;re built by those who{" "}
            <em style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
              deeply understand the problem
            </em>
            ,{" "}
            <strong className="at" style={{ fontWeight: 600 }}>
              relentlessly simplify
            </strong>{" "}
            the architecture, and{" "}
            <em style={{ color: "var(--text-secondary)" }}>obsessively ship</em>.
            <span style={{ color: "var(--quote-mark)" }}>&rdquo;</span>
          </blockquote>
          <p
            style={{
              marginTop: 26,
              fontFamily: "'Caveat', cursive",
              fontSize: 22,
              color: "var(--text-muted)",
            }}
          >
            — {PROFILE.name}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONNECT & FOOTER
───────────────────────────────────────────── */

function Connect(): ReactElement {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyUrl = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(PROFILE.website);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.open(PROFILE.linkedin, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="connect" className="section-wrap" style={{ paddingBottom: 72 }}>
      <div className="sa" style={{ textAlign: "center", marginBottom: 42 }}>
        <Label n="06" text="Connect" />
        <h2
          style={{
            fontSize: "clamp(34px, 6.2vw, 68px)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            marginBottom: 20,
            color: "var(--text-primary)",
          }}
        >
          Let&apos;s build something
          <br />
          <span className="at">that lasts.</span>
        </h2>
        <p
          style={{
            fontSize: 16.5,
            color: "var(--text-secondary)",
            fontWeight: 300,
            maxWidth: 520,
            margin: "0 auto 28px",
            lineHeight: 1.75,
          }}
        >
          Open to Software Engineer &amp; Integration Engineering roles — focused on TypeScript,
          React, UI/UX craftsmanship, Enterprise Java, and AI/MCP developer platforms.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="cta-primary"
          >
            <Icon name="linkedin" size={16} />
            <span>Message on LinkedIn</span>
          </a>

          <button
            type="button"
            className="copy-email-btn"
            style={{ margin: 0 }}
            onClick={() => {
              void handleCopyUrl();
            }}
          >
            <Icon name={copied ? "check" : "copy"} size={15} />
            <span>{copied ? "Copied Portfolio URL" : PROFILE.websiteHost}</span>
          </button>
        </div>
      </div>

      <div className="connect-buttons-row">
        {SOCIALS.map((s, i) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel={
              s.name === "LinkedIn" || s.name === "GitHub"
                ? "me noopener noreferrer"
                : "noopener noreferrer"
            }
            className="connect-btn ia"
            data-d={i * 75}
          >
            <Icon name={s.iconKey} size={20} />
            <span style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</span>
            <span className="mono" style={{ fontSize: 11.5, color: "var(--text-muted)" }}>
              {s.handle}
            </span>
          </a>
        ))}
      </div>

      <footer
        style={{
          marginTop: 96,
          paddingTop: 28,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
        }}
      >
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.04em" }}>
          {PROFILE.firstName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <span
          className="mono"
          style={{ fontSize: 11.5, color: "var(--text-muted)" }}
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mono"
          style={{
            background: "transparent",
            border: "none",
            fontSize: 11.5,
            color: "var(--text-secondary)",
            cursor: "pointer",
            padding: "4px 8px",
          }}
        >
          Back to top ↑
        </button>
      </footer>
    </section>
  );
}

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */

export default function Portfolio(): ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const theme = useSyncExternalStore<ThemeMode>(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#06060A" : "#F8F9FC");
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useReveal(activeCategory);

  return (
    <div className="portfolio-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="noise-overlay" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />
      <Particles />

      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setDocumentTheme(theme === "dark" ? "light" : "dark")}
      />

      <main id="main-content" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Expertise />
        <Projects activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        <Stack />
        <Vision />
        <Connect />
      </main>
    </div>
  );
}
