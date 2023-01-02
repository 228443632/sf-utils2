import merge from '../object/merge.js'
import _helperTreeBase from '../_helper/_helperTreeBase.js'
import arrayToObj from '@/array/arrayToObj'

/**
 * 把返回的数据集list 转换成 Tree
 * @param {array} list 要转换的数据集
 * @param {string | number} root 根节点
 * @param {object} props 自增字段
 * @param {Function} callbackList 回调函数 节点list
 * @param {Function} callbackItem 回调函数 当前节点
 * @param {Array<String>} retainField 保留的字段
 * @returns {*[]}
 */
function listToTree({
  list = [],
  root = 0,
  props = { id: 'id', parentId: 'parentId', children: 'children', order: false, orderField: 'order', orderBy: 'asc' },
  callbackList,
  callbackItem,
  retainField = ['__rootNode__', '__pId__', '__level__']
}) {
  let defaultOptions = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  }
  props = merge({}, defaultOptions, props)

  const _listToTreeFn = ({ list = [], root = 0, props = { id: 'id', parentId: 'parentId', children: 'children' } }) => {
    let _tree = []
    const listToObject = arrayToObj(list, props.id)
    list.forEach(item => {
      if (item[props.parentId] == root) {
        _tree.push(listToObject[item[props.id]])
      } else if (listToObject[item[props.parentId]]) {
        // fix
        if (!listToObject[item[props.parentId]]?.[props.children]) {
          listToObject[item[props.parentId]][props.children] = []
        }
        listToObject[item[props.parentId]][props.children].push(listToObject[item[props.id]])
      }
    })
    return _tree
  }
  let tree = _listToTreeFn({ list, root, props })
  return _helperTreeBase({ props, callbackList, callbackItem, tree, retainField })
}

export default listToTree
