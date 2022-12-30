/**
 * 判断是否在浏览器环境
 * @type {boolean}
 */
function isBrowser() {
  return typeof window !== 'undefined'
}

export default isBrowser
