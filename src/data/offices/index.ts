export type { Office } from './types';
export { toSlug } from './types';

import { andalucia } from './andalucia';
import { aragon } from './aragon';
import { asturias } from './asturias';
import { baleares } from './baleares';
import { canarias } from './canarias';
import { cantabria } from './cantabria';
import { castillaLaMancha } from './castilla-la-mancha';
import { castillaYLeon } from './castilla-y-leon';
import { cataluna } from './cataluna';
import { ceutaMelilla } from './ceuta-melilla';
import { comunidadValenciana } from './comunidad-valenciana';
import { extremadura } from './extremadura';
import { galicia } from './galicia';
import { laRioja } from './la-rioja';
import { madrid } from './madrid';
import { murcia } from './murcia';
import { navarra } from './navarra';
import { paisVasco } from './pais-vasco';

export const offices = [
  ...andalucia,
  ...aragon,
  ...asturias,
  ...baleares,
  ...canarias,
  ...cantabria,
  ...castillaLaMancha,
  ...castillaYLeon,
  ...cataluna,
  ...ceutaMelilla,
  ...comunidadValenciana,
  ...extremadura,
  ...galicia,
  ...laRioja,
  ...madrid,
  ...murcia,
  ...navarra,
  ...paisVasco,
];
