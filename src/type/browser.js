import isPc from './isPc'
import isMobile from './isMobile'

/**
 * 获取浏览器环境
 * @returns {{isFirefox: boolean, isOpera: boolean, isIE11: boolean, isEdge: boolean, isIE: boolean, isSafari: boolean, isChrome: boolean}}
 */
function browser() {
  function isBrowseType(type) {
    return navigator.userAgent.indexOf(type) > -1
  }
  const isIE = isBrowseType('compatible') && isBrowseType('MSIE') && !isBrowseType('Opera') // 是否是ie
  let ieVersion = null
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(navigator.userAgent)
    ieVersion = Math.floor(+parseFloat(RegExp['$1']))
  }
  return {
    isIE11: isBrowseType('Trident') && isBrowseType('rv:11.0'), // ie 11
    isIE,
    isEdge: isBrowseType('Edge'), //Edge浏览器
    isFirefox: isBrowseType('Firefox'), // Firefox浏览器
    isOpera: isBrowseType('Opera'), // Opera浏览器
    isChrome: isBrowseType('Chrome'), // Chrome浏览器
    isQQ: navigator.userAgent.match(/\sQQ/i) == ' qq', // QQ浏览器
    isMobile: isMobile(),
    isPc: isPc(),
    ieVersion
  }
}

export default browser
