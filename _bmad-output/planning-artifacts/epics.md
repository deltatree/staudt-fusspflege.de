---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
---

# staudt-fusspflege.de - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for staudt-fusspflege.de, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Besucher can access primary sections (Profil, Leistungen/Podologie, Hygiene, Kontakt/Impressum, Datenschutz) via sticky/section navigation on all breakpoints.
FR2: Besucher can reach contact information (phone, email, address) within two interactions from any entry point.
FR3: Besucher can jump directly to key sections from the navigation without losing context on mobile or desktop.
FR4: Besucher can view a concise services overview with clear descriptions of treatments offered.
FR5: Besucher can view a hygiene/quality section summarizing sterilization and cleanliness practices.
FR6: Besucher can view practitioner profile and qualifications to establish trust.
FR7: Angehörige can find address, directions/parking or accessibility notes needed to bring others to the practice.
FR8: Besucher can review detailed hygiene/sterilization process information presented in an easy-to-read format.
FR9: Besucher can access an up-to-date Datenschutz/Privacy page in German with clear structure and no hidden trackers.
FR10: Ärzte/Partner can see treatment spectrum and qualifications sufficient to support referrals or cooperation.
FR11: Mobile Besucher can initiate a phone call via tap-to-call from contact info.
FR12: Besucher can initiate an email via tap/click mail link from contact info.
FR13: Besucher can find opening hours or appointment instructions (e.g., call for appointment) without ambiguity.
FR14: Angehörige can access a shareable contact/address block suitable for passing to others.
FR15: Besucher can browse practice or treatment-related images in a gallery without layout breakage on mobile.
FR16: Besucher can open a larger view of gallery images (e.g., lightbox or equivalent) while maintaining responsiveness.
FR17: Screen reader users can navigate semantic headings and landmarks, with a skip-to-content option.
FR18: Keyboard users can access all interactive elements with visible focus states.
FR19: Users with low vision can read text with sufficient contrast and scalable font sizes without breaking layout.
FR20: Users can access core content and contact info with JavaScript disabled (progressive enhancement).
FR21: Praxis maintainers can update text content and images via straightforward static file changes (no CMS/build pipeline required).
FR22: Praxis maintainers can update the privacy page content without breaking layout or encoding.
FR23: The site can be deployed as static assets without backend or runtime service dependencies.

### NonFunctional Requirements

NFR1: Performance — static pages load fast; lean CSS/JS; inline critical CSS where sensible; target Lighthouse Performance ≥ 90 on mobile.
NFR2: Accessibility — WCAG 2.1 AA oriented: semantic landmarks, heading structure, skip link, visible focus, adequate contrast, alt text; core usable with JS disabled.
NFR3: Security & Privacy — no trackers or third-party calls without explicit consent; HTTPS-only assets; privacy page accurate, clear, and in UTF-8.
NFR4: Reliability & Hosting — serves as static assets; avoid external CDNs for critical assets; graceful no-JS behavior preserved.
NFR5: Compatibility — evergreen browsers plus Safari on iOS; responsive across defined breakpoints; JS optional for core content.
NFR6: Operations & Maintainability — simple asset structure; UTF-8 everywhere; no build-time secrets; content editable via static files.

### Additional Requirements

- Use Vite 7.3.0 (vanilla) as starter; Node 18+ tooling; emit static assets for static hosting.
- Keep core experience JS-optional; remove legacy jQuery/plugins; no backend/CMS/auth; static one-page brochure with anchor routing.
- Asset strategy: responsive images with srcset/sizes, hashed filenames from build, avoid external CDNs for critical assets.
- Security headers and privacy: HTTPS, CSP tuned to local assets, HSTS where available, rel="noopener" on externals, no third-party trackers without consent.
- Accessibility guardrails: skip link, semantic landmarks, visible focus states, tap targets ≥44px, ARIA on controls (nav toggle/gallery) if JS present.
- Responsive plan: mobile-first with breakpoints ≤480, ≤768, ≥1024, ≥1440; sticky/section nav; anchored sections with offset for sticky header.
- Contact UX: persistent contact CTA (tel/mail) across breakpoints; contact reachable within one to two taps; JS-optional tel/mail triggers.
- Gallery UX: responsive grid with lightweight modal; focus trap and ESC/overlay close; degrades to plain links if JS disabled; no heavy carousels.
- Hosting/CI: deploy static dist/ to static host (Netlify/Cloudflare Pages/GitHub Pages); plan headers config for CSP/HSTS; simple npm install/build pipeline.
- Future/Deferred: contact form and analytics only with consent and privacy review; add image optimization tooling and lint/tests later if needed.

