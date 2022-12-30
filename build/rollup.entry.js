/**
 * @Description: rollup 入口生产环境打包，剔除 @babel\/runtime
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 */
import { terser } from 'rollup-plugin-terser'
import rollupConfigBase from './rollup.base'

export default () => {
  return {
    ...rollupConfigBase,
    input: 'src/index.js',
    output: [
      {
        file: 'lib/b-utils.js',
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
      },
      {
        file: 'lib/b-utils.common.js',
        format: 'cjs',
        exports: 'auto'
      },
      {
        file: 'lib/b-utils.esm.js',
        format: 'esm',
        exports: 'auto'
      }
    ]
  }
}
