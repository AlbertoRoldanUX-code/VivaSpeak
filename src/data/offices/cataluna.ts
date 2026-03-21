import type { Office } from './types';
import { toSlug } from './types';

export const cataluna: Office[] = [
  {
    province: 'Barcelona',
    city: 'Barcelona',
    coworking: 'Cowork Rambla Catalunya',
    address: 'Carrer de Còrsega, 284',
    zip: '08008',
    slug: toSlug('Barcelona'),
    description:
      'Barcelona mueve más de 200.000 millones de euros en PIB y alberga el ecosistema startup más grande del sur de Europa. Desde clínicas del Eixample hasta agencias inmobiliarias de Diagonal Mar, VivaSpeak automatiza la atención al cliente con agentes de voz IA que operan en catalán, castellano e inglés las 24 horas.',
    whyLocal:
      'El distrito 22@ concentra más de 1.500 empresas tecnológicas, mientras que el Eixample es el barrio con mayor densidad de clínicas privadas de España. Las inmobiliarias de la Barceloneta y Diagonal Mar atienden compradores internacionales que llaman desde distintos husos horarios. VivaSpeak permite a todos estos negocios responder al instante en tres idiomas, cualificar leads y agendar visitas sin que ninguna llamada quede sin respuesta.',
    industries: [
      'Startups y scaleups del 22@',
      'Clínicas privadas del Eixample',
      'Inmobiliarias internacionales',
      'Hostelería y turismo de congresos',
    ],
    descriptionEn:
      "Barcelona generates over €200 billion in GDP and hosts southern Europe's largest startup ecosystem. From clinics in the Eixample to real estate agencies in Diagonal Mar, VivaSpeak automates customer service with AI voice agents operating in Catalan, Spanish and English around the clock.",
    whyLocalEn:
      "The 22@ district hosts over 1,500 tech companies, while the Eixample has Spain's highest density of private clinics. Real estate agencies in Barceloneta and Diagonal Mar serve international buyers calling from different time zones. VivaSpeak lets all these businesses respond instantly in three languages, qualify leads and schedule viewings so no call goes unanswered.",
    industriesEn: [
      'Startups and scaleups in 22@',
      'Private clinics in the Eixample',
      'International real estate',
      'Hospitality and congress tourism',
    ],
  },
  {
    province: 'Girona',
    city: 'Girona',
    coworking: 'COSSI Coworking',
    address: 'Carrer Nou, 12',
    zip: '17001',
    slug: toSlug('Girona'),
    description:
      'Girona es la puerta de la Costa Brava y sede de El Celler de Can Roca, el restaurante que puso la gastronomía catalana en el mapa mundial. VivaSpeak ayuda a hoteles boutique, empresas frutícolas del Empordà y clínicas gerundenses a gestionar reservas y consultas con IA en catalán, castellano e inglés.',
    whyLocal:
      'La Costa Brava recibe más de 8 millones de turistas al año, muchos de ellos franceses, alemanes y británicos que reservan por teléfono. Las empresas frutícolas del Baix Empordà exportan a toda Europa y necesitan atender llamadas de distribuidores en horarios dispares. VivaSpeak automatiza ambos flujos con agentes IA que distinguen una reserva hotelera de un pedido de fruta, respondiendo en el idioma del interlocutor.',
    industries: [
      'Hoteles boutique Costa Brava',
      'Fruticultura y exportación del Empordà',
      'Clínicas y centros de bienestar',
      'Restauración gastronómica',
    ],
    descriptionEn:
      'Girona is the gateway to the Costa Brava and home to El Celler de Can Roca, the restaurant that put Catalan cuisine on the world map. VivaSpeak helps boutique hotels, Empordà fruit companies and local clinics manage bookings and inquiries with AI in Catalan, Spanish and English.',
    whyLocalEn:
      "The Costa Brava welcomes over 8 million tourists annually, many of them French, German and British visitors who book by phone. Fruit companies in the Baix Empordà export across Europe and need to take distributor calls at odd hours. VivaSpeak automates both flows with AI agents that distinguish a hotel booking from a fruit order, responding in the caller's language.",
    industriesEn: [
      'Costa Brava boutique hotels',
      'Empordà fruit farming and export',
      'Clinics and wellness centers',
      'Gastronomic restaurants',
    ],
  },
  {
    province: 'Lleida',
    city: 'Lleida',
    coworking: 'Lleida Cowork',
    address: 'Carrer Torres de Sanui, 5',
    zip: '25006',
    slug: toSlug('Lleida'),
    description:
      'Lleida produce más fruta dulce que cualquier otra provincia de España y es la puerta al Pirineo catalán con estaciones como Baqueira Beret. VivaSpeak automatiza la atención telefónica de cooperativas frutícolas, estaciones de esquí y clínicas leridanas con agentes de voz IA que operan en catalán y castellano.',
    whyLocal:
      "Las cooperativas del Segrià y el Pla d'Urgell gestionan pedidos de grandes distribuidores europeos que llaman en horarios incompatibles con la jornada agrícola. En invierno, las estaciones del Val d'Aran reciben avalanchas de llamadas para reservas de forfait y alojamiento. VivaSpeak resuelve ambos picos con IA que procesa pedidos de fruta y reservas de esquí sin confundir los flujos.",
    industries: [
      'Cooperativas frutícolas del Segrià',
      'Estaciones de esquí y turismo de montaña',
      'Clínicas comarcales',
      'Agroexportación a Europa',
    ],
    descriptionEn:
      'Lleida produces more stone fruit than any other province in Spain and is the gateway to the Catalan Pyrenees with resorts like Baqueira Beret. VivaSpeak automates phone support for fruit cooperatives, ski resorts and local clinics with AI voice agents operating in Catalan and Spanish.',
    whyLocalEn:
      "Cooperatives in the Segrià and Pla d'Urgell manage orders from major European distributors who call at hours incompatible with the agricultural workday. In winter, Val d'Aran resorts face avalanches of calls for ski pass and accommodation bookings. VivaSpeak handles both peaks with AI that processes fruit orders and ski bookings without mixing up the flows.",
    industriesEn: [
      'Segrià fruit cooperatives',
      'Ski resorts and mountain tourism',
      'Regional clinics',
      'Agri-export to Europe',
    ],
  },
  {
    province: 'Tarragona',
    city: 'Tarragona',
    coworking: 'COTAKO Coworking',
    address: 'Carrer del Pare Palau, 5',
    zip: '43001',
    slug: toSlug('Tarragona'),
    description:
      'Tarragona combina un anfiteatro romano Patrimonio de la Humanidad con el mayor polo petroquímico del Mediterráneo occidental. VivaSpeak atiende las necesidades de comunicación de empresas químicas, hoteles de la Costa Daurada y clínicas tarraconenses con agentes de voz IA trilingües.',
    whyLocal:
      'El polígono petroquímico de Tarragona genera el 25% de la producción química de España y sus empresas necesitan gestionar llamadas técnicas de proveedores internacionales. En paralelo, la Costa Daurada y PortAventura atraen millones de visitantes que reservan alojamiento y experiencias por teléfono. VivaSpeak maneja ambos mundos con IA que diferencia una consulta de seguridad industrial de una reserva familiar.',
    industries: [
      'Industria petroquímica y proveedores',
      'Turismo Costa Daurada y PortAventura',
      'Clínicas y centros de salud',
      'Hostelería y apartamentos turísticos',
    ],
    descriptionEn:
      'Tarragona combines a UNESCO World Heritage Roman amphitheater with the largest petrochemical hub in the western Mediterranean. VivaSpeak serves the communication needs of chemical companies, Costa Daurada hotels and local clinics with trilingual AI voice agents.',
    whyLocalEn:
      "Tarragona's petrochemical complex generates 25% of Spain's chemical output and its companies need to manage technical calls from international suppliers. Meanwhile, the Costa Daurada and PortAventura attract millions of visitors booking accommodation and experiences by phone. VivaSpeak handles both worlds with AI that tells an industrial safety inquiry apart from a family booking.",
    industriesEn: [
      'Petrochemical industry and suppliers',
      'Costa Daurada and PortAventura tourism',
      'Clinics and health centers',
      'Hospitality and tourist apartments',
    ],
  },
];
