import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { setupApp } from './main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const htmlPath = path.resolve(__dirname, '../index.html');
const privacyPath = path.resolve(__dirname, '../datenschutzerklärung.html');

describe('setupApp', () => {
  it('renders the Fusspflege hero with contact links', () => {
    const container = document.createElement('div');

    setupApp(container);

    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toContain('Stefanie Staudt');

    const telLink = container.querySelector('a[href^="tel:"]');
    const mailLink = container.querySelector('a[href^="mailto:"]');
    expect(telLink).toBeTruthy();
    expect(mailLink).toBeTruthy();
  });

  it('creates navigation with anchors to core sections', () => {
    const container = document.createElement('div');

    setupApp(container);

    const nav = container.querySelector('nav');
    expect(nav).toBeTruthy();

    const targets = ['profil', 'uebermich', 'leistungen', 'hygiene', 'kontakt', 'datenschutz'];
    targets.forEach((id) => {
      const section = container.querySelector(`#${id}`);
      expect(section).toBeTruthy();

      const link = nav.querySelector(`a[href="#${id}"]`);
      expect(link).toBeTruthy();
    });
  });

  it('provides skip link and sticky nav affordance', () => {
    const container = document.createElement('div');

    setupApp(container);

    const skipLink = container.querySelector('a.skip-link');
    expect(skipLink).toBeTruthy();
    expect(skipLink?.getAttribute('href')).toBe('#main-content');

    const nav = container.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('structures services overview with titles and descriptions', () => {
    const container = document.createElement('div');

    setupApp(container);

    const services = Array.from(container.querySelectorAll('[data-service-item]'));
    expect(services.length).toBeGreaterThanOrEqual(3);

    services.forEach((card) => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      expect(title).toBeTruthy();
      expect(title?.textContent?.trim().length).toBeGreaterThan(0);
      expect(desc).toBeTruthy();
      expect(desc?.textContent?.trim().length).toBeGreaterThan(0);
    });
  });

  it('marks services layout as responsive-friendly', () => {
    const container = document.createElement('div');

    setupApp(container);

    const grid = container.querySelector('.services-grid');
    expect(grid).toBeTruthy();
    expect(grid?.getAttribute('data-responsive')).toBe('true');
  });

  it('renders hygiene/quality section with clear bullet points', () => {
    const container = document.createElement('div');

    setupApp(container);

    const hygiene = container.querySelector('#hygiene');
    expect(hygiene).toBeTruthy();

    const list = hygiene?.querySelector('ul');
    expect(list).toBeTruthy();
    const items = list ? Array.from(list.querySelectorAll('li')) : [];
    expect(items.length).toBeGreaterThanOrEqual(3);
  });

  it('shows profile with qualifications and compliant image', () => {
    const container = document.createElement('div');

    setupApp(container);

    const profile = container.querySelector('#profil');
    expect(profile).toBeTruthy();

    const name = profile?.querySelector('[data-profile-name]');
    expect(name?.textContent?.trim().length).toBeGreaterThan(0);

    const quals = Array.from(profile?.querySelectorAll('[data-qualification]') || []);
    expect(quals.length).toBeGreaterThanOrEqual(2);

    const img = profile?.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toMatch(/Portraet|Portrait|Profil/i);
    expect(img?.getAttribute('src')).toContain('photos/thumbs');
  });

  it('renders address and route link for anfahrt', () => {
    const container = document.createElement('div');

    setupApp(container);

    const anfahrt = container.querySelector('#anfahrt');
    expect(anfahrt).toBeTruthy();

    const address = anfahrt?.querySelector('[data-address]');
    expect(address?.textContent?.trim().length).toBeGreaterThan(0);

    const routeLink = anfahrt?.querySelector('a[href*="maps"]');
    expect(routeLink).toBeTruthy();
  });

  it('exposes contact block that is easy to copy', () => {
    const container = document.createElement('div');

    setupApp(container);

    const contactBlock = container.querySelector('[data-contact-block]');
    expect(contactBlock).toBeTruthy();

    const phone = contactBlock?.querySelector('[data-contact-phone]');
    const mail = contactBlock?.querySelector('[data-contact-mail]');
    expect(phone?.textContent).toContain('7253');
    expect(mail?.textContent?.trim()).toContain('praxis@staudt-fusspflege.de');
  });

  it('keeps mobile CTA bar visible with tel/mail links', () => {
    const container = document.createElement('div');

    setupApp(container);

    const ctaBar = container.querySelector('.mobile-cta');
    expect(ctaBar).toBeTruthy();

    const tel = ctaBar?.querySelector('a[href^="tel:"]');
    const mail = ctaBar?.querySelector('a[href^="mailto:"]');
    expect(tel).toBeTruthy();
    expect(mail).toBeTruthy();
    expect(ctaBar?.getAttribute('data-sticky')).toBe('true');
  });

  it('shows opening hours as definition list with term hint', () => {
    const container = document.createElement('div');

    setupApp(container);

    const hours = container.querySelector('[data-opening-hours]');
    expect(hours).toBeTruthy();

    const days = Array.from(hours?.querySelectorAll('dt') || []);
    const times = Array.from(hours?.querySelectorAll('dd') || []);
    expect(days.length).toBeGreaterThanOrEqual(3);
    expect(times.length).toBeGreaterThanOrEqual(3);

    const hint = container.querySelector('[data-termin-hint]');
    expect(hint).toBeTruthy();
    expect(hint?.textContent?.toLowerCase()).toContain('termin');
  });

  it('provides a shareable contact/address block with route link', () => {
    const container = document.createElement('div');

    setupApp(container);

    const block = container.querySelector('[data-contact-block]');
    expect(block).toBeTruthy();

    const address = block?.querySelector('[data-contact-address]');
    const phone = block?.querySelector('[data-contact-phone]');
    const mail = block?.querySelector('[data-contact-mail]');
    expect(address?.textContent).toContain('Kelterhausstr.');
    expect(phone?.textContent?.trim()).toContain('7253');
    expect(mail?.textContent?.trim()).toContain('praxis@staudt-fusspflege.de');

    const route = block?.querySelector('a[href*="Kelterhausstr.+3"]');
    expect(route).toBeTruthy();
  });

  it('includes legacy timeline milestones and membership info', () => {
    const container = document.createElement('div');

    setupApp(container);

    const hist = container.querySelector('#uebermich');
    expect(hist).toBeTruthy();
    const text = hist?.textContent || '';
    ['1999', '2001', '2012', '2013'].forEach((year) => expect(text).toContain(year));
    expect(text).toContain('Kassenzulassung');
    expect(text).toContain('Zentralverband');
  });

  it('shows detailed podologie, hygiene, and service bullets', () => {
    const container = document.createElement('div');

    setupApp(container);

    const podo = container.querySelector('#podologie');
    const hygiene = container.querySelector('#hygiene');
    const services = container.querySelector('#leistungen');

    expect(podo?.textContent).toContain('Podologengesetz');
    expect(podo?.textContent).toContain('Spangentechnik');

    expect(hygiene?.textContent).toContain('Thermodesinfektor');
    expect(hygiene?.textContent).toContain('Autoklav');

    expect(services?.textContent).toContain('Nagelprothetik');
    expect(services?.textContent).toContain('Warzen');
  });

  it('renders responsive gallery grid with lazy thumbs', () => {
    const container = document.createElement('div');

    setupApp(container);

    const gallery = container.querySelector('[data-gallery-grid]');
    expect(gallery).toBeTruthy();
    expect(gallery?.getAttribute('data-responsive')).toBe('true');

    const images = Array.from(gallery?.querySelectorAll('img') || []);
    expect(images.length).toBeGreaterThanOrEqual(4);
    images.forEach((img) => {
      expect(img.getAttribute('loading')).toBe('lazy');
      expect(img.getAttribute('src')).toContain('photos/thumbs');
    });
  });

  it('opens lightbox on click and closes with escape restoring focus', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    setupApp(container);

    const trigger = container.querySelector('[data-lightbox-trigger]');
    expect(trigger).toBeTruthy();

    trigger?.focus();

    trigger?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    const dialog = document.body.querySelector('[data-lightbox]');
    expect(dialog).toBeTruthy();

    dialog?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(document.body.querySelector('[data-lightbox]')).toBeNull();
    expect(document.activeElement).toBe(trigger);

    document.body.innerHTML = '';
  });

  it('has landmarks and working skip link with logical headings', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    setupApp(container);

    const header = container.querySelector('header');
    const nav = container.querySelector('nav');
    const main = container.querySelector('main');
    const footer = container.querySelector('footer');
    expect(header).toBeTruthy();
    expect(nav).toBeTruthy();
    expect(main).toBeTruthy();
    expect(footer).toBeTruthy();

    const skip = container.querySelector('a.skip-link');
    expect(skip?.getAttribute('href')).toBe('#main-content');

    const h1 = container.querySelectorAll('h1');
    const h2 = container.querySelectorAll('h2');
    expect(h1.length).toBeGreaterThanOrEqual(1);
    expect(h2.length).toBeGreaterThanOrEqual(3);

    document.body.innerHTML = '';
  });

  it('includes focus-visible styling rules and escape closes lightbox', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    setupApp(container);

    const focusStyles = container.querySelector('style[data-focus-rules]');
    expect(focusStyles?.textContent).toContain(':focus-visible');

    const trigger = container.querySelector('[data-lightbox-trigger]');
    trigger?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    const dialog = document.body.querySelector('[data-lightbox]');
    dialog?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(document.body.querySelector('[data-lightbox]')).toBeNull();

    document.body.innerHTML = '';
  });

  it('serves core navigation and CTAs when JS is disabled', () => {
    const html = readFileSync(htmlPath, 'utf-8');
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const app = doc.querySelector('#app');

    const nav = app?.querySelector('nav');
    expect(nav).toBeTruthy();

    const heading = app?.querySelector('h1');
    expect(heading?.textContent).toContain('Stefanie Staudt');

    const tel = app?.querySelector('a[href^="tel:"]');
    const mail = app?.querySelector('a[href^="mailto:"]');
    expect(tel).toBeTruthy();
    expect(mail).toBeTruthy();

    ['profil', 'uebermich', 'podologie', 'leistungen', 'hygiene', 'kontakt', 'datenschutz', 'anfahrt', 'galerie'].forEach((id) => {
      expect(app?.querySelector(`#${id}`)).toBeTruthy();
    });
  });

  it('keeps gallery anchors navigable without JS lightbox', () => {
    const html = readFileSync(htmlPath, 'utf-8');
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const gallery = doc.querySelector('.gallery-grid');
    expect(gallery).toBeTruthy();

    const anchors = Array.from(gallery?.querySelectorAll('a[href*="photos/"]') || []);
    expect(anchors.length).toBeGreaterThanOrEqual(3);
    anchors.forEach((a) => {
      expect(a.getAttribute('href')).toContain('photos/');
      const img = a.querySelector('img');
      expect(img).toBeTruthy();
    });
  });

  it('provides a UTF-8 privacy page with updated content', () => {
    const html = readFileSync(privacyPath, 'utf-8');
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const charset = doc.querySelector('meta[charset]');
    expect(charset?.getAttribute('charset')?.toLowerCase()).toBe('utf-8');

    const heading = doc.querySelector('h1');
    expect(heading?.textContent?.toLowerCase()).toContain('datenschutzer');

    const updated = doc.querySelector('.last-updated');
    expect(updated?.textContent?.toLowerCase()).toContain('stand');

    const contact = doc.querySelector('address');
    expect(contact?.textContent?.toLowerCase()).toContain('praxis@staudt-fusspflege.de');

    const scripts = doc.querySelectorAll('script');
    expect(scripts.length).toBe(0);
  });

  it('documents where to edit site content without CMS', () => {
    const guide = readFileSync(path.resolve(__dirname, '../docs/content-maintenance.md'), 'utf-8');
    expect(guide.toLowerCase()).toContain('utf-8');
    expect(guide).toContain('index.html');
    expect(guide.toLowerCase()).toContain('photos');
    expect(guide.toLowerCase()).toContain('datenschutzerklaerung');
  });
  it('renders real address, phone, and map link in static fallback', () => {
    const html = readFileSync(htmlPath, 'utf-8');
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const contactBlock = doc.querySelector('[data-contact-block]');
    expect(contactBlock?.textContent).toContain('Kelterhausstr. 3');
    expect(contactBlock?.textContent).toContain('7253');
    expect(contactBlock?.textContent).toContain('praxis@staudt-fusspflege.de');

    const mapLink = doc.querySelector('a[href*="Kelterhausstr.+3"]');
    expect(mapLink).toBeTruthy();
  });

  it('includes legacy timeline and detailed content in static fallback', () => {
    const html = readFileSync(htmlPath, 'utf-8');
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const hist = doc.querySelector('#uebermich');
    expect(hist).toBeTruthy();
    const text = hist?.textContent || '';
    ['1999', '2001', '2012', '2013'].forEach((year) => expect(text).toContain(year));
    expect(text).toContain('Zentralverband');

    const podo = doc.querySelector('#podologie');
    const hygiene = doc.querySelector('#hygiene');
    const services = doc.querySelector('#leistungen');
    expect(podo?.textContent).toContain('Podologengesetz');
    expect(hygiene?.textContent).toContain('Thermodesinfektor');
    expect(services?.textContent).toContain('Nagelprothetik');
  });

  it('links to the standalone privacy page in SPA', () => {
    const container = document.createElement('div');

    setupApp(container);

    const link = container.querySelector('#datenschutz a[href*="datenschutzerklärung.html"]');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('links to the standalone privacy page in static fallback', () => {
    const html = readFileSync(htmlPath, 'utf-8');
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const link = doc.querySelector('#datenschutz a[href*="datenschutzerklärung.html"]');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('target')).toBe('_blank');
  });
});
