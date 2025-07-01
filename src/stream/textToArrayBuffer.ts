/**
 * 将字符串转成uint8array 对象，二进制
 * @param text
 */
async function textToArrayBuffer(text: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder()
  return encoder.encode(text).buffer
}

export default textToArrayBuffer
