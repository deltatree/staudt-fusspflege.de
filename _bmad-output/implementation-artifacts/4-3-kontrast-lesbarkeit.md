# Story 4.3: Kontrast & Lesbarkeit

Status: review

## Story

As a Nutzer mit niedriger Sehkraft,
I want ausreichenden Kontrast und skalierbare Schrift,
so that ich Inhalte ohne Zoomen/Scrollbruch lesen kann.

## Acceptance Criteria

1. Text/Controls erfüllen mindestens AA-Kontrast.
2. Text skaliert ohne Layoutbruch; nichts wird abgeschnitten.

## Tasks / Subtasks

- [x] Kontrast-Check auf allen Kern-UI-Elementen (AC 1)
- [x] Font-Scaling Test (Browser Zoom/OS Settings) (AC 2)

## Dev Notes

- Nutze CSS Vars für Farben; prüfe Fokus-Kontrast.

### Project Structure Notes

- Farben/Typo in theme.css/base.css.

### References

- Quelle: epics.md Story 4.3

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test --silent
- npm run build

### Completion Notes List

- Farbpalette auf CSS-Variablen umgestellt mit erhöhtem Kontrast für Text, Links, Buttons, Navigation und Oberflächen.
- Fokus-States bleiben AA-konform; geprüft mit Zoom/Skalierung ohne Layoutbruch.

### File List

- src/style.css
- dist/** (build output)

## Change Log

- Kontrast-Theme über CSS-Variablen eingeführt und auf alle Komponenten angewendet; Build/Test erfolgreich.
