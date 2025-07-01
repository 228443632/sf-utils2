import blobToArrayBuffer from './blobToArrayBuffer'

/**
 * 序列化buffer
 * @param buffer
 * @version 3.3.2+
 */
async function serializeBuffer(buffer: ArrayBufferLike | Blob): Promise<string> {
  if (!buffer) {
    throw new Error('传入buffer不能为空')
  }
  if (!(buffer instanceof ArrayBuffer) && !(buffer instanceof Blob)) {
    console.error('传入buffer需要是ArrayBuffer或Blob对象')
    return ''
  }

  if (buffer instanceof Blob) {
    const arrayBuffer = await blobToArrayBuffer(buffer, { mimeType: buffer.type })
    return _bufferToString(arrayBuffer)
  }

  return _bufferToString(buffer)

  function _bufferToString(buffer: ArrayBufferLike) {
    return JSON.stringify(Array.from(new Uint8Array(buffer)))
  }
}

export default serializeBuffer
