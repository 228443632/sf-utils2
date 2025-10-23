// @ts-nocheck

import merge from 'sf-utils2/object/merge'
import _helperTreeBase, { __callbackItemInterface, __callbackListInterface } from '../_helper/_helperTreeBase.js'
import {
  TCallbackItemInterface,
  TCallbackListInterface,
  TEachTreeProps,
  TEachTreeRetainField,
  TEachTreeTraversalOrder
} from 'sf-utils2/_types/_helperTreeBaseType'

/**
 * @typedef {('__pathIds__'|'__pathIdsObj__')[]} RetainField
 */
/**
 * 从树结构中遍历
 * @param tree 树状结构
 * @param {{children?: 'children', order?: false, orderField?: 'order', orderBy?: 'asc' }} [props] 属性映射 * @param {string|'pid'|'parentId'|'pId'} [props.parentId]
 * @param {string|'children'|'child'|'childs'|'childList'} [props.children]
 * @param {boolean} [props.order]
 * @param {string|'order'} [props.orderField]
 * @param {string|'aes'|'desc'|'AES'|'DESC'|'up'|'down'|'UP'|'down'} [props.orderBy]
 * @param [callbackList] 每一层树list 回调函数
 * @param [callbackItem] 每一项回调函数
 * @param [isDeepClone] 是否深度克隆原树型对象
 * @param {RetainField[]} [retainField] 保留的字段
 * @param {'preorder'|'postorder'} [traversalOrder] 树的遍历顺序  "preorder" | "postorder" – 树的遍历顺序 可选值 preorder 先进行父->子、
 * @return {*[]}
 */
function eachTree({
  tree = [] as any[],
  props = { children: 'children', order: false, orderField: 'order', orderBy: 'asc' } as TEachTreeProps,
  callbackList = __callbackListInterface as TCallbackListInterface,
  callbackItem = __callbackItemInterface as TCallbackItemInterface,
  isDeepClone = true,
  retainField = [] as TEachTreeRetainField[],
  traversalOrder = 'preorder' as TEachTreeTraversalOrder // 默认先序遍历, 可选值 preorder 先进行父->子、 postorder 后进行子->父
}): any[] {
  let defaultOptions = {
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  }
  props = merge({}, defaultOptions, props)
  return _helperTreeBase({ props, callbackList, callbackItem, tree, isDeepClone, retainField, traversalOrder })
}

export default eachTree
