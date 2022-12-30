import isArray from '../type/isArray'
import merge from './merge'
import { defineProperty } from './_treeBase'

/**
 * 获取节点 经过的所有父节点 轨迹
 * @param listObj
 * @param ID
 * @returns {any[]}
 */
function _getNodePathItem(listObj = {}, ID = '') {
  const ids = ID.toString().split('-')
  let paths = []
  for (let i = 1; i <= ids.length; i++) {
    paths.push(ids.slice(0, i).join('-'))
  }
  paths.shift()
  paths.pop()
  return paths
    .map(v => {
      return listObj[v]
    })
    .filter(Boolean)
}

/**
 * 将tree结构 转化成 list
 * @param tree 要转换的tree数据集
 * @param props 自定义字段
 * @param retainChild 是否保留每一项中的 直接子节点
 * @param retainPaths 是否返回每一项节点所经过的路径节点
 * @param retainAllChildren 是否返回每一项节点 所有的子代以及所有子代下所有节点（平铺化）
 * @returns {*[]}
 */
//  Object.defineProperty(item, '_id', { writable: false, value: `${item._pId}-${index + 1}` })
function treeToList({
  tree = [],
  props = { children: 'children' },
  retainChild = false,
  retainPaths = false,
  retainAllChildren = false
}) {
  let defaultProps = { children: 'children' }
  props = merge({}, defaultProps, props)

  const _list = []
  const _PID = '@'
  let _listObj = {}
  const treeToListFn = ({ tree = [], props = { children: 'children' }, retainChild = false, PID = '0' }) => {
    if (isArray(tree) && tree.length) {
      tree.forEach((item, index) => {
        let _pId = item.__pId__ ?? PID
        defineProperty(item, '__pId__', { value: _pId })
        defineProperty(item, '__id__', { value: `${_pId}-${index}` })
        _list.push(item)
        if (isArray(item[props.children]) && item[props.children].length) {
          treeToListFn({
            tree: item[props.children],
            props,
            retainChild,
            PID: item.__id__
          })
        }
      })
    }
  }
  treeToListFn({ tree, props, retainChild, PID: _PID })

  if (retainPaths || retainAllChildren) {
    _listObj = _list.reduce((pre, cur) => {
      if (cur) {
        pre[cur.__id__] = cur
      }
      return pre
    }, {})
  }

  _list.forEach(v => {
    // 是否保留每一项中的 直接子节点
    if (!retainPaths) {
      delete v[props.children]
    }

    // 是否返回每一项节点 所有的子代以及所有子代下所有节点（平铺化）
    if (retainAllChildren) {
      defineProperty(v, '__allChildren__', {
        value: _list.filter(o => {
          const idx = String(o.__pId__).indexOf(v.__id__)
          const hasChild = !!o[props.children]?.length // 是否含有子节点
          if (!hasChild && idx == 0 && String(o.__id__).substr(v.__id__.length, 1) == '-') {
            return true
          }
        })
      })
    }
    // 是否保留每一项中的 直接子节点
    if (retainPaths) {
      defineProperty(v, '__rootNode__', { value: _listObj[v.__id__.split('-').slice(0, 2).join('-')] || v })
      defineProperty(v, '__pathNodes__', { value: _getNodePathItem(_listObj, v.__id__) })
    }
    defineProperty(v, '__level__', { value: String(v.__pId__).split('-').length }) // 当前节点处于深度（即第几层）
  })

  return _list
}

export default treeToList
