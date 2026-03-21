import type { Office } from './types';
import { toSlug } from './types';

export const canarias: Office[] = [
  {
    province: 'Las Palmas',
    city: 'Las Palmas de Gran Canaria',
    coworking: 'GoCoworking',
    address: 'Calle Muelle Las Palmas, 2A',
    zip: '35003',
    slug: toSlug('Las Palmas de Gran Canaria'),
    description:
      'Las Palmas de Gran Canaria es un hub de nómadas digitales y turismo de invierno, con más de 300 días de sol al año. VivaSpeak automatiza la atención de hoteles de Maspalomas, inmobiliarias para expatriados y clínicas con pacientes internacionales con agentes de voz IA en español, inglés y alemán.',
    whyLocal:
      'Maspalomas y Playa del Inglés concentran miles de hoteles y apartamentos que atienden turistas alemanes, británicos y escandinavos durante todo el año. Las inmobiliarias de Las Canteras venden a nómadas digitales y jubilados europeos que buscan residencia permanente. Y las clínicas privadas atienden a una población extranjera que necesita comunicarse en su idioma. VivaSpeak gestiona estos flujos con IA trilingüe que diferencia una reserva de hotel de una consulta médica o una visita a propiedad.',
    industries: [
      'Hoteles y resorts de Maspalomas',
      'Inmobiliarias para nómadas digitales',
      'Clínicas con pacientes internacionales',
      'Comercio portuario y zona franca',
    ],
    descriptionEn:
      'Las Palmas de Gran Canaria is a digital nomad hub and winter tourism destination with over 300 sunny days a year. VivaSpeak automates support for Maspalomas hotels, expat real estate agencies and clinics with international patients using AI voice agents in Spanish, English and German.',
    whyLocalEn:
      'Maspalomas and Playa del Inglés host thousands of hotels and apartments serving German, British and Scandinavian tourists year-round. Las Canteras real estate agencies sell to digital nomads and European retirees seeking permanent residence. And private clinics serve a foreign population needing to communicate in their language. VivaSpeak manages these flows with trilingual AI distinguishing a hotel booking from a medical inquiry or property viewing.',
    industriesEn: [
      'Maspalomas hotels and resorts',
      'Digital nomad real estate',
      'Clinics with international patients',
      'Port commerce and free trade zone',
    ],
  },
  {
    province: 'Santa Cruz de Tenerife',
    city: 'Santa Cruz de Tenerife',
    coworking: 'Espacio Kernel',
    address: 'Avenida Tres de Mayo, 30',
    zip: '38005',
    slug: toSlug('Santa Cruz de Tenerife'),
    description:
      'Tenerife recibe 6 millones de turistas al año, con el Teide como el parque nacional más visitado de Europa. VivaSpeak automatiza la atención de hoteles del sur de Tenerife, clínicas de bienestar y empresas de excursiones al Teide con agentes de voz IA en español, inglés y alemán.',
    whyLocal:
      'Los hoteles de Costa Adeje y Los Cristianos atienden a turistas de toda Europa que reservan excursiones, spas y restaurantes por teléfono. Las clínicas de bienestar y estética del sur de la isla reciben pacientes internacionales que combinan vacaciones con tratamientos. Y las empresas de excursiones al Teide y avistamiento de cetáceos gestionan reservas multilingües. VivaSpeak permite a todos estos negocios responder en el idioma del turista al instante, capturando reservas que antes se perdían por barrera idiomática.',
    industries: [
      'Hoteles de Costa Adeje y Los Cristianos',
      'Clínicas de bienestar y turismo médico',
      'Excursiones al Teide y avistamiento de cetáceos',
      'Comercio portuario de Santa Cruz',
    ],
    descriptionEn:
      "Tenerife welcomes 6 million tourists annually, with Mount Teide as Europe's most visited national park. VivaSpeak automates support for southern Tenerife hotels, wellness clinics and Teide excursion companies with AI voice agents in Spanish, English and German.",
    whyLocalEn:
      "Hotels in Costa Adeje and Los Cristianos serve tourists from across Europe booking excursions, spas and restaurants by phone. Wellness and aesthetic clinics in the south receive international patients combining holidays with treatments. And Teide excursion and whale-watching companies manage multilingual bookings. VivaSpeak lets all these businesses respond in the tourist's language instantly, capturing bookings previously lost to language barriers.",
    industriesEn: [
      'Costa Adeje and Los Cristianos hotels',
      'Wellness clinics and medical tourism',
      'Teide excursions and whale watching',
      'Santa Cruz port commerce',
    ],
  },
];
