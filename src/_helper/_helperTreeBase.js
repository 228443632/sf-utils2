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

/**
 * @param {Array} list 每个节点下子节点数组
 * @param {Object} parentObj 父节点对象
 */
export const __callbackListInterface = (list, parentObj) => {}

/**
 * @param {Object} item 当前树节点
 * @param {Number} index 当前树节点索引
 * @param {Array} list 当前树节点数组
 * @param {Object} parentObj 父节点
 * @return {void|boolean}
 */
export const __callbackItemInterface = (item, index, list, parentObj) => {}

/**
 * 获取经过路径集合
 * @param {String} str
 * @return {String[]}
 */
export function _getPathLists(str) {
  const pathLists = []
  const splitString = '-'
  const splitArray = str.split(splitString)
  splitArray.forEach((v, vi, arr) => {
    if (vi > 1) {
      pathLists.push(arr.slice(0, vi).join(splitString))
    }
  })
  pathLists.push(str)
  return pathLists
}

/**
 * 判断aPath是否包含bPath
 * @param {String} aPath
 * @param {String} bPath
 * @return {Boolean}
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
 * 遍历树型结构，并添加额外参数
 * @param tree 树形
 * @param {{
      id?: 'id',
      parentId?: 'parentId',
      children?: 'children',
      order?: false,
      orderField?: 'order',
      orderBy?: 'asc'
    }} props 自增字段
 * @param callbackList 回调函数 节点list
 * @param callbackItem 回调函数 当前节点
 * @param {['__id__', '__rootNode__', '__pId__', '__level__']} retainField 保留的字段数组
 * @param isDeepClone 是否深度克隆原树型对象
 * @returns {*[]}
 * @private
 */
const _helperTreeBase = ({
  tree = [],
  props = {},
  callbackList = __callbackListInterface,
  callbackItem = __callbackItemInterface,
  retainField = ['__id__', '__rootNode__', '__pId__', '__level__'],
  isDeepClone = true
}) => {
  let defaultProps = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
    order: false,
    orderField: 'order',
    orderBy: 'asc'
  }
  let defaultRetainField = ['__id__', '__rootNode__', '__pId__', '__level__']

  retainField = [...defaultRetainField, retainField || []]

  let retainFieldObj = retainField.reduce((pre, cur) => (pre[cur] = true) && pre, {})

  props = merge({}, defaultProps, props || {})

  let _isCbListBreak = false
  let _isCbItemBreak = false

  if (isDeepClone) tree = deepClone(tree)

  let _fn = ({ tree = [], parentNode = null, rootNode = null }) => {
    if (isArray(tree)) {
      !_isCbListBreak && (_isCbListBreak = !!(callbackList && callbackList(tree, parentNode)))
      props.order &&
        tree.sort((a, b) =>
          props.orderBy.toString().toLowerCase() == 'asc'
            ? a?.[props.orderField] - b?.[props.orderField]
            : b?.[props.orderField] - a?.[props.orderField]
        )
      tree.forEach((v, vi) => {
        let _pId = parentNode?.__id__ || '@'
        def(v, '__id__', `${_pId}-${vi}`)
        retainFieldObj.__pId__ && def(v, '__pId__', _pId)
        retainFieldObj.__level__ && def(v, '__level__', String(v.__pId__).split('-').length)
        retainFieldObj.__rootNode__ && def(v, '__rootNode__', rootNode || (v.__depth__ == 1 && v) || null)
        !_isCbItemBreak && (_isCbItemBreak = !!(callbackItem && callbackItem(v, vi, tree, parentNode)))
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
