/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 12/06/25 PM8:44
 */

import textToArrayBuffer from '@/stream/textToArrayBuffer.ts'
import type { TBaseBlobArrayBufferTransferOptions } from '@/_types/_helperTreeBaseType.ts'

/**
 * 将字符串转成blob
 * @param text
 * @param options
 */
async function textToBlob(text: string, options?: TBaseBlobArrayBufferTransferOptions): Promise<Blob> {
  const arrayBuffer = await textToArrayBuffer(text)
  return new Blob([arrayBuffer], { type: options?.mimeType })
}

export default textToBlob
