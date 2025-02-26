import { Pattern } from 'copy-webpack-plugin';

export const getCopiedImgsPattern = (publicPath: string): Pattern => ({
  context: publicPath,
  from: 'images',
  to: 'images',
});
