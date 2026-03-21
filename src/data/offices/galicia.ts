import type { Office } from './types';
import { toSlug } from './types';

export const galicia: Office[] = [
  {
    province: 'A Coruña',
    city: 'A Coruña',
    coworking: 'DOPAMINA Workspace',
    address: 'Rúa Juana de Vega, 12',
    zip: '15003',
    slug: toSlug('A Coruña'),
    description:
      'A Coruña concentra más de 4.000 empresas de servicios sanitarios, logística portuaria y comercio internacional. VivaSpeak permite a estos negocios coruñeses automatizar cada llamada entrante y mensaje de WhatsApp con un agente de voz IA que cualifica, agenda y responde en gallego y castellano las 24 horas.',
    whyLocal:
      'Con el puerto exterior de Punta Langosteira moviendo más de 14 millones de toneladas al año y un distrito sanitario que atiende a 550.000 habitantes, las empresas coruñesas reciben un volumen de llamadas que desborda los equipos humanos. La zona de Marineda concentra clínicas privadas, despachos de abogados y consultoras que pierden oportunidades cada vez que salta el buzón de voz. VivaSpeak resuelve esto con agentes IA que entienden el contexto local y derivan cada consulta al profesional adecuado.',
    industries: [
      'Clínicas privadas y centros de diagnóstico',
      'Transitarios y logística portuaria',
      'Despachos de abogados marítimos',
      'Comercio textil (Inditex ecosystem)',
    ],
    descriptionEn:
      'A Coruña is home to over 4,000 service businesses spanning healthcare, port logistics and international trade. VivaSpeak lets these businesses automate every inbound call and WhatsApp message with an AI voice agent that qualifies leads, books appointments and responds in Galician and Spanish around the clock.',
    whyLocalEn:
      'With the outer port of Punta Langosteira handling over 14 million tonnes per year and a health district serving 550,000 residents, businesses in A Coruña face call volumes that overwhelm human teams. The Marineda area concentrates private clinics, law firms and consultancies that lose opportunities every time voicemail kicks in. VivaSpeak solves this with AI agents that understand the local context and route each inquiry to the right professional.',
    industriesEn: [
      'Private clinics and diagnostic centers',
      'Freight forwarders and port logistics',
      'Maritime law firms',
      'Textile commerce (Inditex ecosystem)',
    ],
  },
  {
    province: 'Lugo',
    city: 'Lugo',
    coworking: 'Coworking Kastel',
    address: 'Rúa Amendoeira, 25',
    zip: '27003',
    slug: toSlug('Lugo'),
    description:
      'Lugo, la única ciudad del mundo completamente rodeada por una muralla romana intacta, alberga un tejido empresarial ligado a la ganadería, el Camino de Santiago y los servicios rurales. VivaSpeak dota a estos negocios lucenses de un agente de voz IA que gestiona reservas, consultas veterinarias y citas médicas sin depender de horarios de oficina.',
    whyLocal:
      'La provincia de Lugo produce el 40% de la leche de España y recibe miles de peregrinos jacobeos cada temporada. Las cooperativas ganaderas necesitan atender llamadas de proveedores y veterinarios a cualquier hora, mientras que albergues y casas rurales del Camino gestionan reservas desde distintos husos horarios. VivaSpeak automatiza ambos flujos con IA que distingue entre una consulta de suministro y una reserva de alojamiento.',
    industries: [
      'Cooperativas ganaderas y lácteas',
      'Albergues y turismo del Camino de Santiago',
      'Clínicas veterinarias',
      'Comercio agroalimentario local',
    ],
    descriptionEn:
      'Lugo, the only city in the world completely encircled by an intact Roman wall, has a business fabric tied to livestock farming, the Camino de Santiago and rural services. VivaSpeak equips these businesses with an AI voice agent that manages bookings, veterinary inquiries and medical appointments without relying on office hours.',
    whyLocalEn:
      "The province of Lugo produces 40% of Spain's milk and welcomes thousands of Camino pilgrims each season. Livestock cooperatives need to take calls from suppliers and vets at any hour, while hostels and rural lodges along the Way handle bookings from multiple time zones. VivaSpeak automates both flows with AI that distinguishes between a supply inquiry and an accommodation booking.",
    industriesEn: [
      'Livestock and dairy cooperatives',
      'Hostels and Camino de Santiago tourism',
      'Veterinary clinics',
      'Local agri-food commerce',
    ],
  },
  {
    province: 'Ourense',
    city: 'Ourense',
    coworking: 'Magma Espacio',
    address: 'Rúa Bedoya, 27',
    zip: '32004',
    slug: toSlug('Ourense'),
    description:
      'Ourense es la capital termal de España, con más de 60 manantiales de aguas calientes y un sector de bienestar que mueve millones de euros al año. VivaSpeak ayuda a balnearios, bodegas de la Ribeira Sacra y clínicas ourensanas a gestionar reservas y consultas con un agente de voz IA disponible día y noche.',
    whyLocal:
      'Las Burgas, Outariz y Chavasqueira atraen visitantes todo el año, pero la mayoría de balnearios y spas ourensanos operan con equipos reducidos que no pueden atender el teléfono durante los tratamientos. Al mismo tiempo, las bodegas de la D.O. Ribeira Sacra reciben consultas de importadores internacionales en horarios incompatibles. VivaSpeak cubre ambos escenarios con IA multilingüe que agenda visitas a bodega y reservas termales sin intervención humana.',
    industries: [
      'Balnearios y turismo termal',
      'Bodegas D.O. Ribeira Sacra',
      'Clínicas de fisioterapia',
      'Turismo rural de interior',
    ],
    descriptionEn:
      "Ourense is Spain's thermal capital, with over 60 hot spring sources and a wellness sector worth millions annually. VivaSpeak helps spas, Ribeira Sacra wineries and local clinics manage bookings and inquiries with an AI voice agent available day and night.",
    whyLocalEn:
      "Las Burgas, Outariz and Chavasqueira attract visitors year-round, but most spas in Ourense operate with small teams who can't answer the phone during treatments. Meanwhile, Ribeira Sacra D.O. wineries receive inquiries from international importers at incompatible hours. VivaSpeak covers both scenarios with multilingual AI that books winery visits and thermal reservations without human intervention.",
    industriesEn: [
      'Spas and thermal tourism',
      'Ribeira Sacra D.O. wineries',
      'Physiotherapy clinics',
      'Inland rural tourism',
    ],
  },
  {
    province: 'Pontevedra',
    city: 'Pontevedra',
    coworking: 'Peregrina25 Coworking',
    address: 'Rúa Peregrina, 25',
    zip: '36001',
    slug: toSlug('Pontevedra'),
    description:
      'Pontevedra, referente europeo en movilidad peatonal y calidad de vida, es también sede de astilleros, conserveras y el turismo de las Rías Baixas. VivaSpeak permite a las empresas pontevedresas automatizar la atención telefónica y por WhatsApp con agentes de voz IA que responden en gallego, castellano e inglés.',
    whyLocal:
      'Los astilleros de Marín y la industria conservera de Vigo-Pontevedra generan miles de llamadas diarias entre proveedores, clientes y organismos portuarios. En paralelo, las Rías Baixas reciben turismo nacional e internacional que busca reservar experiencias gastronómicas y alojamiento. VivaSpeak gestiona estos flujos tan distintos con agentes IA especializados que saben diferenciar una consulta de exportación de una reserva de hotel.',
    industries: [
      'Astilleros e industria naval',
      'Conserveras y pesca',
      'Turismo gastronómico Rías Baixas',
      'Hostelería y alojamiento costero',
    ],
    descriptionEn:
      'Pontevedra, a European benchmark in pedestrian mobility and quality of life, is also home to shipyards, canneries and Rías Baixas tourism. VivaSpeak lets local businesses automate phone and WhatsApp support with AI voice agents that respond in Galician, Spanish and English.',
    whyLocalEn:
      'The Marín shipyards and the Vigo-Pontevedra canning industry generate thousands of daily calls between suppliers, customers and port authorities. Meanwhile, the Rías Baixas attract national and international tourists looking to book gastronomic experiences and accommodation. VivaSpeak manages these very different flows with specialized AI agents that distinguish an export inquiry from a hotel booking.',
    industriesEn: [
      'Shipyards and naval industry',
      'Canneries and fishing',
      'Rías Baixas gastronomic tourism',
      'Coastal hospitality and lodging',
    ],
  },
];
