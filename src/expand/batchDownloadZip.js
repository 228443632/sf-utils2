import JSZip from 'jszip/dist/jszip.min.js'
import FileSaver from 'file-saver'
import getHttpBlob from '../dom/getHttpBlob'
import isPlainObject from '@/base/isPlainObject'
import isString from '@/base/isString'
import uuid from '@/base/uuid'

/**
 *  批量下载 （压缩包.zip）
 * @param urlList   由 url 拼接成的数组 如：['http://compassedu.hk/1.img', 'http://compassedu.hk/2.img'] 或者
 * [
 *         {
 *           url: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.cjs1111.js',
 *           name: 'hellowrold.js'
 *         },
 *         'https://cdn.jsdelivr.net/npm/@bianpengfei/utils/lib/b-utils.min.js'
 * ],
 * @param fileName  压缩包名称
 * @returns {Promise<*[]>}
 */
export async function batchDownloadZip(urlList = [], fileName) {
  const _urlList = urlList.filter(Boolean)
  const zip = new JSZip()
  const result = []
  const res = await Promise.allSettled(_urlList.map(v => getHttpBlob(v.url || v)))
  res.forEach((v, vi) => {
    let fileName = uuid() // 文件名
    let url = '' // 远程的url地址
    if (isPlainObject(_urlList[vi])) {
      fileName = _urlList[vi].name || _urlList[vi].url?.split('/')?.slice()?.pop()
      url = _urlList[vi].url
    } else if (isString(_urlList[vi])) {
      fileName = _urlList[vi]?.split('/')?.slice()?.pop() || fileName
      url = _urlList[vi]
    }
    if (v.status == 'fulfilled') {
      zip.file(fileName, v.value, {
        binary: true
      })
    }
    result.push({
      ...v,
      url,
      name: fileName,
      binary: v.value
    })
  })
  const blobContent = await zip.generateAsync({
    type: 'blob'
  })
  FileSaver.saveAs(blobContent, `${fileName}.zip`) // 利用file-saver保存文件
  return result
}

export default batchDownloadZip
