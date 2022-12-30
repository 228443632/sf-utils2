/**
 * 寄生式继承
 * @param {Object} prototype 原型对象
 * @returns {any}
 */
function inheritPrototypeFromObj(prototype = {}) {
  let createFn = Object?.create
  if (!Object?.create) {
    createFn = obj => {
      const F = function () {}
      F.prototype = obj
      return new F()
    }
  }
  return createFn(prototype)
}

export default inheritPrototypeFromObj
