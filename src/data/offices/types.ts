export interface Office {
  province: string;
  city: string;
  coworking: string;
  address: string;
  zip: string;
  slug: string;
  description: string;
  whyLocal: string;
  industries: string[];
  descriptionEn: string;
  whyLocalEn: string;
  industriesEn: string[];
}

export function toSlug(city: string): string {
  return city
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(/\s+/g, '-')
    .replaceAll(/[^a-z0-9-]/g, '');
}
