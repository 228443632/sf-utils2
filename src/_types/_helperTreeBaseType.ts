/**
 * @Description: tree基础 类型申明
 * @Author bianpengfei
 * @create 2022/7/20 11:18
 */
/******************eachTree 类型申明*****************************/
/**
 * props 属性
 */
export type TEachTreeProps = Partial<{
  children:
    | string
    | 'children'
    | 'childrenList'
    | 'child'
    | 'childs'
    | 'childList'
    | 'subChild'
    | 'subChildren'
    | 'subChilds'
  order: boolean
  orderField: 'order' | string
  orderBy: 'aes' | 'desc' | 'AES' | 'DESC' | 'up' | 'down' | 'UP'
}>

/**
 * 保留字段属性
 */
export type TEachTreeRetainField = '__pathIds__' | '__pathIdsObj__' | '__allChildList__' | '__allLeafChildList__'

/**
 * 保留字段属性
 * 默认先序遍历, 可选值 preorder 先进行父->子、 postorder 后进行子->父
 */
export type TEachTreeTraversalOrder = 'preorder' | 'postorder'

/**
 * @param {any[]} list 每个节点下子节点数组
 * @param {any} parentObj 父节点对象
 */
export type TCallbackListInterface = (list: any[], parentObj: any) => boolean | undefined

/**
 * @param {any} item 当前树节点
 * @param {number} index 当前树节点索引
 * @param {any[]} list 当前树节点数组
 * @param {any} parentObj 父节点
 * @return {void|boolean}
 */
export type TCallbackItemInterface = (item: any, index: number, list: any[], parentObj: any) => boolean | undefined

/******************listToTree 类型申明*****************************/
/**
 * props 属性
 */
export type TListToTreeProp = Partial<{
  id: string | 'id'
  parentId: string | 'parentId' | 'pId' | 'pid'
  children: TEachTreeProps['children']
  order: TEachTreeProps['order']
  orderField: TEachTreeProps['orderField']
  orderBy: TEachTreeProps['orderBy']
}>

/****************** treeToList 类型申明*****************************/
/**
 * props 属性
 */
export type TTreeToListProp = Partial<{
  children: TEachTreeProps['children']
}>

/**
 * 通用方法
 */
export type TFunction = ((...args: any[]) => any) & Record<string, any>

export default {}
