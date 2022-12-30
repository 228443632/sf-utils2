/**
 * 寄生式组合继承
 * @param {Function} ChildFn 继承的构造函数（子）
 * @param {Function} ParentFn 被继承的构造函数（父）
 * @returns {any}
 */
function inheritPrototypeFromFn(ChildFn, ParentFn) {
  let createFn = Object?.create
  if (!Object?.create) {
    createFn = obj => {
      const F = function () {}
      F.prototype = obj
      return new F()
    }
  }
  let prototype = createFn(ParentFn.prototype) // 创建对象
  prototype.constructor = ParentFn // 增强对象
  ChildFn.prototype = prototype // 赋值对象
  return prototype
}

export default inheritPrototypeFromFn