### FR Coverage Map

FR1: Epic 1 - Sticky/section navigation to primary sections.
FR2: Epic 2 - Contact info reachable within two interactions.
FR3: Epic 1 - Anchor jumps without losing context.
FR4: Epic 1 - Services overview clearly presented.
FR5: Epic 1 - Hygiene/quality section summarized.
FR6: Epic 1 - Practitioner profile and qualifications visible.
FR7: Epic 1 - Address/directions/parking notes accessible.
FR8: Epic 1 - Detailed hygiene/sterilization info is readable.
FR9: Epic 5 - Up-to-date Datenschutz page in German.
FR10: Epic 1 - Treatment spectrum/qualifications for referrals.
FR11: Epic 2 - Tap-to-call works from contact info.
FR12: Epic 2 - Email link works from contact info.
FR13: Epic 2 - Opening hours/appointment instructions clear.
FR14: Epic 2 - Shareable contact/address block available.
FR15: Epic 3 - Responsive gallery browsing.
FR16: Epic 3 - Enlarged image view without breakage.
FR17: Epic 4 - Semantic headings/landmarks with skip link.
FR18: Epic 4 - Keyboard focus visible on all interactives.
FR19: Epic 4 - Contrast and scalable text without layout break.
FR20: Epic 4 - Core content/contact usable with JS disabled.
FR21: Epic 5 - Static updates to text/images without CMS.
FR22: Epic 5 - Privacy page editable without breaking layout/encoding.
FR23: Epic 5 - Static deployable assets without backend/runtime.

## Epic List

### Epic 1: Praxis-Auftritt & Vertrauen
Ergebnis: Besucher sehen klar, wer ihr seid, was ihr anbietet, Hygiene und Qualifikationen – mit sofortiger Orientierung über Sections.
**FRs covered:** FR1, FR3, FR4, FR5, FR6, FR7, FR8, FR10

## Epic 1: Praxis-Auftritt & Vertrauen

Ergebnis: Besucher sehen klar, wer ihr seid, was ihr anbietet, Hygiene und Qualifikationen – mit sofortiger Orientierung über Sections.

### Story 1.1: Vite Starter Setup
As a Entwickler,
I want das Projekt mit dem Vite 7.3.0 Vanilla Starter aufsetzen,
So that eine schlanke statische Basis für das Redesign bereitsteht.

**Acceptance Criteria:**

**Given** ich initialisiere das Repo
**When** ich `npm create vite@7.3.0 staudt-fusspflege -- --template vanilla` ausführe
**Then** liegt ein lauffähiges Projektgerüst vor (package.json, src/, index.html)
**And** Abhängigkeiten sind installiert; `npm run dev` startet lokal, `npm run build` erzeugt dist/
**And** keine jQuery/Legacy-Plugins werden eingebunden; JS ist minimal/optional

### Story 1.2: Sections und Navigation
As a Besucher,
I want sticky/section navigation with anchors to all Kernbereiche,
So that ich schnell zu Profil, Leistungen, Hygiene, Kontakt und Datenschutz springen kann.

**Acceptance Criteria:**

**Given** die Seite ist geladen
**When** ich die Navigation sehe
**Then** sind Links/Anchors zu Profil, Leistungen, Hygiene, Kontakt/Impressum, Datenschutz vorhanden
**And** ein Skip-Link erlaubt Direktjump zum Hauptinhalt
**And** die Sticky-Navigation funktioniert responsiv (mobile/desktop) ohne Layoutbruch

### Story 1.3: Services-Übersicht
As a Besucher,
I want eine kompakte Leistungen-Übersicht,
So that ich verstehe, welche Behandlungen angeboten werden.

**Acceptance Criteria:**

**Given** ich bin im Abschnitt Leistungen
**When** ich die Inhalte lese
**Then** sehe ich klar betitelte Leistungen mit kurzen Beschreibungen
**And** die Darstellung ist responsiv und bleibt lesbar auf mobile/desktop

### Story 1.4: Hygiene & Qualität
As a Besucher,
I want einen Abschnitt zu Hygiene und Sterilisation,
So that ich Vertrauen in die Praxisqualität habe.

**Acceptance Criteria:**

**Given** ich scrolle zum Hygiene-Abschnitt
**When** ich die Inhalte lese
**Then** finde ich klare Aussagen zu Sterilisation/Cleanliness
**And** der Abschnitt ist strukturiert und leicht lesbar (Listen/Absätze)

