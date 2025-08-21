import getGlobalThis from '@/base/getGlobalThis'
import parseJsonNoError from '@/base/parseJsonNoError'
import isObject from '@/base/isObject'
import hasOwn from '@/object/hasOwn'
import _typeof from '@/base/_typeof'
import uniq from '@/array/uniq'

export enum ECrossType {
  /**BroadcastChannel 广播通讯 */
  BROADCAST_CHANNEL = 'broadcastChannel',

  /** localstorage 本地存储 */
  LOCALSTORAGE = 'localstorage',

  /** postmessage 跨域 */
  POST_MESSAGE = 'postMessage'
}

/**
 * 通用方法
 */
type TBusCommonFunc = ((...args: any[]) => any) & {
  /** 是否跨tab 共享消息 */
  isCrossTab?: boolean

  /**
   * 是否跨tab 共享消息
   */
  isCrossDomain?: boolean

  /** 移除监听消息方法 */
  off?: (...args: any[]) => any

  [K: string]: any
}

/**
 * emit事件数据类型
 */
type TBusEmitDataType =
  | {
      /** 是否跨tab 共享消息 */
      isCrossTab?: boolean

      /** 是否跨域 共享消息 */
      isCrossDomain?: boolean
    }
  | any

/**
 * 常规方法
 * @param {boolean} [isCrossTab] 是否跨tab 共享消息
 */
type TBusOnOption = {
  /** 是否跨tab 共享消息 */
  isCrossTab?: boolean

  /** 是否跨域 共享消息 */
  isCrossDomain?: boolean
}

type THelperEventBusOption = {
  /** 是否跨tab 共享消息 */
  isCrossTab?: boolean

  /** 是否跨域 共享消息 */
  isCrossDomain?: boolean
}

/**
 * 跨域 共享消息 前缀key
 */
