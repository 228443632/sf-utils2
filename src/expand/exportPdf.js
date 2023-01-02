import html2canvas from 'html2canvas'
import Jspdf from 'jspdf'
import isString from '@/base/isString'

/**
 * 导出页面为PDF格式，依赖【缺少 html2canvas库】：推荐版本1.4.0；依赖【缺少 jspdf库】：推荐版本2.3.0
 * @param {String | HTMLHtmlElement} target 目标元素
 * @param  {String }  title 导出的文件名
 * @returns {Promise<void>}
 */
async function exportPdf(target, title) {
  let _targetDom = target
  if (isString(target)) {
    _targetDom ||= document.querySelector(target)
  }
  if (!_targetDom) {
    throw new Error('【error】：传入的target 非正常的选择器或dom元素')
  }

  html2canvas(_targetDom, {
    allowTaint: true
  }).then(function (canvas) {
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    let pageHeight = (contentWidth / 592.28) * 841.89
    let leftHeight = contentHeight
    let position = 0
    let imgWidth = 595.28
    let imgHeight = (592.28 / contentWidth) * contentHeight
    let pageData = canvas.toDataURL('image/jpeg', 1.0)
    let PDF = new Jspdf('', 'pt', 'a4')
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        if (leftHeight > 0) {
          PDF.addPage()
        }
      }
    }
    PDF.save(title + '.pdf')
  })
}

export default exportPdf
