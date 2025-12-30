---
stepsCompleted:
- 1
- 2
- 3
- 4
- 5
- 6
- 7
- 8
inputDocuments:
- _bmad-output/planning-artifacts/prd.md
- _bmad-output/planning-artifacts/ux-design-specification.md
- docs/index.md
workflowType: architecture
project_name: staudt-fusspflege.de
user_name: Deltatree
date: '2025-12-30'
lastStep: 8
status: complete
completedAt: '2025-12-30'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- Navigation & discovery: sticky/section nav to profil, leistungen/podologie, hygiene, kontakt/impressum, datenschutz; anchors and direct jumps.
- Content & trust: clear services, hygiene/sterilization, practitioner profile/credentials; printable/shareable contact/address.
- Contact: tap-to-call/email, opening hours/appointment instructions; contact visible within 1–2 interactions.
- Media: responsive gallery with lightweight enlarge; no layout breakage.
- Accessibility & resilience: usable with JS disabled; semantic headings/landmarks; focus states; contrast; skip link.
- Maintenance: static updates to text/images/privacy; no backend/CMS; deploy as static assets.

**Non-Functional Requirements:**
- Performance: Lighthouse ≥90 (Perf/Accessibility) on mobile; lean CSS/JS; optimized images.
- Accessibility: WCAG 2.1 AA oriented; keyboard nav; alt text; no text baked into images.
- Security/Privacy: no trackers/3rd-party calls without consent; clean UTF-8 Datenschutz page.
- Reliability/Hosting: static hosting; avoid external CDNs for critical assets; graceful no-JS behavior.
- Compatibility: evergreen browsers + Safari iOS; responsive breakpoints ≤480/≤768/≥1024/≥1440.
- Operations: UTF-8 everywhere; simple structure; minimal toolchain.

**Scale & Complexity:**
- Primary domain: static web brochure.
- Complexity level: low (content-led, no dynamic data).
- Estimated architectural components: 5–7 (layout shell, nav/contact bar, content sections, gallery modal, forms-lite if added, privacy page).

### Technical Constraints & Dependencies

- Static hosting only; no backend/CMS; avoid server-side processing.
- Remove legacy jQuery/plugins; minimal vanilla JS only where needed (nav toggle, modal, smooth scroll optional).
- JS-optional core paths (content + contact links must work without JS).
- Asset hygiene: responsive images; avoid heavy carousels/lightboxes; no external trackers.
- Encoding/locale: all UTF-8; German content; privacy page rewrite required.

### Cross-Cutting Concerns Identified

- Accessibility (WCAG AA) across all components: focus management, landmarks, skip link, contrast, tap targets.
- Performance budgets: lean assets, responsive images, minimal JS; avoid layout shift in galleries/modals.
- Responsive behavior: sticky/section nav, contact CTA persistent, anchor offsets for header, breakpoint-tested layouts.
- Privacy/legal hygiene: Datenschutz page structure, no hidden trackers, consent if any 3rd-party added later.
- Maintainability: flat/static structure, clear partials/sections, no build-time secrets; simple edits for non-dev maintainers.

*** End of Project Context Analysis ***


## Starter Template Evaluation

### Primary Technology Domain

Static web brochure (content-led marketing site) with JS-optional behavior and static hosting.

### Starter Options Considered

- Vite 7.3.0 (latest stable; v8.0.0 betas exist): lean dev server/bundler, emits static assets only; requires Node 18+; we can ship zero runtime JS and still use asset pipeline.
- Eleventy 3.1.2 (latest stable; v4.0.0 alpha pre-releases): strong templating/collections but adds build complexity and Node 20+ for upcoming majors; overkill for the current flat brochure.
- Hand-rolled static without a starter: zero tooling overhead but no guardrails for asset optimization or DX; harder to add lint/testing if needed later.

### Selected Starter: Vite 7.3.0 (vanilla)

**Rationale for Selection:**
- Matches static-hosting constraint while giving hot-reload and modern asset handling for CSS/images.
- Lets us keep JS optional (ship minimal or no JS) yet supports modular scripts if we add interactions later.
- Stable release (7.3.0) avoids v8 beta risk; wide community support and minimal boilerplate.

**Initialization Command:**

