/**
 * @description 使用、和方法创建一个发布/订阅（发布-订阅）事件中心。emitonoff
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
 */
function _helperEventBus() {
  return {
    /**
     * @return {{}}
     */
    hub: Object.create(null),
    /**
     * emit事件
     * @param {string} event 事件名
     * @param {any} data 值
     */
    emit(event, ...data) {
      ;(this.hub[event] || []).forEach(handler => handler?.(...data))
    },
    /**
     * on事件
     * @param {string|number} event 事件名
     * @param {Function} handler
     * @return {*|Function}
     */
    on(event, handler) {
      if (!this.hub[event]) this.hub[event] = []
      this.hub[event].push(handler)
      if (handler) handler.off = () => this.off(event, handler)
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
      if (event) delete this.hub[event]
      else this.hub = Object.create({})
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
