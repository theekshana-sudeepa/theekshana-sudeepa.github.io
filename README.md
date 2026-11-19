<div align="center">

# T. — Theekshana Sudeepa (`theekshana-sudeepa.github.io`)

**Personal Engineering Portfolio — Full-Stack, Enterprise Java, IAM & AI Systems.**  
Built with React 19, Vite 8, first-class Light/Dark theme parity, unified Schema.org Knowledge Graph SEO, and automated GitHub Pages CI/CD.

[![Live Site](https://img.shields.io/badge/Live-theekshana--sudeepa.github.io-4A9DFF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://theekshana-sudeepa.github.io/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Deploy CI](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge)](LICENSE)

</div>

---

## System Architecture

```mermaid
flowchart LR
    subgraph Source["Modular React 19 Source"]
        Data["portfolioData.js<br/>Typed Content Registry"]
        Icons["Icons.jsx<br/>Vector SVG Primitives"]
        Styles["portfolio.css<br/>Light & Dark Design Tokens"]
        App["Portfolio.jsx<br/>Scroll-Spy, Filter & Theme Engine"]
    end

    subgraph Build["Vite 8 Production Pipeline"]
        Entry["index.html<br/>Anti-FOUC Script & Schema Graph"]
        Public["public/<br/>og-image.png, sitemap.xml, robots.txt, llms.txt"]
        Bundle["Static Dist Output<br/>Hashed JS & CSS Chunks"]
    end

    subgraph Delivery["Automated CI/CD & Discovery"]
        GHA["GitHub Actions<br/>deploy.yml Workflow"]
        Pages["GitHub Pages<br/>theekshana-sudeepa.github.io"]
        Crawler["Search & AI Crawlers<br/>Googlebot, Open Graph & llms.txt"]
    end

    Data -->|Hydrate Sections| App
    Icons -->|Render UI Glyphs| App
    Styles -->|Apply Theme Variables| App
    App -->|Compile Modules| Bundle
    Entry -->|Inject SEO and Theme Boot| Bundle
    Public -->|Copy Static Assets| Bundle
    Bundle -->|Upload Artifact on Push| GHA
    GHA -->|Publish Production Build| Pages
    Pages -->|Serve Schema Graph and Preview| Crawler
```

---

## Engineering & Technical SEO Highlights

- **Canonical GitHub Pages SEO (`https://theekshana-sudeepa.github.io/`):** Strict trailing-slash canonical alignment across `<link rel="canonical">`, Open Graph (`profile` + `og:image:secure_url`), Twitter Cards, `sitemap.xml`, `robots.txt`, `site.webmanifest`, and `llms.txt` — with `/assets/` explicitly crawlable so Google's Web Rendering Service executes JS/CSS without obstruction.
- **Unified Schema.org `@graph` Knowledge Graph:** Interlinked JSON-LD entities (`ProfilePage`, `Person`, `WebSite`, and `ItemList` of `SoftwareSourceCode` repositories) paired with a single semantic `<h1>` and full `<noscript>` crawler fallback.
- **Core Web Vitals Optimization:** Non-blocking Google Fonts `<link>` preconnect loading in `index.html` (eliminating render-blocking CSS `@import` chains), extracted static CSS bundle, and zero runtime UI framework overhead.
- **First-Class Light & Dark Theme Parity:** CSS custom properties (`[data-theme="dark"]` and `[data-theme="light"]`) with WCAG AA+ text contrast, persistent `localStorage` state, and an inline pre-paint boot script to prevent flash-of-wrong-theme (FOUC).
- **Interactive Domain Filtering & Scroll-Spy Navigation:** `IntersectionObserver`-driven section tracking, category-filtered showcase of verified open-source work (`AI & Full-Stack`, `Enterprise & IAM`, `Mobile & Systems`), keyboard-accessible controls, and `prefers-reduced-motion` support.

---

## Selected Engineering Work Featured

| Project | Domain | Core Stack | Links |
| :--- | :--- | :--- | :--- |
| **Kasa AI Concierge** | Agentic Commerce · MCP | `Next.js 16` `TypeScript` `Vercel AI SDK` `MCP` | [Live](https://kasa-theta.vercel.app) · [GitHub](https://github.com/theekshana-sudeepa/kasa) |
| **Sillara Retail OS** | Offline-First Multi-Tenant POS | `React 19` `TypeScript` `Express` `Prisma` `MySQL 8` | [GitHub](https://github.com/theekshana-sudeepa/sillara) |
| **AutoBilling Engine** | Idempotent Billing & IaC | `React 19` `TypeScript` `Prisma` `MySQL` `AWS / OCI` | [GitHub](https://github.com/theekshana-sudeepa/autobilling) |
| **GlobalTrade SCM** | Enterprise Supply Chain | `Java` `Jakarta EE 10` `EJB 4.0` `Hibernate 6` `WildFly` | [GitHub](https://github.com/theekshana-sudeepa/globaltrade-scm) |
| **WSO2 Identity Integration** | Enterprise CIAM / OIDC | `WSO2 IS` `OIDC PKCE` `RS256 JWKS` `TypeScript` `Docker` | [GitHub](https://github.com/theekshana-sudeepa/wso2-identity-integration-demo) |
| **Nimithi Platform** | Bilingual Astronomical Engine | `Next.js` `TypeScript` `Swiss Ephemeris` `i18n` | [Live](https://nimithi.com) |
| **Tappsy Messaging Suite** | Real-Time Mobile Messaging | `React Native` `TypeScript` `Java EE` `WebSockets` | [App](https://github.com/theekshana-sudeepa/Tappsy) · [Backend](https://github.com/theekshana-sudeepa/TappsyBackEnd) |
| **Overdraft Roguelite** | Deterministic 60 Hz Systems | `C#` `Unity URP` `Zero-GC` `Spatial Hashing` | [GitHub](https://github.com/theekshana-sudeepa/overdraft-roguelite) |

---

## Repository Structure

```text
theekshana-sudeepa.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages build & deploy workflow
├── public/
│   ├── favicon.svg               # Vector monogram favicon
│   ├── llms.txt                  # Structured AI/LLM search engine index
│   ├── og-image.png              # 1200x630 Open Graph & social preview card
│   ├── robots.txt                # Search crawler directives (full asset rendering)
│   ├── site.webmanifest          # PWA manifest metadata
│   └── sitemap.xml               # Canonical XML sitemap
├── src/
│   ├── components/
│   │   └── Icons.jsx             # Reusable accessible SVG icon primitives
│   ├── data/
│   │   └── portfolioData.js      # Structured profile, track record, projects & stack data
│   ├── styles/
│   │   └── portfolio.css         # Light/Dark CSS custom properties & responsive layout
│   ├── Portfolio.jsx             # Main portfolio application & interactive hooks
│   └── main.jsx                  # React 19 StrictMode root mount
├── LICENSE                       # MIT License
├── eslint.config.js              # ESLint 10 flat configuration (React Hooks + Refresh)
├── index.html                    # Entry document with anti-FOUC boot & Schema.org @graph
├── package.json                  # Project manifest & scripts
├── vercel.json                   # Optional SPA rewrites & security headers
└── vite.config.js                # Vite 8 build configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** `20+`
- **npm** `10+`

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/theekshana-sudeepa/theekshana-sudeepa.github.io.git
cd theekshana-sudeepa.github.io

# 2. Install dependencies
npm install

# 3. Run the Vite development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Verification & Production Build

```bash
# Run ESLint across all modules
npm run lint

# Build optimized production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Theekshana Sudeepa**  
[Portfolio (`theekshana-sudeepa.github.io`)](https://theekshana-sudeepa.github.io/) · [LinkedIn](https://www.linkedin.com/in/theekshana-sudeepa/) · [GitHub](https://github.com/theekshana-sudeepa) · [LexoraTech](https://lexoratech.com)

</div>
