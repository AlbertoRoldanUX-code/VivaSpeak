import type { Office } from './types';
import { toSlug } from './types';

export const asturias: Office[] = [
  {
    province: 'Asturias',
    city: 'Oviedo',
    coworking: 'El Camaleón de Rubik',
    address: 'Calle Manuel García Conde, 3',
    zip: '33001',
    slug: toSlug('Oviedo'),
    description:
      'Oviedo, capital del Principado de Asturias y sede de los Premios Princesa de Asturias, combina un sector sanitario potente con turismo prerrománico y sidra. VivaSpeak automatiza la atención de clínicas de la calle Uría, despachos de abogados y negocios de turismo rural asturiano con agentes de voz IA.',
    whyLocal:
      'La calle Uría y el barrio de El Cristo concentran las principales clínicas privadas de Asturias, que atienden a una población envejecida con alta demanda de seguimiento telefónico. Los despachos de abogados del centro gestionan casos de derecho minero y energético heredados de la tradición industrial. Y el turismo rural de los Picos de Europa y la costa asturiana genera reservas desde toda Europa. VivaSpeak permite a cada uno de estos negocios ofrecer atención continua con IA que entiende el contexto asturiano.',
    industries: [
      'Clínicas privadas de la calle Uría',
      'Despachos de derecho minero y energético',
      'Turismo rural Picos de Europa',
      'Sidrerías y gastronomía asturiana',
    ],
    descriptionEn:
      'Oviedo, capital of the Principality of Asturias and home to the Princess of Asturias Awards, combines a strong healthcare sector with pre-Romanesque tourism and cider culture. VivaSpeak automates support for clinics on Calle Uría, law firms and Asturian rural tourism businesses with AI voice agents.',
    whyLocalEn:
      "Calle Uría and the El Cristo district host Asturias' main private clinics, serving an aging population with high demand for phone follow-up. City-center law firms handle mining and energy law cases inherited from the industrial tradition. And rural tourism in the Picos de Europa and the Asturian coast generates bookings from across Europe. VivaSpeak lets each of these businesses offer continuous support with AI that understands the Asturian context.",
    industriesEn: [
      'Calle Uría private clinics',
      'Mining and energy law firms',
      'Picos de Europa rural tourism',
      'Cider houses and Asturian gastronomy',
    ],
  },
];
