// const tree = [
//   {
//     id: 1,
//     name: '香蕉',
//     pId: null,
//     children: [
//       {
//         id: 1001,
//         name: '香蕉A',
//         pId: 1,
//         children: [
//           {
//             id: 1001001,
//             name: '香蕉A-儿子',
//             pId: 1001,
//             children: [
//               {
//                 id: 1001001001,
//                 name: '香蕉A-儿子-儿子',
//                 pId: 1001001
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: 1002,
//         name: '香蕉B',
//         pId: 1,
//         children: [
//           {
//             id: 1002002,
//             name: '香蕉B-儿子',
//             pId: 1002
//           }
//         ]
//       },
//       {
//         id: 1003,
//         name: '香蕉C',
//         pId: 1,
//         children: [
//           {
//             id: 1003003,
//             name: '香蕉C-儿子',
//             pId: 1003
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: '苹果',
//     pId: null,
//     children: [
//       {
//         id: 2004,
//         name: '苹果A',
//         pId: 2,
//         children: [
//           {
//             id: 2004004,
//             name: '苹果A-儿子',
//             pId: 2004
//           },
//           {
//             id: 2004005,
//             name: '苹果A-儿子2',
//             pId: 2004
//           },
//           {
//             id: 2004006,
//             name: '苹果A-儿子2',
//             pId: 2004
//           }
//         ]
//       },
//       {
//         id: 2007,
//         name: '苹果D',
//         pId: 2
//       },
//       {
//         id: 2008,
//         name: '苹果D',
//         pId: 2
//       },
//       {
//         id: 2009,
//         name: '苹果C',
//         pId: 2
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: '橘子',
//     pId: null,
//     children: [
//       {
//         id: 3005,
//         name: '橘子C',
//         pId: 3,
//         children: [
//           {
//             id: 3005005,
//             name: '橘子C-儿子',
//             pId: 3005
//           }
//         ]
//       },
//       {
//         id: 3006,
//         name: '橘子B',
//         pId: 3,
//         children: [
//           {
//             id: 3006006,
//             name: '橘子B-儿子',
//             pId: 3006
//           }
//         ]
//       },
//       {
//         id: 3010,
//         name: '橘子A',
//         pId: 3
//       }
//     ]
//   },
//   {
//     id: 4,
//     name: '西瓜',
//     pId: null,
//     children: [
//       {
//         id: 4012,
//         name: '西瓜B',
//         pId: 4,
//         children: [
//           {
//             id: 4013,
//             name: '西瓜B-儿子',
//             pId: 4012
//           }
//         ]
//       }
//     ]
//   }
// ]

import eachTree from '@/array/eachTree'
import orderBy from '@/array/orderBy'
import isArray from '@/base/isArray'
import arrayToMap from '@/array/arrayToMap'
import isNoNullable from '@/base/isNoNullable'
import uniq from '@/array/uniq'
import { _getPathLists, _includesChildPath } from '@/_helper/_helperTreeBase'
import merge from '@/object/merge'

/**
 * 从集合中，去除父子同时存在的keys，只显示父节点（当父节点下所有子节点都选中时）
 * 比如地区选择器，如果先选择江苏，然后选择无锡，那么这里的key，只会存在无锡
 * 如果江苏下，所有的城市都已经选择了，那么只会存在江苏
 * @param tree 树形数据
 * @param keys 原有的keys集合
 * @param [currentKey] 当前选择的key，记住是当前选中的key
 * @param [props] 属性映射
 * @param [cache] 缓存
 * @param {string[]} [props.children]
 * @param {string} [props.id]
 * @param {undefined|Function} [props.treeObjById]
 * @param {any|Function} [props.treeObjBy__id__]
 * @param {'SHOW_PARENT'} [props.showCheckedStrategy] 定义选中项回填的方式。SHOW_CHILD: 只显示选中的子节点。SHOW_PARENT: 只显示父节点（当父节点下所有子节点都选中时）
 * @example
 * formatStrategyIdsInTree({ tree, keys: [2, 2004, 2004004, 2004005, 1, 1001], props: {children: 'children', id: 'id'} })
 */
