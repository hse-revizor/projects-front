import { deriveTSLoaders } from './ts';
import { ModuleOptions } from 'webpack';

import { deriveCSSLoaders } from './css';

export function deriveLoaders(): ModuleOptions['rules'] {
  return [...deriveCSSLoaders(), deriveTSLoaders()];
}
