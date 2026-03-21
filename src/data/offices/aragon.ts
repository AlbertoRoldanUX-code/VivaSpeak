import type { Office } from './types';
import { toSlug } from './types';

export const aragon: Office[] = [
  {
    province: 'Huesca',
    city: 'Huesca',
    coworking: 'Coworking Costa',
    address: 'Calle Coso Alto, 67',
    zip: '22003',
    slug: toSlug('Huesca'),
    description:
      'Huesca es la puerta del Pirineo aragonés, con estaciones de esquí como Formigal y Cerler que reciben más de 1 millón de esquiadores por temporada. VivaSpeak automatiza la gestión de reservas de estaciones, hoteles de montaña y clínicas oscenses con agentes de voz IA que escalan en temporada alta.',
    whyLocal:
      'Las estaciones de Aramón (Formigal, Cerler, Panticosa) generan picos de llamadas brutales entre noviembre y abril para reservas de forfait, alojamiento y clases de esquí. En verano, el turismo de aventura del Parque Nacional de Ordesa toma el relevo. Las clínicas de Huesca capital atienden tanto a residentes como a turistas accidentados en montaña. VivaSpeak gestiona esta estacionalidad extrema con IA que escala automáticamente sin contratar personal temporal.',
    industries: [
      'Estaciones de esquí y turismo de nieve',
      'Turismo de aventura y Ordesa',
      'Clínicas y urgencias de montaña',
      'Agroalimentación del Somontano',
    ],
    descriptionEn:
      'Huesca is the gateway to the Aragonese Pyrenees, with ski resorts like Formigal and Cerler welcoming over 1 million skiers per season. VivaSpeak automates booking management for resorts, mountain hotels and local clinics with AI voice agents that scale during peak season.',
    whyLocalEn:
      'Aramón resorts (Formigal, Cerler, Panticosa) generate massive call spikes between November and April for ski pass, accommodation and lesson bookings. In summer, adventure tourism in Ordesa National Park takes over. Huesca city clinics serve both residents and mountain-injured tourists. VivaSpeak manages this extreme seasonality with AI that scales automatically without hiring temporary staff.',
    industriesEn: [
      'Ski resorts and snow tourism',
      'Adventure tourism and Ordesa',
      'Clinics and mountain emergencies',
      'Somontano agri-food',
    ],
  },
  {
    province: 'Teruel',
    city: 'Teruel',
    coworking: 'Espacio Coworking Teruel',
    address: 'Calle Amantes, 17',
    zip: '44001',
    slug: toSlug('Teruel'),
    description:
      'Teruel, famosa por su patrimonio mudéjar UNESCO y el parque paleontológico Dinópolis, demuestra que la España vaciada puede innovar. VivaSpeak dota a alojamientos rurales, Dinópolis y clínicas turolenses de agentes de voz IA que ofrecen atención profesional 24/7 sin necesidad de grandes equipos.',
    whyLocal:
      'Dinópolis atrae más de 200.000 visitantes al año, muchos de ellos familias que reservan entradas y alojamiento por teléfono. El patrimonio mudéjar genera un turismo cultural que necesita gestión de visitas guiadas. Y las clínicas turolenses cubren una de las provincias más extensas y menos pobladas de España, donde la atención telefónica es vital. VivaSpeak permite a Teruel competir digitalmente con IA que gestiona reservas turísticas y citas médicas con la misma eficiencia que en una gran ciudad.',
    industries: [
      'Dinópolis y turismo paleontológico',
      'Patrimonio mudéjar y turismo cultural',
      'Clínicas rurales de amplia cobertura',
      'Jamón de Teruel y agroalimentación',
    ],
    descriptionEn:
      'Teruel, famous for its UNESCO Mudéjar heritage and the Dinópolis paleontological park, proves that rural Spain can innovate. VivaSpeak equips rural lodges, Dinópolis and local clinics with AI voice agents offering professional 24/7 support without large teams.',
    whyLocalEn:
      "Dinópolis attracts over 200,000 visitors annually, many of them families booking tickets and accommodation by phone. The Mudéjar heritage generates cultural tourism needing guided visit management. And local clinics cover one of Spain's largest and least populated provinces, where phone support is vital. VivaSpeak lets Teruel compete digitally with AI managing tourist bookings and medical appointments as efficiently as in a major city.",
    industriesEn: [
      'Dinópolis and paleontological tourism',
      'Mudéjar heritage and cultural tourism',
      'Wide-coverage rural clinics',
      'Teruel ham and agri-food',
    ],
  },
  {
    province: 'Zaragoza',
    city: 'Zaragoza',
    coworking: 'Coworking El Gancho',
    address: 'Calle de San Pablo, 12',
    zip: '50003',
    slug: toSlug('Zaragoza'),
    description:
      'Zaragoza es el nudo logístico de España: equidistante de Madrid, Barcelona, Bilbao y Valencia, su plataforma PLAZA es la mayor zona logística de Europa. VivaSpeak automatiza la atención de empresas logísticas, la industria de Opel-Stellantis y clínicas zaragozanas con agentes de voz IA.',
    whyLocal:
      'PLAZA (Plataforma Logística de Zaragoza) ocupa 13 millones de m² y alberga a Inditex, Amazon y decenas de operadores logísticos que gestionan miles de llamadas diarias. La factoría de Opel-Stellantis genera un ecosistema de proveedores de automoción. Y las clínicas del Paseo de la Independencia atienden a la quinta ciudad de España. VivaSpeak conecta estos flujos con IA que diferencia una incidencia logística de una cita médica, respondiendo con el contexto adecuado.',
    industries: [
      'Logística PLAZA (Inditex, Amazon)',
      'Automoción Opel-Stellantis y proveedores',
      'Clínicas del Paseo de la Independencia',
      'Turismo del Pilar y congresos',
    ],
    descriptionEn:
      "Zaragoza is Spain's logistics hub: equidistant from Madrid, Barcelona, Bilbao and Valencia, its PLAZA platform is Europe's largest logistics zone. VivaSpeak automates support for logistics companies, the Opel-Stellantis industry and local clinics with AI voice agents.",
    whyLocalEn:
      "PLAZA (Zaragoza Logistics Platform) covers 13 million m² and hosts Inditex, Amazon and dozens of logistics operators managing thousands of daily calls. The Opel-Stellantis factory generates an automotive supplier ecosystem. And clinics on Paseo de la Independencia serve Spain's fifth-largest city. VivaSpeak connects these flows with AI that tells a logistics incident from a medical appointment, responding with the right context.",
    industriesEn: [
      'PLAZA logistics (Inditex, Amazon)',
      'Opel-Stellantis automotive and suppliers',
      'Paseo de la Independencia clinics',
      'Pilar tourism and congresses',
    ],
  },
];
