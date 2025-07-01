import textToArrayBuffer from '@/stream/textToArrayBuffer.ts'

/**
 * 将文本通过ArrayBuffer对象转化加密后的文本
 * 本质上
 * 1. 将文本序列化为ArrayBuffer对象
 * 2、将ArrayBuffer对象转成Uint8Array
 * 2、将Uint8Array对象序列化为JSON对象
 * 3、将JSON对象进行base64转换
 * @version 3.3.2+
 */
async function encodeTextByArrayBuffer(text: string) {
  if (!text) return ''
  const arrayBuffer = await textToArrayBuffer(text)
  const uint8Array = new Uint8Array(arrayBuffer)
  return btoa(encodeURIComponent(JSON.stringify([...uint8Array])))
}

export default encodeTextByArrayBuffer
