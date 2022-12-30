import getHttpBlob from './getHttpBlob'
import blobSaveAs from './blobSaveAs'

/**
 * 下载文件
 * @param url
 * @param filename
 */
async function downloadFile({ url, filename = '' }) {
  const blob = await getHttpBlob(url)
  blobSaveAs(blob, filename)
}

export default downloadFile
