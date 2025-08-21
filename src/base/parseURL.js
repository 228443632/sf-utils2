import getGlobalThis from 'sf-utils2/base/getGlobalThis'

/**
 * 解析获取Url
 * @param url
 * @returns {Record<string, any>}
 */
function parseURL(url = '') {
  // compact
  if (/^https?:\/\//.test(url)) {
    const globalThis = getGlobalThis()
    const urlInstance = new globalThis.URL(url)
    return Object.fromEntries(urlInstance.searchParams.entries())
  }

  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )
}

export default parseURL
