import { getCopiedPaths } from './copied';
import { BuildPaths } from './types';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { Configuration, ProgressPlugin } from 'webpack';

export function derivePlugins(paths: BuildPaths): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      inject: true,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: path.join('css', '[name].[contenthash:8].css'),
      chunkFilename: path.join('css', '[name].[contenthash:8].css'),
    }),
    new CopyPlugin({
      patterns: getCopiedPaths(paths),
    }),
  ];
}
