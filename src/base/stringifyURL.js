import parseURL from '@/base/parseURL'
import merge from '@/object/merge'
import deepMerge from '@/object/deepMerge'
import getGlobalThis from '@/base/getGlobalThis'

/**
 * 加工url，将query参数合并到url上
 * @param {string} url 地址
 * @param {{[key:string|symbol]: any}} query 参数
 * @param {boolean} isDeepMerge 是否需要深度合并
 * @return {string|void}
 * @example
 * stringifyURL('http://www.baidu.com?id=123', {id: '22', name: 'haha'})
 * // 输出 http://www.baidu.com?id=22&haha
 */
function stringifyURL(url, query = {}, isDeepMerge = true) {
  if (!url) return console.error('传入的url不能为空')
  const defaultPrefix = 'http://xxx/'
  if (!/^https?/.test(url)) url = `${defaultPrefix}${url}`
  let queryObj = Object.entries(parseURL(url) || {}).reduce((pre, [k, v]) => {
    pre[k] = decodeURIComponent(v)
    return pre
  }, {})
  const pathName = url?.split?.('?')?.at?.(0) || url
  const globalThis = getGlobalThis()
  const urlInstance = new globalThis.URL(pathName)
  const newQueryObj = isDeepMerge ? deepMerge(queryObj, query) : merge(queryObj, query)
  Object.entries(newQueryObj).forEach(([k, v]) => {
    urlInstance.searchParams.set(k, v)
  })
  return urlInstance.toString().replace(defaultPrefix, '')
}

export default stringifyURL
