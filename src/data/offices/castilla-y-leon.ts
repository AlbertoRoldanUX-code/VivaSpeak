import type { Office } from './types';
import { toSlug } from './types';

export const castillaYLeon: Office[] = [
  {
    province: 'Ávila',
    city: 'Piedralaves',
    coworking: 'CORKWORKING',
    address: 'Calle Lavadero, s/n',
    zip: '05440',
    slug: toSlug('Piedralaves'),
    description:
      'Piedralaves, en el Valle del Tiétar abulense, es un ejemplo de cómo la España rural puede competir digitalmente. VivaSpeak dota a casas rurales, clínicas locales y pequeños negocios de Ávila de un agente de voz IA que atiende reservas y consultas con la misma profesionalidad que una empresa de Madrid.',
    whyLocal:
      'El Valle del Tiétar atrae escapadas de fin de semana desde Madrid, a solo 90 minutos por carretera. Las casas rurales y hoteles con encanto reciben llamadas de reserva mientras sus dueños están atendiendo huéspedes. Las clínicas rurales cubren poblaciones dispersas con horarios limitados. VivaSpeak permite a estos negocios ofrecer atención 24/7 con IA, cerrando la brecha digital entre el entorno rural y las grandes ciudades.',
    industries: [
      'Casas rurales y turismo de naturaleza',
      'Clínicas rurales del Valle del Tiétar',
      'Comercio local y artesanía',
      'Servicios profesionales para pymes rurales',
    ],
    descriptionEn:
      'Piedralaves, in the Tiétar Valley of Ávila, exemplifies how rural Spain can compete digitally. VivaSpeak equips rural lodges, local clinics and small businesses across Ávila with an AI voice agent that handles bookings and inquiries with the same professionalism as a Madrid company.',
    whyLocalEn:
      'The Tiétar Valley attracts weekend getaways from Madrid, just 90 minutes by road. Rural lodges and boutique hotels receive booking calls while owners are attending guests. Rural clinics cover dispersed populations with limited hours. VivaSpeak lets these businesses offer 24/7 support with AI, closing the digital gap between rural areas and major cities.',
    industriesEn: [
      'Rural lodges and nature tourism',
      'Tiétar Valley rural clinics',
      'Local commerce and crafts',
      'Professional services for rural SMEs',
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
      'Burgos es un nudo logístico clave en el eje Madrid-País Vasco y sede de empresas como Campofrío y Gonvarri. VivaSpeak automatiza la atención de empresas logísticas del polígono de Villalonquéjar, clínicas del Paseo del Espolón y negocios turísticos del Camino de Santiago con agentes de voz IA.',
    whyLocal:
      'El polígono industrial de Villalonquéjar es uno de los más activos de Castilla y León, con empresas agroalimentarias y logísticas que reciben pedidos y consultas de toda España. La Catedral gótica y el Camino de Santiago atraen turismo cultural que necesita gestión de reservas. Y las clínicas del centro atienden a una población que incluye trabajadores de las industrias cercanas. VivaSpeak conecta estos flujos con IA que diferencia un pedido de distribución de una reserva de peregrino.',
    industries: [
      'Logística y distribución de Villalonquéjar',
      'Agroalimentación (Campofrío ecosystem)',
      'Turismo del Camino de Santiago',
      'Clínicas y centros de rehabilitación',
    ],
    descriptionEn:
      'Burgos is a key logistics hub on the Madrid-Basque Country axis and home to companies like Campofrío and Gonvarri. VivaSpeak automates support for logistics firms in Villalonquéjar, clinics on Paseo del Espolón and Camino de Santiago tourism businesses with AI voice agents.',
    whyLocalEn:
      'The Villalonquéjar industrial estate is one of the most active in Castilla y León, with agri-food and logistics companies receiving orders from across Spain. The Gothic Cathedral and the Camino de Santiago attract cultural tourism needing booking management. And city-center clinics serve a population including workers from nearby industries. VivaSpeak connects these flows with AI that tells a distribution order from a pilgrim booking.',
    industriesEn: [
      'Villalonquéjar logistics and distribution',
      'Agri-food (Campofrío ecosystem)',
      'Camino de Santiago tourism',
      'Clinics and rehabilitation centers',
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
      'León, etapa emblemática del Camino de Santiago y sede de una catedral con las mejores vidrieras de Europa, combina patrimonio cultural con un sector energético y minero en transformación. VivaSpeak automatiza la atención de albergues del Camino, clínicas leonesas y empresas energéticas con agentes de voz IA.',
    whyLocal:
      'El Camino de Santiago genera un flujo constante de peregrinos internacionales que reservan albergues y servicios en inglés, francés y alemán. El sector energético leonés, en transición desde la minería del carbón hacia las renovables, necesita gestionar comunicaciones técnicas con inversores. Y las clínicas del centro atienden a una población envejecida que valora la atención telefónica personalizada. VivaSpeak cubre estos tres perfiles con IA multilingüe y empática.',
    industries: [
      'Albergues y turismo del Camino de Santiago',
      'Energías renovables y transición minera',
      'Clínicas y atención geriátrica',
      'Agroalimentación y embutidos',
    ],
    descriptionEn:
      "León, an iconic Camino de Santiago stage and home to a cathedral with Europe's finest stained glass, combines cultural heritage with an energy and mining sector in transformation. VivaSpeak automates support for Camino hostels, local clinics and energy companies with AI voice agents.",
    whyLocalEn:
      "The Camino de Santiago generates a constant flow of international pilgrims booking hostels and services in English, French and German. León's energy sector, transitioning from coal mining to renewables, needs to manage technical communications with investors. And city-center clinics serve an aging population that values personalized phone support. VivaSpeak covers all three profiles with multilingual, empathetic AI.",
    industriesEn: [
      'Camino de Santiago hostels and tourism',
      'Renewable energy and mining transition',
      'Clinics and geriatric care',
      'Agri-food and cured meats',
    ],
  },
  {
    province: 'Palencia',
    city: 'Palencia',
    coworking: 'Zona Doze Coworking',
    address: 'Plaza Pío XII, 7',
    zip: '34005',
    slug: toSlug('Palencia'),
    description:
      'Palencia, conocida como "la bella desconocida", alberga la fábrica de Renault más productiva de España y un sector agroalimentario de calidad. VivaSpeak automatiza la atención de proveedores de automoción, clínicas palentinas y negocios de turismo románico con agentes de voz IA.',
    whyLocal:
      'La factoría de Renault en Villamuriel de Cerrato genera un ecosistema de proveedores que necesitan gestionar pedidos y consultas técnicas por teléfono. El románico palentino atrae un turismo cultural de nicho que reserva visitas guiadas y alojamiento. Y las clínicas del centro atienden a una población que valora el trato cercano. VivaSpeak permite a estos negocios tan distintos automatizar su atención con IA que se adapta al contexto de cada llamada.',
    industries: [
      'Proveedores de automoción Renault',
      'Turismo del románico palentino',
      'Clínicas y consultas médicas',
      'Agroalimentación y cereales',
    ],
    descriptionEn:
      'Palencia, known as "the beautiful unknown," hosts Spain\'s most productive Renault factory and a quality agri-food sector. VivaSpeak automates support for automotive suppliers, local clinics and Romanesque tourism businesses with AI voice agents.',
    whyLocalEn:
      "The Renault factory in Villamuriel de Cerrato generates a supplier ecosystem needing to manage orders and technical inquiries by phone. Palencia's Romanesque heritage attracts niche cultural tourism booking guided visits and accommodation. And city-center clinics serve a population that values personal attention. VivaSpeak lets these very different businesses automate their support with AI that adapts to each call's context.",
    industriesEn: [
      'Renault automotive suppliers',
      'Palentine Romanesque tourism',
      'Clinics and medical practices',
      'Agri-food and cereals',
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
      'Salamanca es la capital del español como lengua extranjera, con más de 25.000 estudiantes internacionales al año eligiendo sus academias. VivaSpeak automatiza la atención de escuelas de idiomas, alojamientos estudiantiles y clínicas salmantinas con agentes de voz IA que responden en español, inglés, portugués y chino.',
    whyLocal:
      'Las academias de español de Salamanca compiten por estudiantes de todo el mundo y necesitan responder consultas en múltiples idiomas al instante. Los alojamientos estudiantiles gestionan reservas desde distintos husos horarios. Y las clínicas del centro atienden tanto a residentes como a la población universitaria. VivaSpeak permite a cada uno de estos negocios captar más clientes internacionales con IA que responde en el idioma del estudiante.',
    industries: [
      'Academias de español para extranjeros',
      'Alojamiento estudiantil internacional',
      'Clínicas universitarias',
      'Turismo cultural y patrimonio UNESCO',
    ],
    descriptionEn:
      'Salamanca is the capital of Spanish as a foreign language, with over 25,000 international students choosing its schools each year. VivaSpeak automates support for language schools, student housing and local clinics with AI voice agents responding in Spanish, English, Portuguese and Chinese.',
    whyLocalEn:
      "Salamanca's Spanish schools compete for students worldwide and need to answer inquiries in multiple languages instantly. Student accommodations manage bookings from different time zones. And city-center clinics serve both residents and the university population. VivaSpeak lets each of these businesses capture more international clients with AI responding in the student's language.",
    industriesEn: [
      'Spanish language schools for foreigners',
      'International student housing',
      'University clinics',
      'Cultural tourism and UNESCO heritage',
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
      'Segovia, a solo 30 minutos en AVE de Madrid, vive del turismo gastronómico del cochinillo y el cordero, y de un creciente mercado inmobiliario de madrileños que buscan calidad de vida. VivaSpeak automatiza reservas de asadores, consultas inmobiliarias y citas médicas con agentes de voz IA.',
    whyLocal:
      'Los asadores de la Plaza del Azoguejo y la Calle Real reciben cientos de llamadas diarias para reservar mesa, especialmente los fines de semana. Las inmobiliarias segovianas gestionan un boom de compradores madrileños que teletrabajan. Y las clínicas atienden a una población que crece con estos nuevos residentes. VivaSpeak permite a los asadores no perder reservas mientras cocinan, a las inmobiliarias atender leads de Madrid a cualquier hora y a las clínicas gestionar agendas sin saturar recepción.',
    industries: [
      'Asadores y gastronomía del cochinillo',
      'Inmobiliarias para teletrabajadores de Madrid',
      'Clínicas y centros de salud',
      'Turismo del Acueducto y Alcázar',
    ],
    descriptionEn:
      'Segovia, just 30 minutes from Madrid by high-speed rail, thrives on gastronomic tourism around roast suckling pig and a growing real estate market for Madrileños seeking quality of life. VivaSpeak automates restaurant bookings, real estate inquiries and medical appointments with AI voice agents.',
    whyLocalEn:
      'Roast houses on Plaza del Azoguejo and Calle Real receive hundreds of daily calls for table reservations, especially on weekends. Segovian real estate agencies manage a boom of Madrid-based remote workers buying property. And clinics serve a population growing with these new residents. VivaSpeak lets restaurants avoid losing bookings while cooking, agencies handle Madrid leads at any hour and clinics manage schedules without overwhelming reception.',
    industriesEn: [
      'Roast houses and suckling pig gastronomy',
      'Real estate for Madrid remote workers',
      'Clinics and health centers',
      'Aqueduct and Alcázar tourism',
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
      'Soria, la provincia menos poblada de España, es paradójicamente un destino gastronómico de primer nivel gracias a sus setas, trufas y caza. VivaSpeak ayuda a restaurantes micológicos, alojamientos de la Laguna Negra y clínicas sorianas a gestionar reservas y consultas con agentes de voz IA.',
    whyLocal:
      'Las jornadas micológicas de otoño atraen miles de visitantes que reservan restaurantes y alojamientos rurales en pocas semanas. La trufa negra de Soria se exporta a restaurantes de alta cocina de todo el mundo. Y las clínicas sorianas cubren una población dispersa que necesita atención telefónica accesible. VivaSpeak permite a estos negocios gestionar picos estacionales y consultas internacionales con IA, sin depender de personal temporal.',
    industries: [
      'Gastronomía micológica y trufa negra',
      'Turismo de naturaleza y Laguna Negra',
      'Clínicas rurales',
      'Agroalimentación de calidad',
    ],
    descriptionEn:
      "Soria, Spain's least populated province, is paradoxically a top-tier gastronomic destination thanks to its mushrooms, truffles and game. VivaSpeak helps mycological restaurants, Laguna Negra lodges and local clinics manage bookings and inquiries with AI voice agents.",
    whyLocalEn:
      "Autumn mushroom festivals attract thousands of visitors booking restaurants and rural lodges within weeks. Soria's black truffle is exported to fine dining restaurants worldwide. And local clinics cover a dispersed population needing accessible phone support. VivaSpeak lets these businesses handle seasonal peaks and international inquiries with AI, without relying on temporary staff.",
    industriesEn: [
      'Mycological gastronomy and black truffle',
      'Nature tourism and Laguna Negra',
      'Rural clinics',
      'Quality agri-food',
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
      'Valladolid es la capital de Castilla y León, sede de Renault España e IVECO, y corazón de la D.O. Ribera del Duero. VivaSpeak automatiza la atención de proveedores de automoción, bodegas con enoturismo y clínicas vallisoletanas con agentes de voz IA.',
    whyLocal:
      'Las factorías de Renault e IVECO generan un ecosistema de cientos de proveedores que gestionan pedidos y consultas técnicas por teléfono. Las bodegas de la Ribera del Duero reciben solicitudes de visita y compra de importadores internacionales. Y las clínicas del Paseo de Zorrilla atienden al área metropolitana más grande de la comunidad. VivaSpeak conecta estos tres mundos con IA que diferencia un pedido de piezas de automoción de una reserva de cata.',
    industries: [
      'Automoción (Renault, IVECO) y proveedores',
      'Bodegas D.O. Ribera del Duero',
      'Clínicas del Paseo de Zorrilla',
      'Servicios profesionales y consultoría',
    ],
    descriptionEn:
      'Valladolid is the capital of Castilla y León, home to Renault Spain and IVECO, and the heart of the Ribera del Duero D.O. VivaSpeak automates support for automotive suppliers, wine tourism estates and local clinics with AI voice agents.',
    whyLocalEn:
      "The Renault and IVECO factories generate an ecosystem of hundreds of suppliers managing orders and technical inquiries by phone. Ribera del Duero wineries receive visit and purchase requests from international importers. And clinics on Paseo de Zorrilla serve the community's largest metropolitan area. VivaSpeak connects these three worlds with AI that tells an automotive parts order from a wine tasting booking.",
    industriesEn: [
      'Automotive (Renault, IVECO) and suppliers',
      'Ribera del Duero D.O. wineries',
      'Paseo de Zorrilla clinics',
      'Professional services and consulting',
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
      'Zamora posee la mayor concentración de arte románico de Europa y una tradición vinícola que incluye la D.O. Toro, una de las más antiguas de España. VivaSpeak automatiza la atención de bodegas, alojamientos de Semana Santa y clínicas zamoranas con agentes de voz IA.',
    whyLocal:
      'La Semana Santa de Zamora, declarada de Interés Turístico Internacional, genera un pico de reservas de alojamiento que desborda las centralitas locales. Las bodegas de la D.O. Toro reciben consultas de importadores de todo el mundo. Y las clínicas zamoranas atienden a una población envejecida que necesita seguimiento telefónico constante. VivaSpeak gestiona estos tres flujos con IA que escala en Semana Santa y mantiene la atención el resto del año.',
    industries: [
      'Bodegas D.O. Toro',
      'Turismo de Semana Santa',
      'Clínicas y atención geriátrica',
      'Agroalimentación y queso zamorano',
    ],
    descriptionEn:
      "Zamora has Europe's highest concentration of Romanesque art and a winemaking tradition that includes the D.O. Toro, one of Spain's oldest. VivaSpeak automates support for wineries, Holy Week lodging and local clinics with AI voice agents.",
    whyLocalEn:
      "Zamora's Holy Week, declared of International Tourist Interest, creates a surge in accommodation bookings that overwhelms local switchboards. D.O. Toro wineries receive inquiries from importers worldwide. And local clinics serve an aging population needing constant phone follow-up. VivaSpeak manages these three flows with AI that scales during Holy Week and maintains service year-round.",
    industriesEn: [
      'D.O. Toro wineries',
      'Holy Week tourism',
      'Clinics and geriatric care',
      'Agri-food and Zamorano cheese',
    ],
  },
];
