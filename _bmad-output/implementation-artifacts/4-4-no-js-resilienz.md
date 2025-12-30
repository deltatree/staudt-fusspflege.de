# Story 4.4: No-JS Resilienz

Status: review

## Story

As a Nutzer ohne JS,
I want Kerninhalte und Kontakt nutzbar,
so that ich trotzdem alle Infos bekomme.

## Acceptance Criteria

1. Inhalte, Navigation (Anchors) und tel/mail Links erreichbar ohne JS.
2. Gallery-Links führen zu statischen Ansichten statt Fehlern.

## Tasks / Subtasks

- [x] JS-disabled Test: Navigation/Content/CTA prüfen (AC 1)
- [x] Gallery-Fallback auf Bild-URL sicherstellen (AC 2)

## Dev Notes

- Progressive Enhancement; keine JS-Hard-Abhängigkeiten.

### Project Structure Notes

- Prüfe index.html und gallery.js Fallback.

### References

- Quelle: epics.md Story 4.4

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test --silent
- npm run build

### Completion Notes List

- Statisches No-JS-Markup in index.html hinterlegt, inkl. Navigation, Sektionen, CTA-Bar und Gallery-Ankern.
- Basis-Fokusrahmen in style.css ergänzt, Gallery-Anker bleiben ohne JS navigierbar.

### File List

- index.html
- src/style.css
- src/main.test.js

## Change Log

- No-JS-Fallback für Navigation/Content/Gallery ergänzt; Tests/Build erfolgreich.
