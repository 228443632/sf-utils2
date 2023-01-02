/**
 * 判断是否是pc端
 * @returns {boolean}
 */
function isPc() {
  return !/(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone|IEMobile|Opera Mini)/.test(
    navigator.userAgent
  )
}

export default isPc
