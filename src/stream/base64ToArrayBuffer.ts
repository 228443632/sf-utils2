import { type TBaseBlobArrayBufferTransferOptions } from 'sf-utils2/_types/_helperTreeBaseType'

/**
 * base64 转成ArrayBuffer
 * @param base64
 * @param options
 * @version 3.3.2+
 */
async function base64ToArrayBuffer(base64: string, options?: TBaseBlobArrayBufferTransferOptions) {
  // 1. 分离Base64前缀和数据部分
  const [prefix, base64Data] = base64.split(',')
  // 2. 自动提取MIME类型（从前缀中解析）
  const mimeType = options?.mimeType || prefix.match(/^data:([^;]+);?/)?.[1] || 'application/octet-stream'

  // 3. 解码Base64并转换为Uint8Array
  const binaryString = atob(base64Data || base64) // 兼容无前缀的Base64
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  bytes.buffer['mimeType'] = mimeType
  return bytes.buffer
}

export default base64ToArrayBuffer
