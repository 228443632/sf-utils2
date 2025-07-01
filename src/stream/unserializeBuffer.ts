import isNumber from '@/base/isNumber'

/**
 * 反序列化buffer
 * @version 3.3.2+
 */
function unserializeBuffer(bytes: number[] | string) {
  if (!bytes) {
    throw new Error('传入bytes不能为空')
  }
  let numList: number[] = []
  if (typeof bytes === 'string') {
    // 如果是字符串
    numList = JSON.parse(bytes) as number[]
  } else if (Array.isArray(bytes)) {
    numList = bytes
  }
  if (Array.isArray(numList) && isNumber(numList[0])) {
    const uint8Array = new Uint8Array(numList.length)
    for (let i = 0; i < numList.length; i++) {
      uint8Array[i] = numList[i]
    }
    return uint8Array.buffer
  }
  throw new Error('传入bytes参数格式有误')
}

export default unserializeBuffer
