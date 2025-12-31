import './style.css';

export function setupApp(container) {
  document.documentElement.style.setProperty('--color-bg', '#f8fafc');
  document.documentElement.style.setProperty('--color-surface', '#ffffff');
  document.documentElement.style.setProperty('--color-text', '#0b1220');
  document.documentElement.style.setProperty('--color-muted', '#334155');
  document.documentElement.style.setProperty('--color-border', '#d7deea');
  document.documentElement.style.setProperty('--color-accent', '#0ea5e9');
  document.documentElement.style.setProperty('--color-accent-strong', '#2563eb');

  container.innerHTML = `
    <a class="skip-link" href="#main-content">Zum Inhalt springen</a>

      <header>
        <nav class="site-nav" aria-label="Hauptnavigation">
        <div class="nav-brand">Staudt Fusspflege</div>
        <div class="nav-links" role="list">
          <a role="listitem" href="#profil">Profil</a>
          <a role="listitem" href="#uebermich">Historie</a>
          <a role="listitem" href="#podologie">Podologie</a>
          <a role="listitem" href="#leistungen">Leistungen</a>
          <a role="listitem" href="#hygiene">Hygiene</a>
          <a role="listitem" href="#kontakt">Kontakt</a>
          <a role="listitem" href="#datenschutz">Datenschutz</a>
        </div>
      </nav>
    </header>

    <main id="main-content" class="layout">
      <section id="profil" class="hero section">
        <p class="eyebrow">Podologin · Heilpraktikerin</p>
        <h1>Stefanie Staudt</h1>
        <p class="lede">
          Heilpraktikerin im Bereich der Podologie, zertifizierte Wundexpertin ICW. Ebenerdige Praxis in Zeutern, Termine nach Vereinbarung.
        </p>
        <div class="cta">
          <a class="button" href="tel:+49725331742">Termin vereinbaren</a>
          <a class="link" href="mailto:praxis@staudt-fusspflege.de">E-Mail senden</a>
        </div>

        <article class="profile-card">
          <div class="profile-media">
            <img src="/photos/thumbs/img002.jpg" alt="Portrait Profil Staudt Fusspflege" loading="lazy" />
          </div>
          <div class="profile-copy">
            <p class="profile-name" data-profile-name>Stefanie Staudt</p>
            <p class="profile-role">Heilpraktikerin im Bereich der Podologie · Wundexpertin ICW</p>
            <ul class="profile-quals">
              <li data-qualification>Staatlich gepruefte Podologin</li>
              <li data-qualification>Heilpraktikerin (Fachgebiet Podologie)</li>
              <li data-qualification>Zertifizierte Wundexpertin ICW</li>
              <li data-qualification>Praxis ebenerdig, rollstuhlgerecht, moderne Aufbereitung</li>
            </ul>
          </div>
        </article>
      </section>

      <section id="uebermich" class="section">
        <h2>Historie</h2>
        <p>Praxisgeschichte und Qualifikationen im Überblick.</p>
        <p class="about-intro">Ich bin Heilpraktikerin im Bereich der Podologie und zertifizierte Wundexpertin ICW; meine Praxis in Zeutern ist ebenerdig und rollstuhlgerecht ausgestattet.</p>
        <ul class="timeline">
          <li><strong>1999</strong>: Ausbildung zur Fußpflegerin, mobile Fußpflege und Mitarbeit in Podologiepraxis.</li>
          <li><strong>2001</strong>: Praxiseröffnung, Räume praxisgerecht umgebaut und ausgestattet.</li>
          <li><strong>2012</strong>: Erfolgreiche Abschlussprüfung zur Podologin (berufsbegleitend in Baden-Baden).</li>
          <li><strong>2013</strong>: Kassenzulassung für alle Kassen; Heilpraktikerin im Fachgebiet Podologie.</li>
          <li><strong>Mitglied</strong>: Zentralverband der Podologen und Fußpfleger Deutschlands e.V.</li>
        </ul>
      </section>

      <section id="podologie" class="section">
        <h2>Podologie</h2>
        <p>Podologie ist ein medizinischer Fachberuf nach Podologengesetz. Die Behandlung umfasst Anamnese, Fuß- und Schuhuntersuchung und Maßnahmen zur Vorbeugung und Therapie.</p>
        <ul class="hygiene-list">
          <li>Beratung zu Vorerkrankungen und Inspektion von Schuhen und Einlagen.</li>
          <li>Erkennung von Fehlbelastungen, Druck- und Reibungsschutz, Orthosen.</li>
          <li>Spangentechniken bei eingewachsenen oder Rollnägeln.</li>
          <li>Zusammenarbeit mit Orthopäden, Hautärzten, Diabetologen und Therapeuten.</li>
        </ul>
      </section>

      <section id="leistungen" class="section">
        <h2>Leistungen</h2>
        <p>Behandlung, Beratung und Prophylaxe nach individueller Anamnese.</p>
        <div class="services-grid" data-responsive="true">
          <article class="service-card" data-service-item>
            <h3>Basis-Pflege</h3>
            <p>Befragung, Nagelschnitt, Begutachtung der Nagelfalze, Abtragen von Hornhaut.</p>
          </article>
          <article class="service-card" data-service-item>
            <h3>Druck- & Reibungsschutz</h3>
            <p>Schutzversorgung und Orthosen zur Entlastung bei Fehlbelastung.</p>
          </article>
          <article class="service-card" data-service-item>
            <h3>Spangentechnik & Prothetik</h3>
            <p>Spangen bei eingewachsenen Nägeln, Nagelprothetik, Dokumentation des Verlaufs.</p>
          </article>
        </div>

        <div class="services-detail">
          <h3>Dienstleistungen & Behandlung</h3>
          <ul>
            <li>Befragung zu Vorerkrankungen und Medikamenteneinnahme.</li>
            <li>Fußuntersuchung mit Inspektion von Schuhen und Einlagen.</li>
            <li>Richtiger Nagelschnitt, Begutachtung der Nagelfalze.</li>
            <li>Abtragen von Hornhaut.</li>
          </ul>

          <h3>Beratung & Behandlungsplanung</h3>
          <ul>
            <li>Risikopatienten wie Diabetiker, Rheumatiker oder Patienten unter Chemotherapie.</li>
            <li>Hornhaut, Schwielen, Rhagaden und Hühneraugenentfernung.</li>
            <li>Druck- und Reibungsschutz, Orthosen sowie dauerhafter Schutz.</li>
            <li>Spangentechniken bei eingewachsenen Nägeln und Rollnägeln.</li>
            <li>Nagelerkrankungen: Schleifbehandlung bei Nagelpilzbefall.</li>
            <li>Warzenbehandlung und Nagelprothetik.</li>
            <li>Umfassende Verlaufs- und Fotodokumentation.</li>
          </ul>
        </div>
      </section>

      <section id="hygiene" class="section">
        <h2>Hygiene</h2>
        <p>Nachvollziehbare Hygiene gegen Übertragung von Erregern: alle Instrumente werden nach jeder Anwendung gereinigt, desinfiziert und sterilisiert.</p>
        <ul class="hygiene-list">
          <li>Ultraschallvorreinigung, Thermodesinfektor und anschließende Versiegelung.</li>
          <li>Sterilisation im Autoklaven mit Chargennummer und Dokumentation jeder Charge.</li>
          <li>Risikoklasse "Kritisch A" – jedes Besteck wird steril verpackt bevorratet.</li>
          <li>Neue Einmalhandschuhe, Masken, frische Auflagen; Flächendesinfektion zwischen Terminen.</li>
        </ul>
      </section>

      <section id="kontakt" class="section">
        <h2>Kontakt</h2>
          <p>Erreichbar telefonisch oder per Mail. Termine flexibel nach Absprache.</p>
        <div class="cta">
            <a class="button" href="tel:+49725331742">Jetzt anrufen</a>
            <a class="link" href="mailto:praxis@staudt-fusspflege.de">E-Mail senden</a>
        </div>

        <div class="opening-hours" data-opening-hours>
          <h3>Öffnungszeiten</h3>
          <dl>
            <dt>Mo–Fr</dt>
            <dd>09:00 – 18:00</dd>
            <dt>Sa</dt>
            <dd>10:00 – 14:00</dd>
            <dt>So/Feiertag</dt>
            <dd>nach Vereinbarung</dd>
          </dl>
        </div>

        <p class="termin-hint" data-termin-hint>Termine bitte vorab per Anruf oder E-Mail vereinbaren.</p>
      </section>

      <section id="datenschutz" class="section">
        <h2>Datenschutz & Ihre Rechte</h2>
        <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten Ihre Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen (DSGVO, BDSG).</p>
        
        <div class="privacy-summary">
          <h3>Auf einen Blick</h3>
          <ul class="privacy-list">
            <li><strong>Keine Cookies:</strong> Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools.</li>
            <li><strong>Keine Weitergabe:</strong> Ihre Kontaktdaten werden nicht an Dritte weitergegeben.</li>
            <li><strong>Zweckbindung:</strong> Daten werden nur für Terminvereinbarung und Behandlung genutzt.</li>
            <li><strong>Löschung:</strong> Nach Abschluss der Behandlung und Ablauf gesetzlicher Fristen werden Daten gelöscht.</li>
          </ul>
        </div>

        <div class="privacy-rights">
          <h3>Ihre Rechte</h3>
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht und das Recht auf Datenübertragbarkeit.</p>
        </div>

        <div class="privacy-contact">
          <h3>Verantwortliche Stelle</h3>
          <address>
            Stefanie Staudt<br />
            Kelterhausstr. 3<br />
            76698 Ubstadt-Weiher (Zeutern)<br />
            Telefon: +49 7253 31742<br />
            E-Mail: <a href="mailto:praxis@staudt-fusspflege.de">praxis@staudt-fusspflege.de</a>
          </address>
        </div>

        <div class="privacy-cta">
          <a class="button" href="/datenschutzerklärung.html" target="_blank" rel="noopener noreferrer">Vollständige Datenschutzerklärung lesen</a>
        </div>
      </section>

      <section id="anfahrt" class="section">
        <h2>Anfahrt & Hinweise</h2>
        <p data-address>Kelterhausstr. 3, 76698 Ubstadt-Weiher (Zeutern)</p>
        <div class="route-links">
          <a class="link" href="https://maps.google.com/?q=Kelterhausstr.+3+76698+Ubstadt-Weiher+Zeutern" target="_blank" rel="noopener noreferrer">Route planen (Google Maps)</a>
        </div>

        <div class="contact-block" data-contact-block>
          <div class="contact-line" data-contact-address>
            Adresse: Kelterhausstr. 3, 76698 Ubstadt-Weiher (Zeutern)
          </div>
          <div class="contact-line" data-contact-phone>
            Telefon: +49 7253 31742
          </div>
          <div class="contact-line" data-contact-mail>
            E-Mail: <a href="mailto:praxis@staudt-fusspflege.de">praxis@staudt-fusspflege.de</a>
          </div>
          <div class="contact-line">Ebenerdiger Zugang, Besucherparkplaetze vorhanden.</div>
          <a class="link" href="https://maps.google.com/?q=Kelterhausstr.+3+76698+Ubstadt-Weiher+Zeutern" target="_blank" rel="noopener noreferrer">Route oeffnen</a>
        </div>
      </section>

      <section id="galerie" class="section">
        <h2>Galerie</h2>
        <div class="gallery-grid" data-gallery-grid data-responsive="true">
          <a href="/photos/img002.jpg" data-lightbox-trigger>
            <img src="/photos/thumbs/img002.jpg" alt="Behandlungsraum" loading="lazy" width="320" height="240" />
          </a>
          <a href="/photos/img005.jpg" data-lightbox-trigger>
            <img src="/photos/thumbs/img005.jpg" alt="Werkzeug sauber vorbereitet" loading="lazy" width="320" height="240" />
          </a>
          <a href="/photos/img006.jpg" data-lightbox-trigger>
            <img src="/photos/thumbs/img006.jpg" alt="Pflegeequipment" loading="lazy" width="320" height="240" />
          </a>
          <a href="/photos/img008.jpg" data-lightbox-trigger>
            <img src="/photos/thumbs/img008.jpg" alt="Praxisdetails" loading="lazy" width="320" height="240" />
          </a>
        </div>
      </section>
    </main>

    <div class="mobile-cta" data-sticky="true">
      <a class="button" href="tel:+49725331742">Anrufen</a>
      <a class="link" href="mailto:praxis@staudt-fusspflege.de">Mail</a>
    </div>

    <footer>
      <p>Stefanie Staudt · Podologiepraxis · Kelterhausstr. 3 · 76698 Ubstadt-Weiher (Zeutern)</p>
    </footer>
  `;

  const focusStyles = document.createElement('style');
  focusStyles.dataset.focusRules = 'true';
  focusStyles.textContent = `
    .site-nav a:focus-visible,
    .link:focus-visible,
    .button:focus-visible,
    .skip-link:focus-visible,
    .lightbox-close:focus-visible,
    .nav-brand:focus-visible {
      outline: 3px solid #f59e0b;
      outline-offset: 3px;
    }
  `;
  container.appendChild(focusStyles);

  setupLightbox(container);
}

