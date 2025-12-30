import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import { rmSync, existsSync, readFileSync } from 'fs';
import path from 'path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const distDir = path.join(root, 'dist');

// Helper to normalize path resolution in tests
const resolveDist = (name) => path.join(distDir, name);

describe('static deployment build', () => {
  it('produces static HTML assets including the privacy page', () => {
    if (existsSync(distDir)) {
      rmSync(distDir, { recursive: true, force: true });
    }

    execSync('npm run build -- --emptyOutDir', { cwd: root, stdio: 'pipe' });

    expect(existsSync(resolveDist('index.html'))).toBe(true);
    expect(existsSync(resolveDist('datenschutzerklärung.html'))).toBe(true);
  });

  it('documents Netlify static deployment steps from dist/', () => {
    const guidePath = path.join(root, 'docs/deployment.md');
    const guide = readFileSync(guidePath, 'utf-8');

    expect(guide.toLowerCase()).toContain('netlify');
    expect(guide.toLowerCase()).toContain('dist');
    expect(guide).toMatch(/netlify\s+deploy/i);
  });

  it('defines security headers for static hosting', () => {
    const headersPath = path.join(root, 'public/_headers');
    const headers = readFileSync(headersPath, 'utf-8');

    expect(headers).toMatch(/Content-Security-Policy/i);
    expect(headers).toMatch(/Strict-Transport-Security/i);
    expect(headers).toMatch(/Referrer-Policy/i);
  });
});
