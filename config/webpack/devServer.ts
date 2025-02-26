import { BuildDevOptions } from './types';
import { Configuration } from 'webpack-dev-server';

export function deriveDevServer({ port }: BuildDevOptions): Configuration {
  return {
    port: port ? port : 7437,
    open: false, 
    historyApiFallback: true,
    proxy: [
      {
        context: '/projects-api',
        pathRewrite: { '^/projects-api': '' },
        target: 'http://62.113.42.34:8772',
      },
    ],
    // setupMiddlewares: (middlewares, devServer) => {
    //   if (!devServer?.app) {
    //     throw new Error('webpack-dev-server is not defined');
    //   }

    //   return [
    //     devServer.app.use(
    //       '/trpc',
    //       createProxyMiddleware({
    //         target: 'http://localhost:8765',
    //         changeOrigin: true,
    //       })
    //     ),
    //     ...middlewares,
    //   ];
    // },
  };
}
