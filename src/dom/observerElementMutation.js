import debounce from '@/function/debounce'
import getStyle from './getStyle'
import { _MutationObserver } from './_constant'

/**
 * @typedef {object} Options
 * @property {HTMLElement} el
 * @property {number} [debounceTime]  防抖时间
 * @property {MutationObserverInit} [observerOptions]
 */

/**
 * 监听元素属性变化，例如宽度、高度
 * @param callback 回调函数 {Function}
 * @param {object} options 选项
 * @param {HTMLElement} [options.el]
 * @param {number} [options.debounceTime]  防抖时间
 * @param {MutationObserverInit} [options.observerOptions]
 */
function observerElementMutation({
  callback = () => {},
  options = {
    el: null,
    attribute: ['height'],
    debounceTime: 300,
    observerOptions: {
      attributes: true,
      childLIst: true,
      attributeOldValue: true,
      subtree: true
    }
  }
}) {
  observerElementMutation.fn = observerElementMutation.prototype = {
    start() {
      if (!this.observer) {
        // console.error('[warning] 缺少初始化参数')
        this.init()
      }
      this.observer.observe(this.defaultOptions.el, this.defaultOptions.observerOptions)
      return this
    },
    forceUpdate() {
      Object.keys(this.recordOldValue).forEach(v => {
        this.recordOldValue[v] = getStyle(this.defaultOptions.el, v)
      })
      callback.apply(this, arguments)
      return this
    },
    end() {
      if (this.observer) {
        console.warn('[end] 卸载监听成功')
        this.observer.disconnect()
        this.observer.takeRecords()
        this.observer = null
      }
      return this
    },
    init() {
      this.defaultOptions = {
        el: null,
        attribute: ['height'],
        debounceTime: 300,
        ...options,
        observerOptions: {
          attributes: true,
          childLIst: true,
          attributeOldValue: true,
          subtree: true,
          ...(options.observerOptions || {})
        }
      }
      this.recordOldValue = this.defaultOptions.attribute.reduce((pre, cur) => {
        if (cur) pre[cur] = null
        return pre
      }, {})
      const observerCallback = mutationList => {
        if (
          Object.keys(this.recordOldValue).every(v => {
            if (this.recordOldValue[v] !== getStyle(this.defaultOptions.el, v)) {
              this.recordOldValue[v] = getStyle(this.defaultOptions.el, v)
              return false
            }
            return true
          })
        )
          return
        callback.apply(this, arguments)
      }
      const debounceDivResizeHandler = debounce(observerCallback.bind(this), this.defaultOptions.debounceTime)
      this.observer = new _MutationObserver(debounceDivResizeHandler)
      return this
    }
  }
  observerElementMutation.fn.init.prototype = observerElementMutation.fn
  return new observerElementMutation.fn.init()
}

export default observerElementMutation
