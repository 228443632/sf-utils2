/**
 * @Description: rollup 入口生产环境打包，剔除 @babel\/runtime
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 */
import terser from '@rollup/plugin-terser'
import rollupConfigBase from './rollup.base'
import pkg from '../package.json'

import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { DTS_PATH } from './utils'
import fs from 'node:fs'

export default () => {
  return [
    {
      ...rollupConfigBase,
      input: 'src/index.js',
      external: [...rollupConfigBase.external, /@babel\/runtime/],
      output: [
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
    },

    // /@babel\/runtime/
    {
      ...rollupConfigBase,
      input: 'src/index.js',
      output: [
        {
          file: `lib/index.umd.js`,
          format: 'umd',
          name: pkg.globalName,
          exports: 'auto',
          plugins: [
            terser({
              toplevel: true,
              compress: {
                pure_funcs: ['console.warn', 'console.log']
              }
            })
          ]
        }
      ]
    },

    /* 单独生成声明文件 */
    {
      input: 'src/index.js',
      plugins: [
        dts(),
        json(),
        (function customDts2() {
          return {
            name: 'custom-dts2',
            // transform(code, id) {
            //   console.log('id', id)
            //   // return code.replace(/'@\/__types/g, `'sf-utils2/lib/__types`)
            //   return code
            // },
            writeBundle() {
              // console.log('output', { output, bundle })
              // const dtsFile = 'index.d.ts'
              const dtsFileContent = fs.readFileSync(DTS_PATH, 'utf-8')
              fs.writeFileSync(DTS_PATH, dtsFileContent.replace(/from '@\//g, `from 'sf-utils2/`), 'utf-8')
            }
          }
        })()
      ],
      output: {
        format: 'esm',
        file: 'index.d.ts'
      }
    }
  ]
}
