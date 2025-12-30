# Story 1.2: Sections und Navigation

Status: review

## Story

As a Besucher,
I want sticky/section navigation with anchors to all Kernbereiche,
so that ich schnell zu Profil, Leistungen, Hygiene, Kontakt und Datenschutz springen kann.

## Acceptance Criteria

1. Anchors/Links zu Profil, Leistungen, Hygiene, Kontakt/Impressum, Datenschutz vorhanden.
2. Skip-Link ermöglicht Direktjump zum Hauptinhalt.
3. Sticky-Navigation funktioniert responsiv (mobile/desktop) ohne Layoutbruch.

## Tasks / Subtasks

- [x] Section-IDs und Nav-Anchors anlegen (AC 1)
- [x] Skip-Link implementieren/testen (AC 2)
- [x] Sticky-Nav Verhalten mobile/desktop verifizieren (AC 3)

## Dev Notes

- JS optional: Navigation/Skip muss ohne JS funktionieren.
- A11y: korrekte Landmarken, Fokus sichtbar.

### Project Structure Notes

- Navigation in index.html; Styles in styles/layout.css/components.css.

### References

- Quelle: epics.md Story 1.2

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Implemented accessible sticky navigation with anchors to Profil, Leistungen, Hygiene, Kontakt, Datenschutz and skip link to main content.
- Added responsive layout styles and hero/sections content rendered via Vite entry.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Added sticky navigation, skip link, and section anchors with responsive styling; verified via Vitest and Vite build.
