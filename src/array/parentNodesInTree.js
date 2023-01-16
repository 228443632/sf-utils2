import isArray from '@/base/isArray'

/**
 * 根据树状子节点id,依次找到所有父节点路径
 * @param {Array} tree 原数据，树状结构
 * @param {string | number} id 要查找的子节点主键值
 * @param {{ id?: 'id', children?: 'children' }} props 自定义键名
 * @returns {*[]}
 */
function parentNodesInTree({ tree = [], id = '', props = { id: 'id', children: 'children' } }) {
  if (!isArray(tree)) return []
  const parentNodes = []
  const getNodePath = (node, id = '', props) => {
    parentNodes.push(node)
    if (node?.[props.id] == id) {
      throw 'break'
    }
    if (isArray(node?.[props.children])) {
      for (let i = 0; i < node?.[props.children].length; i++) {
        getNodePath(node[props.children][i], id, props)
      }
    }
    parentNodes.pop()
  }
  try {
    for (let i = 0; i < tree.length; i++) {
      getNodePath(tree[i], id, props)
    }
  } catch (e) {
    return parentNodes
  }
}

export default parentNodesInTree
