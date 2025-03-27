import getGlobalThis from '@/base/getGlobalThis'
import parseJsonNoError from '@/base/parseJsonNoError'
/**
 * @description 使用、和方法创建一个发布/订阅（发布-订阅）事件中心。emitonoff
 *  支持跨浏览器共享
 *   const handler = data => console.log(data);
 *   const hub = _helperEventBus();
 *   let increment = 0;
 *
 * // Subscribe: listen for different types of events
 *   hub.on('message', handler);
 *   hub.on('message', () => console.log('Message event fired'));
 *   hub.on('increment', () => increment++);
 *
 * // Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
 *   hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
 *   hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
 *   hub.emit('increment'); // `increment` variable is now 1
 *
 * // Unsubscribe: stop a specific handler from listening to the 'message' event
 *   hub.off('message', handler);
 *   @param {object} options
 *   @param {boolean} [options.isCrossTab]
 */
function _helperEventBus(options = {}) {
  const { isCrossTab = true } = options || {}
  const __opts = {
    storageKey: '__hub__broadcastChannel'
    // crossTabsMsgType: null // BroadcastChannel storage
  }
  return {
    /**
     * 全局参数
     * @return {{}}
     */
    __opts, // 参数

    /**
     * @return {BroadcastChannel|null}
     */
    broadcastChannel: (function () {
      const global = getGlobalThis()
      if ('BroadcastChannel' in global) {
        return new BroadcastChannel(__opts.storageKey)
      }
    })(),

    /**
     * 基座
     * @return {{}}
     */
    hub: Object.create(null),

    /**
     * 跨越tabs 共享
     * @return {{}}
     */
    crossHub: Object.create(null),

    /**
     * emit事件
     * @param {string} event 事件名
     * @param {any[]} data 值
     */
    emit(event, ...data) {
      ;(this.hub[event] || []).forEach(handler => handler?.(...data))
      // 如果跨tabs
      if (isCrossTab) {
        if (this.broadcastChannel) {
          this.broadcastChannel.postMessage(data)
        } else {
          const global = getGlobalThis()
          global?.localStorage &&
            global.localStorage.setItem(this.__opts.storageKey, JSON.stringify([...data, Number(new Date())]))
        }
      }
    },
    /**
     * on事件
     * @param {string|number} event 事件名
     * @param {Function} handler
     * @return {*|Function}
     */
    on(event, handler) {
      if (!handler) return
      if (!this.hub[event]) this.hub[event] = []
      this.hub[event].push(handler)

      // 如果跨tabs
      if (isCrossTab) {
        if (!this.crossHub[event]) this.crossHub[event] = []
        let handler2
        if (this.broadcastChannel) {
          handler2 = (...args) => {
            const $0 = args[0]
            return handler.call(this, ...$0?.data, ...args)
          }
          this.broadcastChannel.addEventListener('message', handler2)
          this.crossHub[event].push(handler2)
        } else {
          const global = getGlobalThis()
          if (global && 'addEventListener' in global) {
            handler2 = (...args) => {
              const $0 = args[0]
              if ($0?.key == this.__opts.storageKey) {
                return handler.call(this, ...(parseJsonNoError($0?.newValue) || []).slice(0, -1), ...args)
              }
            }
            global.addEventListener('storage', handler2)
            this.crossHub[event].push(handler2)
          }
        }
        if (handler) handler.off = () => this.off(event, handler)
        if (handler2) handler2.off = () => this.off(event, handler2)
      }
      return handler
    },

    /**
     * fire事件
     * @description 等同emit
     */
    dispatchEvent() {
      this.emit.apply(this, arguments)
    },
    /**
     * on事件
     * @description 等同on
     */
    addEventListener() {
      return this.on.apply(this, arguments)
    },

    /**
     * off事件
     * @param {string} event 事件名
     * @param {Function} handler
     */
    off(event, handler) {
      const i = (this.hub[event] || []).findIndex(h => h === handler)
      if (i > -1) this.hub[event]?.splice?.(i, 1)
      if (this.hub[event]?.length === 0) delete this.hub[event]

      // 跨tab
      const j = (this.crossHub[event] || []).findIndex(h => h === handler)
      if (j > -1) {
        const handler2 = this.crossHub[event]?.[j]
        if (this.broadcastChannel) {
          this.broadcastChannel.removeEventListener('message', handler2)
        } else {
          const global = getGlobalThis()
          if (global && 'addEventListener' in global) {
            global.removeEventListener('storage', handler2)
          }
        }
        this.crossHub[event]?.splice?.(j, 1)
      }
      if (this.crossHub[event]?.length === 0) delete this.crossHub[event]
    },

    /**
     * off事件
     * @description 等同于off事件
     */
    removeEventListener() {
      this.off.apply(this, arguments)
    },

    /**
     * 移除当前相关所有事件
     * @param {string} event 事件名
     */
    offEntire(event) {
      if (event) {
        delete this.hub[event]
        const eventFuncList = this.crossHub[event]
        eventFuncList.forEach(eventFunc => {
          if (this.broadcastChannel) {
            this.broadcastChannel.removeEventListener('message', eventFunc)
          } else {
            const global = getGlobalThis()
            if (global && 'addEventListener' in global) {
              global.removeEventListener('storage', eventFunc)
            }
          }
        })
        this.crossHub[event].length = 0
        delete this.crossHub[event]
      } else {
        this.hub = Object.create({})
        this.crossHub = Object.create({})
      }
    },

    /**
     * 移除当前相关所有事件
     * @description 等同于off事件
     */
    removeListenerEventEntire() {
      this.offEntire.apply(this, arguments)
    },

    /**
     * 清除订阅副作用
     * @param fnEffects
     */
    clearEffects(fnEffects) {
      fnEffects.forEach(v => v?.off?.())
      fnEffects.length = 0
    }
  }
}

export default _helperEventBus
