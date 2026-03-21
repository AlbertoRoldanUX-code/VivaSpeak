import type { Office } from './types';
import { toSlug } from './types';

export const murcia: Office[] = [
  {
    province: 'Murcia',
    city: 'Murcia',
    coworking: 'Coworking Murcia Centro',
    address: 'Calle San Antonio, 8',
    zip: '30001',
    slug: toSlug('Murcia'),
    description:
      'Murcia es la huerta de Europa: la Región exporta más de 4.000 millones de euros en frutas y hortalizas al año. VivaSpeak automatiza la atención de empresas agroexportadoras del Campo de Cartagena, clínicas murcianas y negocios turísticos de La Manga con agentes de voz IA multilingües.',
    whyLocal:
      'Las empresas agroexportadoras del Campo de Cartagena y el Valle del Guadalentín reciben pedidos de cadenas de supermercados de toda Europa en inglés, francés y alemán a cualquier hora. La Manga del Mar Menor atrae turismo nacional e internacional que reserva apartamentos y actividades náuticas. Y las clínicas de la Gran Vía murciana atienden a la séptima área metropolitana de España. VivaSpeak conecta estos tres mundos con IA que diferencia un pedido de lechugas de una reserva de apartamento.',
    industries: [
      'Agroexportación del Campo de Cartagena',
      'Turismo de La Manga del Mar Menor',
      'Clínicas de la Gran Vía murciana',
      'Hostelería y gastronomía regional',
    ],
    descriptionEn:
      "Murcia is Europe's orchard: the Region exports over €4 billion in fruit and vegetables annually. VivaSpeak automates support for agri-export companies in Campo de Cartagena, local clinics and La Manga tourism businesses with multilingual AI voice agents.",
    whyLocalEn:
      "Agri-export companies in Campo de Cartagena and the Guadalentín Valley receive orders from supermarket chains across Europe in English, French and German at any hour. La Manga del Mar Menor attracts national and international tourists booking apartments and water sports. And clinics on Murcia's Gran Vía serve Spain's seventh-largest metropolitan area. VivaSpeak connects these three worlds with AI that tells a lettuce order from an apartment booking.",
    industriesEn: [
      'Campo de Cartagena agri-export',
      'La Manga del Mar Menor tourism',
      'Gran Vía clinics',
      'Regional hospitality and gastronomy',
    ],
  },
];
