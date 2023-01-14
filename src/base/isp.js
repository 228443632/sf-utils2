/**
 * 检查一个值的数据类型是不是简单类型(字符串/数字/symbol/布尔)
 * @param {any} value
 * @return {boolean}
 * @description 拓展: js中共有7种数据类型: Number,Undefined,Null,String,Boolean,Object,Symbol
 */
function isPrimitive (value){
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

export default isPrimitive
