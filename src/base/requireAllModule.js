import isArray from '@/base/isArray'

/**
 * 模式类型
 * @type {{async: string, sync: string}}
 */
const MODE_TYPE = {
  sync: 'sync',
  async: 'async'
}

/**
 * 自动化注册 需要模块
 * @param requireContext 当type为webpack是，语法require.context(目录,是否递归目录, 文件筛选条件)所有参数必须是直接字符串，变量无效；当type=vite时，语法import.meta.globEager所有参数必须是直接字符串，变量无效。
 * @param {Array} exclude 只引入包括的模块
 * @param {Array} include 排除的模块 include 和 exclude不能同时共用
 * @param {string} type 可选值 webpack 和 vite，默认值是webpack
 * @param {'sync'|'async'} mode 模式 可选项 sync 同步 async 异步， 暂时只是对webpack有效果
 * @returns {*}  Array
 */
function requireAllModule({ requireContext, exclude = [], include = [], type = 'webpack', mode = MODE_TYPE.sync }) {
  if (!isArray(exclude)) {
    console.error('[warning] exclude字段类型应为Array')
    exclude = []
  }
  if (!isArray(include)) {
    console.error('[warning] include字段类型应为Array')
    include = []
  }
  const isNoEmptyArray = function () {
    return !!(Array.isArray(this) && this.length)
  }
  const isEmptyArray = function () {
    return !!(Array.isArray(this) && this.length === 0)
  }
  if (isNoEmptyArray.apply(exclude) && isNoEmptyArray.apply(include)) {
    throw new Error('include 和 exclude字段不能同时共用')
  }
  const requireAll = context => {
    if (type == 'webpack') {
      // 是webpack
      return context.keys().reduce((pre, cur) => {
        const _key = cur // cur.replace(/^\.\/(.*)\.\w+$/, '$1')
        const value = mode === MODE_TYPE.sync ? context(cur) : () => context(cur)
        if (isNoEmptyArray.apply(include)) {
          include.some(v => new RegExp(v).test(_key)) && pre.push([value, _key])
        } else if (isNoEmptyArray.apply(exclude)) {
          exclude.every(v => v !== _key) && pre.push([value, _key])
        } else if (isEmptyArray.apply(include) && isEmptyArray.apply(exclude)) {
          pre.push([value, _key])
        }
        return pre
      }, [])
    } else if (type == 'vite') {
      // 是vite
      return Object.keys(context).reduce((pre, cur) => {
        const _key = cur // cur.replace(/^\.\/(.*)\.\w+$/, '$1')
        const value = mode === MODE_TYPE.sync ? context[cur] : () => context[cur]
        if (isNoEmptyArray.apply(include)) {
          include.some(v => new RegExp(v).test(_key)) && pre.push([value, _key])
        } else if (isNoEmptyArray.apply(exclude)) {
          exclude.every(v => v !== _key) && pre.push([value, _key])
        } else if (isEmptyArray.apply(include) && isEmptyArray.apply(exclude)) {
          pre.push([value, _key])
        }
        return pre
      }, [])
    }
  }
  return requireAll(requireContext)
}

export default requireAllModule
