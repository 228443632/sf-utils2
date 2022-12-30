import isArray from '../type/isArray'

/**
 * 根据 父节点id 获取其 所有子节点信息
 * @param {array} list 列表
 * @param {string | number} parentId 父节点唯一标识值
 * @param {object} props 数据字段映射
 * @param {String} returnType 返回数据类型  可选值  item：子节点具体信息  id：只保留子节点id， 默认值item
 * @returns {*[]}
 */
function childNodesInList({
  list = [],
  parentId = 0,
  props = { id: 'id', parentId: 'parentId' },
  returnType = 'item' // item：子节点具体信息  id：只保留子节点id
}) {
  const childIds = []
  const childNodesInListFn = ({
    list = [],
    parentId = 0,
    props = { id: 'id', parentId: 'parentId' },
    childIds = [],
    returnType = 'item' // item：子节点具体信息  id：只保留子节点id
  }) => {
    if (isArray(list) && list.length) {
      list.forEach(item => {
        if (item[props.parentId] == parentId) {
          childIds.push(item[props.id])
          childIds = [
            ...new Set([
              ...childIds,
              ...childNodesInListFn({
                list,
                parentId: item[props.id],
                props,
                childIds,
                returnType
              })
            ])
          ]
        }
      })
    }
    return childIds
  }
  const ids = childNodesInListFn({
    list,
    parentId,
    props,
    childIds,
    returnType // item：子节点具体信息  id：只保留子节点id
  })

  const map = new Map([
    [
      'item',
      () => {
        const listToObject = list.reduce((pre, cur) => {
          return {
            ...pre,
            [cur[props.id]]: cur
          }
        }, {})
        return ids.map(v => listToObject[v])
      }
    ],
    [
      'id',
      () => {
        return ids
      }
    ]
  ])
  return map.get(returnType)?.()
}

export default childNodesInList
