# Story 3.2: Bildvergrößerung ohne Bruch

Status: review

## Story

As a Besucher,
I want Bilder vergrößern können,
so that ich Details sehen kann.

## Acceptance Criteria

1. Klick/Tap öffnet vergrößerte Ansicht ohne Layoutbruch.
2. Schließen via Close/ESC/Overlay-Klick möglich.
3. Fokus kehrt beim Schließen zum Trigger zurück (a11y).
4. Fallback: ohne JS führt Link zu statischer Bildansicht.

## Tasks / Subtasks

- [x] Lightbox/Modal leichtgewichtig implementieren (AC 1,2)
- [x] Fokus-Management und ESC/Overlay-Schließen (AC 3)
- [x] No-JS Fallback auf Bild-URL (AC 4)

## Dev Notes

- Kein schweres Plugin; Vanilla JS minimal.
- ARIA: aria-modal, role="dialog", Fokusfalle.

### Project Structure Notes

- JS in src/components/gallery.js (optional); Links in index.html.

### References

- Quelle: epics.md Story 3.2

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Leichtgewichtige Lightbox mit ESC/Overlay-Close, Fokus-Restore und Link-Fallback umgesetzt; Thumbs als Links.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Lightbox-Funktionalität mit A11y-Handling und Fallback hinzugefügt; Tests/Build erfolgreich.
