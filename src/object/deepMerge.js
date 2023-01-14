import _helperDeepMerge from "@/_helper/_helperDeepMerge";

/**
 * 深合并对象
 * @param {Object|Array} target 目标对象
 * @param {Object|Array} source 原对象
 * @return {Object|Array|any}
 */
function deepMerge(target, source) {
  return _helperDeepMerge(target, source)
}

export default deepMerge
