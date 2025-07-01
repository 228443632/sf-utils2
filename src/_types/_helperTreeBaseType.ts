/**
 * @Description: tree基础 类型申明
 * @Author bianpengfei
 * @create 2022/7/20 11:18
 */
/******************eachTree 类型申明*****************************/
import { type TPrettifyString } from 'sf-utils2/types/generic-helper.ts'

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
export type TCallbackListInterface = (list: any[], parentObj: any) => boolean | void

/**
 * @param {any} item 当前树节点
 * @param {number} index 当前树节点索引
 * @param {any[]} list 当前树节点数组
 * @param {any} parentObj 父节点
 * @return {void|boolean}
 */
export type TCallbackItemInterface = (item: any, index: number, list: any[], parentObj: any) => boolean | void

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

/**
 * 二进制转化参数
 */
export type TBaseBlobArrayBufferTransferOptions = {
  /** */
  mimeType?: TPrettifyString<
    // === 标准文本/数据格式 ===
    | 'text/plain'
    | 'text/html'
    | 'text/xml'
    | 'text/css'
    | 'text/javascript'
    | 'application/json'
    | 'application/xml'
    | 'text/markdown'
    | 'text/x-java'
    | 'text/x-php'
    | 'text/x-python'
    | 'text/x-javascript'
    | 'text/x-css'

    // === 图像格式 ===
    | 'image/jpeg'
    | 'image/png'
    | 'image/gif'
    | 'image/webp'
    | 'image/bmp'
    | 'image/vnd.microsoft.icon'
    | 'image/tiff'
    | 'image/x-tiff'
    | 'image/x-targa'
    | 'image/svg+xml'
    | 'image/x-icon'
    | 'image/jfif'
    | 'image/x-png'

    // === 音频/视频格式 ===
    | 'audio/mpeg'
    | 'audio/wav'
    | 'audio/ogg'
    | 'video/mp4'
    | 'video/webm'
    | 'video/ogg'
    | 'video/quicktime'
    | 'video/x-msvideo'
    | 'video/x-flv'
    | 'video/x-matroska'
    | 'video/x-ms-asf'
    | 'video/3gpp'
    | 'video/3gpp2'

    // === 办公文档（Microsoft Office） ===
    | 'application/msword'
    | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    | 'application/vnd.ms-excel'
    | 'application/vnd.ms-powerpoint'
    | 'application/vnd.openxmlformats-officedocument.wordprocessingml.template'
    | 'application/vnd.openxmlformats-officedocument.spreadsheetml.template'
    | 'application/vnd.openxmlformats-officedocument.presentationml.template'
    | 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    | 'application/vnd.ms-excel.addin.macroEnabled.12'

    // === WPS Office ===
    | 'application/vnd.wps-office.doc'
    | 'application/vnd.wps-office.dps'
    | 'application/vnd.wps-office.et'
    | 'application/vnd.wps-office.ett'
    | 'application/vnd.wps-office.wpt'

    // === OpenOffice/LibreOffice ===
    | 'application/vnd.oasis.opendocument.text'
    | 'application/vnd.oasis.opendocument.spreadsheet'
    | 'application/vnd.oasis.opendocument.presentation'
    | 'application/vnd.oasis.opendocument.graphics'
    | 'application/vnd.sun.xml.writer'
    | 'application/vnd.sun.xml.calc'
    | 'application/vnd.sun.xml.draw'
    | 'application/x-fopd'

    // === PDF/OFD/RTF ===
    | 'application/pdf'
    | 'application/vnd.ofd+zip'
    | 'application/rtf'

    // === 3D 模型 ===
    | 'model/obj'
    | 'model/3mf'
    | 'model/stl'
    | 'model/gltf+json'
    | 'model/gltf-binary'
    | 'model/iges'
    | 'model/step+zip'
    | 'model/vnd.collada+xml'
    | 'model/vnd.dwf'
    | 'model/vnd.autodesk.fbx'
    | 'model/vnd.dwg'
    | 'model/vnd.dxf'

    // === CAD/Visio/流程图 ===
    | 'application/vnd.visio'
    | 'application/vnd.visio2013'
    | 'application/x-wmf'
    | 'application/x-emf'
    | 'application/x-bpmn+xml'

    // === 电子书/邮件/其他 ===
    | 'application/epub+zip'
    | 'message/rfc822'
    | 'application/xmind'
    | 'application/vnd.xmind'

    // === 压缩包 ===
    | 'application/zip'
    | 'application/x-rar-compressed'
    | 'application/x-7z-compressed'
    | 'application/gzip'
    | 'application/x-tar'
    | 'application/java-archive'

    // === 其他二进制文件 ===
    | 'application/octet-stream'
    // 自定义或非标准类型（通过 `(string & {})` 支持）
  >
}

export default {}
