/**
 * @Description: 更新包
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2023/1/5 02:33
 */
const pkg = require('../../package.json')
const fs = require('fs')
const path2 = require('path')
const utils = require('../utils')
const shell = require('shelljs')

const devDependencies = ['@bianpengfei/utils']

setTimeout(() => {
  const cmd = devDependencies
    .map(v => {
      const npm = fs.existsSync(path2.join(utils.ROOT_PATH, 'yarn.lock')) ? 'npm i' : 'yarn add'
      return `${npm} ${v}@${pkg.version} -D`
    })
    .join(' & ')
  // console.log(`开始执行[模块]=========> [${v.name}]，执行命令：${v.cmd}`)

  if (shell.exec(cmd).code !== 0) {
    shell.exit(1)
  }

  console.log('[build entry] DONE:', __filename)
}, 3000)
