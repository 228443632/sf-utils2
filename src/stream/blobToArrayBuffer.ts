import isFunction from '@/base/isFunction'
import { type TBaseBlobArrayBufferTransferOptions } from '@/_types/_helperTreeBaseType.ts'

export interface BlobToArrayBufferOptions {
  /** 分片大小， 如果不传入那么将整个一起读取，这样可能导致内存过大， 单位MB */
  chunkSize?: number

  /** */
  mimeType?: TBaseBlobArrayBufferTransferOptions['mimeType']
}

/**
 * blob 转 arrayBuffer
 * @param {Blob} blob
 * @param options
 * @version 3.3.2+
 */
async function blobToArrayBuffer(blob: Blob, options?: BlobToArrayBufferOptions): Promise<ArrayBuffer> {
  if (!(blob instanceof Blob)) return Promise.reject('传入的参数blob非Blob对象')

  // 读取全部
  if (!options?.chunkSize) return await _singleBlobToArrayBuffer(blob)

  // 分片读取
  const ONE_MB = 1024 * 1024
  const CHUNK_SIZE = +options?.chunkSize * ONE_MB
  const chunkArrayBuffers = [] as ArrayBuffer[]
  for (let start = 0; start < blob.size; start += CHUNK_SIZE) {
    const chunk = blob.slice(start, start + CHUNK_SIZE)
    const chunkBuffer = await _singleBlobToArrayBuffer(chunk)
    chunkArrayBuffers.push(chunkBuffer)
  }
  return _mergeArrayBuffers(chunkArrayBuffers)
}

/**
 * 单个 blob 转 arrayBuffer
 * @param blob
 */
async function _singleBlobToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
  if (!(blob instanceof Blob)) return Promise.reject('传入的参数blob非Blob对象')
  if (isFunction(blob.arrayBuffer)) {
    return await blob.arrayBuffer()
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as ArrayBuffer)
    reader.onerror = e => reject(e)
    reader.readAsArrayBuffer(blob)
  })
}

/**
 * 合并 ArrayBuffer 的函数
 * @param buffers
 */
function _mergeArrayBuffers(buffers: ArrayBuffer[]) {
  // 计算总长度
  let totalLength = buffers.reduce((sum, buf) => sum + buf.byteLength, 0)
  // 创建新缓冲区
  const mergedBuffer = new ArrayBuffer(totalLength)
  const mergedUint8 = new Uint8Array(mergedBuffer)

  // 逐块复制数据
  let offset = 0
  for (const buffer of buffers) {
    const chunkView = new Uint8Array(buffer)
    mergedUint8.set(chunkView, offset)
    offset += chunkView.length
  }
  return mergedBuffer
}
export default blobToArrayBuffer
