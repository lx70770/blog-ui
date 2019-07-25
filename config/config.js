import path from 'path'
import routes from './routes'

const url = 'localhost'

export default {
  targets: { ie: 10 },
  routes: routes,
  hash: true,
  proxy: {
    '/api': {
      target: `http://${url}:8080/api`,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    },
    '/dsapi': {
      target: 'http://open.iciba.com/dsapi',
      changeOrigin: true,
      pathRewrite: { '^/dsapi': '' }
    }
  },
  //动态加载antd-pro
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'ant-design-pro',
        libraryDirectory: 'lib',
        style: true,
        camel2DashComponentName: false
      }
    ]
  ],
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
          dynamicImport: false,
          hmr: true
        },
        antd: true,
        locale: {},
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
          level: 3
        },
        hardSource: false,
        hd: false,
        fastClick: true,
        title: 'default title',
        pwa: null
      }
    ]
  ],
  chainWebpack(config, { webpack }) {
    config.resolve.modules.add(path.resolve(__dirname, '../src'))
  },
  alias: {
    assets: path.resolve(__dirname, '../src/assets'),
    environment: `environment/${process.env.NODE_ENV}`,
    utils: path.resolve(__dirname, '../src/utils')
  }
}
