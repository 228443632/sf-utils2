import merge from '@/object/merge'
import _helperTreeBase from '../_helper/_helperTreeBase.js'

/**
 * 从树结构中遍历
 * @param {Array<any>} tree 树状结构
 * @param {{children?: 'children', order?: false, orderField?: 'order', orderBy?: 'asc' }} props 属性映射
 * @param {Function} callbackList 每一层树list 回调函数
 * @param {Function} callbackItem 每一项回调函数
 * @param {Boolean} isDeepClone 是否深度克隆原树型对象
 */
function eachTree({
  tree = [],
  props = { children: 'children', order: false, orderField: 'order', orderBy: 'asc' },
  callbackList,
  callbackItem,
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
