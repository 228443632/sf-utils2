/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2022/12/30 18:42
 */

const path = require('path')
const pkg = require('../package.json')
const path2 = require('path')

/**
 * 根项目路径
 * @type {string}
 */
const ROOT_PATH = path.resolve(__dirname, '../')
const ENTRY_NAME = path2.basename(pkg.main, path2.extname(pkg.main))

module.exports = {
  ROOT_PATH,
  ENTRY_NAME
}
