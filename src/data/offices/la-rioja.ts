import type { Office } from './types';
import { toSlug } from './types';

export const laRioja: Office[] = [
  {
    province: 'La Rioja',
    city: 'Logroño',
    coworking: 'Regus Logroño',
    address: 'Calle Chile, 54',
    zip: '26007',
    slug: toSlug('Logroño'),
    description:
      'Logroño es el corazón de La Rioja, la región vinícola más famosa de España con más de 600 bodegas. La Calle Laurel, con sus bares de pintxos, es un destino gastronómico nacional. VivaSpeak automatiza reservas de bodegas, catas y restaurantes riojanos con agentes de voz IA multilingües.',
    whyLocal:
      'Las bodegas de la D.O.Ca. Rioja reciben solicitudes de visita y compra de importadores de 130 países, muchas veces en inglés, alemán o chino. La Calle Laurel gestiona cientos de reservas diarias para grupos gastronómicos. Y las clínicas de Logroño atienden a una población que incluye trabajadores temporales de la vendimia. VivaSpeak permite a las bodegas gestionar reservas de cata internacionales, a los restaurantes no perder mesas y a las clínicas organizar agendas con IA.',
    industries: [
      'Bodegas D.O.Ca. Rioja y enoturismo',
      'Gastronomía de la Calle Laurel',
      'Clínicas y centros de salud',
      'Comercio vinícola de exportación',
    ],
    descriptionEn:
      "Logroño is the heart of La Rioja, Spain's most famous wine region with over 600 wineries. Calle Laurel, with its pintxo bars, is a national gastronomic destination. VivaSpeak automates winery bookings, tastings and restaurant reservations with multilingual AI voice agents.",
    whyLocalEn:
      'D.O.Ca. Rioja wineries receive visit and purchase requests from importers in 130 countries, often in English, German or Chinese. Calle Laurel manages hundreds of daily bookings for gastronomic groups. And Logroño clinics serve a population that includes temporary harvest workers. VivaSpeak lets wineries manage international tasting bookings, restaurants avoid losing tables and clinics organize schedules with AI.',
    industriesEn: [
      'D.O.Ca. Rioja wineries and wine tourism',
      'Calle Laurel gastronomy',
      'Clinics and health centers',
      'Wine export commerce',
    ],
  },
];
