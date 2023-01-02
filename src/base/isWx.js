/**
 * 判断是否在微信中
 * @returns {boolean}
 */
function isWx() {
  return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
}

export default isWx
