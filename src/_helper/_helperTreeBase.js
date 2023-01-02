/**
 * @Description: tree基础方法
 * @Author bianpengfei
 * @create 2022/7/20 11:18
 */
import isArray from '@/base/isArray.js'
import merge from '@/object/merge.js'
import def from '@/object/def'

/**
 * 遍历树型结构，并添加额外参数
 * @param {array} tree 树形
 * @param {object} props 自增字段
 * @param {Function} callbackList 回调函数 节点list
 * @param {Function} callbackItem 回调函数 当前节点
 * @param {Array<String>} retainField 保留的字段数组
 * @returns {*[]}
 * @private
 */
const _helperTreeBase = ({ tree = [], props = {}, callbackList = null, callbackItem = null, retainField = [] }) => {
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