function formatStrategyIdsInTree({
  tree = [],
  keys = [],
  currentKey = [],
  props = {},
  cache = { treeObjById: undefined, treeObjBy__id__: undefined }
}) {
  let defaultProps = { children: 'children', id: 'id' }, // 默认props
    treeObjBy__id__ = cache.treeObjBy__id__, // 树形对象通过id
    treeObjById = cache.treeObjById

  props = merge({}, defaultProps, props) // 树形应

  if (!treeObjBy__id__ || !treeObjById) {
    treeObjBy__id__ ||= {}
    treeObjById ||= {}
    eachTree({
      tree: tree,
      props: {
        children: props.children
      },
      callbackItem: item => {
        treeObjById[item[props.id]] = item
        treeObjBy__id__[item.__id__] = item
      }
    })
  }

  const delNodesMap = new Map(), // 删除Node集合
    addNodesMap = new Map() // 新增Node集合

  currentKey = isArray(currentKey) ? currentKey.at(-1) : currentKey
  const currentNode = treeObjById[currentKey]

  if (currentNode) {
    addNodesMap.set(currentNode[props.id], true) // 新增子节点
    Object.values(treeObjById).forEach(v => {
      if (v.__id__ != currentNode.__id__ && _includesChildPath(v.__id__, currentNode.__id__)) {
        delNodesMap.set(v[props.id], true) // 移除节点
      }
    })
  }

  const plainKeys = keys.map(v => (isArray(v) ? v.at(-1) : v)).filter(v => !delNodesMap.has(v)), // 平面keys集合
    keysMap = arrayToMap(plainKeys), // keys映射，对象map
    keysMapNodes = orderBy(plainKeys.map(v => treeObjById[v]).filter(isNoNullable), ['__level__'], ['desc']) // keys映射节点，对象map

  delNodesMap.clear()

  // console.log('keysMapNodes', keysMapNodes)

  // 递归node
  const itorNode = node => {
    if (!node) return
    // console.log('node',node, node[props.children], keysMap, props.id)
    if (isArray(node[props.children]) && node[props.children]?.length) {
      const isAll = node[props.children].every(o => keysMap.has(o[props.id])) // 全部已存在，选择父亲
      if (isAll) {
        // 父节点选中
        addNodesMap.set(node[props.id], true) // 新增子节点
        node[props.children].forEach(o => {
          delNodesMap.set(o[props.id], true) // 移除父节点
        })
      } else {
        // 父节点下某一个子节点
        if (node[props.children].some(o => keysMap.has(o[props.id]))) {
          delNodesMap.set(node[props.id], true) // 移除父节点
        }
      }
    }
    itorNode(node?.__parentNode__)
  }

  keysMapNodes.forEach(v => {
    itorNode(v)
  })

  const addKeys = []
  addNodesMap.forEach((_, k) => {
    // 从新增的node集合中，去除删除的node
    if (delNodesMap.has(k)) {
      addNodesMap.delete(k)
    } else {
      addKeys.push(k)
    }
  })

  const ids = uniq(plainKeys.filter(v => !delNodesMap.has(v)).concat(addKeys))

  // console.log('formatStrategyIdsInTree', { addNodesMap, delNodesMap, ids, keys })

  if (isArray(keys[0])) {
    return ids.map(v => {
      const node = treeObjById[v]
      return node
        ? _getPathLists(node.__id__)
            .map(v => treeObjBy__id__[v]?.[props.id])
            .filter(Boolean)
        : []
    })
  }
  return ids
}

// 2, 2004, 2004004, 2004005,
// console.log(formatStrategyIdsInTree({ keys: [2, 2004, 2004004, 2004005, 1, 1001, 1002, 1003], tree }))

export default formatStrategyIdsInTree
