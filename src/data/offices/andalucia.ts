import type { Office } from './types';
import { toSlug } from './types';

export const andalucia: Office[] = [
  {
    province: 'Almería',
    city: 'Almería',
    coworking: 'Coworking Almería WorkSpace',
    address: 'Calle Arráez, 11',
    zip: '04002',
    slug: toSlug('Almería'),
    description:
      'Almería es el invernadero de Europa: más de 30.000 hectáreas bajo plástico producen el 50% de las hortalizas que exporta España. VivaSpeak ayuda a empresas agroexportadoras, clínicas del Paseo de Almería y hoteles del Cabo de Gata a gestionar llamadas y WhatsApp con agentes de voz IA multilingües.',
    whyLocal:
      'Las comercializadoras hortofrutícolas del Poniente almeriense reciben pedidos de supermercados de toda Europa en inglés, francés y alemán a horas intempestivas. Las clínicas del centro atienden a una población creciente de residentes extranjeros. Y el Parque Natural de Cabo de Gata genera un turismo que reserva por teléfono desde media Europa. VivaSpeak unifica estos tres flujos con IA que responde en el idioma del cliente y deriva cada consulta al departamento correcto.',
    industries: [
      'Agroexportación hortofrutícola',
      'Turismo Cabo de Gata',
      'Clínicas con pacientes internacionales',
      'Inmobiliarias costeras para expatriados',
    ],
    descriptionEn:
      "Almería is Europe's greenhouse: over 30,000 hectares under plastic produce 50% of Spain's vegetable exports. VivaSpeak helps agri-export companies, clinics on Paseo de Almería and hotels in Cabo de Gata manage calls and WhatsApp with multilingual AI voice agents.",
    whyLocalEn:
      "Fruit and vegetable traders in western Almería receive orders from supermarkets across Europe in English, French and German at odd hours. City-center clinics serve a growing population of foreign residents. And Cabo de Gata Natural Park generates tourism that books by phone from across Europe. VivaSpeak unifies these three flows with AI that responds in the customer's language and routes each inquiry to the right department.",
    industriesEn: [
      'Fruit and vegetable agri-export',
      'Cabo de Gata tourism',
      'Clinics with international patients',
      'Coastal real estate for expats',
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
      'Cádiz, la ciudad más antigua de Occidente, vive entre la industria naval de la Bahía, las bodegas de Jerez y el turismo de playa de la Costa de la Luz. VivaSpeak automatiza la atención de astilleros, bodegas con visitas enoturísticas y clínicas gaditanas con agentes de voz IA que se adaptan al flujo estacional.',
    whyLocal:
      'Los astilleros de Puerto Real y San Fernando gestionan comunicaciones técnicas con armadores internacionales. Las bodegas del Marco de Jerez reciben miles de solicitudes de cata y visita, especialmente en temporada de Feria. Y las clínicas de Cádiz capital atienden tanto a residentes como a turistas. VivaSpeak entiende esta estacionalidad y escala automáticamente la capacidad de atención con IA, sin contratar personal temporal.',
    industries: [
      'Astilleros e industria naval de la Bahía',
      'Bodegas y enoturismo del Marco de Jerez',
      'Clínicas y centros de salud',
      'Turismo de playa Costa de la Luz',
    ],
    descriptionEn:
      "Cádiz, the oldest city in the Western world, lives between the Bay's naval industry, Jerez sherry houses and Costa de la Luz beach tourism. VivaSpeak automates support for shipyards, wineries with wine tourism and local clinics with AI voice agents that adapt to seasonal flows.",
    whyLocalEn:
      'Shipyards in Puerto Real and San Fernando manage technical communications with international shipowners. Jerez sherry houses receive thousands of tasting and visit requests, especially during Feria season. And clinics in Cádiz city serve both residents and tourists. VivaSpeak understands this seasonality and automatically scales service capacity with AI, without hiring temporary staff.',
    industriesEn: [
      'Bay shipyards and naval industry',
      'Sherry houses and Jerez wine tourism',
      'Clinics and health centers',
      'Costa de la Luz beach tourism',
    ],
  },
  {
    province: 'Córdoba',
    city: 'Córdoba',
    coworking: 'Incubadora Invepat',
    address: 'Avenida Ronda de los Tejares, 27',
    zip: '14008',
    slug: toSlug('Córdoba'),
    description:
      'Córdoba recibe más de 3 millones de visitantes al año atraídos por la Mezquita-Catedral y los Patios. Pero más allá del turismo, la ciudad es un centro de joyería, aceite de oliva premium y servicios profesionales. VivaSpeak automatiza la atención multicanal de estos negocios cordobeses con agentes de voz IA.',
    whyLocal:
      'Los talleres de joyería y platería de la Judería atienden encargos personalizados de clientes internacionales. Las almazaras de la campiña exportan AOVE a mercados asiáticos y americanos con diferencias horarias enormes. Y las clínicas del centro gestionan agendas saturadas durante los meses de mayor afluencia turística. VivaSpeak permite a cada uno de estos negocios responder al instante, en el idioma del cliente, sin importar la hora.',
    industries: [
      'Joyería y platería artesanal',
      'Almazaras y AOVE de exportación',
      'Turismo monumental y Patios',
      'Clínicas y despachos del centro',
    ],
    descriptionEn:
      'Córdoba welcomes over 3 million visitors annually, drawn by the Mosque-Cathedral and the Patios. But beyond tourism, the city is a hub for jewelry, premium olive oil and professional services. VivaSpeak automates multichannel support for these businesses with AI voice agents.',
    whyLocalEn:
      "Jewelry and silversmith workshops in the Judería handle custom orders from international clients. Olive mills in the countryside export EVOO to Asian and American markets across huge time differences. And city-center clinics manage packed schedules during peak tourist months. VivaSpeak lets each of these businesses respond instantly, in the customer's language, regardless of the hour.",
    industriesEn: [
      'Artisan jewelry and silversmithing',
      'Olive mills and export EVOO',
      'Monumental tourism and Patios',
      'City-center clinics and firms',
    ],
  },
  {
    province: 'Granada',
    city: 'Granada',
    coworking: 'Anda CoWork',
    address: 'Avenida de Andalucía, 5',
    zip: '18014',
    slug: toSlug('Granada'),
    description:
      'Granada es la única ciudad de Europa donde puedes esquiar en Sierra Nevada por la mañana y pasear por la Alhambra por la tarde. Este doble atractivo genera una demanda turística que VivaSpeak canaliza con agentes de voz IA para hoteles, apartamentos turísticos, clínicas y academias de español.',
    whyLocal:
      'La Universidad de Granada atrae a 80.000 estudiantes y miles de alumnos internacionales de español, generando un mercado de academias de idiomas y alojamiento estudiantil con consultas constantes. Sierra Nevada recibe 1 millón de esquiadores por temporada que reservan forfaits y alojamiento. Y el Albaicín concentra apartamentos turísticos que gestionan check-ins desde múltiples plataformas. VivaSpeak unifica todos estos canales con IA que responde en español, inglés y francés.',
    industries: [
      'Academias de español para extranjeros',
      'Turismo Sierra Nevada y esquí',
      'Apartamentos turísticos del Albaicín',
      'Clínicas universitarias',
    ],
    descriptionEn:
      'Granada is the only city in Europe where you can ski in Sierra Nevada in the morning and stroll through the Alhambra in the afternoon. This dual appeal generates tourist demand that VivaSpeak channels with AI voice agents for hotels, tourist apartments, clinics and Spanish language schools.',
    whyLocalEn:
      'The University of Granada attracts 80,000 students and thousands of international Spanish learners, creating a market of language schools and student housing with constant inquiries. Sierra Nevada welcomes 1 million skiers per season booking passes and accommodation. And the Albaicín concentrates tourist apartments managing check-ins from multiple platforms. VivaSpeak unifies all these channels with AI responding in Spanish, English and French.',
    industriesEn: [
      'Spanish language schools for foreigners',
      'Sierra Nevada tourism and skiing',
      'Albaicín tourist apartments',
      'University clinics',
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
      'Huelva produce el 97% de las fresas de España y sus playas vírgenes de Doñana atraen un turismo de naturaleza en auge. VivaSpeak automatiza la comunicación de cooperativas freseras, hoteles de Punta Umbría y clínicas onubenses con agentes de voz IA que gestionan pedidos y reservas sin interrupciones.',
    whyLocal:
      'Las cooperativas de frutos rojos de Moguer y Palos de la Frontera reciben pedidos urgentes de cadenas de supermercados europeas a cualquier hora. El Parque Nacional de Doñana y las playas de Islantilla generan un turismo estacional que colapsa las centralitas de hoteles y casas rurales. VivaSpeak permite a ambos sectores escalar su atención telefónica con IA, sin contratar personal extra en temporada alta.',
    industries: [
      'Cooperativas de frutos rojos',
      'Turismo de naturaleza y Doñana',
      'Clínicas y centros de salud',
      'Industria química de Palos',
    ],
    descriptionEn:
      "Huelva produces 97% of Spain's strawberries and its pristine Doñana beaches attract booming nature tourism. VivaSpeak automates communication for berry cooperatives, Punta Umbría hotels and local clinics with AI voice agents that handle orders and bookings without interruptions.",
    whyLocalEn:
      'Berry cooperatives in Moguer and Palos de la Frontera receive urgent orders from European supermarket chains at any hour. Doñana National Park and Islantilla beaches generate seasonal tourism that overwhelms hotel and rural lodge switchboards. VivaSpeak lets both sectors scale their phone support with AI, without hiring extra staff during peak season.',
    industriesEn: [
      'Berry cooperatives',
      'Nature tourism and Doñana',
      'Clinics and health centers',
      'Palos chemical industry',
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
      'Jaén es la capital mundial del aceite de oliva: más de 66 millones de olivos producen el 20% del AOVE del planeta. VivaSpeak ayuda a cooperativas oleícolas, almazaras con tienda online y clínicas jienenses a gestionar pedidos internacionales y citas con agentes de voz IA.',
    whyLocal:
      'Las cooperativas oleícolas de la Sierra de Cazorla y la campiña jienense exportan a 120 países y reciben llamadas de importadores en inglés, chino y árabe. El turismo de interior crece gracias a las Sierras de Cazorla, Segura y Las Villas, el mayor espacio natural protegido de España. VivaSpeak permite a las almazaras gestionar pedidos de exportación y a los alojamientos rurales atender reservas internacionales con IA multilingüe.',
    industries: [
      'Cooperativas oleícolas y almazaras',
      'Turismo de naturaleza Sierras de Cazorla',
      'Clínicas comarcales',
      'Despachos profesionales agrarios',
    ],
    descriptionEn:
      "Jaén is the world capital of olive oil: over 66 million olive trees produce 20% of the planet's EVOO. VivaSpeak helps olive cooperatives, mills with online shops and local clinics manage international orders and appointments with AI voice agents.",
    whyLocalEn:
      "Olive cooperatives in the Sierra de Cazorla and the Jaén countryside export to 120 countries and receive calls from importers in English, Chinese and Arabic. Inland tourism is growing thanks to the Sierras de Cazorla, Segura and Las Villas, Spain's largest protected natural area. VivaSpeak lets mills manage export orders and rural lodges handle international bookings with multilingual AI.",
    industriesEn: [
      'Olive cooperatives and mills',
      'Sierras de Cazorla nature tourism',
      'Regional clinics',
      'Agricultural professional firms',
    ],
  },
  {
    province: 'Málaga',
    city: 'Málaga',
    coworking: 'La Aduana Coworking',
    address: 'Calle Cortina del Muelle, 11',
    zip: '29015',
    slug: toSlug('Málaga'),
    description:
      'Málaga se ha convertido en el Silicon Valley del sur de Europa, con Google, Vodafone y cientos de startups instaladas en el PTA. Al mismo tiempo, la Costa del Sol sigue siendo el destino residencial favorito de británicos, escandinavos y alemanes. VivaSpeak atiende ambos mundos con agentes de voz IA multilingües.',
    whyLocal:
      'El Parque Tecnológico de Andalucía (PTA) alberga más de 630 empresas tecnológicas que necesitan atención al cliente escalable. Las inmobiliarias de Marbella y Estepona gestionan consultas de compradores internacionales en inglés, ruso y árabe. Y las clínicas estéticas de la Milla de Oro reciben pacientes de toda Europa. VivaSpeak conecta estos tres sectores con IA que cualifica leads técnicos, agenda visitas a propiedades y confirma citas médicas en el idioma del cliente.',
    industries: [
      'Startups y tech del PTA',
      'Inmobiliarias de lujo Costa del Sol',
      'Clínicas estéticas de la Milla de Oro',
      'Hostelería y turismo internacional',
    ],
    descriptionEn:
      "Málaga has become southern Europe's Silicon Valley, with Google, Vodafone and hundreds of startups based at the PTA. At the same time, the Costa del Sol remains the favorite residential destination for British, Scandinavian and German buyers. VivaSpeak serves both worlds with multilingual AI voice agents.",
    whyLocalEn:
      "The Andalusia Technology Park (PTA) hosts over 630 tech companies needing scalable customer service. Real estate agencies in Marbella and Estepona handle inquiries from international buyers in English, Russian and Arabic. And aesthetic clinics on the Golden Mile receive patients from across Europe. VivaSpeak connects these three sectors with AI that qualifies technical leads, schedules property viewings and confirms medical appointments in the customer's language.",
    industriesEn: [
      'PTA startups and tech',
      'Costa del Sol luxury real estate',
      'Golden Mile aesthetic clinics',
      'International hospitality and tourism',
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
      'Sevilla es la capital económica del sur de España, sede de Airbus Military y un destino turístico que recibe 3 millones de visitantes al año. VivaSpeak automatiza la atención de empresas aeronáuticas de Tablada, clínicas de Los Remedios e inmobiliarias de Triana con agentes de voz IA.',
    whyLocal:
      'El clúster aeronáutico de Tablada y San Pablo emplea a más de 12.000 personas y sus empresas proveedoras gestionan comunicaciones técnicas con clientes de Airbus en varios idiomas. Las clínicas del barrio de Los Remedios y Nervión atienden a una población metropolitana de 1,5 millones. Y las inmobiliarias de Triana y Santa Cruz venden a compradores internacionales atraídos por el estilo de vida sevillano. VivaSpeak cubre estos tres perfiles con IA especializada.',
    industries: [
      'Aeronáutica y proveedores de Airbus',
      'Clínicas de Los Remedios y Nervión',
      'Inmobiliarias de Triana y Santa Cruz',
      'Turismo cultural y Feria de Abril',
    ],
    descriptionEn:
      "Seville is southern Spain's economic capital, home to Airbus Military and a tourist destination welcoming 3 million visitors annually. VivaSpeak automates support for aerospace companies in Tablada, clinics in Los Remedios and real estate agencies in Triana with AI voice agents.",
    whyLocalEn:
      'The Tablada and San Pablo aerospace cluster employs over 12,000 people and its supplier companies manage technical communications with Airbus clients in multiple languages. Clinics in Los Remedios and Nervión serve a metropolitan population of 1.5 million. And real estate agencies in Triana and Santa Cruz sell to international buyers attracted by the Sevillian lifestyle. VivaSpeak covers all three profiles with specialized AI.',
    industriesEn: [
      'Aerospace and Airbus suppliers',
      'Los Remedios and Nervión clinics',
      'Triana and Santa Cruz real estate',
      'Cultural tourism and Feria de Abril',
    ],
  },
];
