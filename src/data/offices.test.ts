import { describe, it, expect } from 'vitest';
import { offices } from './offices';

describe('Office data integrity', () => {
  it('should export exactly 51 offices', () => {
    expect(offices).toHaveLength(51);
  });

  it('should have unique, non-empty slugs for all offices', () => {
    const slugs = offices.map((o) => o.slug);
    slugs.forEach((slug) => {
      expect(slug).toBeTruthy();
      expect(typeof slug).toBe('string');
      expect(slug.length).toBeGreaterThan(0);
    });
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(offices.length);
  });

  it('should have non-empty Spanish content fields for all offices', () => {
    offices.forEach((office) => {
      expect(office.description, `${office.city} missing description`).toBeTruthy();
      expect(office.whyLocal, `${office.city} missing whyLocal`).toBeTruthy();
      expect(office.industries, `${office.city} missing industries`).toBeInstanceOf(Array);
      expect(office.industries.length, `${office.city} has empty industries`).toBeGreaterThan(0);
      office.industries.forEach((ind) => {
        expect(ind, `${office.city} has empty industry string`).toBeTruthy();
      });
    });
  });

  it('should have non-empty English content fields for all offices', () => {
    offices.forEach((office) => {
      expect(office.descriptionEn, `${office.city} missing descriptionEn`).toBeTruthy();
      expect(office.whyLocalEn, `${office.city} missing whyLocalEn`).toBeTruthy();
      expect(office.industriesEn, `${office.city} missing industriesEn`).toBeInstanceOf(Array);
      expect(office.industriesEn.length, `${office.city} has empty industriesEn`).toBeGreaterThan(
        0
      );
      office.industriesEn.forEach((ind) => {
        expect(ind, `${office.city} has empty English industry string`).toBeTruthy();
      });
    });
  });

  it('should have non-empty core fields for all offices', () => {
    offices.forEach((office) => {
      expect(office.province, `${office.city} missing province`).toBeTruthy();
      expect(office.city, 'office missing city').toBeTruthy();
      expect(office.coworking, `${office.city} missing coworking`).toBeTruthy();
      expect(office.address, `${office.city} missing address`).toBeTruthy();
      expect(office.zip, `${office.city} missing zip`).toBeTruthy();
    });
  });
});
