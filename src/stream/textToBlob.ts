import textToArrayBuffer from '@/stream/textToArrayBuffer.ts'
import type { TBaseBlobArrayBufferTransferOptions } from '@/_types/_helperTreeBaseType.ts'

/**
 * 将字符串转成blob
 * @param {string} text 文本
 * @param options
 * @example
 * ```
 * textToBlob('卞鹏飞', { mimeType: 'application/octet-stream' })
 *
 * ```
 * @version 3.3.2+
 */
async function textToBlob(text: string, options?: TBaseBlobArrayBufferTransferOptions): Promise<Blob> {
  const arrayBuffer = await textToArrayBuffer(text)
  return new Blob([arrayBuffer], { type: options?.mimeType })
}

export default textToBlob