const app = document.querySelector('#app');
if (app) {
  setupApp(app);
}

function setupLightbox(container) {
  const triggers = Array.from(container.querySelectorAll('[data-lightbox-trigger]'));
  if (triggers.length === 0) return;

  let currentIndex = 0;
  let overlay = null;

  const getImageSources = () => triggers.map((t) => t.getAttribute('href')).filter(Boolean);

  const closeExisting = () => {
    if (overlay) {
      overlay.remove();
      overlay = null;
      document.body.style.overflow = '';
    }
  };

  const showImage = (index) => {
    const sources = getImageSources();
    if (index < 0) index = sources.length - 1;
    if (index >= sources.length) index = 0;
    currentIndex = index;

    const img = overlay?.querySelector('.lightbox-content img');
    const counter = overlay?.querySelector('.lightbox-counter');
    if (img) {
      img.style.opacity = '0';
      img.src = sources[currentIndex];
      img.onload = () => {
        img.style.opacity = '1';
      };
    }
    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${sources.length}`;
    }
  };

  const openLightbox = (startIndex) => {
    closeExisting();
    document.body.style.overflow = 'hidden';

    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('data-lightbox', 'true');
    overlay.tabIndex = -1;

    const sources = getImageSources();
    overlay.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <button type="button" class="lightbox-nav lightbox-nav--prev" aria-label="Vorheriges Bild">‹</button>
      <div class="lightbox-content">
        <img src="${sources[startIndex]}" alt="Vergrössertes Bild" style="transition: opacity 200ms ease;" />
      </div>
      <button type="button" class="lightbox-nav lightbox-nav--next" aria-label="Nächstes Bild">›</button>
      <button type="button" class="lightbox-close" aria-label="Schliessen">✕</button>
      <div class="lightbox-counter">${startIndex + 1} / ${sources.length}</div>
    `;

    currentIndex = startIndex;

    const teardown = () => {
      closeExisting();
      document.removeEventListener('keydown', handleKeydown);
      triggers[currentIndex]?.focus();
    };

    const handleKeydown = (ev) => {
      if (ev.key === 'Escape') {
        teardown();
      } else if (ev.key === 'ArrowLeft') {
        showImage(currentIndex - 1);
      } else if (ev.key === 'ArrowRight') {
        showImage(currentIndex + 1);
      }
    };

    overlay.addEventListener('click', (ev) => {
      const target = ev.target;
      if (target.classList.contains('lightbox-backdrop') || target.classList.contains('lightbox-close') || target === overlay) {
        teardown();
      } else if (target.classList.contains('lightbox-nav--prev')) {
        showImage(currentIndex - 1);
      } else if (target.classList.contains('lightbox-nav--next')) {
        showImage(currentIndex + 1);
      }
    });

    // Swipe support for mobile
    let touchStartX = 0;
    overlay.addEventListener('touchstart', (ev) => {
      touchStartX = ev.touches[0].clientX;
    }, { passive: true });

    overlay.addEventListener('touchend', (ev) => {
      const touchEndX = ev.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          showImage(currentIndex + 1);
        } else {
          showImage(currentIndex - 1);
        }
      }
    }, { passive: true });

    document.addEventListener('keydown', handleKeydown);
    document.body.appendChild(overlay);
    overlay.focus();
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLightbox(index);
    });
  });
}

