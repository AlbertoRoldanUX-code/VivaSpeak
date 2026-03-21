import { describe, it, expect, beforeAll } from 'vitest';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { offices } from '../src/data/offices';

const DIST = 'dist';

describe('Build verification', () => {
  beforeAll(() => {
    execSync('npm run build', { stdio: 'pipe', timeout: 120_000 });
  }, 120_000);

  it('should generate 51 Spanish location pages', () => {
    const dir = join(DIST, 'ubicaciones');
    expect(existsSync(dir)).toBe(true);
    const folders = readdirSync(dir);
    expect(folders).toHaveLength(51);
  });

  it('should generate 51 English location pages', () => {
    const dir = join(DIST, 'en', 'locations');
    expect(existsSync(dir)).toBe(true);
    const folders = readdirSync(dir);
    expect(folders).toHaveLength(51);
  });

  it('should include the city name in each Spanish page title', () => {
    offices.forEach((office) => {
      const filePath = join(DIST, 'ubicaciones', office.slug, 'index.html');
      expect(existsSync(filePath), `Missing page: ${filePath}`).toBe(true);
      const html = readFileSync(filePath, 'utf-8');
      expect(html).toContain(`<title>Agente de Voz IA en ${office.city}`);
    });
  });

  it('should include the city name in each English page title', () => {
    offices.forEach((office) => {
      const filePath = join(DIST, 'en', 'locations', office.slug, 'index.html');
      expect(existsSync(filePath), `Missing page: ${filePath}`).toBe(true);
      const html = readFileSync(filePath, 'utf-8');
      expect(html).toContain(`<title>AI Voice Agent in ${office.city}`);
    });
  });
});
