/**
 * @Description: 打包各个模块，主要是为了进行按需加载
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 **/

import rollupConfigBase from './rollup.base.js'
import glob from 'glob'

export default () => {
  const input = {}
  const files = glob.sync('./src/*/**.js')
  if (Array.isArray(files)) {
    files.forEach(v => {
      const pathSplit = v.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')
      let filePath = ''
      if ('nodejs'.includes(pathSplit[1])) {
      } else if (['expand'].includes(pathSplit[1])) {
        filePath += pathSplit.slice(1).join('/')
      } else {
        filePath += pathSplit.slice().pop()
      }
      input[filePath] = v
    })
    console.log(input)
  }

  return {
    ...rollupConfigBase,
    input,
    output: {
      dir: 'lib',
      format: 'esm',
      exports: 'auto'
    }
  }
}
