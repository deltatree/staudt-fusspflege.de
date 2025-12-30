stepsCompleted:
	- step-01-init
	- step-02-discovery
	- step-03-success
	- step-04-journeys
	- step-05-domain (skipped)
	- step-06-innovation (skipped)
	- step-07-project-type
	- step-08-scoping
	- step-09-functional
	- step-10-nonfunctional
	- step-11-complete
inputDocuments: []
workflowType: 'prd'
lastStep: 11
---

# Product Requirements Document - staudt-fusspflege.de

**Author:** Deltatree
**Date:** 2025-12-30

## Executive Summary

Redesign staudt-fusspflege.de as a modern, trustworthy, mobile-first brochure site for the existing podology practice. Keep content scope intact while upgrading UX, responsiveness, accessibility, performance, and legal hygiene. Preserve static hosting and low operational complexity; eliminate legacy jQuery/plugins and legacy visual styling.

### What Makes This Special

- Trust- and care-first visual language for a medical service (clean, calm, legible, mobile-friendly).
- Fast, lightweight, static delivery with zero backend/CMS overhead.
- Modernized accessibility (WCAG 2.1 AA oriented) and a clean, UTF-8 DSGVO page without hidden trackers.
- Maintainable front-end stack (HTML5, modular CSS with Flex/Grid, minimal vanilla JS).

## Project Classification

**Technical Type:** web_app (static brochure)
**Domain:** healthcare (brochure/low-risk)
**Complexity:** low (content-led, no dynamic features)
**Project Context:** Brownfield - extending/rebuilding existing static site

- Existing stack: legacy static HTML, fixed 860px layout, jQuery 1.x + plugins, non-responsive, legacy privacy page.
- Target improvements: responsive layouts (mobile-first, multiple breakpoints), modern CSS, remove legacy JS/plugins, performance ≥ 90 Lighthouse (Perf & Accessibility), WCAG 2.1 AA-oriented, refreshed typography/colors/spacing, rewritten DSGVO page, optimized assets, clear contact access, sticky/mobile nav.
- Non-goals: no booking system, no CMS/backend, no accounts, no multilingual (for now), no SEO restructure beyond best practices.
- Deliverables: new UI/UX design, responsive HTML/CSS/JS, updated privacy page, documented structure, readiness for static hosting.

## Success Criteria

### User Success
- Site is fully usable and legible on mobile, tablet, desktop (no horizontal scroll, readable text, tappable targets).
- Key info (contact, address, services, hygiene standards) is discoverable within 2 taps/scroll sections on mobile.
- Clear trust signals: hygienic practices and qualifications are visible without friction.
- Contact paths obvious: phone/mail links immediately accessible on mobile.

### Business Success
- Modernized, trustworthy brand perception (clinic-quality, calm, professional).
- No operational overhead increase: remains a static brochure site (no CMS/backends).
- Content clarity uplift without scope creep; same core content, better structure.

### Technical Success
- Performance: Lighthouse ≥ 90 (Performance & Accessibility) on mobile.
- Accessibility: WCAG 2.1 AA-oriented (contrast, focus states, landmarks, alt text, keyboard nav).
- Responsiveness: breakpoints ≤480, ≤768, ≥1024, ≥1440 with fluid layouts.
- Stack hygiene: remove jQuery/plugins; modern HTML5, modular CSS (Flex/Grid), minimal vanilla JS only if needed.
- Legal: Datenschutz page rewritten in clean UTF-8, no hidden trackers/third-party calls without consent.
- Assets: compressed images (e.g., WebP optional), organized UI vs. content photos, consistent alt text.

### Quality Gates
- Cross-browser/device smoke: recent Chrome/Firefox/Safari + iOS/Android viewport set.
- No regressions on existing content; links and anchors intact.

## User Journeys

### Besucher (mobil)
- Trigger: Sucht Podologie-Termin/Info unterwegs.
- Path: Öffnet Start → sieht Praxis/Vertrauen → scrollt zu Leistungen/Hygiene → tippt Kontakt → startet Call/Mail.
- Success: Findet in <2 Scrolls die Kontaktinfos; versteht Leistungen/Hygiene ohne Zoomen.

### Angehörige
- Trigger: Sucht für Eltern/Partner verlässliche Praxis.
- Path: Start → prüft Qualifikation/Hygiene → checkt Adresse/Erreichbarkeit → teilt Kontaktinfos.
- Success: Vertrauensaufbau durch klare Hygiene-/Quali-Infos; Kontakt/Anfahrt schnell teilbar.

### Ärzte/Partner
- Trigger: Prüft Kooperation/Überweisung.
- Path: Start → Profil/Qualifikation → Hygiene/Behandlungsspektrum → Kontakt.
- Success: Klare Quali-/Hygiene-Aussagen, schnelle Kontaktoption; keine Barrieren.

### Praxis (Maintainer)
- Trigger: Seltene Updates (Inhalte/Bilder/DSGVO).
- Path: Bearbeitet statische Assets/HTML/CSS; keine Build- oder Plugin-Hürden.
- Success: Minimaler Wartungsaufwand, klare Struktur, kein Legacy-JS.

