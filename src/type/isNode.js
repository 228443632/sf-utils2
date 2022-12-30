/**
 * 确定当前运行时环境是否为 Node.js。
 * @returns {boolean}
 */
function isNode() {
  return typeof process !== 'undefined' && !!process.versions && !!process.versions.node
}

export default isNode
