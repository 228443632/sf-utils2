import merge from '@/object/merge'
import _helperTreeBase from '../_helper/_helperTreeBase.js'

/**
 * 从树结构中遍历
 * @param tree
 * @param callbackFn
 */
function eachTree({
  tree = [],
  props = { id: 'id', parentId: 'parentId', children: 'children', order: false, orderField: 'order', orderBy: 'asc' },
  callbackList,
  callbackItem
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
  return _helperTreeBase({ props, callbackList, callbackItem, tree })
}

export default eachTree
