import type { Office } from './types';
import { toSlug } from './types';

export const paisVasco: Office[] = [
  {
    province: 'Álava',
    city: 'Vitoria-Gasteiz',
    coworking: 'Coworking Cocubo',
    address: 'Calle del Cubo, 1',
    zip: '01001',
    slug: toSlug('Vitoria-Gasteiz'),
    description:
      'Vitoria-Gasteiz, European Green Capital y sede de importantes empresas de automoción como Mercedes-Benz, necesita soluciones de atención al cliente que estén a la altura de su tejido industrial. VivaSpeak ofrece agentes de voz IA que atienden en euskera y castellano a clínicas, proveedores industriales e inmobiliarias alavesas.',
    whyLocal:
      'El polígono industrial de Jundiz, uno de los mayores del norte de España, concentra cientos de empresas que reciben pedidos y consultas técnicas por teléfono. En el centro urbano, las clínicas del barrio de Lakua y los despachos de la Calle Dato gestionan agendas saturadas. VivaSpeak permite a ambos perfiles automatizar la primera línea de contacto con IA que entiende terminología industrial y sanitaria en los dos idiomas oficiales.',
    industries: [
      'Automoción y proveedores industriales',
      'Clínicas y centros de rehabilitación',
      'Inmobiliarias de obra nueva',
      'Despachos profesionales bilingües',
    ],
    descriptionEn:
      'Vitoria-Gasteiz, European Green Capital and home to major automotive companies like Mercedes-Benz, needs customer service solutions that match its industrial fabric. VivaSpeak provides AI voice agents that respond in Basque and Spanish for clinics, industrial suppliers and real estate agencies across Álava.',
    whyLocalEn:
      'The Jundiz industrial estate, one of the largest in northern Spain, hosts hundreds of companies receiving orders and technical inquiries by phone. In the city center, clinics in the Lakua district and firms on Calle Dato manage packed schedules. VivaSpeak lets both profiles automate their front line with AI that understands industrial and healthcare terminology in both official languages.',
    industriesEn: [
      'Automotive and industrial suppliers',
      'Clinics and rehabilitation centers',
      'New-build real estate',
      'Bilingual professional firms',
    ],
  },
  {
    province: 'Bizkaia',
    city: 'Bilbao',
    coworking: 'Bilbao Lab Coworking',
    address: 'Alameda de Mazarredo, 25',
    zip: '48009',
    slug: toSlug('Bilbao'),
    description:
      'Bilbao se ha reinventado como hub de innovación tras su transformación urbana con el Guggenheim. Hoy, firmas de ingeniería del Ensanche, clínicas de Indautxu y empresas tecnológicas de Zorrotzaurre confían en VivaSpeak para automatizar llamadas y WhatsApp con agentes de voz IA que operan en euskera, castellano e inglés.',
    whyLocal:
      'La ría del Nervión ya no mueve mineral de hierro sino ideas: Bilbao concentra el 60% del PIB de Euskadi con sectores como ingeniería naval, energía eólica offshore y servicios financieros. Las empresas bilbaínas atienden clientes desde Alemania hasta Latinoamérica, y necesitan respuestas inmediatas en varios idiomas. VivaSpeak cubre esa necesidad con agentes IA que cualifican leads técnicos y agendan reuniones comerciales sin intervención humana.',
    industries: [
      'Ingeniería naval y energía offshore',
      'Clínicas especializadas de Indautxu',
      'Despachos financieros y de consultoría',
      'Startups tecnológicas de Zorrotzaurre',
    ],
    descriptionEn:
      'Bilbao has reinvented itself as an innovation hub following its urban transformation with the Guggenheim. Today, engineering firms in the Ensanche, clinics in Indautxu and tech companies in Zorrotzaurre rely on VivaSpeak to automate calls and WhatsApp with AI voice agents operating in Basque, Spanish and English.',
    whyLocalEn:
      "The Nervión estuary no longer moves iron ore but ideas: Bilbao accounts for 60% of the Basque Country's GDP with sectors like naval engineering, offshore wind energy and financial services. Local businesses serve clients from Germany to Latin America and need instant responses in multiple languages. VivaSpeak meets that need with AI agents that qualify technical leads and schedule business meetings without human intervention.",
    industriesEn: [
      'Naval engineering and offshore energy',
      'Specialized clinics in Indautxu',
      'Financial and consulting firms',
      'Tech startups in Zorrotzaurre',
    ],
  },
  {
    province: 'Gipuzkoa',
    city: 'San Sebastián',
    coworking: 'Coworking Donostia',
    address: 'Calle Miracruz, 23',
    zip: '20001',
    slug: toSlug('San Sebastián'),
    description:
      'San Sebastián, con más estrellas Michelin por metro cuadrado que casi cualquier ciudad del mundo, genera una demanda de reservas y consultas en cuatro idiomas que desborda a los equipos humanos. VivaSpeak automatiza esa atención para restaurantes, clínicas de la Parte Vieja e inmobiliarias de Ondarreta con agentes de voz IA multilingües.',
    whyLocal:
      'La Parte Vieja concentra más de 200 bares de pintxos y restaurantes que reciben llamadas en euskera, castellano, francés e inglés simultáneamente. Las clínicas del barrio de Gros y las inmobiliarias de lujo de Ondarreta gestionan agendas complejas con clientes internacionales. VivaSpeak entiende esta diversidad lingüística y sectorial, derivando cada llamada al flujo correcto: reserva gastronómica, cita médica o visita a propiedad.',
    industries: [
      'Alta gastronomía y pintxos',
      'Turismo premium y festivales (SSIFF)',
      'Clínicas privadas del barrio de Gros',
      'Inmobiliarias de lujo costeras',
    ],
    descriptionEn:
      'San Sebastián, with more Michelin stars per square meter than almost any city in the world, generates a demand for bookings and inquiries in four languages that overwhelms human teams. VivaSpeak automates this for restaurants, clinics in the Old Town and real estate agencies in Ondarreta with multilingual AI voice agents.',
    whyLocalEn:
      'The Old Town packs over 200 pintxo bars and restaurants receiving calls in Basque, Spanish, French and English simultaneously. Clinics in the Gros district and luxury real estate agencies in Ondarreta manage complex schedules with international clients. VivaSpeak understands this linguistic and sectoral diversity, routing each call to the right flow: gastronomic reservation, medical appointment or property viewing.',
    industriesEn: [
      'Fine dining and pintxos',
      'Premium tourism and festivals (SSIFF)',
      'Private clinics in Gros district',
      'Luxury coastal real estate',
    ],
  },
];
