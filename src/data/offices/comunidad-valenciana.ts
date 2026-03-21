import type { Office } from './types';
import { toSlug } from './types';

export const comunidadValenciana: Office[] = [
  {
    province: 'Alicante',
    city: 'Alicante',
    coworking: 'ULab',
    address: 'Plaza de San Cristóbal, 14',
    zip: '03002',
    slug: toSlug('Alicante'),
    description:
      'Alicante es el epicentro del turismo residencial en España: miles de británicos, escandinavos y alemanes compran propiedades en la Costa Blanca cada año. VivaSpeak automatiza la atención multilingüe de inmobiliarias, clínicas estéticas y negocios de hostelería alicantinos con agentes de voz IA en español, inglés y alemán.',
    whyLocal:
      'La Costa Blanca concentra el mayor número de residentes extranjeros de España, con comunidades británicas en Torrevieja, escandinavas en Alfaz del Pi y alemanas en Dénia. Las inmobiliarias gestionan consultas en tres idiomas simultáneamente, las clínicas estéticas atienden pacientes internacionales y los restaurantes del puerto reciben reservas desde toda Europa. VivaSpeak maneja esta complejidad multilingüe con IA que identifica el idioma del llamante y responde al instante.',
    industries: [
      'Inmobiliarias Costa Blanca para expatriados',
      'Clínicas estéticas y dentales',
      'Hostelería del puerto y Explanada',
      'Comercio internacional y calzado',
    ],
    descriptionEn:
      'Alicante is the epicenter of residential tourism in Spain: thousands of British, Scandinavian and German buyers purchase properties on the Costa Blanca every year. VivaSpeak automates multilingual support for real estate agencies, aesthetic clinics and hospitality businesses with AI voice agents in Spanish, English and German.',
    whyLocalEn:
      "The Costa Blanca has Spain's highest concentration of foreign residents, with British communities in Torrevieja, Scandinavians in Alfaz del Pi and Germans in Dénia. Real estate agencies handle inquiries in three languages simultaneously, aesthetic clinics serve international patients and port restaurants receive bookings from across Europe. VivaSpeak manages this multilingual complexity with AI that identifies the caller's language and responds instantly.",
    industriesEn: [
      'Costa Blanca real estate for expats',
      'Aesthetic and dental clinics',
      'Port and Explanada hospitality',
      'International commerce and footwear',
    ],
  },
  {
    province: 'Castellón',
    city: 'Castellón de la Plana',
    coworking: 'Coworking Office',
    address: 'Passeig de la Universitat, 13',
    zip: '12006',
    slug: toSlug('Castellón de la Plana'),
    description:
      'Castellón es el epicentro mundial de la industria cerámica, con el clúster de Onda y Vila-real exportando azulejos a 180 países. VivaSpeak automatiza la atención de empresas cerámicas, clínicas y negocios turísticos de Benicàssim con agentes de voz IA que gestionan pedidos técnicos y reservas en varios idiomas.',
    whyLocal:
      'El clúster cerámico de la Plana concentra más del 90% de la producción española de azulejos y recibe consultas técnicas de arquitectos y distribuidores de todo el mundo. Las clínicas de Castellón atienden a una población que crece con los trabajadores del sector. Y Benicàssim y Peñíscola generan un turismo que necesita gestión de reservas eficiente. VivaSpeak conecta estos tres mundos con IA que distingue un pedido de baldosas de una reserva de hotel.',
    industries: [
      'Industria cerámica de Onda y Vila-real',
      'Turismo costero Benicàssim y Peñíscola',
      'Clínicas y centros médicos',
      'Exportación y logística cerámica',
    ],
    descriptionEn:
      'Castellón is the global epicenter of the ceramic industry, with the Onda and Vila-real cluster exporting tiles to 180 countries. VivaSpeak automates support for ceramic companies, clinics and Benicàssim tourism businesses with AI voice agents handling technical orders and bookings in multiple languages.',
    whyLocalEn:
      'The Plana ceramic cluster accounts for over 90% of Spanish tile production and receives technical inquiries from architects and distributors worldwide. Castellón clinics serve a population growing with sector workers. And Benicàssim and Peñíscola generate tourism needing efficient booking management. VivaSpeak connects these three worlds with AI that tells a tile order apart from a hotel booking.',
    industriesEn: [
      'Onda and Vila-real ceramic industry',
      'Benicàssim and Peñíscola coastal tourism',
      'Clinics and medical centers',
      'Ceramic export and logistics',
    ],
  },
  {
    province: 'Valencia',
    city: 'Valencia',
    coworking: 'Vortex Centro',
    address: 'Carrer de Sorní, 12',
    zip: '46004',
    slug: toSlug('Valencia'),
    description:
      "Valencia, tercera ciudad de España y sede de la America's Cup y el GP de F1, combina un ecosistema tech en auge con la tradición exportadora de la huerta. VivaSpeak automatiza la atención de startups de Ruzafa, clínicas de la Gran Vía y empresas agroexportadoras de la huerta con agentes de voz IA trilingües.",
    whyLocal:
      'El barrio de Ruzafa se ha convertido en el hub creativo y tecnológico de Valencia, con cientos de startups y agencias digitales. La Gran Vía concentra clínicas especializadas que atienden a la tercera área metropolitana de España. Y la huerta valenciana exporta cítricos y hortalizas a toda Europa. VivaSpeak permite a estos tres perfiles tan distintos automatizar su primera línea de contacto con IA que habla valenciano, castellano e inglés.',
    industries: [
      'Startups y agencias digitales de Ruzafa',
      'Clínicas especializadas de Gran Vía',
      'Agroexportación citrícola',
      'Turismo de eventos y congresos',
    ],
    descriptionEn:
      "Valencia, Spain's third city and host of the America's Cup and F1 GP, combines a booming tech ecosystem with the export tradition of its huerta farmland. VivaSpeak automates support for Ruzafa startups, Gran Vía clinics and huerta agri-exporters with trilingual AI voice agents.",
    whyLocalEn:
      "The Ruzafa district has become Valencia's creative and tech hub, with hundreds of startups and digital agencies. Gran Vía concentrates specialized clinics serving Spain's third-largest metropolitan area. And the Valencian huerta exports citrus and vegetables across Europe. VivaSpeak lets these three very different profiles automate their front line with AI speaking Valencian, Spanish and English.",
    industriesEn: [
      'Ruzafa startups and digital agencies',
      'Gran Vía specialized clinics',
      'Citrus agri-export',
      'Events and congress tourism',
    ],
  },
];
