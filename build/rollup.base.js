/**
 * @Description: rollup基础配置
 * @Author bianpengfei
 * @create 2021/12/25 12:50
 */
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel' // rollup 的 babel 插件，ES6转ES5
import cleanup from 'rollup-plugin-cleanup'
import banner from 'rollup-plugin-banner'
import path from 'path'
import externals from 'rollup-plugin-node-externals'
import aliasPlugin from '@rollup/plugin-alias'

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
})

export const IS_DEV = process.env.NODE_ENV === 'development'
export const IS_PRO = process.env.NODE_ENV === 'production'
export const ROOT_PATH = path.resolve(__dirname, '../')
import { visualizer } from 'rollup-plugin-visualizer'


const year = new Date().getFullYear()

export default {
  external: ['html2canvas', 'jspdf', 'crypto-js', 'jszip', 'file-saver', '@bianpengfei/utils', 'sf-utils2'], // /@babel\/runtime/,
  plugins: [
    // externals({
    //   browser: true,
    // }),
    visualizer(),
    banner(`<%= pkg.name %>\n(c) 2020-${year} v<%= pkg.version %>\nby <%= pkg.author %>`),
    cleanup(),
    json(),
    resolve(),
    aliasPlugin({
      entries: [{ find: '@', replacement: path.join(ROOT_PATH, 'src') }],
      customResolver
    }),
    commonjs({ sourceMap: false, ignoreTryCatch: false, transformMixedEsModules: true }),
    babel({
      exclude: 'node_modules/**', // 忽略 node_modules
      babelHelpers: 'runtime',
      presets: [
        [
          '@babel/preset-env'
          // {
          //   useBuiltIns: 'usage',
          //   corejs: {
          //     version: 3,
          //     // proposals: true
          //   }
          // }
        ]
      ],
      plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
    }),
    getBabelOutputPlugin({
      allowAllFormats: true
    })
  ]
}
