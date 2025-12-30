# Story 2.2: Öffnungszeiten & Termin-Hinweis

Status: review

## Story

As a Besucher,
I want klare Öffnungszeiten und Terminhinweis,
so that ich weiß, wann und wie ich einen Termin bekomme.

## Acceptance Criteria

1. Öffnungszeiten sichtbar und klar formatiert.
2. Hinweis „Termin per Anruf/Mail“ eindeutig.
3. Darstellung mobil/desktop lesbar (keine brechenden Tabellen).

## Tasks / Subtasks

- [x] Öffnungszeiten platzieren/formatieren (AC 1,3)
- [x] Terminhinweis ergänzen (AC 2)
- [x] Responsive Check (AC 3)

## Dev Notes

- Nutze Listen/Definition Lists statt Tabellen für Mobilfreundlichkeit.

### Project Structure Notes

- Kontaktsection in index.html; Styles in layout/components.css.

### References

- Quelle: epics.md Story 2.2

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Öffnungszeiten als Definition List hinzugefügt, Terminhinweis klar platziert; mobile/desktop lesbar ohne Tabellen.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Öffnungszeiten/Terminhinweis Section ergänzt und getestet; Build geprüft.
