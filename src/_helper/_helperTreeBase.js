/**
 * @Description: tree基础方法
 * @Author bianpengfei
 * @create 2022/7/20 11:18
 */
import isArray from '@/base/isArray.js'
import merge from '@/object/merge.js'
import def from '@/object/def'
import deepClone from '@/object/deepClone'
import isString from '@/base/isString'
import _helperArraySort from '@/_helper/_helperArraySort'
import arrayToObj from "@/array/arrayToObj";

/**
 * @param {Array} list 每个节点下子节点数组
 * @param {Object} parentObj 父节点对象
 */
export const __callbackListInterface = (list, parentObj) => {}

/**
 * @param {Object} item 当前树节点
 * @param {number} index 当前树节点索引
 * @param {Array} list 当前树节点数组
 * @param {Object} parentObj 父节点
 * @return {void|boolean}
 */
export const __callbackItemInterface = (item, index, list, parentObj) => {}

/**
 * 获取经过路径集合
 * @param {string} str 值
 * @param {'-'|'/'|'|'|string} sep
 * @return {string[]}
 */
export function _getPathLists(str, sep = '') {
  str = String(str || '')
  const pathLists = []
  const splitString = sep || '-'
  const splitArray = str.split(splitString)
  splitArray.forEach((_, vi, arr) => {
    if (vi > 1) {
      pathLists.push(arr.slice(0, vi).join(splitString))
    }
  })
  str && pathLists.push(str)
  return pathLists
}

/**
 * 获取经过路径集合，所有
 * @param {string} str 值
 * @param {'-'|'/'|'|'|string} sep
 * @return {string[]}
 */
export function _getAllPathLists(str, sep = '/') {
  str = String(str || '')
  const pathLists = []
  const splitString = sep || '-'
  const splitArray = str.split(splitString)
  splitArray.forEach((_, vi, arr) => {
    if (vi >= 1) {
      pathLists.push(arr.slice(0, vi).join(splitString))
    }
  })
  pathLists.push(str)
  return pathLists
}

/**
 * 判断aPath是否包含bPath
 * @param {string} aPath
 * @param {string} bPath
 * @return {boolean}
 */
export function _includesChildPath(aPath, bPath) {
  if (isString(aPath) && isString(bPath)) {
    const idx = aPath.indexOf(bPath)
    if (idx === 0 && aPath.substr(bPath.length, 1) === '-') {
      return true
    }
  }
  return false
}

/**
 * 方向
 */
const sortType = {
  ase: _helperArraySort._helperDesc, // 从小到大
  desc: _helperArraySort._helperDesc, // 从大到小
  up: _helperArraySort._helperDesc, // 从小到大
  down: _helperArraySort._helperDesc // 从大到小
}

const DEFAULT_PROPS = {
  id: 'id',
  parentId: 'parentId',
  children: 'children',
  order: false,
  orderField: 'order',
  orderBy: 'asc'
}

const DEFAULT_RETAIN_FIELD = ['__id__', '__rootNode__', '__pId__', '__level__', '__index__', '__parentNode__']


/**
 * @typedef {'__pathIds__', '__pathIdsObj__'} RetainField
 */

/**
 * 遍历树型结构，并添加额外参数
 * @param tree 树形
 * @param {object} props 自增字段
 * @param callbackList 回调函数 节点list
 * @param callbackItem 回调函数 当前节点
 * @param {RetainField[]} retainField 保留的字段数组  __pathIds__ 保留经过路径的__id__集合
 * @param isDeepClone 是否深度克隆原树型对象
 * @returns {*[]}
 * @param {string|'id'|'key'} [props.id] props
 * @param {string|'pid'|'parentId'|'pId'} [props.parentId]
 * @param {string|'children'|'child'|'childs'|'childList'} [props.children]
 * @param {boolean} [props.order]
 * @param {string|'order'} [props.orderField]
 * @param {string|'aes'|'desc'|'AES'|'DESC'|'up'|'down'|'UP'|'down'} [props.orderBy]
 * @private
 */
const _helperTreeBase = ({
  tree = [],
  props = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  },
  callbackList = __callbackListInterface,
  callbackItem = __callbackItemInterface,
  retainField = [],
  // extraField = [`__pathIdsList__`],
  isDeepClone = true
}) => {
  // let defaultProps = {
  //   id: 'id',
  //   parentId: 'parentId',
  //   children: 'children',
  //   order: false,
  //   orderField: 'order',
  //   orderBy: 'asc'
  // }
  // let defaultRetainField = ['__id__', '__rootNode__', '__pId__', '__level__', '__index__', '__parentNode__']

  retainField = [...DEFAULT_RETAIN_FIELD, ...(retainField || [])]
  const retainFieldObj = retainField.reduce((pre, cur) => ((pre[cur] = true), pre), {})
  props = merge({}, DEFAULT_PROPS, props || {})

  let _isCbListBreak = false
  // let _isCbItemBreak = false

  if (isDeepClone) tree = deepClone(tree)

  let _fn = ({ tree = [], parentNode = null, rootNode = null }) => {
    if (isArray(tree)) {
      !_isCbListBreak &&
        (_isCbListBreak = !!(
          callbackList &&
          callbackList !== __callbackListInterface &&
          callbackList(tree, parentNode)
        ))
      props.order &&
        tree.sort((a, b) =>
          sortType[String(props.orderBy).toLowerCase()]?.(a?.[props.orderField], b?.[props.orderField])
        )
      tree.forEach((v, vi) => {
        let _pId = parentNode?.__id__ || '@'
        def(v, '__loop__', !(parentNode?.__loop__ === false)) // 是否可以循环
        def(v, '__id__', `${_pId}-${vi}`)
        retainFieldObj.__pId__ && def(v, '__pId__', _pId)
        retainFieldObj.__pId__ && def(v, '__pId__', _pId)
        retainFieldObj.__pId__ && def(v, '__pId__', _pId)

        retainFieldObj.__pathIds__ && def(v, '__pathIds__', _getPathLists(v.__id__, '-'))
        if (retainFieldObj.__pathIdsObj__) {
          v.__pathIds__ ||= _getPathLists(v.__pathIds__, '-') || []
          def(v, '__pathIds__')
          def(v, '__pathIdsObj__', arrayToObj(v.__pathIds__))
        }
        retainFieldObj.__level__ && def(v, '__level__', String(v.__pId__).split('-').length)
        retainFieldObj.__rootNode__ && def(v, '__rootNode__', rootNode || (v.__depth__ == 1 && v) || null)
        retainFieldObj.__parentNode__ && def(v, '__parentNode__', parentNode)
        retainFieldObj.__index__ && def(v, '__index__', vi)
        if (
          callbackItem &&
          callbackItem !== __callbackItemInterface &&
          (parentNode?.__loop__ === true || !parentNode)
        ) {
          callbackItem(v, vi, tree, parentNode) && def(v, '__loop__', false)
        }

        // 历史
        // !_isCbItemBreak &&
        //   (_isCbItemBreak = !!(
        //     callbackItem &&
        //     callbackItem !== __callbackItemInterface &&
        //     callbackItem(v, vi, tree, parentNode)
        //   ))
        // console.log('将list转成树状结', props.children, v[props.children], v.name, v)
        _fn({
          tree: v[props.children],
          parentNode: v,
          rootNode: v.__level__ == 1 ? v : rootNode
        })
      })
    }
  }
  _fn({
    tree
  })

  return tree
}

export default _helperTreeBase
