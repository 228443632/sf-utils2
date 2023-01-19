import isArray from '@/base/isArray'
import isString from '@/base/isString'
import getStyle from './getStyle'
import camelCase from '@/string/camelCase'
import kebabCase from '@/string/kebabCase'
import { _requestAnimationFrame } from './_constant'

/**
 * Dom表格最大行
 * @param {HTMLTableElement} table
 * @unfile
 * @module BSE.domUtils
 */
function _getTableMaxRows(table) {
  const rows = table.rows
  let maxLen = 1
  for (let i = 0, row; (row = rows[i]); i++) {
    let currentMax = 1
    for (let j = 0, cj; (cj = row.cells[j++]); ) {
      currentMax = Math.max(cj.rowSpan || 1, currentMax)
    }
    maxLen = Math.max(currentMax + i, maxLen)
  }
  return maxLen
}

/**
 * Dom表格最大列
 * @param {HTMLTableElement} table
 * @unfile
 * @module BSE.domUtils
 */
function _getTableMaxCols(table) {
  const rows = table.rows,
    cellRows = {}
  let maxLen = 0
  for (let i = 0, row; (row = rows[i]); i++) {
    let cellsNum = 0
    for (let j = 0, cj; (cj = row.cells[j++]); ) {
      cellsNum += cj.colSpan || 1
      if (cj.rowSpan && cj.rowSpan > 1) {
        for (let k = 1; k < cj.rowSpan; k++) {
          if (!cellRows['row_' + (i + k)]) {
            cellRows['row_' + (i + k)] = cj.colSpan || 1
          } else {
            cellRows['row_' + (i + k)]++
          }
        }
      }
    }
    cellsNum += cellRows['row_' + i] || 0
    maxLen = Math.max(cellsNum, maxLen)
  }
  return maxLen
}

