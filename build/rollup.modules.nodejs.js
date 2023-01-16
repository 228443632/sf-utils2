/**
 * @Description: 打包各个模块，主要是为了进行按需加载
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 **/

import rollupConfigBase from './rollup.base.js'
import glob from 'glob'
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";

export default () => {
  const input = {}
  const files = glob.sync('./src/nodejs/*/**.js').concat(glob.sync('./src/nodejs/**.js'))
  if (Array.isArray(files)) {
    files.forEach(v => {
      const pathSplit = v.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')
      let filePath = ''
      filePath += pathSplit.slice().pop()
      input[filePath] = v
    })
    console.log(input)
  }

  console.log('input', input)

  return [
    {
      ...rollupConfigBase,
      input,
      output: {
        dir: 'lib/nodejs',
        format: 'cjs',
        exports: 'auto'
      }
    },
    /* 单独生成声明文件 */
    {
      input: 'src/nodejs/index.js',
      plugins: [dts(), json()],
      output: {
        format: 'cjs',
        file: 'lib/nodejs/index.d.ts'
      }
    }
  ]
}
