import getHttpBlob from './getHttpBlob'
import blobSaveAs from './blobSaveAs'

/**
 * 下载文件
 * @param {string} url
 * @param {string} filename
 * @param {string} method
 * @param {object} headers
 * @param {object} data
 */
async function downloadFile({ url, filename = '', method = 'GET', headers = undefined, data = undefined }) {
  const blob = await getHttpBlob(url, { method, headers, data })
  blobSaveAs(blob, filename)
}

export default downloadFile
