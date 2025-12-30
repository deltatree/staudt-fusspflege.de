# Story 3.1: Responsive Galerie-Grid

Status: review

## Story

As a Besucher,
I want eine responsive Galerie mit Thumbs,
so that ich Bilder schnell überblicken kann.

## Acceptance Criteria

1. Grid passt sich mobil/desktop an, kein horizontaler Scroll.
2. Thumbs optimiert (Größe/Aspect Ratio) und lazy geladen.

## Tasks / Subtasks

- [x] Responsive Grid Layout umsetzen (AC 1)
- [x] Thumbs optimieren + lazy loading (AC 2)

## Dev Notes

- JS optional; nutze CSS Grid/Flex.
- Bildgrößen reservieren gegen CLS; WebP optional.

### Project Structure Notes

- Galerie-Section in index.html; Styles in components.css; Assets in photos/thumbs.

### References

- Quelle: epics.md Story 3.1

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Galerie-Grid mit auto-fit Spalten, lazy geladenen Thumbs (lokale Bilder) und reservierten Größen umgesetzt.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Responsive Galerie mit lazy Thumbs hinzugefügt; Tests und Build bestanden.
