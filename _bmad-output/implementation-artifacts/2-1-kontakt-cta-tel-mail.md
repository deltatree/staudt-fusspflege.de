# Story 2.1: Kontakt-CTA (Tel/Mail)

Status: review

## Story

As a mobiler Besucher,
I want tel/mail-CTAs jederzeit sichtbar,
so that ich in 1–2 Taps anrufen oder mailen kann.

## Acceptance Criteria

1. Tel-Handler (tel:) und Mailto funktionieren sauber.
2. CTA bleibt sichtbar/sticky auf mobilen Breakpoints.
3. Funktioniert ohne JS (reine Links).

## Tasks / Subtasks

- [x] CTA-Platzierung und Styling (AC 2)
- [x] Tel/Mail Links implementieren und testen (AC 1)
- [x] JS-frei testen (AC 3)

## Dev Notes

- Priorisiere Mobile; keine obstructive Overlays.

### Project Structure Notes

- CTA in Header/Nav oder Kontaktband; Styles in components.css.

### References

- Quelle: epics.md Story 2.1

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test
- npm run build

### Completion Notes List

- Mobile sticky CTA-Bar mit tel/mail Links hinzugefügt; funktioniert ohne JS, sichtbar auf mobilen Breakpoints.

### File List

- src/main.js
- src/style.css
- src/main.test.js
- index.html
- dist/** (build output)

## Change Log

- Sticky Mobile-CTA (tel/mail) ergänzt, getestet und Build verifiziert.
