import getLength from '@/base/getLength'
import def from '@/object/def'

const getPrefixKey = (prefix, key) => {
  return [prefix, key].filter(Boolean).join()
}

/**
 * 内容缓存对象
 * @version v3.0.9+
 */
const cache = {
  __config: {
    // 类型 window.localStorage,window.sessionStorage,
    prefix: '', // 名称前缀 建议：项目名 + 项目版本
    expire: 0 //过期时间 单位：秒
  },

  data: {},

  /**
   * 设置内存缓存对象
   * @param {string} key
   * @param {*} value
   * @param {number} expire 过期时间 单位秒
   */
  setItem(key, value, expire) {
    if (isNaN(expire) || expire < 0) throw new Error('Expire must be a number')
    expire = (expire ?? this.__config.expire) * 1000
    key = getPrefixKey(this.prefix, key)
    this.data[key] = {
      value: value, // 存储值
      time: Date.now(), //存值时间戳
      expire: expire // 过期时间
    }
  },

  /**
   * 获取内存缓存对象
   * @param {string} key
   * @param {boolean} autoRetain 是否自动延续
   * @return {*}
   */
  getItem(key, autoRetain = false) {
    key = getPrefixKey(this.prefix, key)
    const data = this.data[key]
    if (!data) return undefined

    const nowTime = Date.now()
    if (data.expire && data.expire < nowTime - data.time) {
      // 过期
      this.removeItem(key)
      return null
    } else {
      autoRetain && this.setItem(key, data.value, data.expire)
      return data.value
    }
  },

  /**
   * 移除item
   * @param {string} key
   */
  removeItem(key) {
    key = getPrefixKey(this.prefix, key)
    delete this.data[key]
  },

  /**
   * 获取总长度
   * @return {number}
   */
  getLength() {
    return getLength(this.data)
  },

  /**
   * 获取所有items
   * @return {{}}
   */
  getItemsAll() {
    return Object.keys(this.data).reduce((pre, cur) => {
      const key = getPrefixKey(this.prefix, cur)
      const dataValue = this.getItem(key)
      if (dataValue) {
        pre[cur] = dataValue
      }
      return pre
    }, {})
  },

  /**
   * 清除缓存
   */
  clear() {
    this.data = {}
  }
}

def(cache, '__config')
def(cache, 'data')

export default cache
