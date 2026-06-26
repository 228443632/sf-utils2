/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2026/5/8 23:08
 */

import getGlobalThis from 'sf-utils2/base/getGlobalThis'
import isNode from 'sf-utils2/base/isNode'

/**
 * 解析URL Hash
 * @param url
 */
function parseURLIncludeHash(url: string) {
  if (url) {
    const globalThis = getGlobalThis() as typeof global
    let base: string
    if (!/^http/.test(url)) base = isNode() ? 'http://localhost:3000' : globalThis.origin
    // @ts-ignore
    const urlInstance = new globalThis.URL(url, base)
    console.log('urlInstance', urlInstance)
    const hashString = urlInstance.hash.split('?').filter(Boolean)[1] || ''
    const hashSearchParams = new globalThis.URLSearchParams(hashString)
    const historySearchParams = urlInstance.searchParams
    return {
      hash: Object.fromEntries(hashSearchParams),
      params: Object.fromEntries(historySearchParams)
    }
  }
  return {
    hash: {},
    params: {}
  }
}

// console.log(
//   'parseURLIncludeHash',
//   parseURLIncludeHash(
//     'http://element-plus.org/zh-CN/component/table-v2?id2=2&name=zhoujielun#%E6%89%8B%E5%8A%A8%E6%BB%9A%E5%8A%A8?id=1&name=caixukun'
//   ),
//   parseURLIncludeHash(
//     '/zh-CN/component/table-v2?id2=2&name=zhoujielun#%E6%89%8B%E5%8A%A8%E6%BB%9A%E5%8A%A8?id=1&name=caixukun'
//   ),
//   parseURLIncludeHash(
//     '/zh-CN/component/table-v2?id2=2&name=zhoujielun'
//   )
// )

export default parseURLIncludeHash
