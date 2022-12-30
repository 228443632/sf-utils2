import merge from '../base/merge'
import { treeEachBase } from './_treeBase'

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
  return treeEachBase({ props, callbackList, callbackItem, tree })
}

export default eachTree