## Project-Type Deep Dive (web_app)

- Architecture: Static MPA/one-pager, no SPA.
- Browser support: Evergreen + Safari (iOS); no legacy IE.
- SEO: Basic on-page best practices only.
- Real-time: None.
- Accessibility: WCAG 2.1 AA oriented (already in success criteria).

## Project Scoping & Phased Development

### MVP Strategy & Philosophy
- Type: Simple MVP (static redesign) using Problem-Solving/Experience mix — deliver modern responsive brochure, trust signals, and clear contact.

### Must-Haves (MVP)
- Responsive layout with defined breakpoints; clear contact (tel/mail) always reachable.
- Services/hygiene/qualifications clearly presented; trust visuals; profile info.
- Rewritten Datenschutz (UTF-8, DSGVO, no hidden trackers/3rd-party calls without consent).
- Performance/Accessibility targets (Lighthouse ≥ 90 Perf/Accessibility); WCAG 2.1 AA oriented.
- No CMS/backend; minimal JS; removal of legacy jQuery/plugins; modern HTML5 + modular CSS (Flex/Grid).
- Asset hygiene: compressed images, alt texts, organized UI vs. content photos.

### Nice-to-Haves (Post-MVP)
- Gallery polish and tasteful micro-animations.
- Multilingual support; booking/CMS if ever needed.
- Analytics with proper consent; advanced image optimizations (WebP, responsive images).

### Phasing
- Phase 1 (MVP): Responsive redesign, content clarity, trust/hygiene, contact clarity, new privacy page, perf/a11y targets.
- Phase 2 (Growth): Gallery enhancements, micro-animations, refined typography/spacing system, expanded content polish.
- Phase 3 (Expansion): Optional CMS/booking/multilingual and consented analytics if strategy changes.

## Functional Requirements

### Navigation & Discovery
- FR1: Besucher can access primary sections (Profil, Leistungen/Podologie, Hygiene, Kontakt/Impressum, Datenschutz) via sticky/section navigation on all breakpoints.
- FR2: Besucher can reach contact information (phone, email, address) within two interactions from any entry point.
- FR3: Besucher can jump directly to key sections from the navigation without losing context on mobile or desktop.

### Content & Services Information
- FR4: Besucher can view a concise services overview with clear descriptions of treatments offered.
- FR5: Besucher can view a hygiene/quality section summarizing sterilization and cleanliness practices.
- FR6: Besucher can view practitioner profile and qualifications to establish trust.
- FR7: Angehörige can find address, directions/parking or accessibility notes needed to bring others to the practice.

### Trust & Compliance
- FR8: Besucher can review detailed hygiene/sterilization process information presented in an easy-to-read format.
- FR9: Besucher can access an up-to-date Datenschutz/Privacy page in German with clear structure and no hidden trackers.
- FR10: Ärzte/Partner can see treatment spectrum and qualifications sufficient to support referrals or cooperation.

### Contact & Conversion
- FR11: Mobile Besucher can initiate a phone call via tap-to-call from contact info.
- FR12: Besucher can initiate an email via tap/click mail link from contact info.
- FR13: Besucher can find opening hours or appointment instructions (e.g., call for appointment) without ambiguity.
- FR14: Angehörige can access a shareable contact/address block suitable for passing to others.

### Media & Gallery
- FR15: Besucher can browse practice or treatment-related images in a gallery without layout breakage on mobile.
- FR16: Besucher can open a larger view of gallery images (e.g., lightbox or equivalent) while maintaining responsiveness.

### Accessibility & Usability
- FR17: Screen reader users can navigate semantic headings and landmarks, with a skip-to-content option.
- FR18: Keyboard users can access all interactive elements with visible focus states.
- FR19: Users with low vision can read text with sufficient contrast and scalable font sizes without breaking layout.
- FR20: Users can access core content and contact info with JavaScript disabled (progressive enhancement).

### Maintenance & Operations
- FR21: Praxis maintainers can update text content and images via straightforward static file changes (no CMS/build pipeline required).
- FR22: Praxis maintainers can update the privacy page content without breaking layout or encoding.
- FR23: The site can be deployed as static assets without backend or runtime service dependencies.

## Non-Functional Requirements

### Performance
- Static pages load fast; prioritize lean CSS/JS, inline critical CSS where sensible, defer non-essential JS; target Lighthouse Performance ≥ 90 on mobile.

### Accessibility
- WCAG 2.1 AA oriented: semantic landmarks, heading structure, skip link, visible focus, adequate contrast, alt text, no text baked into images, ARIA only when necessary.
- Core content and contact remain usable with JS disabled.

### Security & Privacy
- No trackers or third-party calls without explicit consent; HTTPS-only assets.
- Privacy page remains accurate, clear, and in UTF-8.

### Reliability & Hosting
- Serves as static assets; avoid external CDNs for critical assets; graceful no-JS behavior.

### Compatibility
- Evergreen browsers plus Safari on iOS; responsive across defined breakpoints; JS optional for core content.

### Operations & Maintainability
- Simple asset structure; UTF-8 everywhere; no build-time secrets; content editable via static files.
