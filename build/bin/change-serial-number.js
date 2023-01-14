/**
 * @Description: 序号新增1
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2023/1/2 16:17
 */
const fs = require('fs')
const path2 = require('path')
const utils = require('../utils')

const config = {
  dir: path2.join(utils.ROOT_PATH, 'docs/01.指南/03.对象-Object'), // 目标目录
  startFile: 'convertPropToLower.md', // 开始文件名称 包括
  endFile: '', // 结束文件名称 包括
  step: 3  // 增长步数
}

const files = fs.readdirSync(config.dir)
let startFileIdx = files.findIndex(v => v.split('.').slice(1).join('.') === config.startFile)
let endFileIdx = files.findIndex(v => v.split('.').slice(1).join('.') === config.endFile)

startFileIdx = ~startFileIdx ? startFileIdx : 0
endFileIdx = ~endFileIdx ? endFileIdx : files.length - 1

console.log('startFileIdx', startFileIdx)
console.log('endFileIdx', endFileIdx)

files.forEach((v, vi) => {
  if (vi >= startFileIdx && vi <= endFileIdx) {
    const serialNos = v.split('.')
    if (serialNos.length === 3) {
      let [serialNo, fileName, ext] = serialNos
      serialNo = +serialNo + config.step
      const oldPath = path2.join(config.dir, v)
      const newPath = path2.join(config.dir, `${String(serialNo).padStart(2, '0')}.${fileName}.${ext}`)
      fs.renameSync(oldPath, newPath)
      console.log('修改的文件', oldPath)
    }
  }
})

