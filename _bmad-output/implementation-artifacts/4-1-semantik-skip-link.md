# Story 4.1: Semantik & Skip-Link

Status: review

## Story

As a Screenreader-Nutzer,
I want klare Landmarks und Skip-to-content,
so that ich schnell zum Hauptinhalt springen kann.

## Acceptance Criteria

1. Landmarks header/nav/main/footer vorhanden.
2. Sichtbarer Skip-Link führt zum Hauptinhalt.
3. Überschriften-Hierarchie logisch (keine Sprünge).

## Tasks / Subtasks

- [x] Landmark-Struktur prüfen/ergänzen (AC 1)
- [x] Skip-Link implementieren/testen (AC 2)
- [x] Heading-Hierarchie auditieren (AC 3)

## Dev Notes

- A11y first; kein JS nötig.

### Project Structure Notes

- index.html Strukturelemente; Styles in base.css/layout.css.

### References

- Quelle: epics.md Story 4.1

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Header/Nav/Main/Footer Landmarks ergänzt, Skip-Link geprüft, Heading-Struktur gesichert.

### File List

- src/main.js
- src/main.test.js
- src/style.css
- index.html
- dist/** (build output)

## Change Log

- Semantik/Skip-Link verbessert und getestet; Build geprüft.
