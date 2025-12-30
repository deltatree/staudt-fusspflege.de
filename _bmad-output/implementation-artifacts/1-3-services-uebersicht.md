# Story 1.3: Services-Übersicht

Status: review

## Story

As a Besucher,
I want eine kompakte Leistungen-Übersicht,
so that ich verstehe, welche Behandlungen angeboten werden.

## Acceptance Criteria

1. Leistungen klar betitelt mit kurzen Beschreibungen.
2. Darstellung responsiv, lesbar auf mobil/desktop.

## Tasks / Subtasks

- [x] Inhalte für Leistungen strukturieren (AC 1)
- [x] Responsive Layout prüfen (AC 2)

## Dev Notes

- Verwende semantische Listen/Karten; kurze Texte.
- Sicherstellen: keine Tabellen, kein Overflow auf Mobil.

### Project Structure Notes

- Section in index.html; Styles in components.css/layout.css.

### References

- Quelle: epics.md Story 1.3

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Added drei Service-Karten mit Titeln und kurzen Beschreibungen, semantisch als Artikel.
- Markierte Services-Grid als responsive (auto-fit) fuer mobile/desktop Lesbarkeit.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Strukturierte Leistungen-Section mit responsive Grid und Tests fuer Inhalt/Responsive-Markierung hinzugefügt.
