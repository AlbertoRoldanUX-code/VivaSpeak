import type { Office } from './types';
import { toSlug } from './types';

export const baleares: Office[] = [
  {
    province: 'Illes Balears',
    city: 'Palma',
    coworking: 'Nidus Coworking & Office',
    address: 'Carrer de Margalida Caimari, 24',
    zip: '07005',
    slug: toSlug('Palma'),
    description:
      'Palma de Mallorca recibe 16 millones de turistas al año y alberga el mayor mercado inmobiliario de lujo de España. VivaSpeak automatiza la atención de inmobiliarias de Son Vida, hoteles boutique del casco antiguo y clínicas estéticas del Paseo Marítimo con agentes de voz IA en español, inglés, alemán y sueco.',
    whyLocal:
      'Las inmobiliarias de Son Vida y Portals Nous venden propiedades de millones de euros a compradores alemanes, británicos y escandinavos que llaman en sus idiomas. Los hoteles boutique del casco antiguo gestionan reservas de viajeros premium de todo el mundo. Y las clínicas estéticas y dentales del Paseo Marítimo atienden a residentes extranjeros y turistas médicos. VivaSpeak cubre esta diversidad con IA que habla cuatro idiomas y cualifica leads de alto valor sin intervención humana.',
    industries: [
      'Inmobiliarias de lujo Son Vida y Portals',
      'Hoteles boutique del casco antiguo',
      'Clínicas estéticas y turismo médico',
      'Náutica y chárter de yates',
    ],
    descriptionEn:
      "Palma de Mallorca welcomes 16 million tourists annually and hosts Spain's largest luxury real estate market. VivaSpeak automates support for Son Vida real estate agencies, old town boutique hotels and Paseo Marítimo aesthetic clinics with AI voice agents in Spanish, English, German and Swedish.",
    whyLocalEn:
      'Real estate agencies in Son Vida and Portals Nous sell multimillion-euro properties to German, British and Scandinavian buyers who call in their languages. Old town boutique hotels manage bookings from premium travelers worldwide. And aesthetic and dental clinics on the Paseo Marítimo serve foreign residents and medical tourists. VivaSpeak covers this diversity with AI speaking four languages and qualifying high-value leads without human intervention.',
    industriesEn: [
      'Son Vida and Portals luxury real estate',
      'Old town boutique hotels',
      'Aesthetic clinics and medical tourism',
      'Yacht charter and nautical',
    ],
  },
];
