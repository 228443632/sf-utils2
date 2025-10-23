import { PlainObjectType } from 'sf-utils2/_helper/_types'
import isString from 'sf-utils2/base/isString'

/**
 * 反转序列化查询参数
 * @param string
 * @return {PlainObjectType}
 * @example
 * unserialize('id=123&name=test1') => {id: '123', name: 'test1'}
 */
function unserialize(string) {
  const obj = {}
  if (isString(string) && string) {
    const params = new URLSearchParams(string)
    for (const [key, value] of params) {
      obj[key] = value
    }
  }
  return obj
}

export default unserialize
