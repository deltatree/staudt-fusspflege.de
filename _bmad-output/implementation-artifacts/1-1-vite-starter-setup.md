# Story 1.1: Vite Starter Setup

Status: review

## Story

As a Entwickler,
I want das Projekt mit dem Vite 7.3.0 Vanilla Starter aufsetzen,
so that eine schlanke statische Basis für das Redesign bereitsteht.

## Acceptance Criteria

1. Projekt mit `npm create vite@7.3.0 staudt-fusspflege -- --template vanilla` initialisiert.
2. Abhängigkeiten installiert; `npm run dev` läuft lokal.
3. `npm run build` erzeugt funktionierendes `dist/`.
4. Keine jQuery/Legacy-Plugins eingebunden; JS minimal/optional.

## Tasks / Subtasks

- [x] Vite 7.3.0 vanilla init ausführen (AC 1)
- [x] Dependencies installieren, Dev-Server prüfen (AC 2)
- [x] Prod-Build prüfen (AC 3)
- [x] Sicherstellen: keine Legacy-JS-Plugins (AC 4)

## Dev Notes

- Stack: Vite 7.3.0 vanilla, Node 18+.
- Ziel: statisches Output, JS optional.

### Project Structure Notes

- Erwartete Struktur: index.html, src/main.js, src/styles/*.css, public/.

### References

- Quelle: epics.md Story 1.1

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Setup Vite 7.3.0 vanilla scaffold with hero CTA content and minimal JS.
- Added Vitest jsdom coverage for hero render and contact links; verified build output.

### File List

- package.json
- package-lock.json
- vite.config.js
- index.html
- index.legacy.html
- src/main.js
- src/style.css
- src/main.test.js

## Change Log

- Initialized Vite 7.3.0 vanilla project, added jsdom/Vitest tests, and preserved prior static index as index.legacy.html.
