/**
 * @Description: 打包各个模块，主要是为了进行按需加载
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 **/

import rollupConfigBase from './rollup.base.js'
import glob from 'glob'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'

export default () => {
  const input = {}
  const files = glob.sync('./src/*/**.{js,ts}')
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
    console.log('测试', input)
  }

  const dtsCommonInputObj = Object.entries(input).reduce((p, [k, v]) => {
    if (/^(?!expand\/)/.test(k)) {
      p[k] = v
    }
    return p
  }, {})

  const dtsExpandInputObj = Object.entries(input).reduce((p, [k, v]) => {
    if (/^expand\//.test(k)) {
      p[k] = v
    }
    return p
  }, {})

  const dtsPlugins = [dts(), json()]

  const dtsInputs = { ...dtsCommonInputObj, ...dtsExpandInputObj }

  return [
    {
      ...rollupConfigBase,
      input,
      output: {
        dir: 'lib',
        format: 'esm',
        exports: 'auto'
      }
    },

    /* 单独生成声明文件 */
    {
      input: dtsInputs,
      plugins: dtsPlugins,
      output: {
        dir: 'lib',
        format: 'esm',
        assetFileNames: `[name].d.ts`
      }
    }

    // ...dtsRollUpConfigs
    // ...dtsRollUpConfigs
  ]
}
