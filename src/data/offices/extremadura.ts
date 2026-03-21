import type { Office } from './types';
import { toSlug } from './types';

export const extremadura: Office[] = [
  {
    province: 'Badajoz',
    city: 'Badajoz',
    coworking: 'WorkLive',
    address: 'Avenida Sinforiano Madroñero, 8',
    zip: '06011',
    slug: toSlug('Badajoz'),
    description:
      'Badajoz, la ciudad más poblada de Extremadura, es un nudo comercial estratégico con Portugal donde miles de empresas gestionan comercio transfronterizo a diario. VivaSpeak automatiza la atención de empresas agroalimentarias, clínicas y negocios de importación-exportación con agentes de voz IA bilingües español-portugués.',
    whyLocal:
      'El paso fronterizo de Badajoz-Elvas es uno de los más transitados de la Península Ibérica, generando un comercio transfronterizo que necesita atención en español y portugués. Las empresas agroalimentarias de las Vegas del Guadiana exportan tomate, arroz y fruta a toda Europa. Y las clínicas pacenses atienden a pacientes de ambos lados de la frontera. VivaSpeak permite a estos negocios gestionar comunicaciones bilingües con IA que entiende el contexto ibérico.',
    industries: [
      'Comercio transfronterizo España-Portugal',
      'Agroalimentación de las Vegas del Guadiana',
      'Clínicas con pacientes transfronterizos',
      'Inmobiliarias y servicios profesionales',
    ],
    descriptionEn:
      "Badajoz, Extremadura's most populated city, is a strategic commercial hub with Portugal where thousands of businesses manage cross-border trade daily. VivaSpeak automates support for agri-food companies, clinics and import-export businesses with bilingual Spanish-Portuguese AI voice agents.",
    whyLocalEn:
      'The Badajoz-Elvas border crossing is one of the busiest on the Iberian Peninsula, generating cross-border trade needing support in Spanish and Portuguese. Agri-food companies in the Vegas del Guadiana export tomatoes, rice and fruit across Europe. And local clinics serve patients from both sides of the border. VivaSpeak lets these businesses manage bilingual communications with AI that understands the Iberian context.',
    industriesEn: [
      'Spain-Portugal cross-border commerce',
      'Vegas del Guadiana agri-food',
      'Clinics with cross-border patients',
      'Real estate and professional services',
    ],
  },
  {
    province: 'Cáceres',
    city: 'Cáceres',
    coworking: 'CONPARTES',
    address: 'Calle San Pedro, 8',
    zip: '10003',
    slug: toSlug('Cáceres'),
    description:
      'Cáceres, cuyo casco histórico es Patrimonio de la Humanidad y escenario de Juego de Tronos, combina turismo cultural con dehesas de ibérico y un sector de turismo rural en expansión. VivaSpeak automatiza la atención de alojamientos rurales, productores de jamón ibérico y clínicas cacereñas con agentes de voz IA.',
    whyLocal:
      'El casco monumental de Cáceres atrae visitantes internacionales que reservan alojamiento y visitas guiadas. Las dehesas de la provincia producen el jamón ibérico de bellota más cotizado del mundo, con productores que reciben pedidos de importadores japoneses, americanos y europeos. Y las clínicas cacereñas atienden a una población que incluye residentes rurales de toda la provincia. VivaSpeak permite a los productores de ibérico gestionar pedidos internacionales y a los alojamientos captar reservas turísticas con IA multilingüe.',
    industries: [
      'Productores de jamón ibérico de bellota',
      'Turismo monumental y rodajes',
      'Alojamientos rurales de dehesa',
      'Clínicas y servicios sanitarios',
    ],
    descriptionEn:
      'Cáceres, whose old town is a UNESCO World Heritage Site and Game of Thrones filming location, combines cultural tourism with Iberian pig dehesas and expanding rural tourism. VivaSpeak automates support for rural lodges, Iberian ham producers and local clinics with AI voice agents.',
    whyLocalEn:
      "Cáceres' monumental old town attracts international visitors booking accommodation and guided tours. The province's dehesas produce the world's most prized acorn-fed Iberian ham, with producers receiving orders from Japanese, American and European importers. And local clinics serve a population including rural residents from across the province. VivaSpeak lets Iberian ham producers manage international orders and lodges capture tourist bookings with multilingual AI.",
    industriesEn: [
      'Acorn-fed Iberian ham producers',
      'Monumental tourism and film locations',
      'Dehesa rural lodges',
      'Clinics and health services',
    ],
  },
];
