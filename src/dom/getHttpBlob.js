/**
 * ajax根据http链接地址 获取远程blob
 * @param {string} url
 * @returns {Promise<unknown>}
 */
function getHttpBlob(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(xhr)
      }
    }
    xhr.send()
  })
}

export default getHttpBlob
