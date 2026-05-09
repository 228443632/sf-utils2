// @ts-ignore

import parseURL from 'sf-utils2/base/parseURL'
import merge from 'sf-utils2/object/merge'
import deepMerge from 'sf-utils2/object/deepMerge'
import getGlobalThis from 'sf-utils2/base/getGlobalThis'
import isBoolean from 'sf-utils2/base/isBoolean'

type TStringifyURLOption = {
  /** 是否深度合并 默认是true */
  isDeepMerge?: boolean

  /** 是否将query参数合并到hash参数之后 默认是false */
  isSearchParamAfterHash?: boolean
}

/**
 * 加工url，将query参数合并到url上
 * @param {string} url 地址
 * @param {{[key:string|symbol]: any}} query 参数
 * @param {TStringifyURLOption|boolean} options 选项，如果是boolean类型，则表示是否深度合并
 * @return {string|undefined}
 * @example
 * stringifyURL('http://www.baidu.com?id=123', {id: '22', name: 'haha'})
 * // 输出 http://www.baidu.com?id=22&haha
 */
function stringifyURL(url, query = {}, options: TStringifyURLOption | boolean = true) {
  if (!url) return console.error('传入的url不能为空')

  let options$2 = options as TStringifyURLOption

  if (isBoolean(options) && typeof options === 'boolean') {
    // compact 兼容
    const isDeepMerge = options
    options$2 = { isDeepMerge }
  }

  /** 是否深度合并 */
  options$2.isDeepMerge ??= true

  /** 是否将query参数合并到hash参数之后 */
  options$2.isSearchParamAfterHash ??= false

  const defaultPrefix = 'http://xxx/'
  if (!/^https?/.test(url)) url = `${defaultPrefix}${url}`
  const globalThis = getGlobalThis()
  const urlInstance = new globalThis.URL(url)

  const queryObj = Object.entries(parseURL(url) || {}).reduce((pre, [k, v]) => {
    pre[k] = decodeURIComponent(v)
    return pre
  }, {})
  const newQueryObj = options$2.isDeepMerge ? deepMerge(queryObj, query) : merge(queryObj, query)

  Object.entries(newQueryObj).forEach(([k, v]) => {
    urlInstance.searchParams.set(k, v)
  })

  let resultUrl = urlInstance.toString().replace(defaultPrefix, '')

  if (options$2?.isSearchParamAfterHash) {
    let queryString //  搜索参数字符串
    resultUrl = resultUrl.replace(/\?(.*?)#\//, (_, $1) => {
      queryString = $1
      return '#/'
    })
    if (queryString)
      resultUrl = queryString.includes('?') ? `${resultUrl}${queryString}` : `${resultUrl}?${queryString}`
  }
  return resultUrl
}

export default stringifyURL

// console.log('stringUrl', stringifyURL('http://10.18.102.22:20/name/#/home', { id: '蔡徐坤' }, { isSearchParamAfterHash: true }))
//
// console.log('pase', parseURL('http://10.18.102.22:20/?cc=123#/home'))
