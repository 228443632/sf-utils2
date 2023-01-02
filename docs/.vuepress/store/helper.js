/**
 * @Description:
 * @Author BPF
 * @create 2021/11/16 13:33
 */

/**
 * 存储在localstorage键名
 * @type {string}
 */
export const VUE_PRESS_LOCALSTORAGE = '__vue_press_state'

/**
 * 判断是否在浏览器环境
 * @type {boolean}
 */
export const isBrowser = typeof window !== 'undefined'

/**
 * 持久化存储
 * @param state
 * @param localKey
 * @param excludes
 * @returns {(function(*=, *=, *): void)|*}
 */
export const useVuexPersistence = function (state, localKey, excludes = []) {
  return function (target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = function (...rest) {
      const _state = Object.keys(state).reduce((pre, cur) => {
        if (state[cur]) {
          pre[cur] = JSON.parse(JSON.stringify(state[cur]))
        }
        return pre
      }, {})
      excludes.forEach(v => {
        if (v) {
          const [field, subField] = v.split('/') || []
          if (field && subField) {
            _state[field]?.[subField] && delete _state[field][subField]
          } else if (field) {
            _state[field] && delete _state[field]
          }
        }
      })
      localStorage.setItem(localKey, JSON.stringify(_state))
      return fn.apply(this, rest)
    }
  }
}

export const make = {
  /**
   * 将对象转化成 方法
   * 如 {uid: '', name: '', user: {}} 转化成  {uid: function(data) {state.uid = data}, name: function(data) {state.name = data}, user: function(data) {state.user = data}}
   * @param state
   * @returns {{}}
   */
  // @useVuexPersistence(state, VUE_PRESS_LOCALSTORAGE, [])
  reducers(state) {
    return Object.keys(state).reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: function (data) {
          state[`${cur}`] = data
        }
      }
    }, {})
  }
}

/**
 * 持久化 装饰器
 * @param state
 * @param reducers
 * @returns {{}}
 */
// export const useVuexPersistenceDecorator = (state, reducers) =>
//   Object.keys(reducers).reduce((pre, cur) => {
//     if (Object.prototype.toString.call(reducers[cur]).slice(8, -1) === 'Function') {
//       pre[cur] = function (...args) {
//         const __fn = {
//           @useVuexPersistence(state, VUE_PRESS_LOCALSTORAGE, [])
//           fn() {}
//         }
//         if (isBrowser) {
//           reducers[cur].apply(this, args)
//           __fn.fn()
//         }
//       }
//     }
//     return pre
//   }, {})
