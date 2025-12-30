# Content Maintenance Guide (No CMS)

## Textbausteine
- **Startseite/Inhalt:** Bearbeitung direkt in `src/main.js` (Abschnitte Profil, Leistungen, Hygiene, Kontakt, Anfahrt, Galerie, Datenschutz-Hinweis).
- **Fallback/No-JS:** Statisches Markup in `index.html` (gleiche Inhalte wie JS-Render); bei Textaenderungen beide pruefen.
- **Datenschutz:** Eigenstaendige Seite `datenschutzerklaerung.html` (UTF-8, statisch, keine Skripte/Tracker).

## Bilder
- Vorschaubilder unter `photos/thumbs/` (werden direkt referenziert).
- Weitere Assets unter `images/` falls vorhanden. Neue Bilder als Web-optimierte JPG/PNG ablegen.

## Encoding & Format
- Alle Dateien in UTF-8 speichern (kein Windows-1252/Latin1).
- Keine eingebetteten Secrets, API-Keys oder Build-Zeit-Variablen erforderlich (statische Seite).

## Build/Preview
- Entwicklung: `npm install`, dann `npm run dev`.
- Tests: `CI=1 npm test` (Vitest/jsdom).
- Prod-Build: `npm run build` (legt statische Assets in `dist/`).

## Deployment-Hinweis
- `dist/` kann direkt auf statische Hoster (Netlify/Cloudflare Pages/GitHub Pages) gelegt werden; keine Server-Logik noetig.
