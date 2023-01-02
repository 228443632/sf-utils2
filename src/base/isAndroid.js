/**
 * 判断是否在安卓环境
 * @returns {boolean}
 */
function isAndroid() {
  return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
}

export default isAndroid