### Story 1.5: Profil & Qualifikationen
As a Besucher,
I want das Profil und die Qualifikationen der Praxis zu sehen,
So that ich Vertrauen in die Behandler aufbauen kann.

**Acceptance Criteria:**

**Given** ich bin im Profil-Abschnitt
**When** ich die Informationen lese
**Then** sehe ich Namen/Rollen/Qualifikationen
**And** Bilder (falls vorhanden) sind DSGVO-konform eingebunden

### Story 1.6: Anfahrt & Hinweise
As a Angehöriger,
I want Adresse, Hinweise zu Parken/Barrierefreiheit,
So that ich jemanden sicher zur Praxis bringen kann.

**Acceptance Criteria:**

**Given** ich suche Anfahrt/Adressinfos
**When** ich den Kontaktbereich nutze
**Then** finde ich Adresse, evtl. Karten-Link, Hinweise zu Parken/Zugang
**And** Kontaktblock ist teil-/kopierbar ohne Layoutbruch

### Epic 2: Kontakt & Öffnungszeiten
Ergebnis: Nutzer finden Kontakt/Adresse/Zeiten sofort und können in 1–2 Interaktionen anrufen oder mailen.
**FRs covered:** FR2, FR11, FR12, FR13, FR14

## Epic 2: Kontakt & Öffnungszeiten

Ergebnis: Nutzer finden Kontakt/Adresse/Zeiten sofort und können in 1–2 Interaktionen anrufen oder mailen.

### Story 2.1: Kontakt-CTA (Tel/Mail)
As a mobiler Besucher,
I want tel/mail-CTAs jederzeit sichtbar,
So that ich in 1–2 Taps anrufen oder mailen kann.

**Acceptance Criteria:**

**Given** ich bin auf beliebiger Abschnitt
**When** ich den Kontakt-CTA nutze
**Then** öffnet sich der Tel-Handler (Tap-to-call) oder Mailto sauber
**And** CTA bleibt sichtbar/sticky auf mobilen Breakpoints
**And** funktioniert auch ohne JS (reine Links)

### Story 2.2: Öffnungszeiten & Termin-Hinweis
As a Besucher,
I want klare Öffnungszeiten und Terminhinweis,
So that ich weiß, wann und wie ich einen Termin bekomme.

**Acceptance Criteria:**

**Given** ich lese den Kontaktbereich
**When** ich nach Zeiten/Termininfo schaue
**Then** sehe ich Öffnungszeiten und klaren Hinweis „Termin per Anruf/Mail“
**And** Angaben sind auf mobil/desktop lesbar, keine Tabellen die brechen

### Story 2.3: Adressblock teilbar
As a Angehöriger,
I want einen teilbaren Kontakt-/Adressblock,
So that ich Infos leicht weitergeben kann.

**Acceptance Criteria:**

**Given** ich sehe den Kontaktblock
**When** ich kopieren/teilen möchte
**Then** sind Adresse, Telefon, Mail klar gruppiert
**And** ein Karten-/Routenlink ist optional vorhanden, ohne Layoutbruch

### Epic 3: Galerie & Medien
Ergebnis: Nutzer können Praxisbilder responsiv ansehen und vergrößern, ohne Layout-Brüche.
**FRs covered:** FR15, FR16

## Epic 3: Galerie & Medien

Ergebnis: Nutzer können Praxisbilder responsiv ansehen und vergrößern, ohne Layout-Brüche.

### Story 3.1: Responsive Galerie-Grid
As a Besucher,
I want eine responsive Galerie mit Thumbs,
So that ich Bilder schnell überblicken kann.

**Acceptance Criteria:**

**Given** ich bin im Galerieabschnitt
**When** ich die Seite auf mobil/desktop sehe
**Then** passt sich das Grid an (kein horizontaler Scroll)
**And** Thumbs sind optimiert (Größe/Aspect Ratio) und laden lazy

### Story 3.2: Bildvergrößerung ohne Bruch
As a Besucher,
I want Bilder vergrößern können,
So that ich Details sehen kann.

**Acceptance Criteria:**

**Given** ich klicke/tappe ein Bild
**When** die Vergrößerung öffnet
**Then** sehe ich das Bild groß ohne Layoutbruch
**And** ich kann schließen via Close/ESC/Overlay-Klick
**And** Fokus wird beim Schließen zum Trigger zurückgeführt (a11y)
**And** Fallback: Ohne JS führt Link zu einer statischen Bildansicht

