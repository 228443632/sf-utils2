import getHttpBlob from './getHttpBlob'
import blobSaveAs from './blobSaveAs'

/**
 * 下载文件
 * @param url 地址
 * @param filename 文件名
 * @param {'get'|'GET'|'post'|'POST'} method 方法
 * @param headers 头部
 * @param data
 */
async function downloadFile({ url = '', filename = '', method = 'GET', headers = {}, data = {} }) {
  method ||= 'GET'
  const blob = await getHttpBlob(url, { method, headers, data })
  blobSaveAs(blob, filename)
}

export default downloadFile
