import { getCopiedImgsPattern } from './images';
import { Pattern } from 'copy-webpack-plugin';

export interface ICopiedPaths {
  publicPath: string;
}

export const getCopiedPaths = (options: ICopiedPaths): Pattern[] => [
  getCopiedImgsPattern(options.publicPath),
];
