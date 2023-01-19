/**
 * @Description: rollup开发环境配置
 * @Author bianpengfei
 * @create 2022/2/17 12:08
 */
import rollupConfigBase, { ROOT_PATH } from './rollup.base'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import path from 'path'
import pkg from '../package.json'

export default {
  ...rollupConfigBase,
  input: path.resolve(ROOT_PATH, './src/index.js'),
  output: [
    {
      file: path.join(ROOT_PATH, `test/${pkg.jsdelivr}`),
      format: 'umd',
      name: pkg.globalName,
      exports: 'auto'
    },
    // {
    //   file: path.join(ROOT_PATH, `test/${pkg.main}`),
    //   format: 'umd',
    //   name: pkg.globalName,
    //   exports: 'auto'
    // },
    // {
    //   exports: 'auto',
    //   file: path.join(ROOT_PATH, `test/${pkg.module}`),
    //   format: 'es'
    // }
  ],
  watch: {
    // 监听的文件
    exclude: 'node_modules/**'
  },

  external: rollupConfigBase.external.slice(1),

  plugins: [
    ...rollupConfigBase.plugins,
    livereload({
      watch: ['src', 'test'],
      verbose: false
    }),
    serve({
      open: true,
      port: 4444,
      headers: {
        "Access-Control-Allow-Origin": "*",  // 本地服务允许跨域
      },
      contentBase: [path.resolve(ROOT_PATH, 'test')],
      openPage: 'index.html'
      // onListening: function (server) {
      //   const address = server.getAddress()
      //   const host = address.host === '::' ? 'localhost' : address.host
      //   const protocol = this.https ? 'https' : 'http'
      //   console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
      // }
    })
  ]
}
