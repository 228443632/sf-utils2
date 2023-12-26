import merge from '@/object/merge'
import _helperTreeBase, { __callbackItemInterface, __callbackListInterface } from '../_helper/_helperTreeBase.js'

/**
 * 从树结构中遍历
 * @param tree 树状结构
 * @param {{children?: 'children', order?: false, orderField?: 'order', orderBy?: 'asc' }} props 属性映射 * @param {string|'pid'|'parentId'|'pId'} [props.parentId]
 * @param {string|'children'|'child'|'childs'|'childList'} [props.children]
 * @param {boolean} [props.order]
 * @param {string|'order'} [props.orderField]
 * @param {string|'aes'|'desc'|'AES'|'DESC'|'up'|'down'|'UP'|'down'} [props.orderBy]
 * @param callbackList 每一层树list 回调函数
 * @param callbackItem 每一项回调函数
 * @param isDeepClone 是否深度克隆原树型对象
 * @return {*[]}
 */
function eachTree({
  tree = [],
  props = { children: 'children', order: false, orderField: 'order', orderBy: 'asc' },
  callbackList = __callbackListInterface,
  callbackItem = __callbackItemInterface,
  isDeepClone = true
}) {
  let defaultOptions = {
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  }
  props = merge({}, defaultOptions, props)
  return _helperTreeBase({ props, callbackList, callbackItem, tree, isDeepClone })
}

export default eachTree
