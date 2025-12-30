# Static Deployment (Netlify)

This site deploys as pure static files from `dist/` with no server code. Use the steps below to build and publish to Netlify while keeping security headers in place.

## 1) Build
- Install dependencies once: `npm install`
- Produce a clean production build: `npm run build -- --emptyOutDir`
- Artifacts land in `dist/` and include both `index.html` and `datenschutzerklärung.html` plus hashed assets.

## 2) Deploy to Netlify
- One-time: `npm install -g netlify-cli` (or use Netlify UI Git deploy).
- Create/choose a site: `netlify init` (select existing or create new).
- Deploy preview: `netlify deploy --dir=dist --message "preview"`
- Deploy production: `netlify deploy --prod --dir=dist`
- Publish directory: `dist` (no functions/server logic required).

## 3) Security Headers
- Netlify reads `public/_headers` at build time; it is copied into `dist/_headers` automatically.
- Headers shipped for all paths:
  - `Content-Security-Policy`: self-hosted assets only, no trackers.
  - `Strict-Transport-Security`: enforce HTTPS, preload-ready.
  - `Referrer-Policy`: strict-origin-when-cross-origin.
  - `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`.
- To adjust CSP for new assets (e.g., fonts/CDN), edit `public/_headers` and redeploy.

## 4) Cloudflare Pages / GitHub Pages (optional)
- Cloudflare Pages: set build command `npm run build` and output directory `dist`; copy `public/_headers` into `_headers` at the project root if the platform supports it.
- GitHub Pages: enable Pages on the repository and point to `dist`; upload `_headers` if your CDN supports custom headers or configure equivalent headers at the CDN level.

## 5) Verification
- After deploy, open the live site and inspect network responses; `/index.html` and `/datenschutzerklärung.html` should carry the configured headers.
- Re-run `npm run build` after content edits; redeploy `dist/` to publish changes.
