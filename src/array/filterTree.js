import eachTree from '@/array/eachTree'
import arrayToObj from '@/array/arrayToObj'
import isFunction from '@/base/isFunction'
import uniq from '@/array/uniq'
import listToTree from '@/array/listToTree'
import isPlainObject from '@/base/isPlainObject'
import def from '@/object/def'
import deepClone from '@/object/deepClone'
import { _includesChildPath, _getPathLists } from '@/_helper/_helperTreeBase'
import merge from '@/object/merge'

/**
 * 根据回调函数过滤树状
 * @param {Array<any>} tree 树状结构
 * @param {Object} props 属性映射
 * @param {Boolean} retainChild 是否保留子孙节点
 * @param {Function} callbackList 每一层树list 回调函数
 * @param {Function} callbackItem 每一项回调函数
 * @param {Boolean} isDeepClone 是否深度克隆原树型对象
 * @returns {*}
 */
function filterTree({
  tree = [],
  props = { children: 'children', order: false, orderField: 'order', orderBy: 'asc' },
  retainChild = false,
  isDeepClone = true,
  callbackItem,
  callbackList
}) {
  if (!isFunction(callbackItem)) return tree
  if (isDeepClone) tree = deepClone(tree)

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

  eachTree({
    tree: tree,
    isDeepClone: false,
    props: { children: props.children },
    callbackItem: function (item, index, list, parentObj) {
      treeList.push(item)
      if (callbackItem(...arguments)) {
        validIdsList.push(item[__id__])
      }
    }
  })

  const treeListObj = arrayToObj(treeList, __id__)
  validIdsList = uniq(validIdsList) // 去重

  const validIdsListObj = {}
  validIdsList.forEach(v => {
    const pathLists = _getPathLists(v)
    pathLists.forEach(o => {
      const target = treeListObj[o]
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
  return listToTree({
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
}

export default filterTree
