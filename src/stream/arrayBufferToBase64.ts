import { type BlobToArrayBufferOptions } from 'sf-utils2/stream/blobToArrayBuffer'

/**
 * 将 ArrayBuffer 转换为 Base64 字符串（高性能兼容方案）
 * @param buffer - 输入的 ArrayBuffer 或兼容类型（如 Uint8Array.buffer）
 * @param options
 * @returns Promise<string> 解析为 Base64 字符串
 * @version 3.3.2+
 */
async function arrayBufferToBase64(buffer: ArrayBufferLike, options?: BlobToArrayBufferOptions): Promise<string> {
  if (!(buffer instanceof ArrayBuffer)) return Promise.reject('参数必须是 ArrayBuffer 类型')
  const uint8Array = new Uint8Array(buffer)

  const prefix = options?.mimeType ? `data:${options.mimeType};base64,` : ''

  // 回退方案：分块处理避免内存溢出（兼容旧浏览器）
  const CHUNK_SIZE = 8192 // 8KB/块，平衡性能与内存
  let result = ''
  for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
    const chunk = uint8Array.slice(i, i + CHUNK_SIZE)
    result += Array.from(chunk).reduce((data, byte) => data + String.fromCharCode(byte), '')
  }
  return prefix + btoa(result)
}

export default arrayBufferToBase64