```bash
npm create vite@7.3.0 staudt-fusspflege -- --template vanilla
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:** ES modules with vanilla JS by default; TypeScript optional; Node 18+ tooling runtime.

**Styling Solution:** Plain CSS entry with PostCSS pipeline available; easy to add CSS variables and responsive utilities without committing to a framework.

**Build Tooling:** Vite dev server with esbuild transforms; Rollup-based production build emitting static assets; hashed filenames and tree-shaking out of the box.

**Testing Framework:** None bundled; Vitest/Cypress can be added explicitly (keeps initial surface minimal).

**Code Organization:** Minimal `index.html` + `src/main.js`/`style.css`; supports splitting sections into modules if needed; static output deployable to any host.

**Development Experience:** Fast HMR for markup/CSS/JS, JSX-free by default; `npm run build` for static output, `npm run preview` for local prod check.

*** End of Starter Template Evaluation ***

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Static-hosting delivery with no backend or server-rendered pipeline; all content and assets built as static output via Vite 7.3.0.
- JS-optional experience: core navigation, contact info, and content must function without JavaScript.
- Remove legacy jQuery/plugins; only vanilla JS modules for needed interactions (nav toggle, gallery modal if retained).
- No authentication, user accounts, or runtime data storage; contact handled via tel/mailto links.

**Important Decisions (Shape Architecture):**
- Routing via in-page anchors (single-page brochure) with proper landmarks and skip link; no SPA router.
- Asset strategy: responsive images (srcset/sizes), compression, hashed asset filenames from Vite build; avoid external CDNs for critical assets.
- CSS organization: plain CSS with logical sections/tokens; optional PostCSS; avoid large frameworks.
- Security headers: strict HTTPS, no third-party trackers; plan CSP tuned to local assets, rel="noopener" on externals.

**Deferred Decisions (Post-MVP):**
- Contact form with serverless handler (only if compliance approved later); would add minimal API and validation.
- Analytics/telemetry (only with explicit consent and privacy review).

### Data Architecture
- Runtime datastore: none (static content only); updates via repo edits/builds.
- Content storage: markdown/HTML fragments in repo; images kept under images/ and photos/ with optimized derivatives for thumbs/full.
- Validation: manual content review; image dimension/size checks in CI if added later.
- Caching: rely on static hosting cache + immutable hashed assets; set shorter TTL for HTML if host supports.

### Authentication & Security
- Authentication/authorization: none (public brochure).
- Transport: enforce HTTPS only; HSTS if host allows.
- Security headers: CSP (self for scripts/styles; allow data: for images only if needed), X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin.
- Tracking/3rd-party: none by default; any future embed requires consent and CSP update.

### API & Communication Patterns
- APIs: none in MVP; no REST/GraphQL endpoints.
- Error handling: static pages only; graceful fallback for missing images with alt text and lazy loading.
- Future extension: if contact form added, prefer serverless POST endpoint with honeypot + rate limit at edge.

### Frontend Architecture
- State management: none; plain DOM interactions only when necessary.
- Component/routing structure: single static page with anchor navigation; semantic landmarks (header/nav/main/footer) and skip link.
- Performance: responsive images, preload key fonts if used, keep JS size minimal; avoid layout shift by reserving image space.
- Bundling: Vite 7.3.0 vanilla build; tree-shakes unused JS; hashed outputs.
- Accessibility: keyboard focus states preserved, visible skip link, ARIA labels on nav toggle/gallery controls if present.

### Infrastructure & Deployment
- Hosting: static host (e.g., Netlify/Cloudflare Pages/GitHub Pages) serving Vite dist/ output; no server runtimes required.
- CI/CD: simple pipeline running npm install + npm run build; optional HTML/CSS lint in future.
- Environment configuration: none required; defaults only.
- Monitoring: rely on host uptime/status; manual Lighthouse checks; defer synthetic monitoring to post-MVP if needed.

### Decision Impact Analysis

**Implementation Sequence:**
1) Build static layout with anchors/landmarks and CSS tokens; ensure JS-free usability.
2) Optimize images (responsive sources + placeholders) and remove legacy jQuery/plugins.
3) Add minimal vanilla JS only where needed (nav toggle/gallery), with ARIA/focus handling.
4) Configure security headers/CSP in hosting config; verify no external calls.
5) Set up CI build + deploy to chosen static host; run Lighthouse/accessibility checks.

**Cross-Component Dependencies:**
- CSP and JS-optional policy constrain any future third-party scripts or form handlers.
- Image optimization and layout spacing prevent CLS across gallery and hero sections.
- Hosting choice must support setting headers and serving hashed assets from Vite build.

*** End of Core Architectural Decisions ***

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:** 5 areas where agents could diverge (naming, structure, formats, communication, process).

### Naming Patterns

**API/Route Naming:** Use plural, kebab/segment paths (e.g., /kontakt, /leistungen). Anchors use kebab-case ids (e.g., #profil, #hygiene). Query params camelCase.

**Code/Asset Naming:** Files and folders kebab-case (e.g., hero-section.css, gallery.js). Variables camelCase; constants UPPER_SNAKE_CASE. IDs/classes kebab-case. Images: lowercase hyphenated with size suffix (e.g., praxis-raum@2x.jpg, praxis-raum-thumb.jpg).

### Structure Patterns

**Project Organization:**
- src/: main.js, styles/, components/ (small DOM helpers), utils/ (pure helpers). Avoid deep nesting.
- public/: static assets that must retain names (favicons, manifest).
- images/ and photos/: originals; build emits optimized hashed copies via Vite.
- Optional tests: co-locate *.test.js alongside modules if Vitest added.

**File Structure Patterns:**
- Entry HTML in project root (index.html) with section anchors; keep semantic landmarks.
- CSS split by domain: styles/base.css (reset/tokens), styles/layout.css (grid/flex), styles/components.css (buttons/nav/gallery), styles/theme.css (colors/spacing tokens).
- JS kept minimal; one main bootstrap in src/main.js; feature scripts under src/components/.

### Format Patterns

**Data/Content:**
- Text content kept as plain HTML/markdown fragments; German UTF-8 only. No inline base64 assets.
- JSON (if used later): camelCase keys, ISO 8601 dates, booleans true/false, null explicit.

**Error/Status (future APIs):**
- Success: { "data": ... }
- Error: { "error": { "code": "string", "message": "human readable" } }
- HTTP status aligns with outcome; do not overload 200 for errors.

### Communication Patterns

**Events (if JS interactions added):**
- Custom events named feature.scope.action (e.g., gallery.image.open, nav.menu.toggle).
- Event detail payload shape: { id, action, meta? } with predictable keys; avoid positional arrays.

**State Handling:**
- Prefer stateless DOM where possible; when state is needed, keep module-local state and avoid globals. Use data-* attributes to bind behavior.

### Process Patterns

**Error Handling:**
- Fail quietly for optional JS features; leave core content usable. Log to console at debug level only during development.
- For modal/gallery: trap focus when open; always provide Escape to close; restore focus to trigger.

**Loading/Progress:**
- Avoid spinners; use CSS-based skeletons only if necessary. Images should use native lazy loading and reserved aspect ratios.

**Accessibility Guardrails:**
- Maintain skip link target (#main), aria-label on nav toggles, and visible focus styles.
- Provide alt text on all images; decorative images use empty alt.

### Enforcement Guidelines

**All AI Agents MUST:**
- Keep JS optional: features degrade gracefully without script execution.
- Adhere to kebab-case filenames/IDs and camelCase variables; do not introduce mixed casing.
- Preserve accessibility landmarks, skip link, and focus-visible styles in all changes.

**Pattern Enforcement:**
- PR review checklist: casing rules, JS-optional behavior, accessibility hooks (skip link, focus states), CSP-safe asset usage.
- If Vitest/linters added later, mirror these rules in config; otherwise enforce via code review and manual checks.

### Pattern Examples

**Good Examples:**
- File: styles/components.css with .cta-button { ... } and focus-visible outline.
- Anchor nav: <a href="#leistungen" class="nav-link">Leistungen</a> with section id="leistungen".
- Lazy image: <img src="/images/praxis-raum-thumb.jpg" loading="lazy" alt="Behandlungsraum" /> with width/height set.

**Anti-Patterns:**
- Adding SPA router or global state library.
- Introducing jQuery/plugins or unscoped inline event handlers.
- Using external trackers/embeds without consent and CSP update.

*** End of Implementation Patterns & Consistency Rules ***

## Project Structure & Boundaries

### Complete Project Directory Structure
```
staudt-fusspflege/
├── package.json
├── vite.config.js
├── index.html
├── README.md
├── .gitignore
├── .editorconfig
├── .github/
│   └── workflows/
│       └── ci.yml                 # build + lint (if added) + vite build
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── icons/                     # app icons if needed
├── src/
│   ├── main.js                    # minimal bootstrap; imports styles and optional JS
│   ├── styles/
│   │   ├── base.css               # reset, typography, skip link, focus styles
│   │   ├── layout.css             # layout grid/flex, sections, responsive breakpoints
│   │   ├── components.css         # nav, buttons, gallery, cards
│   │   └── theme.css              # colors, spacing, typographic scale tokens
│   ├── components/
│   │   ├── nav.js                 # nav toggle (if needed), focus management
│   │   ├── gallery.js             # lightweight modal/zoom; optional, JS-optional fallback
│   │   └── accessibility.js       # helpers (trap focus, restore focus)
│   ├── utils/
│   │   └── dom.js                 # small DOM helpers (qs, add/remove class)
│   └── data/
│       └── copy.md                # optional content fragments (if we externalize text)
├── images/                        # source full-size images (hero, rooms, equipment)
│   ├── hero/
│   ├── rooms/
│   └── hygiene/
├── photos/                        # source galleries; thumbs/ contains downsized thumbs
│   └── thumbs/
└── dist/                          # build output (gitignored)
```

### Architectural Boundaries

**API Boundaries:** None; static site only. No outbound network calls without consent. If a future contact form is added, it must use a serverless endpoint defined outside this repo and respect CSP.

**Component Boundaries:**
- Layout and sections live in index.html with semantic landmarks; styling split across base/layout/components/theme CSS files.
- Optional behavior modules under src/components/ are isolated (nav, gallery). They must not break when JS is disabled.
- Utilities in src/utils/ are pure helpers; no DOM queries outside passed roots.

**Service Boundaries:** No services/backends. Any future service (e.g., form submit) must be encapsulated in a single module and gated by consent/privacy review.

**Data Boundaries:** Content is static; images in images/ and photos/. No runtime storage. Any future JSON data follows camelCase and lives under src/data/.

### Requirements to Structure Mapping

- Profil & Leistungen content: index.html sections with corresponding anchors (#profil, #leistungen); styled via layout.css/components.css; images from images/hero and images/rooms.
- Hygiene info: index.html section with supporting imagery from images/hygiene; leverage base/layout CSS for lists.
- Kontakt/Impressum & Datenschutz: dedicated sections in index.html; legal text sourced inline or from src/data/copy.md; links mailto: and tel:; no forms.
- Gallery: images from photos/ with thumbs/ for previews; optional JS in src/components/gallery.js enhances lightbox; must degrade to plain links.
- Navigation/CTA: anchor nav in index.html; optional nav.js for mobile toggle; focus/skip link in base.css; accessibility.js to manage focus traps.

### Integration Points

**Internal Communication:** Optional custom events (gallery.image.open, nav.menu.toggle) emitted by JS modules; no global mutable state. CSS variables in theme.css used across layout/components.

**External Integrations:** None by default. Any future embed (maps/analytics) requires CSP update, consent flow, and JS-optional fallback link.

**Data Flow:** Static HTML → CSS for layout → optional JS enhances interactions; image assets processed by Vite for hashed outputs; no API calls.

### File Organization Patterns

**Configuration Files:** package.json, vite.config.js, .editorconfig, .gitignore at root; CI config in .github/workflows/ci.yml; no .env required for static MVP.

**Source Organization:** src/ holds JS, CSS, and optional content fragments; components/ for behavior modules; styles/ split by concern; utils/ for small helpers.

**Test Organization:** If tests added, co-locate *.test.js next to modules or under src/__tests__/; exclude from build; run via Vitest when introduced.

**Asset Organization:** public/ for fixed-name assets; images/ and photos/ for originals; Vite emits optimized hashed assets to dist/.

### Development Workflow Integration

**Development Server Structure:** Vite dev server reads index.html and src/main.js; HMR for CSS/JS; static HTML still viewable without JS.

**Build Process Structure:** npm run build outputs dist/ with hashed assets, minified CSS/JS, and processed images if configured.

**Deployment Structure:** Deploy dist/ to static hosting (Netlify/Cloudflare Pages/GitHub Pages). Configure headers (CSP, HSTS, referrer-policy) via host settings; ensure robots/sitemap in public/ are published.

*** End of Project Structure & Boundaries ***

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
- Vite 7.3.0 static build aligns with JS-optional mandate; no backend dependencies or auth to conflict.
- Patterns (kebab-case assets, camelCase vars, JS-optional) match the static brochure architecture.
- Security stance (no trackers, CSP-tight) is consistent with static hosting and privacy goals.

**Pattern Consistency:**
- Naming/structure/format rules cover anchors, files, assets, and optional events; match chosen stack (vanilla + Vite).
- Accessibility guardrails (skip link, focus, alt text) present across patterns and structure.

**Structure Alignment:**
- Directory tree supports decisions: CSS split, minimal JS modules, static assets, no server code.
- Boundaries enforce isolation of optional behaviors and pure utils; dist/ is deployable output.

### Requirements Coverage Validation ✅

**Functional Requirements Coverage:**
- Content sections (profil, leistungen, hygiene, kontakt/impressum, datenschutz) mapped to index.html anchors and CSS.
- Contact via tel/mailto; gallery via photos/ + optional JS lightbox; navigation sticky/anchor-based.

**Non-Functional Requirements Coverage:**
- Performance: lean assets, hashed builds, responsive images, no heavy JS.
- Accessibility: semantic landmarks, skip link, focus styles, ARIA on controls, alt text policy.
- Security/Privacy: no trackers, CSP planned, HTTPS/HSTS, minimal surface.
- Reliability/Hosting: static host with immutable assets; no external CDNs for critical paths.

### Implementation Readiness Validation ✅

**Decision Completeness:**
- Tech choice locked (Vite 7.3.0 vanilla); JS-optional; no backend/auth; CSP guidance noted.

**Structure Completeness:**
- Full tree defined (src/styles/components/utils, public, images/photos, CI stub, dist ignored).

**Pattern Completeness:**
- Naming, structure, format, communication, process patterns specified; examples and anti-patterns included.

### Gap Analysis Results
- Critical: None identified.
- Important: Add host-specific header config snippets (CSP/HSTS) during implementation; add image optimization pipeline (e.g., vite-imagetools or prebuilt assets) before launch.
- Nice-to-Have: Add optional lint/test setup (ESLint/Prettier/Vitest) aligned to casing/accessibility rules.

### Validation Issues Addressed
- Noted future need for CSP/header config and image optimization; flagged as important (non-blocking) actions for implementation phase.

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context analyzed
- [x] Scale/complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**✅ Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements→structure mapping complete

### Architecture Readiness Assessment
- Overall Status: READY FOR IMPLEMENTATION
- Confidence Level: high (static scope, clear patterns, minimal dependencies)

**Key Strengths:**
- JS-optional, privacy-first static architecture with lean asset strategy.
- Explicit naming/structure rules and accessibility guardrails to keep agents aligned.
- Simple deploy story (static host, Vite build) with clear boundaries and mapping.

**Areas for Future Enhancement:**
- Harden CSP/HSTS/headers per host; add automated image optimization; optional lint/test tooling.

**Implementation Handoff:**
- Follow documented decisions/patterns; keep JS optional; preserve accessibility landmarks.
- First step: initialize via `npm create vite@7.3.0 staudt-fusspflege -- --template vanilla`, then scaffold index.html/sections per mapping.

*** End of Architecture Validation Results ***

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2025-12-30
**Document Location:** _bmad-output/planning-artifacts/architecture.md

### Final Architecture Deliverables

**📋 Complete Architecture Document**
- All architectural decisions documented with specific versions
- Implementation patterns ensuring AI agent consistency
- Complete project structure with all files and directories
- Requirements to architecture mapping
- Validation confirming coherence and completeness

**🏗️ Implementation Ready Foundation**
- 12 architectural decisions made
- 15 implementation patterns defined
- 7 architectural components specified
- 10 requirements fully supported

**📚 AI Agent Implementation Guide**
- Technology stack with verified versions
- Consistency rules that prevent implementation conflicts
- Project structure with clear boundaries
- Integration patterns and communication standards

### Implementation Handoff

**For AI Agents:**
This architecture document is your complete guide for implementing staudt-fusspflege.de. Follow all decisions, patterns, and structures exactly as documented.

**First Implementation Priority:**
`npm create vite@7.3.0 staudt-fusspflege -- --template vanilla`

**Development Sequence:**
1) Initialize project using documented starter template.
2) Set up dev environment and copy baseline index.html/sections per mapping.
3) Implement CSS structure (base/layout/components/theme) and anchors with JS-free usability.
4) Add optional JS modules (nav, gallery) with JS-optional degradation.
5) Configure hosting headers (CSP/HSTS) and run Lighthouse/accessibility checks.

### Quality Assurance Checklist

**✅ Architecture Coherence**
- [x] Decisions align with static, JS-optional, privacy-first approach
- [x] Patterns and structure are consistent with Vite vanilla stack

**✅ Requirements Coverage**
- [x] Functional sections mapped to structure
- [x] NFRs (performance, accessibility, privacy) covered

**✅ Implementation Readiness**
- [x] Patterns and examples provided
- [x] Project tree defined and bounded

*** End of Architecture Completion Summary ***

