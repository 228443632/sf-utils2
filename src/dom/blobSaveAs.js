/**
 * 保存
 * @param {Blob} blob
 * @param {String} filename
 */
function blobSaveAs(blob, filename) {
  if (window?.navigator?.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document?.createElement('a')
    const body = document?.querySelector('body')
    link.href = window?.URL.createObjectURL(blob) // 创建对象url
    link.download = filename
    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)
    link.click()
    body.removeChild(link)
    window?.URL.revokeObjectURL(link.href) // 通过调用 URL.createObjectURL() 创建的 URL 对象
  }
}

export default blobSaveAs
