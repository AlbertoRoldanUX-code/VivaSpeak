import type { Office } from './types';
import { toSlug } from './types';

export const navarra: Office[] = [
  {
    province: 'Navarra',
    city: 'Pamplona',
    coworking: 'Pamplona Coworking',
    address: 'Calle del Monasterio de Tulebras, 2',
    zip: '31011',
    slug: toSlug('Pamplona'),
    description:
      'Pamplona, mundialmente conocida por los Sanfermines, es también un polo industrial con Volkswagen, Siemens Gamesa y un clúster de energías renovables de referencia europea. VivaSpeak automatiza la atención de proveedores industriales, clínicas navarras y negocios turísticos de los encierros con agentes de voz IA.',
    whyLocal:
      'La factoría de Volkswagen en Landaben y Siemens Gamesa generan un ecosistema de proveedores que gestionan pedidos técnicos por teléfono en español, inglés y alemán. Los Sanfermines atraen un millón de visitantes en una semana, colapsando las centralitas de hoteles y restaurantes. Y las clínicas de la Avenida de Bayona atienden a una población con alto nivel de renta y exigencia. VivaSpeak escala automáticamente durante Sanfermines y mantiene la atención industrial el resto del año con IA.',
    industries: [
      'Automoción Volkswagen y proveedores',
      'Energía eólica Siemens Gamesa',
      'Turismo de Sanfermines',
      'Clínicas de la Avenida de Bayona',
    ],
    descriptionEn:
      'Pamplona, world-famous for the Running of the Bulls, is also an industrial hub with Volkswagen, Siemens Gamesa and a leading European renewable energy cluster. VivaSpeak automates support for industrial suppliers, local clinics and San Fermín tourism businesses with AI voice agents.',
    whyLocalEn:
      'The Volkswagen factory in Landaben and Siemens Gamesa generate a supplier ecosystem managing technical orders by phone in Spanish, English and German. San Fermín attracts one million visitors in a single week, overwhelming hotel and restaurant switchboards. And clinics on Avenida de Bayona serve a population with high income and expectations. VivaSpeak scales automatically during San Fermín and maintains industrial support year-round with AI.',
    industriesEn: [
      'Volkswagen automotive and suppliers',
      'Siemens Gamesa wind energy',
      'San Fermín tourism',
      'Avenida de Bayona clinics',
    ],
  },
];
