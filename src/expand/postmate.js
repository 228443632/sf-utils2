/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 02/07/25 PM3:11
 */

const IS_DEV = process.env.NODE_ENV !== 'production'

/**
 * The type of messages our frames our sending
 * @type {String}
 */
export const messageType = 'application/x-postmate-v1+json'

/**
 * The maximum number of attempts to send a handshake request to the parent
 * @type {Number}
 */
export const maxHandshakeRequests = 2 * 30 // TODO 30s

/**
 * A unique message ID that is used to ensure responses are sent to the correct requests
 * @type {Number}
 */
let _messageId = 0

/**
 * Increments and returns a message ID
 * @return {Number} A unique ID for a message
 */
export const generateNewMessageId = () => ++_messageId

/**
 * Postmate logging function that enables/disables via config
 * @param  {Object} ...args Rest Arguments
 */
export const log = (...args) => (Postmate.debug ? console.log(...args) : null) // eslint-disable-line no-console

/**
 * Takes a URL and returns the origin
 * @param  {String} url The full URL being requested
 * @return {String}     The URLs origin
 */
export const resolveOrigin = url => {
  const a = document.createElement('a')
  a.href = url
  const protocol = a.protocol.length > 4 ? a.protocol : window.location.protocol
  const host = a.host.length ? (a.port === '80' || a.port === '443' ? a.hostname : a.host) : window.location.host
  return a.origin || `${protocol}//${host}`
}

const messageTypes = {
  handshake: 1,
  'handshake-reply': 1,
  call: 1,
  emit: 1,
  reply: 1,
  request: 1
}

/**
 * Ensures that a message is safe to interpret
 * @param  {Object} message The postmate message being sent
 * @param  {String|Boolean} allowedOrigin The whitelisted origin or false to skip origin check
 * @return {Boolean}
 */
export const sanitize = (message, allowedOrigin) => {
  if (typeof allowedOrigin === 'string' && message.origin !== allowedOrigin) return false
  if (!message.data) return false
  if (typeof message.data === 'object' && !('postmate' in message.data)) return false
  if (message.data.type !== messageType) return false
  if (!messageTypes[message.data.postmate]) return false
  return true
}

/**
 * Takes a model, and searches for a value by the property
 * @param  {Object} model     The dictionary to search against
 * @param  {String} property  A path within a dictionary (i.e. 'window.location.href')
 * @param {any[]} funcArgs 参数
 *                            passed to functions in the child model
 * @return {Promise}
 */
export const resolveValue = (model, property, funcArgs = []) => {
  const unwrappedContext = typeof model[property] === 'function' ? model[property](...funcArgs) : model[property]
  return Postmate.Promise.resolve(unwrappedContext)
}

/**
 * Composes an API to be used by the parent
 * @param {Object} info Information on the consumer
 */
export class ParentAPI {
  constructor(info) {
    this.parent = info.parent
    this.frame = info.frame
    this.child = info.child
    this.childOrigin = info.childOrigin

    this.events = {}

    if (process.env.NODE_ENV !== 'production') {
      log('Parent: Registering API')
      log('Parent: Awaiting messages...')
    }

    this.listener = e => {
      if (!sanitize(e, this.childOrigin)) return false

      /**
       * the assignments below ensures that e, data, and value are all defined
       */
      const { data, name } = ((e || {}).data || {}).value || {}

      if (e.data.postmate === 'emit') {
        if (process.env.NODE_ENV !== 'production') {
          log(`Parent: Received event emission: ${name}`)
        }
        if (name in this.events) {
          this.events[name].forEach(callback => {
            callback.call(this, data)
          })
        }
      }
    }

    this.parent.addEventListener('message', this.listener, false)
    if (process.env.NODE_ENV !== 'production') {
      log('Parent: Awaiting event emissions from Child')
    }
  }

