/**
 * 判断是否是移动端
 * @returns {this is string[]}
 */
function isMobile() {
  return /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)
}

export default isMobile