const domUtils = {
  /**
   * 将 RGB 值转换为十六进制颜色代码。
   * @param {String} rgb
   * @returns {*}
   * @example
   * RGBToHex(`rgba('255, 165, 1')`); // '#ffa501'
   */
  RGBToHex(rgb) {
    if (/^rgba?/.test(rgb)) {
      const [r, g, b] = rgb.match(/\d+/g, Number).map(v => +v)
      return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
    }
  },

  /**
   * 则将颜色代码转换为rgb()或字符串
   * @param {String} hex
   * @returns {string}
   * @example
   * hexToRGB(`#ffa501`) // rgb(255, 165, 1)
   */
  hexToRGB(hex) {
    let alpha = false,
      h = hex.slice(hex.startsWith('#') ? 1 : 0)
    if (h.length === 3) h = [...h].map(x => x + x).join('')
    else if (h.length === 8) alpha = true
    h = parseInt(h, 16)
    return (
      'rgb' +
      (alpha ? 'a' : '') +
      '(' +
      (h >>> (alpha ? 24 : 16)) +
      ', ' +
      ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
      ', ' +
      ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
      (alpha ? `, ${h & 0x000000ff}` : '') +
      ')'
    )
  },

  getStyle,

  /**
   * 为元素element设置多个样式属性值
   * @param { Element } element 需要设置样式的元素
   * @param { Object } styles 样式名值对
   * ```
   */
  setStyles(element, styles = {}) {
    Object.entries(styles).forEach(([name, value]) => {
      name && domUtils.setStyle(element, name, value)
    })
  },

  /**
   * 为元素element设置样式属性值
   * @param { Element } element 需要设置样式的元素
   * @param { String } name 样式名
   * @param { String } value 样式值
   * ```
   */
  setStyle(element, name, value) {
    element.style[camelCase(name)] = value
    if (!element.style?.cssText?.trim()) {
      domUtils.removeAttributes(element, ['style'])
    }
  },

  /**
   * 移除多个style属性名
   * @param {Element} element
   * @param {Array<String>} styleNames
   */
  removeStyles(element, styleNames = []) {
    let names = isArray(styleNames) ? styleNames : [styleNames]
    names.forEach(v => {
      v && domUtils.removeStyle(element, v)
    })
  },

  /**
   * 移除style属性名
   * @param {Element} element
   * @param {String} name
   */
  removeStyle(element, name = '') {
    if (element.style.removeProperty) {
      element.style.removeProperty(kebabCase(name))
    } else {
      element.style.removeAttribute(camelCase(name))
    }
    if (!element.style.cssText) {
      domUtils.removeAttributes(element, ['style'])
    }
  },

  /**
   * 获取属性名
   * @param {Element} element
   * @param {String} attrName
   */
  getAttribute(element, attrName = '') {
    return element.getAttribute(attrName)
  },

  /**
   * 设置元素节点多个属性
   * @param {Element} element
   * @param {Object} attrs
   */
  setAttributes(element, attrs = {}) {
    Object.entries(attrs).forEach(([name, value]) => {
      name && element.setAttribute(name, value)
    })
  },

  /**
   * 删除元素节点多个属性
   * @param { Element } element 需要删除属性的节点对象
   * @param { Array | String } attrNames 需要删除的属性名数组
   */
  removeAttributes(element, attrNames = []) {
    let attrs = isArray(attrNames) ? attrNames : [attrNames]
    attrs.forEach(v => {
      element.removeAttribute(v)
    })
  },

  /**
   * 移除所有属性
   * @param {Element} element node元素节点
   * @param {Array} exclude 要排除的属性
   */
  removeAllAttributes(element, exclude = []) {
    let removeNames = []
    for (let i = 0, len = element.attributes.length; i < len; i++) {
      let item = element.attributes[i]
      if (!exclude.includes(item.name)) {
        removeNames.push(item.name)
      }
    }
    removeNames.forEach(v => {
      element.removeAttribute(v)
    })
  },

  /**
   * 批量添加className
   * @param {Element} ele
   * @param {Array} classNames
   */
  addClasses(ele, classNames = []) {
    ele.classList.add(...classNames)
  },

  /**
   * 批量移除classNames
   * @param ele
   * @param classNames
   */
  removeClasses(ele, classNames = []) {
    ele.classList.remove(...classNames)
    if (!ele.classList.length) ele.removeAttribute('class')
  },

  /**
   * 判断是否含有class
   * @param {Element} ele
   * @param {String} className
   * @returns {*}
   */
  hasClass(ele, className = '') {
    return ele.classList.contains(className)
  },

  /**
   * 查看node节点在位于父节点第几个子节点
   * @param { Node }node
   * @param { Node } childNode
   * @returns {number}
   */
  nodeIndex(node, childNode) {
    return Array.from(node.childNodes).findIndex(v => v === childNode)
  },

  /**
   * 判断是否是零宽字符
   * @param node
   * @returns {boolean}
   */
  isZeroWidthNode(node) {
    return /^(\u200B|\u200C|\u200D|\u202e|\u202a|\u200f|\uFEFF)+$/g.test(node?.textContent?.trim?.())
  },

  /**
   * 获取标签名
   * @param ele
   * @returns {null|*}
   */
  getTagName(ele) {
    if (ele?.nodeType == 1) return ele?.tagName?.toLowerCase()
    return null
  },

  /**
   * 获取table位置信息
   * @param {HTMLTableElement} table
   * @returns { [{}] }
   */
  getTableIndexList(table) {
    const maxRow = _getTableMaxRows(table),
      maxCol = _getTableMaxCols(table),
      tableIndex = [],
      tableRows = table.rows
    let insRow = maxRow - tableRows.length
    while (insRow--) {
      table.insertRow(tableRows.length)
    }
    for (let rowInx = 0; rowInx < maxRow; rowInx++) {
      tableIndex[rowInx] = new Array(maxCol)
    }
    for (let rowIndex = 0, row; (row = table.rows[rowIndex]); rowIndex++) {
      for (let cellIndex = 0, cell; (cell = row.cells[cellIndex]); cellIndex++) {
        cell.rowSpan > maxRow && (cell.rowSpan = maxRow) // rowSpan不能超过最大行
        const rowSpan = cell.rowSpan,
          colSpan = cell.colSpan
        let curRow = rowSpan,
          colIndex = cellIndex
        while (tableIndex[rowIndex][colIndex]) colIndex++ // 当前索引有值查找下一列
        while (curRow) {
          curRow--
          let curCol = colSpan
          while (curCol) {
            curCol--
            // while (tableIndex[rowIndex][colIndex + curCol]) colIndex++ // 当前索引有值查找下一列
            tableIndex[rowIndex + curRow][colIndex + curCol] = {
              rowIndex,
              cellIndex,
              colIndex,
              rowSpan,
              colSpan
            }
          }
        }
      }
    }
    return tableIndex
  },

  /**
   * 对getTableIndexList 进行二次封装
   * @param {HTMLTableElement} table
   * @returns {*[]}
   */
  getTableIndexListPro(table) {
    if (domUtils.getTagName(table) != 'table') return []
    const list = domUtils.getTableIndexList(table)
    let result = []
    for (let i = 0; i < list.length; i++) {
      result[i] = []
      for (let j = 0; j < list[i].length; j++) {
        const item = list[i][j]
        if (item) {
          item.rMin = item.rowIndex // 行最小
          item.rMax = item.rowIndex + item.rowSpan - 1 // 行最大
          item.cMin = item.colIndex // 列最小
          item.cMax = item.colIndex + item.colSpan - 1 // 列最大
          item.rIndex = item.rowIndex // 当前行索引
          item.cIndex = item.cellIndex // 当前列索引
          item.part = i == item.rowIndex // 是否属于当前列
          item.trEle = table.rows[item.rIndex] // 当前列dom对象
          item.tdEle = item.trEle.cells[item.cIndex] // 对应的td dom对象
          item.index = j // 索引
        }
        result[i].push(item || {})
      }
    }
    return result
  },

  /**
   * 将str中的html符号转义,将转义“'，&，<，"，>”五个字符
   * @param { String } str 需要转义的字符串
   * @param {RegExp} reg
   * @return { String } 转义后的字符串
   * @example
   * ```javascript
   * let html = '<body>&</body>';
   *
   * //output: &lt;body&gt;&amp;&lt;/body&gt;
   * console.log( domUtils.unhtml( html ) );
   *
   * ```
   */
  unHtml: function (str, reg) {
    return str
      ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function (a, b) {
          if (b) {
            return a
          } else {
            return {
              '<': '&lt;',
              '&': '&amp;',
              '"': '&quot;',
              '>': '&gt;',
              "'": '&#39;'
            }[a]
          }
        })
      : ''
  },

  /**
   * 获取dpi
   * @returns {*[]}
   */
  getDpi() {
    const result = []
    if (window.screen.deviceXDPI != undefined) {
      result[0] = window.screen.deviceXDPI
      result[1] = window.screen.deviceYDPI
    } else {
      const tmpNode = document.createElement('DIV')
      tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
      document.body.appendChild(tmpNode)
      result[0] = parseInt(tmpNode.offsetWidth)
      result[1] = parseInt(tmpNode.offsetHeight)
      tmpNode.parentNode.removeChild(tmpNode)
    }
    return result
  },

  /**
   * cm 转成 px
   * @param {Number | String} cm
   */
  cmToPx(cm) {
    const DPI = domUtils.getDpi()
    if (isString(cm)) cm = parseFloat(cm)
    return +cm * (DPI[0] / 25.4)
  },

  /**
   * px 转成 cm
   * @param {Number | String} px
   */
  pxToCm(px) {
    const DPI = domUtils.getDpi()[0]
    if (isString(px)) px = parseFloat(px)
    return (+px * 25.4) / DPI
  },

  /**
   * 去除换行空格
   * @param {String} str
   **/
  trimSpace(str) {
    return str.replace(/\n+\s*/g, () => '')
  },

  /**
   * blob 转成 base64
   * @param  {Blob} blob
   * @returns {Promise<unknown>}
   */
  blobToBase64Sync(blob) {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = function (event) {
        resolve(event.target.result)
      }
      reader.readAsDataURL(blob)
    })
  },

  /**
   * 读取file txt 文件内容
   * @param file
   */
  readTextContent(file) {
    return new Promise((resolve, reject) => {
      // const validArr = ['txt']
      // if (!validArr.includes(file.name.replace(/.*\.(.*)$/g, '$1')))
      //   reject({ code: -10001, msg: `传入的格式需要是${validArr.join(',')}` })
      const reader = new FileReader()
      reader.onload = e => {
        const content = e.target.result
        resolve(content)
      }
      reader.readAsText(file)
    })
  },

  /**
   * 返回给定毫秒数的人类可读格式。
   * @param {Number} ms
   * @example
   * formatDuration(1001); // '1 second, 1 millisecond'
   * formatDuration(34325055574);
   * // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
   */
  formatDuration(ms) {
    if (ms < 0) ms = -ms
    const time = {
      day: Math.floor(ms / 86400000),
      hour: Math.floor(ms / 3600000) % 24,
      minute: Math.floor(ms / 60000) % 60,
      second: Math.floor(ms / 1000) % 60,
      millisecond: Math.floor(ms) % 1000
    }
    return Object.entries(time)
      .filter(val => val[1] !== 0)
      .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
      .join(', ')
  },

  /**
   * 计算任意维数中两点之间的距离
   * @param {Array<Number>} a
   * @param {Array<Number>} b
   * @returns {number}
   */
  euclideanDistance: (a, b) => Math.hypot(...Object.keys(a).map(k => b[k] - a[k])),

  /**
   * 计算两个或多个数字/数组之间的最大公约数。
   * @param arr
   * @returns {*}
   * @example
   * gcd(8, 36); // 4
   * gcd(...[12, 8, 32]); // 4
   */
  gcd(...arr) {
    const _gcd = (x, y) => (!y ? x : domUtils.gcd(y, x % y))
    return [...arr].reduce((a, b) => _gcd(a, b))
  },

  /**
   * 将字节数转换为人类可读的字符串。
   * @param num
   * @param {Number} precision 精度
   * @param {Boolean}addSpace 默认情况下在数字和单位之间添加空格
   * @returns {string}
   * @example
   * prettyBytes(1000); // '1 KB'
   * prettyBytes(-27145424323.5821, 5); // '-27.145 GB'
   * prettyBytes(123456789, 3, false); // '123MB'
   */
  prettyBytes(num, precision = 3, addSpace = true) {
    const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0]
    const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1)
    const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision))
    return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent]
  },

  /**
   * 将一组表单元素编码为查询字符串。
   * @param {HTMLFormElement} form
   * @example
   * serializeForm(document.querySelector('#form'));
   * // email=test%40email.com&name=Test%20Name
   */
  serializeForm: form => Array.from(new FormData(form), field => field.map(encodeURIComponent).join('=')).join('&'),

  /**
   * 使用、和方法创建一个发布/订阅（发布-订阅）事件中心。emitonoff
   *   const handler = data => console.log(data);
   *   const hub = createEventHub();
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

  /**
   * @description 使用、和方法创建一个发布/订阅（发布-订阅）事件中心。emitonoff
   *   const handler = data => console.log(data);
   *   const hub = createEventHub();
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
   * @return {{hub: null, emit(String, any): void, off(String, Function): void, on(String, Function): void}}
   */
  eventBus: () => ({
    /**
     * @return {{}}
     */
    hub: Object.create(null),
    /**
     * emit事件
     * @param {String} event 事件名
     * @param {any} data 值
     */
    emit(event, data) {
      ;(this.hub[event] || []).forEach(handler => handler(data))
    },
    /**
     * on事件
     * @param {String} event 事件名
     * @param {Function} handler
     */
    on(event, handler) {
      if (!this.hub[event]) this.hub[event] = []
      this.hub[event].push(handler)
    },
    /**
     * off事件
     * @param {String} event 事件名
     * @param {Function} handler
     */
    off(event, handler) {
      const i = (this.hub[event] || []).findIndex(h => h === handler)
      if (i > -1) this.hub[event].splice(i, 1)
      if (this.hub[event].length === 0) delete this.hub[event]
    }
  }),

  /**
   * 删除节点node，并根据keepChildren的值决定是否保留子节点
   * @param { Node } node 需要删除的节点对象
   * @param { Boolean } keepChildren 是否需要保留子节点
   * @return { Node } 返回刚删除的节点对象
   * @example
   * ```html
   * <div id="test">
   *     <div id="child">你好</div>
   * </div>
   * <script>
   *     domUtils.removeNode( document.body, true );
   *     //output: true
   *     console.log( document.getElementById( "child" ) !== null );
   * </script>
   * ```
   */
  removeNode(node, keepChildren = false) {
    let parent = node.parentNode,
      child
    if (parent) {
      if (keepChildren && node.hasChildNodes()) {
        while ((child = node.firstChild)) {
          parent.insertBefore(child, node)
        }
      }
      parent.removeChild(node)
    }
    return node
  },

  /**
   * requestAnimationFrame截流
   * @param fn
   * @returns {(function(...[*]): void)|*}
   */
  rafThrottle(fn) {
    let locked = false
    return function (...args) {
      if (locked) return
      locked = true
      _requestAnimationFrame(_ => {
        fn.apply(this, args)
        locked = false
      })
    }
  },

  /**
   * 比较NodeA和NodeB的位置，
   * @param {Node} nodeA
   * @param {Node} nodeB
   * @returns {number}
   * 返回值
   * 1 // 不在同一文档中
   * 2 // nodeB在nodeA之前, 且nodeB不包含nodeA
   * 4 // nodeB在nodeA之后, 且nodeA不包含nodeB
   * 8 // nodeB包含A
   * 16 // nodeB被nodeA包含
   * 0 两个节点其中有一个非节点
   */
  compareNodePosition(nodeA, nodeB) {
    if (!nodeA?.nodeType || !nodeB?.nodeType) {
      console.error(`[compareNodePosition]传入的参数nodeA和nodeB应都是node节点类型`)
      return 0
    }

    if (nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_DISCONNECTED) {
      return 1 // 不在同一文档中
    }

    if (
      nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_PRECEDING &&
      !(nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_CONTAINS) &&
      !(nodeB.compareDocumentPosition(nodeA) & Node.DOCUMENT_POSITION_CONTAINS)
    ) {
      return 2 // nodeB在nodeA之前, 且nodeB不包含nodeA
    }

    if (
      nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_FOLLOWING &&
      !(nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_CONTAINS) &&
      !(nodeB.compareDocumentPosition(nodeA) & Node.DOCUMENT_POSITION_CONTAINS)
    ) {
      return 4 // nodeB在nodeA之后, 且nodeA不包含nodeB
    }

    if (nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_CONTAINS) {
      return 8 // nodeB包含A
    }

    if (nodeA.compareDocumentPosition(nodeB) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return 16 // nodeB被nodeA包含
    }
    return 0
  },

  /**
   * 将 hex转成rgba
   * @param {String} hex
   * @param {Number|String} opacity
   * @returns {`rgba(${string})`}
   */
  hexToRgba(hex = '', opacity) {
    hex = /^rgb/.test(hex) ? hex : domUtils.hexToRGB(hex)
    let hexText = hex
      .replace(/\w+\((.*)\)/, '$1')
      .split(',')
      .map(v => v.trim())
      .concat(opacity)
      .join(',')
    return `rgba(${hexText})`
  }
}

export default domUtils
