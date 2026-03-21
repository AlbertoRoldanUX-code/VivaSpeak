import type { Office } from './types';
import { toSlug } from './types';

export const ceutaMelilla: Office[] = [
  {
    province: 'Ceuta',
    city: 'Ceuta',
    coworking: 'SUMA-T Ceuta',
    address: 'Calle Teniente Arrabal, 2',
    zip: '51001',
    slug: toSlug('Ceuta'),
    description:
      'Ceuta, ciudad autónoma en el norte de África, es un puente comercial entre Europa y Marruecos con un régimen fiscal especial que atrae empresas. VivaSpeak automatiza la atención de negocios de comercio transfronterizo, clínicas y hostelería ceutí con agentes de voz IA bilingües español-árabe.',
    whyLocal:
      'El comercio transfronterizo con Marruecos genera un flujo constante de consultas en español y árabe darija. Las clínicas ceutíes atienden a una población multicultural que necesita comunicarse en ambos idiomas. Y la hostelería del centro recibe visitantes de ambos lados del Estrecho. VivaSpeak es la única solución de IA de voz que opera en español y árabe darija, permitiendo a las empresas ceutíes atender a clientes de dos continentes sin barreras lingüísticas.',
    industries: [
      'Comercio transfronterizo con Marruecos',
      'Clínicas multiculturales',
      'Hostelería del centro histórico',
      'Servicios portuarios del Estrecho',
    ],
    descriptionEn:
      'Ceuta, an autonomous city in North Africa, is a commercial bridge between Europe and Morocco with a special tax regime attracting businesses. VivaSpeak automates support for cross-border trade, clinics and hospitality with bilingual Spanish-Arabic AI voice agents.',
    whyLocalEn:
      "Cross-border trade with Morocco generates a constant flow of inquiries in Spanish and Darija Arabic. Ceuta's clinics serve a multicultural population needing to communicate in both languages. And city-center hospitality receives visitors from both sides of the Strait. VivaSpeak is the only AI voice solution operating in Spanish and Darija Arabic, letting Ceuta businesses serve customers from two continents without language barriers.",
    industriesEn: [
      'Cross-border commerce with Morocco',
      'Multicultural clinics',
      'Historic center hospitality',
      'Strait port services',
    ],
  },
  {
    province: 'Melilla',
    city: 'Melilla',
    coworking: 'Metropol Coworking',
    address: 'Calle Conde del Serrallo, 13',
    zip: '52001',
    slug: toSlug('Melilla'),
    description:
      'Melilla, con su arquitectura modernista única y su posición entre dos continentes, es una ciudad donde conviven cuatro culturas y se hablan español, tamazight y árabe darija. VivaSpeak automatiza la atención de comercios, clínicas y servicios melillenses con agentes de voz IA multilingües adaptados a esta realidad multicultural.',
    whyLocal:
      'Melilla es la ciudad con mayor diversidad lingüística de España: español, tamazight (bereber) y árabe darija conviven en el día a día comercial. Los comercios del centro atienden a clientes de ambos lados de la frontera con Marruecos. Las clínicas gestionan citas para una población multicultural. Y los servicios portuarios conectan África con Europa. VivaSpeak es capaz de atender en español y árabe, permitiendo a los negocios melillenses servir a toda su comunidad sin barreras.',
    industries: [
      'Comercio multicultural y distribución',
      'Clínicas con atención multilingüe',
      'Hostelería y gastronomía fusión',
      'Servicios portuarios y logística',
    ],
    descriptionEn:
      'Melilla, with its unique modernist architecture and position between two continents, is a city where four cultures coexist and Spanish, Tamazight and Darija Arabic are spoken. VivaSpeak automates support for shops, clinics and services with multilingual AI voice agents adapted to this multicultural reality.',
    whyLocalEn:
      "Melilla is Spain's most linguistically diverse city: Spanish, Tamazight (Berber) and Darija Arabic coexist in daily commerce. City-center shops serve customers from both sides of the Moroccan border. Clinics manage appointments for a multicultural population. And port services connect Africa with Europe. VivaSpeak can respond in Spanish and Arabic, letting Melilla businesses serve their entire community without barriers.",
    industriesEn: [
      'Multicultural commerce and distribution',
      'Multilingual clinics',
      'Fusion hospitality and gastronomy',
      'Port services and logistics',
    ],
  },
];
