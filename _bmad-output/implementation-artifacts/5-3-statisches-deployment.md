# Story 5.3: Statisches Deployment

Status: review

## Story

As a Betreiber,
I want die Seite statisch deployen können,
so that kein Backend/Runtime erforderlich ist.

## Acceptance Criteria

1. Prod-Build als statische Assets liegt vor (dist/).
2. Deployment auf Host (Netlify/Cloudflare Pages/GitHub Pages) funktioniert ohne Serverlogik.
3. Headers (CSP/HSTS/Referrer-Policy) konfigurierbar im Hosting.

## Tasks / Subtasks

- [x] Build ausführen und dist/ prüfen (AC 1)
- [x] Deployment-Setup/Docs für gewählten Host (AC 2)
- [x] Header-Konfiguration dokumentieren (AC 3)

## Dev Notes

- Keine externen Tracker ohne Consent; HTTPS only.

### Project Structure Notes

- Deployment aus dist/; ggf. netlify.toml/_headers o. ä. ergänzen.

### References

- Quelle: epics.md Story 5.3

## Dev Agent Record

### Agent Model Used

GPT-5.1-Codex-Max

### Debug Log References

- CI=1 npm test --silent
- npm run build --silent

### Completion Notes List

- Multi-page Vite build emits both index and datenschutzerklärung into dist for static hosting; verified via build test.
- Netlify-focused deployment guide documents Build, Preview, und Production Deploy aus dist/ ohne Serverlogik.
- Security-Header via public/_headers mit CSP, HSTS und Referrer-Policy für statisches Hosting hinterlegt.

### File List

- vite.config.js
- src/deployment.test.js
- docs/deployment.md
- public/_headers
- _bmad-output/implementation-artifacts/sprint-status.yaml

## Change Log

- Statisches Deployment vorbereitet: Multi-Page-Build für Datenschutzseite, Netlify-Deploy-Anleitung und Security-Header hinterlegt; Tests grün.
