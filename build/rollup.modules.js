/**
 * @Description: 打包各个模块，主要是为了进行按需加载
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 **/

import rollupConfigBase from './rollup.base.js'
import glob from 'glob'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import path2 from 'node:path'
import fs from 'node:fs/promises'

const rollupModules = () => {
  const input = {}
  const dtsSrcInputs = {}
  const files = glob.sync('./src/*/**.{js,ts}')
  if (Array.isArray(files)) {
    files.forEach(v => {
      // console.log('dir', path2.dirname(v))
      const pathSplit = v.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')
      let filePath = ''
      if ('nodejs'.includes(pathSplit[1])) {
      } else if (['expand'].includes(pathSplit[1])) {
        filePath += pathSplit.slice(1).join('/')
      } else {
        filePath += pathSplit.slice().pop()
      }
      if (filePath) {
        input[filePath] = v

        // 按目录分组
        const groupKey = path2.dirname(v).replace(/^\.\/src\//, '')
        const filename = path2.basename(v, path2.extname(v))
        const inputkey = `${groupKey}/${filename}`
        if (!/^(nodejs)/.test(groupKey)) {
          dtsSrcInputs[inputkey] = v
        }
      }
    })
    // console.log(input)
    // console.log(inputDirGroup)
  }

  // const dtsCommonInputObj = Object.entries(input).reduce((p, [k, v]) => {
  //   if (/^(?!expand\/)/.test(k)) {
  //     p[k] = v
  //   }
  //   return p
  // }, {})
  //
  // const dtsExpandInputObj = Object.entries(input).reduce((p, [k, v]) => {
  //   if (/^expand\//.test(k)) {
  //     p[k] = v
  //   }
  //   return p
  // }, {})
  // const dtsInputs = { ...dtsCommonInputObj, ...dtsExpandInputObj }

  const dtsPlugins = [dts(), json()]

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
      ...rollupConfigBase,
      input: { ...input, ...dtsSrcInputs },
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

export default rollupModules

// console.log(fs.writeFile('./mock.json', JSON.stringify(rollupModules(), null, 2)))
