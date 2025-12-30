# Story 5.2: Content-Pflege ohne CMS

Status: review

## Story

As a Praxis-Maintainer,
I want Texte/Bilder statisch bearbeiten können,
so that ich ohne Backend oder Build-Komplexität aktualisiere.

## Acceptance Criteria

1. Text/Bild-Updates möglich ohne CMS/Backend.
2. Encoding bleibt UTF-8; keine Build-/Runtime-Abhängigkeiten nötig.

## Tasks / Subtasks

- [x] Dokumentieren, welche Dateien für Content relevant sind (AC 1)
- [x] Prüfen/erzwingen UTF-8, keine Build-Secrets (AC 2)

## Dev Notes

- Klare README/Strukturhinweise; einfache Ordner.

### Project Structure Notes

- content in index.html/fragments; images in images/photos.

### References

- Quelle: epics.md Story 5.2

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test --silent
- npm run build

### Completion Notes List

- Content-Maintenance Guide erstellt (docs/content-maintenance.md) mit Pfaden für Texte, Bilder, Datenschutzseite, UTF-8-Hinweisen und Deployment-Notizen.
- Tests prüfen Vorhandensein des Guides und UTF-8-Hinweis.

### File List

- docs/content-maintenance.md
- src/main.test.js
- dist/** (build output)

## Change Log

- Content-Pflege-Anleitung hinzugefügt und per Tests verankert; Build/Test grün.