const CROSS_DOMAIN_EVENT_ID_SIGN = 'cross_domain_event_id'

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
function _helperEventBus(options: THelperEventBusOption = {}) {
  const { isCrossTab = true, isCrossDomain = false } = options || {}
  const __opts = {
    storageKey: '__hub__broadcastChannel'
    // crossTabsMsgType: null // BroadcastChannel storage
  }

  return {
    /**
     * 是否跨tabs
     * @type {boolean}
     */
    isCrossTab: undefined as unknown as boolean,

    /**
     * 是否跨域 共享消息
     * @type {boolean}
     */
    isCrossDomain: undefined as unknown as boolean,

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
      event = resolveEventName(event)
      const lastArg = data?.at?.(-1)

      // feat: 新增跨tabs 更多参数可以控制自定义
      let innerIsCrossTab = this.isCrossTab ?? isCrossTab

      // feat: 跨域
      let innerIsCrossDomain = this.isCrossDomain ?? isCrossDomain

      const isConditionByCrossTab = isObject(lastArg) && hasOwn(lastArg, 'isCrossTab')
      const isConditionByCrossDomain = isObject(lastArg) && hasOwn(lastArg, 'isCrossDomain')

      // fix: 如果是内部参数，最后一个是对象且携带了isCrossTab属性
      if (isConditionByCrossTab || isConditionByCrossDomain) {
        data.pop()
        if (isConditionByCrossTab) {
          innerIsCrossTab = lastArg.isCrossTab
        }
        if (isConditionByCrossDomain) {
          innerIsCrossDomain = lastArg.isCrossDomain
        }
      }

      // 如果是跨域，那么关闭跨tabs
      if (innerIsCrossDomain) innerIsCrossTab = false
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

      // 跨域
      if (innerIsCrossDomain) {
        const iframeWins = getFrames()
        iframeWins.forEach(frame => {
          if (frame?.postMessage) {
            frame.postMessage({ eventId: event, sign: CROSS_DOMAIN_EVENT_ID_SIGN, data }, '*')
          }
        })
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
      event = resolveEventName(event)
      if (!this.hub[event]) this.hub[event] = []
      this.hub[event].push(handler)

      // feat: 新增跨tabs 更多参数可以控制自定义
      let innerIsCrossTab = handler?.isCrossTab ?? option?.isCrossTab ?? this.isCrossTab ?? isCrossTab

      const innerIsCrossDomain = handler?.isCrossDomain ?? option?.isCrossDomain ?? this.isCrossDomain ?? isCrossDomain

      // 如果跨域，那么关闭跨tabs
      if (innerIsCrossDomain) innerIsCrossTab = false

      // 如果跨tabs
      if (innerIsCrossTab) {
        if (!this.crossHub[event]) this.crossHub[event] = []
        let handler2
        if (this.broadcastChannel) {
          handler2 = (structuredMessage: MessageEvent) => {
            const { eventId, data = [] } = structuredMessage?.data || {}
            if (eventId != event) return
            structuredMessage['__crossType'] = ECrossType.BROADCAST_CHANNEL
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
                storageEventMessage['__crossType'] = ECrossType.BROADCAST_CHANNEL
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

      // 跨域
      if (innerIsCrossDomain) {
        const handlerCrossDomain = function (e: MessageEvent) {
          const eData = e.data
          if (!eData) return
          if (eData?.sign != CROSS_DOMAIN_EVENT_ID_SIGN) return
          if (eData?.eventId != event) return
          e['__crossType'] = ECrossType.POST_MESSAGE
          // @ts-expect-error
          return handler.call(this, ...(eData?.data || []), e)
        }
        window.addEventListener('message', handlerCrossDomain)
        if (handler) {
          const originOffFunc = handler.off
          handler.off = () => {
            !originOffFunc && this.off(event, handler)
            window.removeEventListener('message', handlerCrossDomain)
          }
        }
      }
      return handler
    },

    /**
     * fire事件
     * @description 等同emit
     */
    dispatchEvent() {
      // @ts-expect-error
      this.emit.apply(this, arguments)
    },
    /**
     * on事件
     * @description 等同on
     */
    addEventListener() {
      // @ts-expect-error
      return this.on.apply(this, arguments)
    },

    /**
     * off事件
     * @param {string} event 事件名
     * @param {TBusCommonFunc} handler
     */
    off(event: string, handler: TBusCommonFunc) {
      event = resolveEventName(event)
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
      // @ts-expect-error
      return this.off.apply(this, arguments)
    },

    /**
     * 移除当前相关所有事件
     * @param {string} event 事件名
     */
    offEntire(event: string) {
      event = resolveEventName(event)
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
      // @ts-expect-error
      return this.offEntire.apply(this, arguments)
    },

    /**
     * 清除订阅副作用
     * @param fnEffects
     */
    clearEffects(fnEffects: TBusCommonFunc[]) {
      fnEffects.forEach(v => v?.off?.())
      fnEffects.length = 0
    }
  }
}

/**
 * 解析事件名称
 * @description 兼容Symbol
 * @param eventName
 */
function resolveEventName(eventName: Symbol | string) {
  return _typeof(eventName) == 'Symbol' ? eventName.toString() : String(eventName)
}

/**
 * 获取所有子frame
 */
function getFrames(): Window[] {
  // return Array.from(document.querySelectorAll('iframe')) as HTMLIFrameElement[]
  return getParentAndSubFramesFrames()
}

/**
 * 获取所有子孙frame 和 祖父frame
 */
function getParentAndSubFramesFrames() {
  const topWin = window.top || window.parent
  return uniq(getSubFrames(topWin, [topWin]))

  /**
   * 获取所有子节点
   * @param frameWin
   * @param cacheWins
   */

  function getSubFrames(frameWin: Window, cacheWins: Window[]) {
    if (frameWin.frames.length) {
      for (let i = 0; i < frameWin.frames.length; i++) {
        const frame = frameWin.frames[i]
        if (frame && window !== frame && !cacheWins.includes(frame)) {
          cacheWins.push(frame)
          getSubFrames(frame, cacheWins)
        }
      }
    }
    return cacheWins
  }
}

export default _helperEventBus
