import type { ICopiedPaths } from './copied';

export interface BaseBuildPaths {
  src: string;
  entry: string;
  html: string;
  output: string;
  back: string;
}

export type BuildPaths = BaseBuildPaths & ICopiedPaths;

export interface BuildDevOptions {
  port?: number;
}

export class BuildOptions {
  constructor(
    public paths: BuildPaths,
    public isProd = true,
    public dev: BuildDevOptions = {}
  ) {}
}
