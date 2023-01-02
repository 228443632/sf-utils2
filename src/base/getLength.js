import _typeof from "@/base/_typeof";


/**
 * 返回不同类型的的长度 （对象/数组/Map/Set/String）
 * @param {any} val
 */
function getLength(val) {
  let len = 0
  switch (_typeof(val)) {
    case "Object": {
      len = Object.keys(val).length
      break
    }
    case "String":
    case "Array": {
      len = val.length
      break
    }
    case "Map":
    case "Set": {
      len = val.size
      break
    }
    default: {
      break
    }
  }
  return len
}

export default getLength
