/**
 * @Description: rollup 入口生产环境打包，剔除 @babel\/runtime
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 */
import { terser } from 'rollup-plugin-terser'
import rollupConfigBase from './rollup.base'
import pkg from '../package.json'

export default () => {
  return {
    ...rollupConfigBase,
    input: 'src/index.js',
    output: [
      {
        file: `lib/index.js`,
        format: 'umd',
        name: pkg.globalName,
        exports: 'auto',
        plugins: [
          terser({
            toplevel: true,
            compress: {
              pure_funcs: ['console.warn']
            }
          })
        ]
      },
      {
        file: `lib/index.cjs.js`,
        format: 'cjs',
        exports: 'auto'
      },
      {
        file: `lib/index.esm.js`,
        format: 'esm',
        exports: 'auto'
      }
    ]
  }
}
