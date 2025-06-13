/**
 * 将二进制转成文本
 * @param arrayBuffer
 */
async function arrayBufferToText(arrayBuffer: ArrayBuffer): Promise<string> {
  const decoder = new TextDecoder('utf8', { fatal: true })
  return decoder.decode(arrayBuffer)
}

export default arrayBufferToText
