import arrayBufferToText from '@/stream/arrayBufferToText.ts'

/**
 * 将文本通过ArrayBuffer对象解密后的文本
 * @param {string} text 文本
 * @version 3.3.2+
 */
async function decodeTextByArrayBuffer(text: string): Promise<string> {
  if (!text) return ''
  const unit8ArrayLike = JSON.parse(decodeURIComponent(atob(text))) as string[]
  if (!Array.isArray(unit8ArrayLike)) return ''
  const bytes = new Uint8Array(unit8ArrayLike.length)
  for (let i = 0; i < unit8ArrayLike.length; i++) {
    bytes[i] = +unit8ArrayLike[i]
  }
  return await arrayBufferToText(bytes)
}

export default decodeTextByArrayBuffer
