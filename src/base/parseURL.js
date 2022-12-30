/**
 * 解析获取Url
 * @param url
 * @returns {{}}
 */
function parseURL(url = '') {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )
}

export default parseURL
