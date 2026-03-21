export interface Office {
  province: string;
  city: string;
  coworking: string;
  address: string;
  zip: string;
  slug: string;
  description: string;
  whyLocal: string;
  industries: string[];
  descriptionEn: string;
  whyLocalEn: string;
  industriesEn: string[];
}

export function toSlug(city: string): string {
  return city
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(/\s+/g, '-')
    .replaceAll(/[^a-z0-9-]/g, '');
}

export const offices: Office[] = [
  {
    province: 'A Coruña',
    city: 'A Coruña',
    coworking: 'DOPAMINA Workspace',
    address: 'Rúa Juana de Vega, 12',
    zip: '15003',
    slug: toSlug('A Coruña'),
    description:
      'En A Coruña, VivaSpeak ayuda a empresas locales a automatizar llamadas y mensajes de WhatsApp con inteligencia artificial. Desde clínicas hasta despachos profesionales, nuestro agente de voz IA atiende, cualifica y agenda citas 24/7 para negocios coruñeses.',
    whyLocal:
      'A Coruña es un polo económico del noroeste peninsular con un tejido empresarial diverso que incluye servicios sanitarios, logística portuaria y comercio. La alta demanda de atención telefónica en estos sectores hace que la automatización con IA sea clave para no perder oportunidades de negocio.',
    industries: [
      'Clínicas y centros médicos',
      'Logística y transporte',
      'Despachos profesionales',
      'Comercio local',
    ],
    descriptionEn:
      'In A Coruña, VivaSpeak helps local businesses automate calls and WhatsApp messages with artificial intelligence. From clinics to professional firms, our AI voice agent answers, qualifies and schedules appointments 24/7 for businesses across the city.',
    whyLocalEn:
      'A Coruña is a major economic hub in northwestern Spain with a diverse business landscape spanning healthcare, port logistics and commerce. The high demand for phone support in these sectors makes AI automation essential to capture every business opportunity.',
    industriesEn: [
      'Clinics and medical centers',
      'Logistics and transport',
      'Professional firms',
      'Local commerce',
    ],
  },
  {
    province: 'Álava',
    city: 'Vitoria-Gasteiz',
    coworking: 'Coworking Cocubo',
    address: 'Calle del Cubo, 1',
    zip: '01001',
    slug: toSlug('Vitoria-Gasteiz'),
    description:
      'En Vitoria-Gasteiz, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas alavesas con agentes de voz IA. Ideal para clínicas, inmobiliarias y negocios industriales que necesitan responder a cada cliente sin perder llamadas.',
    whyLocal:
      'Vitoria-Gasteiz, capital del País Vasco, combina un fuerte sector industrial con una creciente economía de servicios. Las empresas locales gestionan un alto volumen de consultas telefónicas, y la automatización con IA permite atenderlas todas sin ampliar plantilla.',
    industries: [
      'Industria y manufactura',
      'Clínicas y salud',
      'Inmobiliarias',
      'Servicios profesionales',
    ],
    descriptionEn:
      'In Vitoria-Gasteiz, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Ideal for clinics, real estate agencies and industrial companies that need to respond to every customer without missing calls.',
    whyLocalEn:
      'Vitoria-Gasteiz, capital of the Basque Country, combines a strong industrial sector with a growing service economy. Local businesses handle a high volume of phone inquiries, and AI automation lets them answer every one without expanding their team.',
    industriesEn: [
      'Industry and manufacturing',
      'Clinics and healthcare',
      'Real estate',
      'Professional services',
    ],
  },
  {
    province: 'Albacete',
    city: 'Albacete',
    coworking: 'Hub 36 Albacete',
    address: 'Calle Mayor, 36',
    zip: '02001',
    slug: toSlug('Albacete'),
    description:
      'En Albacete, VivaSpeak permite a negocios locales automatizar llamadas y WhatsApp con IA. Nuestro agente de voz atiende consultas, agenda citas y cualifica leads para clínicas, inmobiliarias y empresas de servicios en la provincia.',
    whyLocal:
      'Albacete es un centro comercial y de servicios de Castilla-La Mancha con una economía basada en agricultura, comercio y atención sanitaria. Las empresas locales necesitan atender llamadas de forma eficiente, y VivaSpeak les permite hacerlo sin interrupciones ni llamadas perdidas.',
    industries: [
      'Agroalimentación',
      'Clínicas y consultas médicas',
      'Inmobiliarias',
      'Comercio y distribución',
    ],
    descriptionEn:
      'In Albacete, VivaSpeak enables local businesses to automate calls and WhatsApp with AI. Our voice agent handles inquiries, schedules appointments and qualifies leads for clinics, real estate agencies and service companies across the province.',
    whyLocalEn:
      'Albacete is a commercial and service hub in Castilla-La Mancha with an economy built on agriculture, commerce and healthcare. Local businesses need to handle calls efficiently, and VivaSpeak lets them do so without interruptions or missed calls.',
    industriesEn: [
      'Agri-food',
      'Clinics and medical practices',
      'Real estate',
      'Commerce and distribution',
    ],
  },
  {
    province: 'Alicante',
    city: 'Alicante',
    coworking: 'ULab',
    address: 'Plaza de San Cristóbal, 14',
    zip: '03002',
    slug: toSlug('Alicante'),
    description:
      'En Alicante, VivaSpeak automatiza la comunicación de empresas turísticas, clínicas y agencias inmobiliarias con agentes de voz IA y chatbots de WhatsApp. Responde a cada cliente en español e inglés, las 24 horas del día.',
    whyLocal:
      'Alicante es uno de los principales destinos turísticos y residenciales de España, con una alta demanda de atención al cliente multilingüe. Las inmobiliarias, clínicas estéticas y negocios de hostelería reciben un volumen constante de llamadas que VivaSpeak gestiona automáticamente.',
    industries: [
      'Turismo y hostelería',
      'Inmobiliarias',
      'Clínicas estéticas',
      'Comercio internacional',
    ],
    descriptionEn:
      'In Alicante, VivaSpeak automates communication for tourism businesses, clinics and real estate agencies with AI voice agents and WhatsApp chatbots. Respond to every customer in Spanish and English, 24 hours a day.',
    whyLocalEn:
      "Alicante is one of Spain's top tourist and residential destinations, with high demand for multilingual customer service. Real estate agencies, aesthetic clinics and hospitality businesses receive a constant flow of calls that VivaSpeak handles automatically.",
    industriesEn: [
      'Tourism and hospitality',
      'Real estate',
      'Aesthetic clinics',
      'International commerce',
    ],
  },
  {
    province: 'Almería',
    city: 'Almería',
    coworking: 'Coworking Almería WorkSpace',
    address: 'Calle Arráez, 11',
    zip: '04002',
    slug: toSlug('Almería'),
    description:
      'En Almería, VivaSpeak ayuda a empresas agrícolas, clínicas y negocios turísticos a automatizar llamadas y WhatsApp con inteligencia artificial. Nuestro agente de voz gestiona consultas y citas sin que pierdas ni una oportunidad.',
    whyLocal:
      'Almería lidera la producción hortofrutícola de Europa y cuenta con un sector turístico en auge. Las empresas almerienses necesitan atender consultas de clientes nacionales e internacionales de forma ágil, y VivaSpeak ofrece esa capacidad con IA multilingüe.',
    industries: ['Agroexportación', 'Turismo y hostelería', 'Clínicas', 'Inmobiliarias costeras'],
    descriptionEn:
      'In Almería, VivaSpeak helps agricultural businesses, clinics and tourism companies automate calls and WhatsApp with AI. Our voice agent manages inquiries and appointments so you never miss an opportunity.',
    whyLocalEn:
      'Almería leads Europe in fruit and vegetable production and has a booming tourism sector. Local businesses need to handle inquiries from national and international customers quickly, and VivaSpeak delivers that capability with multilingual AI.',
    industriesEn: ['Agri-export', 'Tourism and hospitality', 'Clinics', 'Coastal real estate'],
  },
  {
    province: 'Asturias',
    city: 'Oviedo',
    coworking: 'El Camaleón de Rubik',
    address: 'Calle Manuel García Conde, 3',
    zip: '33001',
    slug: toSlug('Oviedo'),
    description:
      'En Oviedo, VivaSpeak automatiza la atención telefónica y por WhatsApp de clínicas, despachos y empresas asturianas. Nuestro agente de voz IA responde llamadas, agenda citas y cualifica leads las 24 horas del día.',
    whyLocal:
      'Oviedo es el centro administrativo y de servicios de Asturias, con un tejido empresarial dominado por la sanidad, los servicios profesionales y el comercio. La automatización de llamadas con IA permite a los negocios ovetenses ofrecer atención continua sin aumentar costes.',
    industries: [
      'Clínicas y centros de salud',
      'Despachos de abogados',
      'Comercio y retail',
      'Turismo rural',
    ],
    descriptionEn:
      'In Oviedo, VivaSpeak automates phone and WhatsApp support for clinics, law firms and Asturian businesses. Our AI voice agent answers calls, schedules appointments and qualifies leads around the clock.',
    whyLocalEn:
      'Oviedo is the administrative and service center of Asturias, with a business landscape dominated by healthcare, professional services and commerce. AI call automation lets local businesses provide continuous support without increasing costs.',
    industriesEn: [
      'Clinics and health centers',
      'Law firms',
      'Commerce and retail',
      'Rural tourism',
    ],
  },
  {
    province: 'Ávila',
    city: 'Piedralaves',
    coworking: 'CORKWORKING',
    address: 'Calle Lavadero, s/n',
    zip: '05440',
    slug: toSlug('Piedralaves'),
    description:
      'En Piedralaves, VivaSpeak lleva la automatización con IA al entorno rural de Ávila. Nuestro agente de voz atiende llamadas y WhatsApp para casas rurales, clínicas locales y negocios que quieren ofrecer atención profesional sin depender de un equipo presencial.',
    whyLocal:
      'Piedralaves y la provincia de Ávila cuentan con un creciente sector de turismo rural y pequeños negocios que necesitan atender consultas telefónicas de forma profesional. VivaSpeak permite a estos negocios competir con la misma calidad de atención que las grandes ciudades.',
    industries: [
      'Turismo rural y casas rurales',
      'Clínicas locales',
      'Comercio rural',
      'Servicios profesionales',
    ],
    descriptionEn:
      'In Piedralaves, VivaSpeak brings AI automation to the rural landscape of Ávila. Our voice agent handles calls and WhatsApp for rural lodges, local clinics and businesses that want professional support without an on-site team.',
    whyLocalEn:
      'Piedralaves and the province of Ávila have a growing rural tourism sector and small businesses that need to handle phone inquiries professionally. VivaSpeak lets these businesses compete with the same service quality as major cities.',
    industriesEn: [
      'Rural tourism and lodges',
      'Local clinics',
      'Rural commerce',
      'Professional services',
    ],
  },
  {
    province: 'Badajoz',
    city: 'Badajoz',
    coworking: 'WorkLive',
    address: 'Avenida Sinforiano Madroñero, 8',
    zip: '06011',
    slug: toSlug('Badajoz'),
    description:
      'En Badajoz, VivaSpeak automatiza llamadas y WhatsApp para empresas extremeñas con agentes de voz IA. Desde clínicas hasta negocios agroalimentarios, nuestro sistema atiende, cualifica y agenda sin perder ninguna llamada.',
    whyLocal:
      'Badajoz es la ciudad más poblada de Extremadura y un importante nudo comercial con Portugal. Las empresas locales, especialmente en agroalimentación, salud y comercio transfronterizo, necesitan atención telefónica eficiente que VivaSpeak proporciona con IA.',
    industries: [
      'Agroalimentación',
      'Clínicas y salud',
      'Comercio transfronterizo',
      'Inmobiliarias',
    ],
    descriptionEn:
      'In Badajoz, VivaSpeak automates calls and WhatsApp for businesses in Extremadura with AI voice agents. From clinics to agri-food companies, our system answers, qualifies and schedules without missing a single call.',
    whyLocalEn:
      'Badajoz is the most populated city in Extremadura and a key commercial hub with Portugal. Local businesses, especially in agri-food, healthcare and cross-border trade, need efficient phone support that VivaSpeak delivers with AI.',
    industriesEn: ['Agri-food', 'Clinics and healthcare', 'Cross-border commerce', 'Real estate'],
  },
  {
    province: 'Barcelona',
    city: 'Barcelona',
    coworking: 'Cowork Rambla Catalunya',
    address: 'Carrer de Còrsega, 284',
    zip: '08008',
    slug: toSlug('Barcelona'),
    description:
      'En Barcelona, VivaSpeak automatiza la atención al cliente de empresas con agentes de voz IA y chatbots de WhatsApp. Ideal para clínicas, startups, inmobiliarias y negocios que reciben un alto volumen de llamadas en múltiples idiomas.',
    whyLocal:
      'Barcelona es la capital económica del Mediterráneo, con miles de empresas que atienden clientes en catalán, castellano e inglés. El ritmo de negocio exige respuestas inmediatas, y VivaSpeak permite automatizar esa primera línea de contacto sin perder calidad ni oportunidades.',
    industries: [
      'Startups y tecnología',
      'Clínicas y estética',
      'Inmobiliarias',
      'Turismo y hostelería',
    ],
    descriptionEn:
      'In Barcelona, VivaSpeak automates customer service for businesses with AI voice agents and WhatsApp chatbots. Ideal for clinics, startups, real estate agencies and businesses handling high call volumes in multiple languages.',
    whyLocalEn:
      'Barcelona is the economic capital of the Mediterranean, with thousands of businesses serving customers in Catalan, Spanish and English. The pace of business demands instant responses, and VivaSpeak automates that first point of contact without sacrificing quality or opportunities.',
    industriesEn: [
      'Startups and tech',
      'Clinics and aesthetics',
      'Real estate',
      'Tourism and hospitality',
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
      'En Bilbao, VivaSpeak automatiza llamadas y WhatsApp para empresas vizcaínas con inteligencia artificial. Nuestro agente de voz IA atiende consultas, agenda citas y cualifica leads para clínicas, despachos e industrias locales.',
    whyLocal:
      'Bilbao ha pasado de ser una ciudad industrial a convertirse en un referente de innovación y servicios. Las empresas bilbaínas, desde clínicas hasta firmas de ingeniería, necesitan atender un flujo constante de llamadas que VivaSpeak gestiona de forma automática.',
    industries: [
      'Ingeniería e industria',
      'Clínicas y salud',
      'Despachos profesionales',
      'Turismo cultural',
    ],
    descriptionEn:
      'In Bilbao, VivaSpeak automates calls and WhatsApp for Biscayan businesses with artificial intelligence. Our AI voice agent handles inquiries, schedules appointments and qualifies leads for clinics, firms and local industries.',
    whyLocalEn:
      'Bilbao has evolved from an industrial city into a hub of innovation and services. Local businesses, from clinics to engineering firms, need to handle a constant flow of calls that VivaSpeak manages automatically.',
    industriesEn: [
      'Engineering and industry',
      'Clinics and healthcare',
      'Professional firms',
      'Cultural tourism',
    ],
  },
  {
    province: 'Burgos',
    city: 'Burgos',
    coworking: 'BUHUB V29',
    address: 'Calle Vitoria, 29',
    zip: '09004',
    slug: toSlug('Burgos'),
    description:
      'En Burgos, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas locales con IA. Nuestro agente de voz responde llamadas, gestiona citas y cualifica clientes potenciales para negocios burgaleses.',
    whyLocal:
      'Burgos es un centro logístico e industrial de Castilla y León con un importante sector agroalimentario y de servicios. Las empresas locales necesitan atender consultas de forma continua, y VivaSpeak ofrece esa disponibilidad con agentes de voz IA.',
    industries: ['Agroalimentación', 'Logística y transporte', 'Clínicas', 'Turismo y patrimonio'],
    descriptionEn:
      'In Burgos, VivaSpeak automates phone and WhatsApp support for local businesses with AI. Our voice agent answers calls, manages appointments and qualifies potential customers for businesses across the city.',
    whyLocalEn:
      'Burgos is a logistics and industrial center in Castilla y León with a significant agri-food and service sector. Local businesses need to handle inquiries continuously, and VivaSpeak provides that availability with AI voice agents.',
    industriesEn: ['Agri-food', 'Logistics and transport', 'Clinics', 'Tourism and heritage'],
  },
  {
    province: 'Cáceres',
    city: 'Cáceres',
    coworking: 'CONPARTES',
    address: 'Calle San Pedro, 8',
    zip: '10003',
    slug: toSlug('Cáceres'),
    description:
      'En Cáceres, VivaSpeak automatiza llamadas y WhatsApp para negocios extremeños con agentes de voz IA. Clínicas, alojamientos rurales y despachos profesionales pueden atender a cada cliente sin perder oportunidades.',
    whyLocal:
      'Cáceres combina un creciente sector turístico, impulsado por su casco histórico Patrimonio de la Humanidad, con servicios de salud y comercio local. VivaSpeak permite a las empresas cacereñas ofrecer atención profesional las 24 horas sin ampliar equipo.',
    industries: [
      'Turismo y alojamiento rural',
      'Clínicas y salud',
      'Despachos profesionales',
      'Comercio local',
    ],
    descriptionEn:
      'In Cáceres, VivaSpeak automates calls and WhatsApp for businesses in Extremadura with AI voice agents. Clinics, rural lodges and professional firms can serve every customer without missing opportunities.',
    whyLocalEn:
      'Cáceres combines a growing tourism sector, driven by its UNESCO World Heritage old town, with healthcare and local commerce. VivaSpeak lets businesses in Cáceres offer professional 24/7 support without expanding their team.',
    industriesEn: [
      'Tourism and rural lodging',
      'Clinics and healthcare',
      'Professional firms',
      'Local commerce',
    ],
  },
  {
    province: 'Cádiz',
    city: 'Cádiz',
    coworking: 'Omniwork Center',
    address: 'Calle Acacias, 10',
    zip: '11007',
    slug: toSlug('Cádiz'),
    description:
      'En Cádiz, VivaSpeak automatiza la comunicación de empresas gaditanas con agentes de voz IA y chatbots de WhatsApp. Desde negocios turísticos hasta clínicas, nuestro sistema atiende llamadas y agenda citas las 24 horas.',
    whyLocal:
      'Cádiz es una provincia con una economía diversa que abarca turismo costero, industria naval, viticultura y servicios. El flujo estacional de clientes exige una atención flexible que VivaSpeak proporciona con automatización inteligente.',
    industries: [
      'Turismo costero y hostelería',
      'Bodegas y viticultura',
      'Clínicas',
      'Industria naval',
    ],
    descriptionEn:
      'In Cádiz, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. From tourism businesses to clinics, our system answers calls and schedules appointments around the clock.',
    whyLocalEn:
      'Cádiz is a province with a diverse economy spanning coastal tourism, shipbuilding, winemaking and services. The seasonal flow of customers demands flexible support that VivaSpeak provides with intelligent automation.',
    industriesEn: [
      'Coastal tourism and hospitality',
      'Wineries and viticulture',
      'Clinics',
      'Shipbuilding',
    ],
  },
  {
    province: 'Cantabria',
    city: 'Santander',
    coworking: 'Coworking ETC Santander',
    address: 'Calle Isabel la Católica, 1',
    zip: '39007',
    slug: toSlug('Santander'),
    description:
      'En Santander, VivaSpeak automatiza llamadas y WhatsApp para empresas cántabras con inteligencia artificial. Nuestro agente de voz IA atiende consultas, agenda citas y cualifica leads para clínicas, inmobiliarias y negocios turísticos.',
    whyLocal:
      'Santander es una ciudad con un sector financiero consolidado, turismo de calidad y una creciente oferta de servicios profesionales. Las empresas santanderinas necesitan atender llamadas de forma eficiente, y VivaSpeak lo hace posible con IA.',
    industries: ['Servicios financieros', 'Turismo y hostelería', 'Clínicas', 'Inmobiliarias'],
    descriptionEn:
      'In Santander, VivaSpeak automates calls and WhatsApp for Cantabrian businesses with artificial intelligence. Our AI voice agent handles inquiries, schedules appointments and qualifies leads for clinics, real estate agencies and tourism businesses.',
    whyLocalEn:
      'Santander is a city with an established financial sector, quality tourism and a growing range of professional services. Local businesses need to handle calls efficiently, and VivaSpeak makes it possible with AI.',
    industriesEn: ['Financial services', 'Tourism and hospitality', 'Clinics', 'Real estate'],
  },
  {
    province: 'Castellón',
    city: 'Castellón de la Plana',
    coworking: 'Coworking Office',
    address: 'Passeig de la Universitat, 13',
    zip: '12006',
    slug: toSlug('Castellón de la Plana'),
    description:
      'En Castellón de la Plana, VivaSpeak automatiza la atención al cliente de empresas castellonenses con agentes de voz IA. Ideal para el sector cerámico, clínicas y negocios turísticos que necesitan responder a cada consulta sin demora.',
    whyLocal:
      'Castellón es el epicentro mundial de la industria cerámica y cuenta con un sector turístico costero en expansión. Las empresas locales gestionan consultas de clientes nacionales e internacionales, y VivaSpeak les permite atenderlas todas con IA multilingüe.',
    industries: ['Industria cerámica', 'Turismo costero', 'Clínicas', 'Comercio y exportación'],
    descriptionEn:
      'In Castellón de la Plana, VivaSpeak automates customer service for local businesses with AI voice agents. Ideal for the ceramic industry, clinics and tourism businesses that need to respond to every inquiry without delay.',
    whyLocalEn:
      'Castellón is the global epicenter of the ceramic industry and has an expanding coastal tourism sector. Local businesses handle inquiries from national and international customers, and VivaSpeak lets them answer every one with multilingual AI.',
    industriesEn: ['Ceramic industry', 'Coastal tourism', 'Clinics', 'Commerce and export'],
  },
  {
    province: 'Córdoba',
    city: 'Córdoba',
    coworking: 'Incubadora Invepat',
    address: 'Avenida Ronda de los Tejares, 27',
    zip: '14008',
    slug: toSlug('Córdoba'),
    description:
      'En Córdoba, VivaSpeak automatiza la comunicación de empresas cordobesas con agentes de voz IA y chatbots de WhatsApp. Desde negocios turísticos hasta clínicas y despachos, nuestro sistema responde y agenda sin interrupciones.',
    whyLocal:
      'Córdoba es una ciudad con un patrimonio cultural que atrae millones de visitantes y una economía diversa que incluye agroalimentación, joyería y servicios. Las empresas cordobesas necesitan atención multicanal eficiente que VivaSpeak proporciona con IA.',
    industries: [
      'Turismo y patrimonio',
      'Agroalimentación y aceite',
      'Clínicas',
      'Joyería y artesanía',
    ],
    descriptionEn:
      'In Córdoba, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. From tourism businesses to clinics and firms, our system responds and schedules without interruptions.',
    whyLocalEn:
      'Córdoba is a city whose cultural heritage attracts millions of visitors, with a diverse economy including agri-food, jewelry and services. Local businesses need efficient multichannel support that VivaSpeak provides with AI.',
    industriesEn: [
      'Tourism and heritage',
      'Agri-food and olive oil',
      'Clinics',
      'Jewelry and crafts',
    ],
  },
  {
    province: 'Cuenca',
    city: 'Cuenca',
    coworking: 'thegoodspace',
    address: 'Calle Fermín Caballero, 3',
    zip: '16004',
    slug: toSlug('Cuenca'),
    description:
      'En Cuenca, VivaSpeak automatiza llamadas y WhatsApp para negocios conquenses con agentes de voz IA. Ideal para alojamientos turísticos, clínicas y empresas locales que quieren atender a cada cliente de forma profesional.',
    whyLocal:
      'Cuenca atrae turismo nacional e internacional gracias a su casco histórico y naturaleza. Los negocios locales, desde casas rurales hasta clínicas, necesitan gestionar reservas y consultas de forma eficiente, y VivaSpeak lo automatiza con IA.',
    industries: [
      'Turismo y alojamiento rural',
      'Clínicas',
      'Comercio local',
      'Servicios profesionales',
    ],
    descriptionEn:
      'In Cuenca, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Ideal for tourist accommodations, clinics and businesses that want to serve every customer professionally.',
    whyLocalEn:
      'Cuenca attracts national and international tourism thanks to its historic old town and natural landscapes. Local businesses, from rural lodges to clinics, need to manage bookings and inquiries efficiently, and VivaSpeak automates it with AI.',
    industriesEn: [
      'Tourism and rural lodging',
      'Clinics',
      'Local commerce',
      'Professional services',
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
      'En San Sebastián, VivaSpeak automatiza la atención al cliente de empresas donostiarras con agentes de voz IA. Perfecto para restaurantes, clínicas, inmobiliarias y negocios turísticos que reciben llamadas en varios idiomas.',
    whyLocal:
      'San Sebastián es un referente gastronómico y turístico internacional con una economía de servicios exigente. Los negocios donostiarras atienden clientes en euskera, castellano, francés e inglés, y VivaSpeak gestiona esa diversidad lingüística con IA.',
    industries: ['Gastronomía y hostelería', 'Turismo premium', 'Clínicas', 'Inmobiliarias'],
    descriptionEn:
      'In San Sebastián, VivaSpeak automates customer service for local businesses with AI voice agents. Perfect for restaurants, clinics, real estate agencies and tourism businesses receiving calls in multiple languages.',
    whyLocalEn:
      'San Sebastián is an international gastronomic and tourism benchmark with a demanding service economy. Local businesses serve customers in Basque, Spanish, French and English, and VivaSpeak handles that linguistic diversity with AI.',
    industriesEn: ['Gastronomy and hospitality', 'Premium tourism', 'Clinics', 'Real estate'],
  },
  {
    province: 'Girona',
    city: 'Girona',
    coworking: 'COSSI Coworking',
    address: 'Carrer Nou, 12',
    zip: '17001',
    slug: toSlug('Girona'),
    description:
      'En Girona, VivaSpeak automatiza llamadas y WhatsApp para empresas gerundenses con inteligencia artificial. Nuestro agente de voz IA atiende consultas en catalán, castellano e inglés para clínicas, inmobiliarias y negocios turísticos.',
    whyLocal:
      'Girona combina turismo de la Costa Brava, un sector agroalimentario potente y una creciente comunidad de emprendedores. Las empresas locales necesitan atención multilingüe y continua que VivaSpeak ofrece con agentes de voz IA.',
    industries: ['Turismo Costa Brava', 'Agroalimentación', 'Clínicas', 'Inmobiliarias'],
    descriptionEn:
      'In Girona, VivaSpeak automates calls and WhatsApp for local businesses with artificial intelligence. Our AI voice agent handles inquiries in Catalan, Spanish and English for clinics, real estate agencies and tourism businesses.',
    whyLocalEn:
      'Girona combines Costa Brava tourism, a strong agri-food sector and a growing entrepreneurial community. Local businesses need multilingual, continuous support that VivaSpeak delivers with AI voice agents.',
    industriesEn: ['Costa Brava tourism', 'Agri-food', 'Clinics', 'Real estate'],
  },
  {
    province: 'Granada',
    city: 'Granada',
    coworking: 'Anda CoWork',
    address: 'Avenida de Andalucía, 5',
    zip: '18014',
    slug: toSlug('Granada'),
    description:
      'En Granada, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas granadinas con agentes de voz IA. Ideal para clínicas, alojamientos turísticos e inmobiliarias que necesitan responder a cada cliente sin demora.',
    whyLocal:
      'Granada es un destino turístico de primer nivel con la Alhambra y Sierra Nevada, además de contar con una universidad que impulsa la economía de servicios. Las empresas locales reciben consultas constantes que VivaSpeak gestiona automáticamente con IA.',
    industries: [
      'Turismo y alojamiento',
      'Clínicas y salud',
      'Inmobiliarias',
      'Educación y formación',
    ],
    descriptionEn:
      'In Granada, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Ideal for clinics, tourist accommodations and real estate agencies that need to respond to every customer without delay.',
    whyLocalEn:
      'Granada is a top-tier tourist destination with the Alhambra and Sierra Nevada, plus a university that drives the service economy. Local businesses receive constant inquiries that VivaSpeak handles automatically with AI.',
    industriesEn: [
      'Tourism and lodging',
      'Clinics and healthcare',
      'Real estate',
      'Education and training',
    ],
  },
  {
    province: 'Guadalajara',
    city: 'Guadalajara',
    coworking: 'Espacio Karaba',
    address: 'Calle Marqués de Santillana, 13',
    zip: '19002',
    slug: toSlug('Guadalajara'),
    description:
      'En Guadalajara, VivaSpeak automatiza llamadas y WhatsApp para empresas del Corredor del Henares con agentes de voz IA. Nuestro sistema atiende consultas, agenda citas y cualifica leads para clínicas, inmobiliarias y empresas logísticas.',
    whyLocal:
      'Guadalajara se beneficia de su proximidad a Madrid y del Corredor del Henares, uno de los ejes logísticos más importantes de España. Las empresas locales necesitan atención telefónica eficiente para gestionar el creciente volumen de consultas.',
    industries: [
      'Logística y distribución',
      'Inmobiliarias',
      'Clínicas',
      'Industria y manufactura',
    ],
    descriptionEn:
      'In Guadalajara, VivaSpeak automates calls and WhatsApp for businesses along the Henares Corridor with AI voice agents. Our system handles inquiries, schedules appointments and qualifies leads for clinics, real estate agencies and logistics companies.',
    whyLocalEn:
      "Guadalajara benefits from its proximity to Madrid and the Henares Corridor, one of Spain's most important logistics hubs. Local businesses need efficient phone support to manage the growing volume of inquiries.",
    industriesEn: [
      'Logistics and distribution',
      'Real estate',
      'Clinics',
      'Industry and manufacturing',
    ],
  },
  {
    province: 'Huelva',
    city: 'Huelva',
    coworking: 'Coworking Huelva',
    address: 'Calle Puerto, 8',
    zip: '21003',
    slug: toSlug('Huelva'),
    description:
      'En Huelva, VivaSpeak automatiza la comunicación de empresas onubenses con agentes de voz IA y chatbots de WhatsApp. Desde el sector agroalimentario hasta clínicas y turismo, nuestro sistema atiende cada llamada sin interrupciones.',
    whyLocal:
      'Huelva lidera la producción de frutos rojos en Europa y cuenta con un sector turístico en auge gracias a sus playas y parques naturales. Las empresas locales necesitan gestionar consultas de forma ágil, y VivaSpeak lo hace posible con IA.',
    industries: [
      'Agroexportación y frutos rojos',
      'Turismo de playa y naturaleza',
      'Clínicas',
      'Industria química',
    ],
    descriptionEn:
      'In Huelva, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. From the agri-food sector to clinics and tourism, our system handles every call without interruptions.',
    whyLocalEn:
      'Huelva leads Europe in berry production and has a booming tourism sector thanks to its beaches and natural parks. Local businesses need to manage inquiries quickly, and VivaSpeak makes it possible with AI.',
    industriesEn: [
      'Agri-export and berries',
      'Beach and nature tourism',
      'Clinics',
      'Chemical industry',
    ],
  },
  {
    province: 'Huesca',
    city: 'Huesca',
    coworking: 'Coworking Costa',
    address: 'Calle Coso Alto, 67',
    zip: '22003',
    slug: toSlug('Huesca'),
    description:
      'En Huesca, VivaSpeak automatiza llamadas y WhatsApp para empresas oscenses con agentes de voz IA. Perfecto para negocios de turismo de montaña, clínicas y empresas agroalimentarias que quieren atender a cada cliente las 24 horas.',
    whyLocal:
      'Huesca es la puerta de entrada al Pirineo aragonés, con un sector turístico estacional que genera picos de demanda telefónica. VivaSpeak permite a los negocios oscenses gestionar reservas y consultas de forma automática durante todo el año.',
    industries: ['Turismo de montaña y esquí', 'Agroalimentación', 'Clínicas', 'Alojamiento rural'],
    descriptionEn:
      'In Huesca, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Perfect for mountain tourism businesses, clinics and agri-food companies that want to serve every customer around the clock.',
    whyLocalEn:
      'Huesca is the gateway to the Aragonese Pyrenees, with a seasonal tourism sector that creates peaks in phone demand. VivaSpeak lets local businesses manage bookings and inquiries automatically year-round.',
    industriesEn: ['Mountain tourism and skiing', 'Agri-food', 'Clinics', 'Rural lodging'],
  },
  {
    province: 'Illes Balears',
    city: 'Palma',
    coworking: 'Nidus Coworking & Office',
    address: 'Carrer de Margalida Caimari, 24',
    zip: '07005',
    slug: toSlug('Palma'),
    description:
      'En Palma, VivaSpeak automatiza la atención al cliente de empresas baleares con agentes de voz IA multilingües. Ideal para hoteles, inmobiliarias, clínicas y negocios turísticos que atienden clientes en español, inglés y alemán.',
    whyLocal:
      'Palma y las Illes Balears reciben millones de turistas al año, generando una demanda masiva de atención al cliente en múltiples idiomas. VivaSpeak permite a las empresas baleares responder en español, inglés y alemán las 24 horas sin ampliar equipo.',
    industries: [
      'Turismo y hostelería',
      'Inmobiliarias de lujo',
      'Clínicas y estética',
      'Náutica y chárter',
    ],
    descriptionEn:
      'In Palma, VivaSpeak automates customer service for Balearic businesses with multilingual AI voice agents. Ideal for hotels, real estate agencies, clinics and tourism businesses serving customers in Spanish, English and German.',
    whyLocalEn:
      'Palma and the Balearic Islands welcome millions of tourists each year, creating massive demand for multilingual customer service. VivaSpeak lets Balearic businesses respond in Spanish, English and German around the clock without expanding their team.',
    industriesEn: [
      'Tourism and hospitality',
      'Luxury real estate',
      'Clinics and aesthetics',
      'Nautical and charter',
    ],
  },
  {
    province: 'Jaén',
    city: 'Jaén',
    coworking: 'Cuatro Gatos Coworking',
    address: 'Calle Obispo Aguilar, 2',
    zip: '23001',
    slug: toSlug('Jaén'),
    description:
      'En Jaén, VivaSpeak automatiza llamadas y WhatsApp para empresas jienenses con agentes de voz IA. Desde cooperativas oleícolas hasta clínicas y despachos, nuestro sistema atiende cada consulta sin perder oportunidades.',
    whyLocal:
      'Jaén es la capital mundial del aceite de oliva, con un tejido empresarial ligado a la agroalimentación, el turismo de interior y los servicios profesionales. VivaSpeak ayuda a las empresas jienenses a gestionar sus comunicaciones de forma eficiente con IA.',
    industries: [
      'Aceite de oliva y agroalimentación',
      'Turismo de interior',
      'Clínicas',
      'Despachos profesionales',
    ],
    descriptionEn:
      'In Jaén, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. From olive oil cooperatives to clinics and firms, our system handles every inquiry without missing opportunities.',
    whyLocalEn:
      'Jaén is the world capital of olive oil, with a business landscape tied to agri-food, inland tourism and professional services. VivaSpeak helps local businesses manage their communications efficiently with AI.',
    industriesEn: ['Olive oil and agri-food', 'Inland tourism', 'Clinics', 'Professional firms'],
  },
  {
    province: 'La Rioja',
    city: 'Logroño',
    coworking: 'Regus Logroño',
    address: 'Calle Chile, 54',
    zip: '26007',
    slug: toSlug('Logroño'),
    description:
      'En Logroño, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas riojanas con agentes de voz IA. Ideal para bodegas, clínicas y negocios de enoturismo que necesitan gestionar reservas y consultas de forma eficiente.',
    whyLocal:
      'Logroño es el corazón de La Rioja, una región reconocida mundialmente por su vino. Las bodegas, restaurantes y negocios de enoturismo reciben un alto volumen de reservas y consultas que VivaSpeak gestiona automáticamente con IA.',
    industries: ['Bodegas y enoturismo', 'Gastronomía y hostelería', 'Clínicas', 'Comercio local'],
    descriptionEn:
      'In Logroño, VivaSpeak automates phone and WhatsApp support for Riojan businesses with AI voice agents. Ideal for wineries, clinics and wine tourism businesses that need to manage bookings and inquiries efficiently.',
    whyLocalEn:
      'Logroño is the heart of La Rioja, a region world-renowned for its wine. Wineries, restaurants and wine tourism businesses receive a high volume of bookings and inquiries that VivaSpeak manages automatically with AI.',
    industriesEn: [
      'Wineries and wine tourism',
      'Gastronomy and hospitality',
      'Clinics',
      'Local commerce',
    ],
  },
  {
    province: 'Las Palmas',
    city: 'Las Palmas de Gran Canaria',
    coworking: 'GoCoworking',
    address: 'Calle Muelle Las Palmas, 2A',
    zip: '35003',
    slug: toSlug('Las Palmas de Gran Canaria'),
    description:
      'En Las Palmas de Gran Canaria, VivaSpeak automatiza llamadas y WhatsApp para empresas canarias con agentes de voz IA multilingües. Perfecto para hoteles, clínicas, inmobiliarias y negocios turísticos que atienden clientes internacionales.',
    whyLocal:
      'Las Palmas de Gran Canaria es un destino turístico internacional con una economía que depende de la hostelería, el comercio y los servicios. La atención multilingüe es esencial, y VivaSpeak la ofrece con agentes de voz IA en español, inglés y alemán.',
    industries: [
      'Turismo y hostelería',
      'Inmobiliarias',
      'Clínicas y estética',
      'Comercio portuario',
    ],
    descriptionEn:
      'In Las Palmas de Gran Canaria, VivaSpeak automates calls and WhatsApp for Canarian businesses with multilingual AI voice agents. Perfect for hotels, clinics, real estate agencies and tourism businesses serving international customers.',
    whyLocalEn:
      'Las Palmas de Gran Canaria is an international tourist destination with an economy that depends on hospitality, commerce and services. Multilingual support is essential, and VivaSpeak delivers it with AI voice agents in Spanish, English and German.',
    industriesEn: [
      'Tourism and hospitality',
      'Real estate',
      'Clinics and aesthetics',
      'Port commerce',
    ],
  },
  {
    province: 'León',
    city: 'León',
    coworking: 'Coworking en León',
    address: 'Calle Ramón y Cajal, 29',
    zip: '24001',
    slug: toSlug('León'),
    description:
      'En León, VivaSpeak automatiza la comunicación de empresas leonesas con agentes de voz IA y chatbots de WhatsApp. Nuestro sistema atiende llamadas, agenda citas y cualifica leads para clínicas, despachos y negocios turísticos.',
    whyLocal:
      'León combina un rico patrimonio cultural con una economía de servicios, agroalimentación y energía. Las empresas leonesas necesitan atender consultas de forma continua, y VivaSpeak ofrece esa disponibilidad con automatización inteligente.',
    industries: ['Turismo y patrimonio', 'Agroalimentación', 'Clínicas', 'Energía y minería'],
    descriptionEn:
      'In León, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. Our system answers calls, schedules appointments and qualifies leads for clinics, firms and tourism businesses.',
    whyLocalEn:
      'León combines a rich cultural heritage with a service economy, agri-food and energy sectors. Local businesses need to handle inquiries continuously, and VivaSpeak provides that availability with intelligent automation.',
    industriesEn: ['Tourism and heritage', 'Agri-food', 'Clinics', 'Energy and mining'],
  },
  {
    province: 'Lleida',
    city: 'Lleida',
    coworking: 'Lleida Cowork',
    address: 'Carrer Torres de Sanui, 5',
    zip: '25006',
    slug: toSlug('Lleida'),
    description:
      'En Lleida, VivaSpeak automatiza llamadas y WhatsApp para empresas leridanas con agentes de voz IA. Ideal para el sector frutícola, clínicas y negocios de turismo de montaña que necesitan atención telefónica eficiente.',
    whyLocal:
      'Lleida es líder en producción frutícola y puerta de entrada al Pirineo catalán. Las empresas locales, desde cooperativas agrícolas hasta estaciones de esquí, necesitan gestionar consultas y reservas que VivaSpeak automatiza con IA.',
    industries: [
      'Fruticultura y agroalimentación',
      'Turismo de montaña y esquí',
      'Clínicas',
      'Cooperativas agrícolas',
    ],
    descriptionEn:
      'In Lleida, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Ideal for the fruit industry, clinics and mountain tourism businesses that need efficient phone support.',
    whyLocalEn:
      'Lleida leads in fruit production and is the gateway to the Catalan Pyrenees. Local businesses, from agricultural cooperatives to ski resorts, need to manage inquiries and bookings that VivaSpeak automates with AI.',
    industriesEn: [
      'Fruit farming and agri-food',
      'Mountain tourism and skiing',
      'Clinics',
      'Agricultural cooperatives',
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
      'En Lugo, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas lucenses con agentes de voz IA. Nuestro sistema atiende consultas, agenda citas y cualifica leads para clínicas, negocios ganaderos y turismo rural.',
    whyLocal:
      'Lugo es una provincia con un fuerte sector ganadero y agroalimentario, además de un creciente turismo ligado a su muralla romana y al Camino de Santiago. VivaSpeak permite a las empresas lucenses ofrecer atención profesional sin depender de horarios.',
    industries: [
      'Ganadería y agroalimentación',
      'Turismo y Camino de Santiago',
      'Clínicas',
      'Comercio local',
    ],
    descriptionEn:
      'In Lugo, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Our system handles inquiries, schedules appointments and qualifies leads for clinics, livestock businesses and rural tourism.',
    whyLocalEn:
      'Lugo is a province with a strong livestock and agri-food sector, plus growing tourism tied to its Roman walls and the Camino de Santiago. VivaSpeak lets local businesses offer professional support without being limited by business hours.',
    industriesEn: [
      'Livestock and agri-food',
      'Tourism and Camino de Santiago',
      'Clinics',
      'Local commerce',
    ],
  },
  {
    province: 'Madrid',
    city: 'Madrid',
    coworking: 'The Shed Coworking',
    address: 'Calle de Hermosilla, 48',
    zip: '28001',
    slug: toSlug('Madrid'),
    description:
      'En Madrid, VivaSpeak automatiza la atención al cliente de empresas madrileñas con agentes de voz IA y chatbots de WhatsApp. Desde clínicas hasta despachos de abogados e inmobiliarias, nuestro sistema gestiona llamadas, citas y leads las 24 horas.',
    whyLocal:
      'Madrid es el centro de negocios de España, con la mayor concentración de empresas del país. El ritmo de la capital exige respuestas inmediatas a cada llamada y mensaje, y VivaSpeak permite a las empresas madrileñas no perder ni una oportunidad.',
    industries: [
      'Clínicas y centros médicos',
      'Despachos de abogados',
      'Inmobiliarias',
      'Startups y tecnología',
    ],
    descriptionEn:
      'In Madrid, VivaSpeak automates customer service for businesses with AI voice agents and WhatsApp chatbots. From clinics to law firms and real estate agencies, our system manages calls, appointments and leads around the clock.',
    whyLocalEn:
      "Madrid is Spain's business capital, with the highest concentration of companies in the country. The pace of the capital demands instant responses to every call and message, and VivaSpeak ensures businesses never miss an opportunity.",
    industriesEn: ['Clinics and medical centers', 'Law firms', 'Real estate', 'Startups and tech'],
  },
  {
    province: 'Málaga',
    city: 'Málaga',
    coworking: 'La Aduana Coworking',
    address: 'Calle Cortina del Muelle, 11',
    zip: '29015',
    slug: toSlug('Málaga'),
    description:
      'En Málaga, VivaSpeak automatiza llamadas y WhatsApp para empresas malagueñas con agentes de voz IA multilingües. Perfecto para clínicas, inmobiliarias, startups y negocios turísticos de la Costa del Sol.',
    whyLocal:
      'Málaga se ha convertido en el hub tecnológico del sur de Europa, atrayendo startups, nómadas digitales y empresas internacionales. La Costa del Sol genera una demanda constante de atención multilingüe que VivaSpeak cubre con IA en español e inglés.',
    industries: [
      'Tecnología y startups',
      'Turismo Costa del Sol',
      'Inmobiliarias',
      'Clínicas y estética',
    ],
    descriptionEn:
      'In Málaga, VivaSpeak automates calls and WhatsApp for local businesses with multilingual AI voice agents. Perfect for clinics, real estate agencies, startups and tourism businesses on the Costa del Sol.',
    whyLocalEn:
      "Málaga has become southern Europe's tech hub, attracting startups, digital nomads and international companies. The Costa del Sol generates constant demand for multilingual support that VivaSpeak covers with AI in Spanish and English.",
    industriesEn: [
      'Tech and startups',
      'Costa del Sol tourism',
      'Real estate',
      'Clinics and aesthetics',
    ],
  },
  {
    province: 'Murcia',
    city: 'Murcia',
    coworking: 'Coworking Murcia Centro',
    address: 'Calle San Antonio, 8',
    zip: '30001',
    slug: toSlug('Murcia'),
    description:
      'En Murcia, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas murcianas con agentes de voz IA. Ideal para el sector agroalimentario, clínicas e inmobiliarias que necesitan responder a cada consulta sin demora.',
    whyLocal:
      'Murcia es una de las principales regiones agroexportadoras de Europa, con un sector de servicios en crecimiento. Las empresas murcianas gestionan un alto volumen de llamadas de clientes nacionales e internacionales que VivaSpeak atiende automáticamente.',
    industries: ['Agroexportación', 'Clínicas y salud', 'Inmobiliarias', 'Turismo y hostelería'],
    descriptionEn:
      'In Murcia, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Ideal for the agri-food sector, clinics and real estate agencies that need to respond to every inquiry without delay.',
    whyLocalEn:
      "Murcia is one of Europe's leading agri-export regions, with a growing service sector. Local businesses handle a high volume of calls from national and international customers that VivaSpeak answers automatically.",
    industriesEn: [
      'Agri-export',
      'Clinics and healthcare',
      'Real estate',
      'Tourism and hospitality',
    ],
  },
  {
    province: 'Navarra',
    city: 'Pamplona',
    coworking: 'Pamplona Coworking',
    address: 'Calle del Monasterio de Tulebras, 2',
    zip: '31011',
    slug: toSlug('Pamplona'),
    description:
      'En Pamplona, VivaSpeak automatiza llamadas y WhatsApp para empresas navarras con agentes de voz IA. Nuestro sistema atiende consultas, agenda citas y cualifica leads para clínicas, industrias y negocios de servicios.',
    whyLocal:
      'Pamplona es un centro industrial y de servicios con empresas líderes en automoción, energía renovable y agroalimentación. La automatización de llamadas con IA permite a los negocios navarros atender cada consulta sin interrupciones.',
    industries: [
      'Automoción e industria',
      'Energías renovables',
      'Clínicas y salud',
      'Agroalimentación',
    ],
    descriptionEn:
      'In Pamplona, VivaSpeak automates calls and WhatsApp for Navarrese businesses with AI voice agents. Our system handles inquiries, schedules appointments and qualifies leads for clinics, industries and service businesses.',
    whyLocalEn:
      'Pamplona is an industrial and service center with leading companies in automotive, renewable energy and agri-food. AI call automation lets Navarrese businesses answer every inquiry without interruptions.',
    industriesEn: [
      'Automotive and industry',
      'Renewable energy',
      'Clinics and healthcare',
      'Agri-food',
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
      'En Ourense, VivaSpeak automatiza la comunicación de empresas ourensanas con agentes de voz IA y chatbots de WhatsApp. Desde balnearios hasta clínicas y comercios, nuestro sistema atiende cada llamada de forma profesional.',
    whyLocal:
      'Ourense es conocida por sus aguas termales y un creciente turismo de bienestar, además de un sector vitivinícola de prestigio. Las empresas locales necesitan gestionar reservas y consultas de forma eficiente, y VivaSpeak lo automatiza con IA.',
    industries: ['Termalismo y bienestar', 'Viticultura y bodegas', 'Clínicas', 'Turismo rural'],
    descriptionEn:
      'In Ourense, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. From spas to clinics and shops, our system handles every call professionally.',
    whyLocalEn:
      'Ourense is known for its thermal springs and a growing wellness tourism sector, plus a prestigious wine industry. Local businesses need to manage bookings and inquiries efficiently, and VivaSpeak automates it with AI.',
    industriesEn: ['Thermal wellness', 'Viticulture and wineries', 'Clinics', 'Rural tourism'],
  },
  {
    province: 'Palencia',
    city: 'Palencia',
    coworking: 'Zona Doze Coworking',
    address: 'Plaza Pío XII, 7',
    zip: '34005',
    slug: toSlug('Palencia'),
    description:
      'En Palencia, VivaSpeak automatiza llamadas y WhatsApp para empresas palentinas con agentes de voz IA. Nuestro sistema atiende consultas, agenda citas y cualifica leads para clínicas, negocios agroalimentarios y servicios profesionales.',
    whyLocal:
      'Palencia es una ciudad con una economía basada en la agroalimentación, la industria y los servicios. Las empresas palentinas pueden mejorar su atención al cliente y captar más oportunidades con la automatización de VivaSpeak.',
    industries: ['Agroalimentación', 'Industria', 'Clínicas', 'Servicios profesionales'],
    descriptionEn:
      'In Palencia, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Our system handles inquiries, schedules appointments and qualifies leads for clinics, agri-food businesses and professional services.',
    whyLocalEn:
      "Palencia is a city with an economy based on agri-food, industry and services. Local businesses can improve their customer service and capture more opportunities with VivaSpeak's automation.",
    industriesEn: ['Agri-food', 'Industry', 'Clinics', 'Professional services'],
  },
  {
    province: 'Pontevedra',
    city: 'Pontevedra',
    coworking: 'Peregrina25 Coworking',
    address: 'Rúa Peregrina, 25',
    zip: '36001',
    slug: toSlug('Pontevedra'),
    description:
      'En Pontevedra, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas pontevedresas con agentes de voz IA. Ideal para negocios turísticos, clínicas y empresas del sector naval que necesitan atención continua.',
    whyLocal:
      'Pontevedra combina turismo de las Rías Baixas, industria naval y un sector pesquero de referencia. Las empresas locales necesitan gestionar consultas de clientes nacionales e internacionales, y VivaSpeak ofrece esa capacidad con IA multilingüe.',
    industries: [
      'Turismo Rías Baixas',
      'Industria naval y pesca',
      'Clínicas',
      'Comercio y hostelería',
    ],
    descriptionEn:
      'In Pontevedra, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Ideal for tourism businesses, clinics and naval sector companies that need continuous support.',
    whyLocalEn:
      'Pontevedra combines Rías Baixas tourism, a naval industry and a leading fishing sector. Local businesses need to manage inquiries from national and international customers, and VivaSpeak delivers that capability with multilingual AI.',
    industriesEn: [
      'Rías Baixas tourism',
      'Naval industry and fishing',
      'Clinics',
      'Commerce and hospitality',
    ],
  },
  {
    province: 'Salamanca',
    city: 'Salamanca',
    coworking: 'Artilugio Estudio',
    address: 'Calle Azafranal, 18',
    zip: '37001',
    slug: toSlug('Salamanca'),
    description:
      'En Salamanca, VivaSpeak automatiza llamadas y WhatsApp para empresas salmantinas con agentes de voz IA. Nuestro sistema atiende consultas, agenda citas y cualifica leads para clínicas, academias y negocios turísticos.',
    whyLocal:
      'Salamanca es una ciudad universitaria de referencia internacional con un sector turístico y educativo muy activo. Las academias de idiomas, clínicas y alojamientos reciben consultas constantes que VivaSpeak gestiona automáticamente con IA.',
    industries: [
      'Educación e idiomas',
      'Turismo y patrimonio',
      'Clínicas',
      'Hostelería y alojamiento',
    ],
    descriptionEn:
      'In Salamanca, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Our system handles inquiries, schedules appointments and qualifies leads for clinics, language schools and tourism businesses.',
    whyLocalEn:
      'Salamanca is an internationally renowned university city with a very active tourism and education sector. Language schools, clinics and accommodations receive constant inquiries that VivaSpeak manages automatically with AI.',
    industriesEn: [
      'Education and languages',
      'Tourism and heritage',
      'Clinics',
      'Hospitality and lodging',
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
      'En Santa Cruz de Tenerife, VivaSpeak automatiza la atención al cliente de empresas canarias con agentes de voz IA multilingües. Perfecto para hoteles, clínicas, inmobiliarias y negocios turísticos que atienden visitantes internacionales.',
    whyLocal:
      'Santa Cruz de Tenerife es un destino turístico de primer nivel con millones de visitantes anuales. Las empresas tinerfeñas necesitan atención multilingüe constante, y VivaSpeak la proporciona con agentes de voz IA en español, inglés y alemán.',
    industries: [
      'Turismo y hostelería',
      'Inmobiliarias',
      'Clínicas y bienestar',
      'Comercio portuario',
    ],
    descriptionEn:
      'In Santa Cruz de Tenerife, VivaSpeak automates customer service for Canarian businesses with multilingual AI voice agents. Perfect for hotels, clinics, real estate agencies and tourism businesses serving international visitors.',
    whyLocalEn:
      'Santa Cruz de Tenerife is a top-tier tourist destination with millions of annual visitors. Local businesses need constant multilingual support, and VivaSpeak provides it with AI voice agents in Spanish, English and German.',
    industriesEn: [
      'Tourism and hospitality',
      'Real estate',
      'Clinics and wellness',
      'Port commerce',
    ],
  },
  {
    province: 'Segovia',
    city: 'Segovia',
    coworking: 'El Arco 75 Coworking',
    address: 'Avenida Acueducto, 13',
    zip: '40001',
    slug: toSlug('Segovia'),
    description:
      'En Segovia, VivaSpeak automatiza llamadas y WhatsApp para empresas segovianas con agentes de voz IA. Ideal para restaurantes, alojamientos turísticos, clínicas y negocios que reciben visitantes de Madrid y del extranjero.',
    whyLocal:
      'Segovia atrae turismo nacional e internacional gracias a su acueducto romano y gastronomía. La proximidad a Madrid genera un flujo constante de visitantes, y VivaSpeak permite a los negocios segovianos atender cada consulta y reserva con IA.',
    industries: [
      'Gastronomía y hostelería',
      'Turismo y patrimonio',
      'Clínicas',
      'Alojamiento rural',
    ],
    descriptionEn:
      'In Segovia, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Ideal for restaurants, tourist accommodations, clinics and businesses receiving visitors from Madrid and abroad.',
    whyLocalEn:
      'Segovia attracts national and international tourism thanks to its Roman aqueduct and gastronomy. Its proximity to Madrid generates a constant flow of visitors, and VivaSpeak lets local businesses handle every inquiry and booking with AI.',
    industriesEn: [
      'Gastronomy and hospitality',
      'Tourism and heritage',
      'Clinics',
      'Rural lodging',
    ],
  },
  {
    province: 'Sevilla',
    city: 'Sevilla',
    coworking: 'workINcompany',
    address: 'Calle Rioja, 13',
    zip: '41001',
    slug: toSlug('Sevilla'),
    description:
      'En Sevilla, VivaSpeak automatiza la comunicación de empresas sevillanas con agentes de voz IA y chatbots de WhatsApp. Desde clínicas hasta inmobiliarias y negocios turísticos, nuestro sistema atiende cada llamada las 24 horas.',
    whyLocal:
      'Sevilla es la capital económica del sur de España, con un sector turístico masivo, una industria aeronáutica de referencia y miles de pymes de servicios. Las empresas sevillanas necesitan atención continua que VivaSpeak proporciona con IA.',
    industries: [
      'Turismo y hostelería',
      'Aeronáutica e industria',
      'Clínicas y salud',
      'Inmobiliarias',
    ],
    descriptionEn:
      'In Seville, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. From clinics to real estate agencies and tourism businesses, our system answers every call around the clock.',
    whyLocalEn:
      'Seville is the economic capital of southern Spain, with a massive tourism sector, a leading aerospace industry and thousands of service SMEs. Local businesses need continuous support that VivaSpeak provides with AI.',
    industriesEn: [
      'Tourism and hospitality',
      'Aerospace and industry',
      'Clinics and healthcare',
      'Real estate',
    ],
  },
  {
    province: 'Soria',
    city: 'Soria',
    coworking: 'Espacio de Trabajo Colaborativo',
    address: 'Calle Zapatería, 21',
    zip: '42002',
    slug: toSlug('Soria'),
    description:
      'En Soria, VivaSpeak automatiza llamadas y WhatsApp para empresas sorianas con agentes de voz IA. Nuestro sistema permite a clínicas, alojamientos rurales y negocios locales atender a cada cliente de forma profesional las 24 horas.',
    whyLocal:
      'Soria es una provincia con un creciente turismo de naturaleza y gastronomía micológica, además de un sector agroalimentario de calidad. VivaSpeak ayuda a los negocios sorianos a gestionar reservas y consultas sin depender de horarios de oficina.',
    industries: [
      'Turismo de naturaleza',
      'Gastronomía y micología',
      'Clínicas',
      'Agroalimentación',
    ],
    descriptionEn:
      'In Soria, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Our system lets clinics, rural lodges and local businesses serve every customer professionally around the clock.',
    whyLocalEn:
      'Soria is a province with growing nature tourism and mushroom gastronomy, plus a quality agri-food sector. VivaSpeak helps local businesses manage bookings and inquiries without being limited by office hours.',
    industriesEn: ['Nature tourism', 'Gastronomy and mycology', 'Clinics', 'Agri-food'],
  },
  {
    province: 'Tarragona',
    city: 'Tarragona',
    coworking: 'COTAKO Coworking',
    address: 'Carrer del Pare Palau, 5',
    zip: '43001',
    slug: toSlug('Tarragona'),
    description:
      'En Tarragona, VivaSpeak automatiza la atención al cliente de empresas tarraconenses con agentes de voz IA. Ideal para negocios turísticos, clínicas, industria petroquímica y empresas que atienden clientes en catalán, castellano e inglés.',
    whyLocal:
      'Tarragona combina un patrimonio romano Patrimonio de la Humanidad, turismo de costa y un potente polo petroquímico. Las empresas locales necesitan atención multilingüe y eficiente que VivaSpeak ofrece con agentes de voz IA.',
    industries: [
      'Turismo y patrimonio',
      'Industria petroquímica',
      'Clínicas',
      'Hostelería costera',
    ],
    descriptionEn:
      'In Tarragona, VivaSpeak automates customer service for local businesses with AI voice agents. Ideal for tourism businesses, clinics, the petrochemical industry and companies serving customers in Catalan, Spanish and English.',
    whyLocalEn:
      'Tarragona combines a UNESCO World Heritage Roman legacy, coastal tourism and a powerful petrochemical hub. Local businesses need multilingual, efficient support that VivaSpeak delivers with AI voice agents.',
    industriesEn: [
      'Tourism and heritage',
      'Petrochemical industry',
      'Clinics',
      'Coastal hospitality',
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
      'En Teruel, VivaSpeak automatiza llamadas y WhatsApp para empresas turolenses con agentes de voz IA. Nuestro sistema permite a clínicas, alojamientos rurales y negocios locales ofrecer atención profesional sin ampliar equipo.',
    whyLocal:
      'Teruel es una provincia con un patrimonio mudéjar único y un creciente turismo rural y paleontológico. Las empresas turolenses pueden competir con la misma calidad de atención que las grandes ciudades gracias a la automatización de VivaSpeak.',
    industries: ['Turismo rural y patrimonio', 'Agroalimentación', 'Clínicas', 'Alojamiento rural'],
    descriptionEn:
      'In Teruel, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Our system lets clinics, rural lodges and local businesses offer professional support without expanding their team.',
    whyLocalEn:
      "Teruel is a province with unique Mudéjar heritage and growing rural and paleontological tourism. Local businesses can compete with the same service quality as major cities thanks to VivaSpeak's automation.",
    industriesEn: ['Rural tourism and heritage', 'Agri-food', 'Clinics', 'Rural lodging'],
  },
  {
    province: 'Toledo',
    city: 'Toledo',
    coworking: 'Coworking Alcázar',
    address: 'Cuesta de Carlos V, 2',
    zip: '45001',
    slug: toSlug('Toledo'),
    description:
      'En Toledo, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas toledanas con agentes de voz IA. Ideal para negocios turísticos, clínicas y artesanos que reciben visitantes de todo el mundo.',
    whyLocal:
      'Toledo, la Ciudad de las Tres Culturas, es uno de los destinos turísticos más visitados de España. Los negocios toledanos atienden clientes en múltiples idiomas, y VivaSpeak gestiona esas comunicaciones automáticamente con IA.',
    industries: [
      'Turismo y patrimonio',
      'Artesanía y damasquinado',
      'Clínicas',
      'Hostelería y gastronomía',
    ],
    descriptionEn:
      'In Toledo, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Ideal for tourism businesses, clinics and artisans receiving visitors from around the world.',
    whyLocalEn:
      "Toledo, the City of Three Cultures, is one of Spain's most visited tourist destinations. Local businesses serve customers in multiple languages, and VivaSpeak manages those communications automatically with AI.",
    industriesEn: [
      'Tourism and heritage',
      'Crafts and damascene',
      'Clinics',
      'Hospitality and gastronomy',
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
      'En Valencia, VivaSpeak automatiza llamadas y WhatsApp para empresas valencianas con agentes de voz IA. Perfecto para clínicas, inmobiliarias, startups y negocios turísticos que necesitan atención multilingüe las 24 horas.',
    whyLocal:
      'Valencia es la tercera ciudad de España, con una economía diversa que abarca turismo, tecnología, agroexportación y servicios. Las empresas valencianas gestionan un alto volumen de consultas que VivaSpeak atiende automáticamente con IA.',
    industries: [
      'Turismo y hostelería',
      'Startups y tecnología',
      'Clínicas y salud',
      'Inmobiliarias',
    ],
    descriptionEn:
      'In Valencia, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Perfect for clinics, real estate agencies, startups and tourism businesses that need multilingual 24/7 support.',
    whyLocalEn:
      "Valencia is Spain's third-largest city, with a diverse economy spanning tourism, technology, agri-export and services. Local businesses handle a high volume of inquiries that VivaSpeak answers automatically with AI.",
    industriesEn: [
      'Tourism and hospitality',
      'Startups and tech',
      'Clinics and healthcare',
      'Real estate',
    ],
  },
  {
    province: 'Valladolid',
    city: 'Valladolid',
    coworking: 'Leburó Coworking',
    address: 'Calle Falla, 13',
    zip: '47006',
    slug: toSlug('Valladolid'),
    description:
      'En Valladolid, VivaSpeak automatiza la comunicación de empresas vallisoletanas con agentes de voz IA y chatbots de WhatsApp. Nuestro sistema atiende llamadas, agenda citas y cualifica leads para clínicas, industrias y despachos.',
    whyLocal:
      'Valladolid es un centro industrial y universitario de Castilla y León, con empresas líderes en automoción y agroalimentación. La automatización de llamadas con IA permite a los negocios vallisoletanos atender cada consulta sin interrupciones.',
    industries: [
      'Automoción e industria',
      'Agroalimentación y vino',
      'Clínicas',
      'Servicios profesionales',
    ],
    descriptionEn:
      'In Valladolid, VivaSpeak automates communication for local businesses with AI voice agents and WhatsApp chatbots. Our system answers calls, schedules appointments and qualifies leads for clinics, industries and firms.',
    whyLocalEn:
      'Valladolid is an industrial and university center in Castilla y León, with leading companies in automotive and agri-food. AI call automation lets local businesses handle every inquiry without interruptions.',
    industriesEn: [
      'Automotive and industry',
      'Agri-food and wine',
      'Clinics',
      'Professional services',
    ],
  },
  {
    province: 'Zamora',
    city: 'Zamora',
    coworking: 'La Ofi de Paco',
    address: 'Avenida Alfonso IX, 2',
    zip: '49013',
    slug: toSlug('Zamora'),
    description:
      'En Zamora, VivaSpeak automatiza llamadas y WhatsApp para empresas zamoranas con agentes de voz IA. Nuestro sistema permite a clínicas, bodegas y negocios turísticos atender a cada cliente de forma profesional las 24 horas.',
    whyLocal:
      'Zamora es una provincia con un rico patrimonio románico y una creciente oferta de enoturismo y turismo rural. VivaSpeak permite a las empresas zamoranas ofrecer atención profesional continua sin depender de horarios ni ampliar plantilla.',
    industries: ['Enoturismo y bodegas', 'Turismo románico', 'Clínicas', 'Agroalimentación'],
    descriptionEn:
      'In Zamora, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Our system lets clinics, wineries and tourism businesses serve every customer professionally around the clock.',
    whyLocalEn:
      'Zamora is a province with a rich Romanesque heritage and a growing wine tourism and rural tourism offering. VivaSpeak lets local businesses provide continuous professional support without being limited by hours or expanding their team.',
    industriesEn: ['Wine tourism and wineries', 'Romanesque tourism', 'Clinics', 'Agri-food'],
  },
  {
    province: 'Zaragoza',
    city: 'Zaragoza',
    coworking: 'Coworking El Gancho',
    address: 'Calle de San Pablo, 12',
    zip: '50003',
    slug: toSlug('Zaragoza'),
    description:
      'En Zaragoza, VivaSpeak automatiza la atención al cliente de empresas zaragozanas con agentes de voz IA y chatbots de WhatsApp. Ideal para clínicas, industrias logísticas e inmobiliarias que necesitan responder a cada consulta sin demora.',
    whyLocal:
      'Zaragoza es un nudo logístico estratégico entre Madrid, Barcelona y el sur de Francia, con un fuerte sector industrial y de servicios. Las empresas zaragozanas gestionan un alto volumen de comunicaciones que VivaSpeak automatiza con IA.',
    industries: [
      'Logística y transporte',
      'Industria y automoción',
      'Clínicas y salud',
      'Inmobiliarias',
    ],
    descriptionEn:
      'In Zaragoza, VivaSpeak automates customer service for local businesses with AI voice agents and WhatsApp chatbots. Ideal for clinics, logistics companies and real estate agencies that need to respond to every inquiry without delay.',
    whyLocalEn:
      'Zaragoza is a strategic logistics hub between Madrid, Barcelona and southern France, with a strong industrial and service sector. Local businesses handle a high volume of communications that VivaSpeak automates with AI.',
    industriesEn: [
      'Logistics and transport',
      'Industry and automotive',
      'Clinics and healthcare',
      'Real estate',
    ],
  },
  {
    province: 'Ceuta',
    city: 'Ceuta',
    coworking: 'SUMA-T Ceuta',
    address: 'Calle Teniente Arrabal, 2',
    zip: '51001',
    slug: toSlug('Ceuta'),
    description:
      'En Ceuta, VivaSpeak automatiza llamadas y WhatsApp para empresas ceutíes con agentes de voz IA. Nuestro sistema atiende consultas en español y árabe para clínicas, comercios y negocios transfronterizos.',
    whyLocal:
      'Ceuta es una ciudad autónoma con una posición estratégica entre Europa y África, con un comercio transfronterizo activo y un sector de servicios en crecimiento. VivaSpeak permite a las empresas ceutíes atender clientes de ambos continentes con IA.',
    industries: [
      'Comercio transfronterizo',
      'Clínicas y salud',
      'Hostelería',
      'Servicios portuarios',
    ],
    descriptionEn:
      'In Ceuta, VivaSpeak automates calls and WhatsApp for local businesses with AI voice agents. Our system handles inquiries in Spanish and Arabic for clinics, shops and cross-border businesses.',
    whyLocalEn:
      'Ceuta is an autonomous city with a strategic position between Europe and Africa, with active cross-border trade and a growing service sector. VivaSpeak lets local businesses serve customers from both continents with AI.',
    industriesEn: [
      'Cross-border commerce',
      'Clinics and healthcare',
      'Hospitality',
      'Port services',
    ],
  },
  {
    province: 'Melilla',
    city: 'Melilla',
    coworking: 'Metropol Coworking',
    address: 'Calle Conde del Serrallo, 13',
    zip: '52001',
    slug: toSlug('Melilla'),
    description:
      'En Melilla, VivaSpeak automatiza la atención telefónica y por WhatsApp de empresas melillenses con agentes de voz IA. Ideal para clínicas, comercios y negocios que atienden clientes en español y árabe.',
    whyLocal:
      'Melilla es una ciudad autónoma con una economía basada en el comercio, los servicios y la administración pública. Su posición entre dos continentes genera una demanda de atención bilingüe que VivaSpeak cubre con agentes de voz IA.',
    industries: ['Comercio y distribución', 'Clínicas y salud', 'Hostelería', 'Servicios públicos'],
    descriptionEn:
      'In Melilla, VivaSpeak automates phone and WhatsApp support for local businesses with AI voice agents. Ideal for clinics, shops and businesses serving customers in Spanish and Arabic.',
    whyLocalEn:
      'Melilla is an autonomous city with an economy based on commerce, services and public administration. Its position between two continents creates demand for bilingual support that VivaSpeak covers with AI voice agents.',
    industriesEn: [
      'Commerce and distribution',
      'Clinics and healthcare',
      'Hospitality',
      'Public services',
    ],
  },
];
