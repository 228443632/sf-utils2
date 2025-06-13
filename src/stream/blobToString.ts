/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 12/06/25 PM8:44
 */
import blobToArrayBuffer from './blobToArrayBuffer'
import type { TBaseBlobArrayBufferTransferOptions } from '@/_types/_helperTreeBaseType.ts'

/**
 * 将blob对象序列化为字符串
 * @param blob
 * @param options
 */
async function blobToString(blob: Blob, options?: TBaseBlobArrayBufferTransferOptions): Promise<string> {
  const arrayBuffer = await blobToArrayBuffer(blob)
  const uint8Array = new Uint8Array(arrayBuffer)
  return String.fromCodePoint(...uint8Array)
}

export default blobToString
