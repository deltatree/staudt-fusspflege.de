# Story 2.3: Adressblock teilbar

Status: review

## Story

As a Angehöriger,
I want einen teilbaren Kontakt-/Adressblock,
so that ich Infos leicht weitergeben kann.

## Acceptance Criteria

1. Adresse, Telefon, Mail klar gruppiert.
2. Optionaler Karten-/Routenlink ohne Layoutbruch.
3. Block ist kopier-/teilbar (keine verschachtelten unkopierbaren Elemente).

## Tasks / Subtasks

- [x] Kontaktblock strukturieren (AC 1)
- [x] Karten-/Routenlink hinzufügen (AC 2)
- [x] Kopierbarkeit auf Mobil/Desktop prüfen (AC 3)

## Dev Notes

- Vermeide iframe-Maps; Link bevorzugt.

### Project Structure Notes

- Kontaktblock in index.html; Styles in components.css.

### References

- Quelle: epics.md Story 2.3

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Kontaktblock gruppiert Adresse, Telefon, Mail plus Maps-Link; kopierbar ohne JS, mobil/desktop getestet.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Kontakt-/Adressblock mit Maps-Link integriert; Tests und Build erfolgreich.
