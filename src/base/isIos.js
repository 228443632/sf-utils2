/**
 * 判断是否在ios环境中
 * @returns {boolean}
 */
function isIos() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export default isIos
