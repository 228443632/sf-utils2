import merge from '../object/merge.js'
import _helperTreeBase, { __callbackItemInterface, __callbackListInterface } from '../_helper/_helperTreeBase.js'
import arrayToObj from '@/array/arrayToObj'

/**
 * @typedef {'__pathIds__', '__pathIdsObj__'} RetainField
 */
/**
 * 把返回的数据集list 转换成 Tree
 * @param list 要转换的数据集
 * @param root 根节点
 * @param {{ id?: 'id', parentId?: 'parentId', children?: 'children', order?: false, orderField?: 'order', orderBy?: 'asc' }} props 映射属性
 * @param {string|'id'|'key'} [props.id]
 * @param {string|'pid'|'parentId'|'pId'} [props.parentId]
 * @param {string|'children'|'child'|'childs'|'childList'} [props.children]
 * @param {boolean} [props.order]
 * @param {string|'order'} [props.orderField]
 * @param {string|'aes'|'desc'|'AES'|'DESC'|'up'|'down'|'UP'|'down'} [props.orderBy] * @param callbackList 回调函数 节点list
 * @param {RetainField[]} retainField 保留的字段
 * @param callbackList
 * @param callbackItem 回调函数 当前节点
 * @param isDeepClone 是否深度克隆
 * @returns {*[]}
 */
function listToTree({
  list = [],
  root = 0,
  props = { id: 'id', parentId: 'parentId', children: 'children', order: false, orderField: 'order', orderBy: 'asc' },
  callbackList = __callbackListInterface,
  callbackItem = __callbackItemInterface,
  retainField = [],
  isDeepClone = true
}) {
  let defProps = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  }
  props = merge({}, defProps, props)

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
  return _helperTreeBase({ props, callbackList, callbackItem, tree, retainField, isDeepClone })
}

export default listToTree
