# Story 1.6: Anfahrt & Hinweise

Status: review

## Story

As a Angehöriger,
I want Adresse, Hinweise zu Parken/Barrierefreiheit,
so that ich jemanden sicher zur Praxis bringen kann.

## Acceptance Criteria

1. Adresse, optional Karten-Link, Hinweise zu Parken/Zugang vorhanden.
2. Kontaktblock teil-/kopierbar ohne Layoutbruch.

## Tasks / Subtasks

- [x] Adressblock + Karten-/Routenlink platzieren (AC 1)
- [x] Kontaktblock auf Mobil/Desktop testen, Kopierbarkeit prüfen (AC 2)

## Dev Notes

- Mobile first; vermeide eingebettete schwere Maps, nutze Link.

### Project Structure Notes

- Kontaktbereich in index.html; Styles in components.css.

### References

- Quelle: epics.md Story 1.6

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Anfahrt-Section mit Adresse, Maps-Link und kopierbarem Kontaktblock ergänzt; mobile/desktop Layout via grid, Tests abgedeckt.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Adresse/Routenlink und Kontaktblock hinzugefügt und per Tests verifiziert; Build geprüft.
