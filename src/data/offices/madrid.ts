import type { Office } from './types';
import { toSlug } from './types';

export const madrid: Office[] = [
  {
    province: 'Madrid',
    city: 'Madrid',
    coworking: 'The Shed Coworking',
    address: 'Calle de Hermosilla, 48',
    zip: '28001',
    slug: toSlug('Madrid'),
    description:
      'Madrid concentra el 18% del PIB de España y más de 500.000 empresas activas. Desde despachos de abogados de la Milla de Oro hasta clínicas de Chamberí y startups de Lavapiés, VivaSpeak automatiza la primera línea de contacto con agentes de voz IA que operan en español e inglés las 24 horas.',
    whyLocal:
      'El barrio de Salamanca alberga los despachos de abogados y consultoras más importantes del país, que reciben llamadas de clientes internacionales a cualquier hora. Chamberí y Retiro concentran clínicas especializadas con agendas saturadas. Y el ecosistema startup de Lavapiés y Malasaña necesita atención al cliente escalable sin contratar call centers. VivaSpeak permite a cada uno de estos perfiles automatizar su atención con IA que cualifica leads, agenda reuniones y responde consultas técnicas sin intervención humana.',
    industries: [
      'Despachos de abogados de la Milla de Oro',
      'Clínicas especializadas de Chamberí',
      'Startups de Lavapiés y Malasaña',
      'Inmobiliarias de lujo del barrio de Salamanca',
    ],
    descriptionEn:
      "Madrid accounts for 18% of Spain's GDP and over 500,000 active businesses. From law firms on the Golden Mile to clinics in Chamberí and startups in Lavapiés, VivaSpeak automates the front line with AI voice agents operating in Spanish and English around the clock.",
    whyLocalEn:
      "The Salamanca district houses Spain's top law firms and consultancies, receiving calls from international clients at any hour. Chamberí and Retiro concentrate specialized clinics with packed schedules. And the Lavapiés and Malasaña startup ecosystem needs scalable customer service without hiring call centers. VivaSpeak lets each of these profiles automate their support with AI that qualifies leads, schedules meetings and answers technical queries without human intervention.",
    industriesEn: [
      'Golden Mile law firms',
      'Chamberí specialized clinics',
      'Lavapiés and Malasaña startups',
      'Salamanca district luxury real estate',
    ],
  },
];
