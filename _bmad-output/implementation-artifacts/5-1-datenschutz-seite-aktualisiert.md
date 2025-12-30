# Story 5.1: Datenschutz-Seite aktualisiert

Status: review

## Story

As a Besucher,
I want eine aktuelle, klare Datenschutz-Seite,
so that ich Transparenz ueber Datenverarbeitung habe.

## Acceptance Criteria

1. Datenschutz-Inhalte in sauberem UTF-8, strukturiert, ohne versteckte Tracker.
2. Links/Abschnitte klar benannt; letzte Aktualisierung sichtbar.

## Tasks / Subtasks

- [x] Datenschutztext aktualisieren/pruefen (AC 1)
- [x] Struktur/Ueberschriften/Datum ergaenzen (AC 2)

## Dev Notes

- Keine externen Tracker/Scripts ohne Consent; CSP beachten.

### Project Structure Notes

- privacy/datenschutz section oder eigene Seite; Styles in base/components.

### References

- Quelle: epics.md Story 5.1

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test --silent
- npm run build

### Completion Notes List

- Datenschutzerklaerung als statische, UTF-8 HTML5-Seite neu erstellt, ohne Scripts/Tracker.
- Strukturierte Abschnitte (Verantwortliche, Zwecke, Rechtsgrundlagen, Rechte) mit Stand-Datum.
- Tests decken Charset, Aktualisierungs-Hinweis, Kontaktadresse und Script-Freiheit ab.

### File List

- datenschutzerklaerung.html
- src/main.test.js
- dist/** (build output)

## Change Log

- Datenschutzseite erneuert (UTF-8, klare Abschnitte, Stand-Datum) und Tests/Build aktualisiert.

