import getSize from '@/base/getSize'

/**
 * 返回不同类型的的长度 （对象/数组/Map/Set/String）
 * @param {any} val
 * @return {number}
 * @deprecated 方法迁移到getSize中
 */
function getLength(val) {
  return getSize(val)
}

export default getLength
