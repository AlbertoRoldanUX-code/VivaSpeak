import type { Office } from './types';
import { toSlug } from './types';

export const castillaLaMancha: Office[] = [
  {
    province: 'Albacete',
    city: 'Albacete',
    coworking: 'Hub 36 Albacete',
    address: 'Calle Mayor, 36',
    zip: '02001',
    slug: toSlug('Albacete'),
    description:
      'Albacete, famosa mundialmente por su cuchillería artesanal y capital de la llanura manchega, es un centro comercial que conecta el Levante con el centro de España. VivaSpeak automatiza la atención de empresas cuchilleras con venta online, clínicas y negocios agroalimentarios albaceteños con agentes de voz IA.',
    whyLocal:
      'La industria cuchillera de Albacete exporta a todo el mundo y recibe pedidos personalizados por teléfono de coleccionistas y distribuidores internacionales. La Feria de Albacete, la más antigua de España, genera un pico anual de consultas para hostelería y alojamiento. Y las clínicas del centro atienden a una población que abarca toda la provincia. VivaSpeak permite a estos negocios gestionar pedidos artesanales, reservas feriales y citas médicas con IA.',
    industries: [
      'Cuchillería artesanal y exportación',
      'Agroalimentación manchega',
      'Clínicas y consultas médicas',
      'Hostelería y Feria de Albacete',
    ],
    descriptionEn:
      'Albacete, world-famous for its artisan knife-making and capital of the Manchegan plain, is a commercial hub connecting eastern and central Spain. VivaSpeak automates support for knife companies with online sales, clinics and agri-food businesses with AI voice agents.',
    whyLocalEn:
      "Albacete's knife industry exports worldwide and receives custom orders by phone from collectors and international distributors. The Albacete Fair, Spain's oldest, generates an annual spike in hospitality and accommodation inquiries. And city-center clinics serve a population spanning the entire province. VivaSpeak lets these businesses manage artisan orders, fair bookings and medical appointments with AI.",
    industriesEn: [
      'Artisan knife-making and export',
      'Manchegan agri-food',
      'Clinics and medical practices',
      'Hospitality and Albacete Fair',
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
      'Cuenca, con sus Casas Colgadas sobre el Júcar y un Museo de Arte Abstracto único en España, atrae un turismo cultural y de naturaleza que crece cada año. VivaSpeak automatiza la gestión de reservas de alojamientos rurales, consultas de clínicas conquenses y atención de negocios locales con agentes de voz IA.',
    whyLocal:
      'La Serranía de Cuenca y la Ciudad Encantada generan un turismo de naturaleza que reserva alojamiento rural por teléfono, a menudo desde el coche camino al destino. Las Casas Colgadas y la Semana de Música Religiosa atraen visitantes internacionales. Y las clínicas conquenses cubren una provincia extensa con población dispersa. VivaSpeak permite a casas rurales captar reservas de última hora, a hoteles gestionar grupos culturales y a clínicas ofrecer atención telefónica accesible con IA.',
    industries: [
      'Turismo rural Serranía de Cuenca',
      'Alojamientos de las Casas Colgadas',
      'Clínicas y servicios sanitarios rurales',
      'Comercio local y artesanía',
    ],
    descriptionEn:
      'Cuenca, with its Hanging Houses over the Júcar river and a unique Abstract Art Museum, attracts growing cultural and nature tourism. VivaSpeak automates booking management for rural lodges, clinic inquiries and local business support with AI voice agents.',
    whyLocalEn:
      'The Serranía de Cuenca and Ciudad Encantada generate nature tourism that books rural accommodation by phone, often from the car en route. The Hanging Houses and Religious Music Week attract international visitors. And local clinics cover an extensive province with dispersed population. VivaSpeak lets rural lodges capture last-minute bookings, hotels manage cultural groups and clinics offer accessible phone support with AI.',
    industriesEn: [
      'Serranía de Cuenca rural tourism',
      'Hanging Houses accommodation',
      'Rural clinics and health services',
      'Local commerce and crafts',
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
      'Guadalajara es el corazón del Corredor del Henares, el eje logístico más importante de España donde Amazon, XPO y decenas de operadores tienen sus centros de distribución. VivaSpeak automatiza la atención de empresas logísticas, inmobiliarias del boom residencial y clínicas con agentes de voz IA.',
    whyLocal:
      'El Corredor del Henares concentra los mayores centros logísticos de España, generando miles de llamadas diarias entre transportistas, proveedores y clientes. El boom inmobiliario de Guadalajara, impulsado por madrileños que buscan vivienda asequible, satura las inmobiliarias locales. Y las clínicas atienden a una población que ha crecido un 30% en una década. VivaSpeak permite a las empresas logísticas gestionar incidencias por teléfono, a las inmobiliarias atender leads sin parar y a las clínicas organizar agendas con IA.',
    industries: [
      'Logística del Corredor del Henares',
      'Inmobiliarias del boom residencial',
      'Clínicas y centros médicos',
      'Industria y manufactura',
    ],
    descriptionEn:
      "Guadalajara is the heart of the Henares Corridor, Spain's most important logistics axis where Amazon, XPO and dozens of operators have distribution centers. VivaSpeak automates support for logistics companies, booming residential real estate and clinics with AI voice agents.",
    whyLocalEn:
      "The Henares Corridor hosts Spain's largest logistics centers, generating thousands of daily calls between carriers, suppliers and customers. Guadalajara's real estate boom, driven by Madrileños seeking affordable housing, overwhelms local agencies. And clinics serve a population that has grown 30% in a decade. VivaSpeak lets logistics firms handle phone incidents, agencies serve leads nonstop and clinics organize schedules with AI.",
    industriesEn: [
      'Henares Corridor logistics',
      'Booming residential real estate',
      'Clinics and medical centers',
      'Industry and manufacturing',
    ],
  },
  {
    province: 'Toledo',
    city: 'Toledo',
    coworking: 'Coworking Alcázar',
    address: 'Cuesta de Carlos V, 2',
    zip: '45001',
    slug: toSlug('Toledo'),
    description:
      'Toledo, la Ciudad de las Tres Culturas, recibe 2,5 millones de visitantes al año y mantiene viva una tradición artesanal de espadas y damasquinado única en el mundo. VivaSpeak automatiza la atención de talleres artesanales con venta internacional, hoteles del casco histórico y clínicas toledanas con agentes de voz IA.',
    whyLocal:
      'Los talleres de damasquinado y espadas de Toledo venden a coleccionistas de todo el mundo y reciben encargos personalizados por teléfono en inglés y japonés. Los hoteles del casco histórico gestionan reservas de grupos turísticos internacionales. Y las clínicas atienden tanto a residentes como a la creciente población del área metropolitana de Madrid-Toledo. VivaSpeak permite a los artesanos no perder encargos mientras trabajan en el taller, y a los hoteles gestionar reservas multilingües con IA.',
    industries: [
      'Artesanía del damasquinado y espadas',
      'Turismo monumental y cultural',
      'Clínicas del área metropolitana',
      'Hostelería del casco histórico',
    ],
    descriptionEn:
      'Toledo, the City of Three Cultures, welcomes 2.5 million visitors annually and keeps alive a unique artisan tradition of swords and damascene work. VivaSpeak automates support for artisan workshops with international sales, historic quarter hotels and local clinics with AI voice agents.',
    whyLocalEn:
      "Toledo's damascene and sword workshops sell to collectors worldwide and receive custom orders by phone in English and Japanese. Historic quarter hotels manage bookings from international tour groups. And clinics serve both residents and the growing Madrid-Toledo metropolitan population. VivaSpeak lets artisans avoid missing orders while working in the workshop, and hotels manage multilingual bookings with AI.",
    industriesEn: [
      'Damascene and sword craftsmanship',
      'Monumental and cultural tourism',
      'Metropolitan area clinics',
      'Historic quarter hospitality',
    ],
  },
];
