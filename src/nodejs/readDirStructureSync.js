const path2 = require('path')
const fs = require('fs')
const { listToTree } = require('@bianpengfei/utils')

/**
 * 根据路径 获取其下所有子文件包括文件夹路径，返回平面list 和 树状tree
 * @param {string} dir 目录
 * @returns {{tree: *, list: {path: *, relativePath: *, id: *, type: *, parentId: string, fileName: string | undefined | null}[]}}
 */
function readDirStructureSync(dir = '') {
  const itors = (dirName, result = []) => {
    const dirStat = fs.existsSync(dirName) && fs.statSync(dirName)
    if (dirStat) {
      if (dirStat?.isDirectory?.()) {
        fs.readdirSync(dirName).forEach(v => {
          const absPath = path2.join(dirName, v)
          const stat = fs.statSync(path2.join(absPath))
          if (stat.isDirectory()) {
            // 是目录，即有children
            result.push({ path: absPath, type: 'dir', rootDir: dir, fileName: undefined })
            itors(absPath, result)
          } else if (stat.isFile()) {
            // 是文件
            const fileName = path2.basename(absPath)
            result.push({ path: absPath, type: 'file', rootDir: dir, fileName })
          } else {
            result.push({ path: absPath, type: 'unknown', rootDir: dir, fileName: undefined })
          }
        })
      } else if (dirStat.isFile?.()) {
        const fileName = path2.basename(dirName)
        result.push({ path: dirName, type: 'file', rootDir: dir, fileName })
      }
    }
    return result
  }
  const list = itors(dir).map(v => {
    const parentPath = path2.join('/', v.path.split('/').slice(0, -1).join('/'))
    return {
      path: v.path, // 绝对路径
      parentPath, // 父目录 绝对路径
      ext: path2.extname(v.path), // 拓展名
      type: v.type, // 类型 file 或 dir
      relativePath: v.path.replace(dir, '').split('/').filter(Boolean).join('/'), // 相对路径
      rootDir: dir, // 根路径
      fileName: v?.fileName, // 如果是文件，显示文件名
      isRoot: v.path === dir // 是否根路径文件夹
    }
  })
  const tree = listToTree({
    list: list,
    root: dir,
    isDeepClone: true,
    props: { id: 'path', parentId: 'parentPath', children: 'children' }
  })

  return {
    list,
    tree
  }
}

module.exports = readDirStructureSync
