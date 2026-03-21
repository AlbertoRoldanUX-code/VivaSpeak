import type { Office } from './types';
import { toSlug } from './types';

export const cantabria: Office[] = [
  {
    province: 'Cantabria',
    city: 'Santander',
    coworking: 'Coworking ETC Santander',
    address: 'Calle Isabel la Católica, 1',
    zip: '39007',
    slug: toSlug('Santander'),
    description:
      'Santander, sede histórica del Banco Santander y de la UIMP, combina un sector financiero consolidado con turismo de playa premium en El Sardinero. VivaSpeak automatiza la atención de consultoras financieras, clínicas de El Sardinero y hoteles cántabros con agentes de voz IA.',
    whyLocal:
      'El ecosistema financiero de Santander genera cientos de consultoras y gestorías que atienden llamadas de clientes con asuntos urgentes. Las clínicas del Paseo de Pereda y El Sardinero sirven a una población que valora la atención personalizada. Y los hoteles de Santillana del Mar y Comillas gestionan reservas de turismo cultural y de playa. VivaSpeak permite a las consultoras no perder llamadas de clientes mientras están en reunión, y a los hoteles captar reservas internacionales con IA multilingüe.',
    industries: [
      'Consultoras y gestorías financieras',
      'Clínicas de El Sardinero y Paseo de Pereda',
      'Turismo cultural Santillana y Comillas',
      'Hostelería de playa premium',
    ],
    descriptionEn:
      'Santander, historic home of Banco Santander and the UIMP, combines an established financial sector with premium beach tourism in El Sardinero. VivaSpeak automates support for financial consultancies, El Sardinero clinics and Cantabrian hotels with AI voice agents.',
    whyLocalEn:
      "Santander's financial ecosystem generates hundreds of consultancies and tax firms handling urgent client calls. Clinics on Paseo de Pereda and El Sardinero serve a population that values personalized attention. And hotels in Santillana del Mar and Comillas manage cultural and beach tourism bookings. VivaSpeak lets consultancies avoid missing client calls during meetings, and hotels capture international bookings with multilingual AI.",
    industriesEn: [
      'Financial consultancies and tax firms',
      'El Sardinero and Paseo de Pereda clinics',
      'Santillana and Comillas cultural tourism',
      'Premium beach hospitality',
    ],
  },
];
