import isPlainObject from '@/base/isPlainObject'

/**
 * ajax根据http链接地址 获取远程blob
 * @param {string} url
 * @param {{method?: string, data: object, headers: object }} option
 * @returns {Promise<unknown>}
 */
function getHttpBlob(url, option = {}) {
  const defaultOpts = {
    method: 'GET',
    data: undefined,
    headers: undefined,
    ...option
  }
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(defaultOpts.method?.toUpperCase?.(), url, true)
    xhr.responseType = 'blob'
    // xhr.setRequestHeader('Content-Type', 'application/json')
    if (isPlainObject(defaultOpts.header)) {
      Object.entries(defaultOpts.header).forEach(([k, v]) => {
        xhr.setRequestHeader(k, v)
      })
    }
    xhr.send(option.data ? JSON.stringify(option.data) : null)
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(xhr)
      }
    }
  })
}

export default getHttpBlob
