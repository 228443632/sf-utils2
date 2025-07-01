/**
 * 将二进制转成文本
 * @param arrayBuffer
 * @version 3.3.2+
 */
async function arrayBufferToText(arrayBuffer: ArrayBuffer): Promise<string> {
  const decoder = new TextDecoder('utf8', { fatal: true })
  return decoder.decode(arrayBuffer)
}

export default arrayBufferToText
