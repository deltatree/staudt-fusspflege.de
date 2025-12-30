# Project Documentation – staudt-fusspflege.de

Date: 2025-12-30
Mode: Initial scan (exhaustive)

## Project summary
Static single-page brochure site for a podology practice. Main entry is index.html with sections for profile, services, hygiene, and legal info; separate privacy policy page.

## Repository layout (relevant)
- Root HTML: index.html, datenschutzerklärung.html
- Styles: css/reset.css, css/style.css, css/prettyPhoto.css
- Scripts: js/jquery.min.js and plugins (carouFredSel, easytabs, isotope, prettyPhoto, respond, touch-swipe), js/custom.js (site wiring), js/plugins.js (plugin bundles)
- Assets: images/* (UI sprites, headshot), photos/* with thumbs, fonts/icomoon/* (icon font)
- BMAD scaffolding: _bmad/, _bmad-output/, .codex/ (not part of runtime site)

## Technology stack
- HTML/CSS: plain static markup; fixed-width layout (860px) with custom styling in css/style.css
- JS runtime: jQuery 1.x with legacy plugins (carouFredSel slider, easytabs tabbing, isotope filtering, prettyPhoto lightbox, touch-swipe helpers); no build step or bundler
- Icons: custom icomoon font loaded via @font-face
- No backend, no package manager, no API calls; purely client-side brochure

## Pages
- index.html: Single-page layout with tabs/anchors: profile, über mich, podologie, dienstleistung, kontakt (impressum + link to privacy). Uses image galleries for services/hygiene sections.
- datenschutzerklärung.html: Standalone privacy policy exported from Word (Windows-1252 charset, inline styles); text in German.

## JavaScript behavior (custom.js)
- Logo show/hide when tab navigation changes
- Skills rating widget (unused on current markup but present)
- Photo slider on profile image (carouFredSel)
- Tab navigation via easytabs; menu carousel with carouFredSel; hover lift on menu items
- Portfolio/gallery filtering via isotope; prettyPhoto lightbox on links with rel="portfolio"
- Contact form AJAX + Google Maps hooks are commented out (non-functional)

## CSS notes
- css/style.css defines fixed 860px container, green accent (#62a790), icomoon icons; not mobile-first
- Uses reset.css and prettyPhoto.css; includes inline IE/legacy accommodations

## Assets
- photos/* and photos/thumbs/* supply gallery images
- images/* contains UI sprites and headshot (stefanie_staudt.jpg)

## Risks and observations
- Outdated JS libraries and plugins; potential security/compatibility issues on modern browsers
- Layout is fixed-width and not responsive; relies on desktop-era design
- Privacy page in Windows-1252 with heavy inline Word markup; consider rewriting in UTF-8 and aligning with current DSGVO
- Contact form commented out; if re-enabled, needs backend handling and spam/consent measures
- No build or dependency management; manual asset updates required

## Suggested next steps
1) Modernize layout for responsiveness (CSS flex/grid) and replace legacy plugins/lightbox with maintained alternatives
2) Update jQuery to a current maintained version or remove dependency if not needed
3) Rewrite datenschutzerklärung.html in clean UTF-8 HTML/CSS and ensure legal accuracy
4) Optimize assets (compress images; ensure thumbnails match originals)
5) If adding forms or tracking, implement proper consent and server handling
