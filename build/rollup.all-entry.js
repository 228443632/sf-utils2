/**
 * @Description: rollup 入口生产环境打包，打包所有包裹第三方库
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 */
import { terser } from 'rollup-plugin-terser'
import rollupConfigBase from './rollup.base'

export default () => {
  return {
    ...rollupConfigBase,
    input: 'src/index-all.js',
    external: [],
    output: [
      {
        file: 'lib/b-utils-all.js',
        format: 'umd',
        name: 'BUtils',
        exports: 'auto',
        plugins: [
          terser({
            toplevel: true,
            compress: {
              pure_funcs: ['console.warn']
            }
          })
        ]
      }
    ]
  }
}