  // TODO
  get(property, ...funcArgs) {
    return new Postmate.Promise(resolve => {
      // Extract data from response and kill listeners
      const uid = generateNewMessageId()
      const transact = e => {
        // TODO
        // console.log('transact', e)
        if (e.data.uid === uid && e.data.postmate === 'reply') {
          this.parent.removeEventListener('message', transact, false)
          resolve(e.data.value)
        }
      }

      // Prepare for response from Child...
      this.parent.addEventListener('message', transact, false)

      // Then ask child for information
      this.child.postMessage(
        {
          postmate: 'request',
          type: messageType,
          property,
          uid,
          // TODO
          funcArgs
        },
        this.childOrigin
      )
    })
  }

  // TODO
  call(property, data, ...funcRestArgs) {
    // Send information to the child
    this.child.postMessage(
      {
        postmate: 'call',
        type: messageType,
        property,
        // TODO
        data,
        funcRestArgs
      },
      this.childOrigin
    )
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  destroy() {
    if (process.env.NODE_ENV !== 'production') {
      log('Parent: Destroying Postmate instance')
    }
    window.removeEventListener('message', this.listener, false)
    this.frame.parentNode.removeChild(this.frame)
  }
}

/**
 * Composes an API to be used by the child
 * @param {Object} info Information on the consumer
 */
export class ChildAPI {
  constructor(info) {
    this.model = info.model
    this.parent = info.parent
    this.parentOrigin = info.parentOrigin
    this.child = info.child

    if (process.env.NODE_ENV !== 'production') {
      log('Child: Registering API')
      log('Child: Awaiting messages...')
    }

    this.child.addEventListener('message', e => {
      if (!sanitize(e, this.parentOrigin)) return

      // TODO
      if (!e.data.postmate) return

      if (process.env.NODE_ENV !== 'production') {
        log('Child: Received request', e.data)
      }

      const { property, uid, data, funcRestArgs = [], funcArgs = [] } = e.data

      if (e.data.postmate === 'call') {
        if (property in this.model && typeof this.model[property] === 'function') {
          this.model[property](data, ...funcRestArgs)
        }
        return
      }

      // Reply to Parent
      // TODO
      resolveValue(this.model, property, funcArgs).then(value =>
        e.source.postMessage(
          {
            property,
            postmate: 'reply',
            type: messageType,
            uid,
            value
          },
          e.origin
        )
      )
    })
  }

  emit(name, data) {
    if (process.env.NODE_ENV !== 'production') {
      log(`Child: Emitting Event "${name}"`, data)
    }
    this.parent.postMessage(
      {
        postmate: 'emit',
        type: messageType,
        value: {
          name,
          data
        }
      },
      this.parentOrigin
    )
  }
}

/**
 * The entry point of the Parent.
 * @type {Class}
 */
class Postmate {
  static debug = false // eslint-disable-line no-undef

  // Internet Explorer craps itself
  static Promise = (() => {
    try {
      return window ? window.Promise : Promise
    } catch (e) {
      return null
    }
  })()

  /**
   * Sets options related to the Parent
   * @param {Object} object The element to inject the frame into, and the url
   * @param {Element} [object.container]
   * @param {Record<string, any>} [object.model]
   * @param {string} [object.url]
   * @param {string} [object.name]
   * @param {string[]} [object.classListArray]
   * @param {string | undefined} [object.handshakeKey]
   * @return {Promise}
   */
  constructor({
    container = typeof container !== 'undefined' ? container : document.body, // eslint-disable-line no-use-before-define
    model,
    url,
    name,
    classListArray = [],
    handshakeKey
  }) {
    // eslint-disable-line no-undef
    this.parent = window
    this.frame = document.createElement('iframe')
    this.frame.name = name || ''
    this.frame.classList.add.apply(this.frame.classList, classListArray)
    container.appendChild(this.frame)
    this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow
    this.model = model || {}
    this.handshakeKey = handshakeKey

    // console.log('url', url)
    return this.sendHandshake(url)
  }

