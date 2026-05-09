import getGlobalThis from '@/base/getGlobalThis'
import isNode from '@/base/isNode'
import isObject from '@/base/isObject.ts'

/**
 * stringifyURLIncludeHash 的参数选项
 */
interface IStringifyURLIncludeHashOptions {
  /** hash 的对象参数 */
  hash?: Record<string, any>

  /** params 的对象参数 */
  params?: Record<string, any>
}

/**
 * @param url
 * @param options
 */
export default function stringifyURLIncludeHash(url: string, options?: IStringifyURLIncludeHashOptions) {
  if (url && isObject(options)) {
    const globalThis = getGlobalThis() as typeof global
    const URL = globalThis.URL
    let base: string
    if (!/^http/.test(url)) base = isNode() ? 'http://localhost' : globalThis.origin
    const urlInstance = new URL(url, base!)

    // console.log('urlInstance2', urlInstance)
    const { hash: hashParams, params: historyParams } = options || {}

    if (isObject(hashParams) && urlInstance.hash) {
      // const hashSearchParams = new globalThis.URLSearchParams(urlInstance.hash.slice(1))
      const tempBase = isNode() ? 'http://localhost' : globalThis.origin
      const hashUrlInstance = new URL(urlInstance.hash.slice(1), tempBase!)
      Object.entries(hashParams!).forEach(([k, v]) => {
        hashUrlInstance.searchParams.set(k, v)
      })
      urlInstance.hash = '#' + hashUrlInstance.toString().replace(tempBase!, '')
    }

    if (isObject(historyParams)) {
      Object.entries(historyParams!).forEach(([k, v]) => {
        urlInstance.searchParams.set(k, v)
        // const searchString = urlInstance.searchParams.toString()
      })
    }
    // let prefix = urlInstance.pathname.endsWith('/') ? '/' : ''
    // if (urlInstance.hash && prefix) {
    //   urlInstance.hash = prefix + urlInstance.hash
    //   return urlInstance.toString().replace('#/#/', '/#/')
    // }
    if (base!) return urlInstance.toString().replace(base!, '')
    return urlInstance.toString()
  }
  return url
}

// console.log(
//   'stringifyURLIncludeHash',
//   stringifyURLIncludeHash('https://chat.deepseek.com/a/chat/s/773d4726-8779-4b61-bf70-13fafeca58f8#/login', {
//     hash: { a: 1, zzz: '卞鹏飞' },
//     params: { b: 2, caixukun: '蔡徐坤' }
//   })
// )
