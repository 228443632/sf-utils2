const head = require('./config/head.js')
const plugins = require('./config/plugins.js')
const themeConfig = require('./config/themeConfig.js')
const path = require('path')
const fs = require('fs')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname, '../../')
const IS_PRO = process.env.NODE_ENV === 'production'

// 打包静态资源前缀
// const BASE = IS_PRO ? '/fr/@bianpengfei-utils/v2/' : '/'
const BASE = IS_PRO ? '/fr/@bianpengfei-utils/v3/' : '/'

module.exports = {
  theme: 'vdoing',
  title: 'sf-utils2',
  description: 'sfutils 官方文档',
  shouldPrefetch: () => false,
  shouldPreload: () => false,
  configureWebpack: (config, isServer) => {
    // 修改客户端的 webpack 配置
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        '+root': ROOT_PATH,
        '@root': ROOT_PATH,
        '@': path.join(ROOT_PATH, 'src'),
        ...config.resolve.alias
      },
      extensions: [...config.resolve.extensions, ...['.js', '.vue', '.json']]
    }
    config.node = {
      ...(config.node || {}),
      global: true,
      process: true
    }
    if (IS_PRO) {
      config.devtool = ''
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是一个 ChainableConfig 的实例
    config.plugin('windiCSSWebpackPlugin').use(WindiCSSWebpackPlugin)
    // config.plugins.delete('prefetch')
    // config.plugins.delete('preload')
    // config.plugins.push(new WindiCSSWebpackPlugin())
    // fs.writeFileSync(path.resolve(__dirname, './_webpack.config.js'), JSON.stringify(config.toConfig(), null, 2), { encoding: 'utf-8' })
    // console.log('导出成功')
  },
  base: BASE,
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  dest: path.resolve(ROOT_PATH, `docs/.vuepress/compile/fr/@bianpengfei-utils/v3`),
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4'],
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
