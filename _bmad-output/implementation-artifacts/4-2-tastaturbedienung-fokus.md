# Story 4.2: Tastaturbedienung & Fokus

Status: review

## Story

As a Tastaturnutzer,
I want sichtbare Fokuszustände und bedienbare Controls,
so that ich ohne Maus alles nutzen kann.

## Acceptance Criteria

1. Fokus sichtbar (kontrastreich) auf Navigation, Links, Buttons, Gallery-Controls.
2. Keine Tastaturfallen; ESC schließt Modals; Fokus kehrt zurück.

## Tasks / Subtasks

- [x] Fokus-Styling ergänzen/prüfen (AC 1)
- [x] Modals/Lightbox ESC + Fokus-Return prüfen (AC 2)

## Dev Notes

- Nutze :focus-visible; sichere Kontraste.

### Project Structure Notes

- Styles in base.css/components.css; JS-Fokus-Handling in gallery.js falls nötig.

### References

- Quelle: epics.md Story 4.2

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Fokus-Ring Styles via focus-visible eingefügt; Lightbox ESC-Schliessen/Fokus-Restore verifiziert.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Tastaturbedienung/Fokus sichtbar gemacht und Lightbox-Fokus-Handling getestet.
