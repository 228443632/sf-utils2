// @ts-nocheck

import getGlobalThis from '@/base/getGlobalThis'
import parseJsonNoError from '@/base/parseJsonNoError'
import isObject from '@/base/isObject'
import hasOwn from '@/object/hasOwn'

/**
 * 通用方法
 */
type TBusCommonFunc = (...args: any[]) => any

/**
 * emit事件数据类型
 */
type TBusEmitDataType = {
  /** 是否跨tab 共享消息 */
  isCrossTab?: boolean
} & (any & {})

/**
 * 常规方法
 * @param {boolean} [isCrossTab] 是否跨tab 共享消息
 */
type TBusOnOption = {
  /** 是否跨tab 共享消息 */
  isCrossTab: undefined
}

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
 *
 *   isCrossTab 优先级
 *   局部方法里面的isCrossTab > this.isCrossTab > options.isCrossTab
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
     * 是否跨tabs
     * @type {boolean}
     */
    isCrossTab: undefined as boolean,

    /**
     * 全局参数
     * @return {Record<string, any>}
     */
    __opts, // 参数

    /**
     * @return {BroadcastChannel}
     */
    broadcastChannel: (function () {
      const global = getGlobalThis()
      if ('BroadcastChannel' in global) {
        return new BroadcastChannel(__opts.storageKey)
      }
    })(),

    /**
     * 基座
     * @return {Record<string, any>}
     * */
    hub: Object.create(null) as Record<string, any>,

    /**
     * 跨越tabs 共享
     * @return {Record<string, any>}
     */
    crossHub: Object.create(null) as Record<string, any>,

    /**
     * emit事件
     * @param {string} event 事件名
     * @param {TBusEmitDataType[]} data 值
     */
    emit(event: string, ...data: TBusEmitDataType[]) {
      const lastArg = data?.at?.(-1)

      // feat: 新增跨tabs 更多参数可以控制自定义
      let innerIsCrossTab = this.isCrossTab ?? isCrossTab

      // fix: 如果是内部参数，最后一个是对象且携带了isCrossTab属性
      if (isObject(lastArg) && hasOwn(lastArg, 'isCrossTab')) {
        data.pop()
        innerIsCrossTab = lastArg.isCrossTab
      }

      ;(this.hub[event] || []).forEach(handler => handler?.(...data))
      // 如果跨tabs
      if (innerIsCrossTab) {
        if (this.broadcastChannel) {
          this.broadcastChannel.postMessage({ eventId: event, data })
        } else {
          const global = getGlobalThis()
          global?.localStorage &&
            global.localStorage.setItem(
              this.__opts.storageKey,
              JSON.stringify({ eventId: event, data, timestamp: Date.now() })
            )
        }
      }
    },
    /**
     * on事件
     * @param {string} event 事件名
     * @param {Function} handler 处理方法
     * @param {TBusOnOption} [option] 选项
     * @return {*|TBusCommonFunc & {isCrossTab?: boolean} }
     */
    on(event: string, handler: TBusCommonFunc, option?: TBusOnOption) {
      if (!handler) return
      if (!this.hub[event]) this.hub[event] = []
      this.hub[event].push(handler)

      // feat: 新增跨tabs 更多参数可以控制自定义
      const innerIsCrossTab = handler?.isCrossTab ?? option?.isCrossTab ?? this.isCrossTab ?? isCrossTab

      // 如果跨tabs
      if (innerIsCrossTab) {
        if (!this.crossHub[event]) this.crossHub[event] = []
        let handler2
        if (this.broadcastChannel) {
          handler2 = structuredMessage => {
            const { eventId, data = [] } = structuredMessage?.data || {}
            if (eventId != event) return
            return handler.call(this, ...data, structuredMessage)
          }
          this.broadcastChannel.addEventListener('message', handler2)
          this.crossHub[event].push(handler2)
        } else {
          const global = getGlobalThis()
          if (global && 'addEventListener' in global) {
            handler2 = storageEventMessage => {
              if (storageEventMessage?.key == this.__opts.storageKey) {
                const { eventId, data = [] } = parseJsonNoError(storageEventMessage?.newValue) || {}
                if (eventId != event) return
                return handler.call(this, ...data, storageEventMessage)
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
     * @param {TBusCommonFunc} handler
     */
    off(event, handler: TBusCommonFunc) {
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
        const eventFuncList = this.crossHub[event] || []
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
