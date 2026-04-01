// @ts-nocheck

import eachTree from 'sf-utils2/array/eachTree'
import arrayToObj from 'sf-utils2/array/arrayToObj'
import isFunction from 'sf-utils2/base/isFunction'
import uniq from 'sf-utils2/array/uniq'
import listToTree from 'sf-utils2/array/listToTree'
import isPlainObject from 'sf-utils2/base/isPlainObject'
import def from 'sf-utils2/object/def'
import deepClone from 'sf-utils2/object/deepClone'
import {
  _includesChildPath,
  _getPathLists,
  __callbackListInterface,
  __callbackItemInterface
} from 'sf-utils2/_helper/_helperTreeBase'
import merge from 'sf-utils2/object/merge'
import { TCallbackItemInterface, TCallbackListInterface, TEachTreeProps } from 'sf-utils2/_types/_helperTreeBaseType'

/**
 * 根据回调函数过滤树状
 * @param tree 树状结构
 * @param {{ children?: 'children', order?: false, orderField?: 'order', orderBy?: 'asc' }} props 属性映射
 * @param {string|'children'|'child'|'childs'|'childList'} [props.children]
 * @param {boolean} [props.order]
 * @param {string|'order'} [props.orderField]
 * @param {string|'aes'|'desc'|'AES'|'DESC'|'up'|'down'|'UP'|'down'} [props.orderBy]
 * @param retainChild 是否保留子孙节点 默认 false
 * @param retainParent 是否保留父级 默认 true
 * @param callbackList 每一层树list 回调函数
 * @param callbackItem 每一项回调函数
 * @param isDeepClone 是否深度克隆原树型对象
 * @returns {*[]}
 */
function filterTree({
  tree = [] as any[],
  props = { children: 'children', order: false, orderField: 'order', orderBy: 'asc' } as TEachTreeProps,
  retainChild = false,
  retainParent = true,
  isDeepClone = true,
  callbackList = __callbackListInterface as TCallbackListInterface,
  callbackItem = __callbackItemInterface as TCallbackItemInterface
}): any[] {
  if (isDeepClone) tree = deepClone(tree)
  if (!isFunction(callbackItem) || callbackItem === __callbackItemInterface) return tree

  let defaultOptions = {
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  }
  props = merge({}, defaultOptions, props)

  const __id__ = '__id__'
  const __pId__ = '__pId__'
  const treeList = []
  let validIdsList = []
  const treeListObj$__id__ = {}

  eachTree({
    tree: tree,
    isDeepClone: false,
    props: { children: props.children },
    callbackItem: function (item, index, list, parentObj) {
      treeList.push(item)
      treeListObj$__id__[item.__id__] = item
      if (callbackItem(...arguments)) {
        item['__@retain__'] = true
        validIdsList.push(item[__id__])
      }
    }
  })

  // const treeListObj$__id__ = arrayToObj(treeList, __id__)
  validIdsList = uniq(validIdsList) // 去重

  const validIdsListObj = {}
  validIdsList.forEach(v => {
    const pathLists = _getPathLists(v)
    pathLists.forEach(o => {
      const target = treeListObj$__id__[o]
      if (target) {
        validIdsListObj[o] = target
      }
    })
    if (retainChild) {
      treeList
        .filter(o => _includesChildPath(o[__id__], v))
        .forEach(o => {
          const key = o[__id__]
          validIdsListObj[key] = o
          // console.log('existIdx@', key, v)
        })
    }
  })

  const __id2__ = '__@id__'
  const __pId2__ = '__@pId__'

  const list = Object.values(validIdsListObj).map(v => {
    if (isPlainObject(v)) {
      def(v, __id2__, v[__id__])
      def(v, __pId2__, v[__pId__])
      delete v[props.children]
    }
    return v
  })
  // console.log('Object.values(validIdsListObj)', list, Object.values(validIdsListObj))
  // console.log('变化了@1')

  const result = listToTree({
    list,
    root: '@',
    props: { id: __id2__, parentId: __pId2__, children: props.children },
    callbackList,
    callbackItem: item => {
      delete item[__id2__]
      delete item[__pId2__]
    },
    isDeepClone: false
  })

  // 保留保留父级
  if (retainParent) return result

  const defaultRootNode = {
    [props.children]: result,
    ['__@retain__']: true
  }

  // 不保留父级
  return eachTree({
    tree: result,
    isDeepClone: false,
    props: { children: props.children },
    callbackItem: function (item, index, list, parentObj) {
      def(item, '__@retain__', item['__@retain__'] ?? false)
      if (item.__level__ == 1 || !parentObj) {
        item.__parentNode__ = defaultRootNode
      }
      // console.log('item', item)
      // console.log('item', item)
      if (!item['__@retain__']) {
        // 如果是不保留
        const retainParentNode = getRetainParentNode(item)
        list.splice(index, 1)
        const children = item[props.children]
        // console.log('retainParentNode', { retainParentNode, item, children })
        if (children?.length && retainParentNode?.children) {
          retainParentNode.children.push(...children)
        }
      }
    }
  }).filter(item => {
    def(item, '__@retain__')
    return item['__@retain__']
  })

  function getRetainParentNode(item) {
    let parentNode = item?.__parentNode__
    while (parentNode) {
      if (parentNode && parentNode?.['__@retain__']) {
        break
      }
      parentNode = parentNode?.__parentNode__
    }
    return parentNode
  }
}

export default filterTree
