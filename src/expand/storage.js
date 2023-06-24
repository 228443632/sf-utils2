/***
 * @title: storage.js
 * @Author: bianpengfei
 * @create 2022/6/22 23:23
 * @Description: 对存储的简单封装
 */
import CryptoJS from 'crypto-js'

// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse('3333e6e143439161')
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse('e3bbe7e3ba84431a')

const _storage = {
  __config: {
    // 类型 window.localStorage,window.sessionStorage,
    type: 'localStorage', // 本地存储类型 sessionStorage
    prefix: 'sfutils_0.0.1', // 名称前缀 建议：项目名 + 项目版本
    expire: 1, //过期时间 单位：秒
    isEncrypt: true // 默认加密 为了调试方便, 开发过程中可以不加密
  },

  // 判断是否支持 Storage
  isSupport() {
    return typeof Storage !== 'undefined'
  },

  /**
   * 设置item
   * @param {string} key 键名
   * @param {*} value 值
   * @param {number} expire 过期时间 单位秒
   */
  setItem(key, value, expire = 0) {
    if (value === '' || value === null || value === undefined) {
      value = null
    }

    if (isNaN(expire) || expire < 0) throw new Error('Expire must be a number')

    expire = (expire ?? this.__config.expire) * 1000
    let data = {
      value: value, // 存储值
      time: Date.now(), //存值时间戳
      expire: expire // 过期时间
    }

    const encryptString = this.__config.isEncrypt ? this.encrypt(JSON.stringify(data)) : JSON.stringify(data)

    window[this.__config.type].setItem(this.autoAddPrefix(key), encryptString)
  },

  /**
   * 获取key
   * @param {string} key 键名
   * @param {boolean} autoRetain 是否自动延续
   * @returns {null|*}
   */
  getItem(key, autoRetain = false) {
    key = this.autoAddPrefix(key)
    // key 不存在判断
    if (
      !window[this.__config.type].getItem(key) ||
      JSON.stringify(window[this.__config.type].getItem(key)) === 'null'
    ) {
      return null
    }

    // 优化 持续使用中续期
    const storage = this.__config.isEncrypt
      ? JSON.parse(this.decrypt(window[this.__config.type].getItem(key)))
      : JSON.parse(window[this.__config.type].getItem(key))

    let nowTime = Date.now()

    // 过期删除
    if (storage.expire && storage.expire < nowTime - storage.time) {
      console.log('带内', this.__config.expire, nowTime - storage.time)
      this.removeItem(key)
      return null
    } else {
      // 未过期期间被调用 则自动续期 进行保活
      autoRetain && this.setItem(this.autoRemovePrefix(key), storage.value)
      return storage.value
    }
  },

  /**
   * 是否存在
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    key = this.autoAddPrefix(key)
    let arr = this.getItemsAll().filter(item => {
      return item.key === key
    })
    return !!arr.length
  },

  /**
   * 获取所有的keys 数组
   * @returns {*[]}
   */
  getKeys() {
    let items = this.getItemsAll()
    let keys = []
    for (let index = 0; index < items.length; index++) {
      keys.push(items[index].key)
    }
    return keys
  },

  /**
   * 根据索引获取key
   * @param {number} index
   * @returns {*}
   */
  getForIndex(index) {
    return window[this.__config.type].key(index)
  },

  /**
   * 获取localStorage长度
   * @returns {*}
   */
  getLength() {
    return window[this.__config.type].length
  },

  /**
   * 获取全部
   * @returns {*[]}
   */
  getItemsAll() {
    let len = window[this.__config.type].length // 获取长度
    let arr = [] // 定义数据集
    for (let i = 0; i < len; i++) {
      // 获取key 索引从0开始
      let getKey = window[this.__config.type].key(i)
      // 获取key对应的值
      let getVal = window[this.__config.type].getItem(getKey)
      // 放进数组
      arr[i] = { key: getKey, val: getVal }
    }
    return arr
  },

  /**
   * 根据key 删除某一个item
   * @param {string} key
   */
  removeItem(key) {
    window[this.__config.type].removeItem(this.autoAddPrefix(key))
  },

  /**
   * 清空
   */
  clear() {
    window[this.__config.type].clear()
  },

  /**
   * 名称前自动添加前缀
   * @param {string} key
   */
  autoAddPrefix(key) {
    const prefix = this.__config.prefix ? this.__config.prefix + '_' : ''
    return prefix + key
  },

  /**
   * 移除已添加的前缀
   * @param {string} key
   */
  autoRemovePrefix(key) {
    const len = this.__config.prefix ? this.__config.prefix.length + 1 : ''
    return key.substr(len)
  },

  /**
   * 加密方法
   * @param data
   * @returns {string}
   */
  encrypt(data) {
    if (typeof data === 'object') {
      try {
        data = JSON.stringify(data)
      } catch (error) {
        console.log('encrypt error:', error)
      }
    }
    const dataHex = CryptoJS.enc.Utf8.parse(data)
    const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.ciphertext.toString()
  },

  /**
   * 解密方法
   * @param data
   * @returns {string}
   */
  decrypt(data) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
    const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  }
}

export default _storage
