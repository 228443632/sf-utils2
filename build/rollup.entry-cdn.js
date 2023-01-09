/**
 * @Description: rollup 入口生产环境打包cdn版本，包括 @babel\/runtime
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 */
import rollupConfigBase from './rollup.base'

export default () => {
  return {
    ...rollupConfigBase,
    input: 'src/index.js',
    output: [
      {
        file: 'lib/index.global.js',
        format: 'umd',
        name: 'BUtils',
        exports: 'auto'
      }
    ],
    external: rollupConfigBase.external.slice(0)
  }
}
