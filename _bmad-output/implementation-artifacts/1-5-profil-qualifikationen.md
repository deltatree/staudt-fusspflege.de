# Story 1.5: Profil & Qualifikationen

Status: review

## Story

As a Besucher,
I want das Profil und die Qualifikationen der Praxis zu sehen,
so that ich Vertrauen in die Behandler aufbauen kann.

## Acceptance Criteria

1. Namen/Rollen/Qualifikationen sichtbar.
2. Bilder (falls vorhanden) DSGVO-konform eingebunden.

## Tasks / Subtasks

- [x] Profiltext und Qualifikationen einpflegen (AC 1)
- [x] Bilder einbinden mit korrekten Alt-Texten/Lizenzen (AC 2)

## Dev Notes

- Achte auf Bildgrößen/Optimierung; keine externen Tracker.

### Project Structure Notes

- Profil-Section in index.html; Assets in images/.

### References

- Quelle: epics.md Story 1.5

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Profilkarte mit Name, Rolle und Qualifikationsliste ergänzt; lokales Portraitbild mit Alt-Text eingebunden.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- photos/thumbs/img002.jpg
- dist/** (build output)

## Change Log

- Profil- und Qualifikationsabschnitt mit Bild und Tests hinzugefügt; Build geprüft.
