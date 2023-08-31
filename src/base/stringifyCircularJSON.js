/**
 * 将包含循环引用的 JSON 对象序列化为 JSON 格式。
 * @param {object|any[]} obj 对象
 * @return {string} 返回json
 */
function stringifyCircularJSON(obj) {
  const seen = new WeakSet()
  return JSON.stringify(obj, (k, v) => {
    if (v !== null && typeof v === 'object') {
      if (seen.has(v)) return
      seen.add(v)
    }
    return v
  })
}

export default stringifyCircularJSON
