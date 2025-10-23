import type { TBaseBlobArrayBufferTransferOptions } from 'sf-utils2/_types/_helperTreeBaseType.ts'
import base64ToArrayBuffer from 'sf-utils2/stream/base64ToArrayBuffer.ts'

/**
 * 将Base64字符串转换为Blob对象（自动提取MIME类型）
 * @param {string} base64 - 包含前缀的Base64字符串（如 "data:image/png;base64,..."）
 * @param options
 * @returns {Blob}
 * @version 3.3.2+
 */
async function base64ToBlob(base64: string, options?: TBaseBlobArrayBufferTransferOptions): Promise<Blob> {
  const arrayBuffer = await base64ToArrayBuffer(base64, options)
  // 4. 创建Blob对象
  return new Blob([arrayBuffer], { type: options?.mimeType || arrayBuffer['mimeType'] })
}

export default base64ToBlob