  /**
   * Begins the handshake strategy
   * @param  {String} url The URL to send a handshake request to
   * @return {Promise}     Promise that resolves when the handshake is complete
   */
  sendHandshake(url) {
    const childOrigin = resolveOrigin(url)
    let attempt = 0
    let responseInterval
    return new Postmate.Promise((resolve, reject) => {
      const reply = e => {
        if (!sanitize(e, childOrigin)) return false
        // TODO
        // console.log('e', e)

        if (e.data.postmate === 'handshake-reply') {
          clearInterval(responseInterval)

          // TODO
          // 如果存在 握手key
          if (this.handshakeKey && e.data.handshakeKey != this.handshakeKey) {
            IS_DEV && log('Parent: Handshake reply handshakeKey is mismatched')
            return reject('Handshake reply handshakeKey is mismatched')
          }
          IS_DEV && log('Parent: Received handshake reply from Child')
          this.parent.removeEventListener('message', reply, false)
          this.childOrigin = e.origin
          if (process.env.NODE_ENV !== 'production') {
            log('Parent: Saving Child origin', this.childOrigin)
          }
          log('Parent: 握手成功', this.childOrigin)
          return resolve(new ParentAPI(this))
        }

        // Might need to remove since parent might be receiving different messages
        // from different hosts
        if (process.env.NODE_ENV !== 'production') {
          log('Parent: Invalid handshake reply')
        }
        // return reject('Failed handshake')
      }

      this.parent.addEventListener('message', reply, false)

      const doSend = () => {
        attempt++
        if (process.env.NODE_ENV !== 'production') {
          log(`Parent: Sending handshake attempt ${attempt}`, { childOrigin })
        }
        this.child.postMessage(
          {
            postmate: 'handshake',
            type: messageType,
            model: this.model
          },
          childOrigin
        )

        if (attempt === maxHandshakeRequests) {
          clearInterval(responseInterval)
        }
      }

      const loaded = () => {
        doSend()
        responseInterval = setInterval(doSend, 500)
      }

      if (this.frame.attachEvent) {
        this.frame.attachEvent('onload', loaded)
      } else {
        this.frame.addEventListener('load', loaded)
      }

      if (process.env.NODE_ENV !== 'production') {
        log('Parent: Loading frame', { url })
      }
      this.frame.src = url
    })
  }
}

/**
 * The entry point of the Child
 * @type {Class}
 */
Postmate.Model = class Model {
  /**
   * Initializes the child, model, parent, and responds to the Parents handshake
   * @param {Object} model Hash of values, functions, or promises
   * @param {'postmate-handshake' | (string & {})} [model.handshakeKey] Hash of values, functions, or promises
   * @return {Promise}       The Promise that resolves when the handshake has been received
   */
  constructor(model) {
    this.child = window
    this.model = model
    // TODO
    this.handshakeKey = this.model.handshakeKey
    this.parent = this.child.parent
    return this.sendHandshakeReply()
  }

  /**
   * Responds to a handshake initiated by the Parent
   * @return {Promise} Resolves an object that exposes an API for the Child
   */
  sendHandshakeReply() {
    return new Postmate.Promise((resolve, reject) => {
      const shake = e => {
        if (!e.data.postmate) {
          return
        }
        if (e.data.postmate === 'handshake') {
          if (process.env.NODE_ENV !== 'production') {
            log('Child: Received handshake from Parent')
          }
          this.child.removeEventListener('message', shake, false)
          if (process.env.NODE_ENV !== 'production') {
            log('Child: Sending handshake reply to Parent')
          }
          e.source.postMessage(
            {
              postmate: 'handshake-reply',
              type: messageType,
              handshakeKey: this.handshakeKey
            },
            e.origin
          )
          this.parentOrigin = e.origin

          // Extend model with the one provided by the parent
          const defaults = e.data.model
          if (defaults) {
            Object.keys(defaults).forEach(key => {
              if (key === 'handshakeKey') return
              this.model[key] = defaults[key]
            })
            if (process.env.NODE_ENV !== 'production') {
              log('Child: Inherited and extended model from Parent')
            }
          }

          if (process.env.NODE_ENV !== 'production') {
            log('Child: Saving Parent origin', this.parentOrigin)
          }
          return resolve(new ChildAPI(this))
        }
        return reject('Handshake Reply Failed')
      }
      this.child.addEventListener('message', shake, false)
    })
  }
}

export { Postmate }

export default Postmate
