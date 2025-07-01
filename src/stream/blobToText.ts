/**
 * 将blob对象读取文本内容
 * @param blob
 * @version 3.3.2+
 */
async function blobToText(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = e => reject(e)
    reader.readAsText(blob)
  })
}

export default blobToText
