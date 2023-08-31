import _helperDeepMerge from '@/_helper/_helperDeepMerge'

/**
 * 深合并对象
 * @param {Object|Array} target 目标对象
 * @param {Object|Array} source 原对象
 * @return {Object|Array|any}
 */
function deepMerge(target, source) {
  return _helperDeepMerge(target, source)
}

// const deepMerge = (a, b, fn) =>
//     [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
//         (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
//         {}
//     );
export default deepMerge