### Epic 4: Barrierefreiheit & Resilienz
Ergebnis: Seite bleibt zugänglich, kontrastreich, tastaturbedienbar und nutzbar ohne JS.
**FRs covered:** FR17, FR18, FR19, FR20

## Epic 4: Barrierefreiheit & Resilienz

Ergebnis: Seite bleibt zugänglich, kontrastreich, tastaturbedienbar und nutzbar ohne JS.

### Story 4.1: Semantik & Skip-Link
As a Screenreader-Nutzer,
I want klare Landmarks und Skip-to-content,
So that ich schnell zum Hauptinhalt springen kann.

**Acceptance Criteria:**

**Given** die Seite lädt
**When** ich per Tastatur/Screenreader navigiere
**Then** finde ich header/nav/main/footer Landmarks
**And** ein sichtbarer Skip-Link führt zum Hauptinhalt
**And** Überschriften-Hierarchie ist logisch (keine Sprünge)

### Story 4.2: Tastaturbedienung & Fokus
As a Tastaturnutzer,
I want sichtbare Fokuszustände und bedienbare Controls,
So that ich ohne Maus alles nutzen kann.

**Acceptance Criteria:**

**Given** ich tabbe durch die Seite
**When** ich Navigation, Links, Buttons, Gallery-Controls nutze
**Then** ist der Fokus sichtbar (kontrastreich)
**And** es gibt keine Tastaturfallen; ESC schließt Modals; Fokus kehrt zurück

### Story 4.3: Kontrast & Lesbarkeit
As a Nutzer mit niedriger Sehkraft,
I want ausreichenden Kontrast und skalierbare Schrift,
So that ich Inhalte ohne Zoomen/Scrollbruch lesen kann.

**Acceptance Criteria:**

**Given** ich sehe Text und UI-Elemente
**When** ich auf mobilen und Desktop-Breakpoints lese
**Then** erfüllen Text/Controls mindestens AA-Kontrast
**And** Text skaliert ohne Layoutbruch (kein abgeschnittenes UI)

### Story 4.4: No-JS Resilienz
As a Nutzer ohne JS,
I want Kerninhalte und Kontakt nutzbar,
So that ich trotzdem alle Infos bekomme.

**Acceptance Criteria:**

**Given** JS ist deaktiviert
**When** ich die Seite nutze
**Then** sind Inhalte, Navigation (Anchors) und tel/mail Links erreichbar
**And** Gallery-Links führen zu statischen Ansichten statt Fehlern

### Epic 5: Recht & Betrieb
Ergebnis: Datenschutz-Seite korrekt, Inhalte einfach pflegbar, statisch deploybar ohne Backend.
**FRs covered:** FR9, FR21, FR22, FR23

## Epic 5: Recht & Betrieb

Ergebnis: Datenschutz-Seite korrekt, Inhalte einfach pflegbar, statisch deploybar ohne Backend.

### Story 5.1: Datenschutz-Seite aktualisiert
As a Besucher,
I want eine aktuelle, klare Datenschutz-Seite,
So that ich Transparenz über Datenverarbeitung habe.

**Acceptance Criteria:**

**Given** ich öffne den Datenschutz-Abschnitt/Seite
**When** ich die Inhalte lese
**Then** sind sie in sauberem UTF-8, strukturiert, ohne versteckte Tracker
**And** Links/Abschnitte sind klar benannt; letzte Aktualisierung sichtbar

### Story 5.2: Content-Pflege ohne CMS
As a Praxis-Maintainer,
I want Texte/Bilder statisch bearbeiten können,
So that ich ohne Backend oder Build-Komplexität aktualisiere.

**Acceptance Criteria:**

**Given** ich bearbeite die Dateien
**When** ich Texte/Bilder anpasse
**Then** bleibt die Seitenstruktur stabil
**And** Encoding bleibt UTF-8; keine Build- oder Runtime-Abhängigkeiten nötig

### Story 5.3: Statisches Deployment
As a Betreiber,
I want die Seite statisch deployen können,
So that kein Backend/Runtime erforderlich ist.

**Acceptance Criteria:**

**Given** der Build liegt als statische Assets vor
**When** ich auf den Host deploye (Netlify/Cloudflare Pages/GitHub Pages)
**Then** funktioniert die Seite ohne Serverlogik
**And** Headers (CSP/HSTS/Referrer-Policy) sind konfigurierbar im Hosting
