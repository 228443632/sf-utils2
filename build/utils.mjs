/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2022/12/30 18:42
 */
import pkg from '../package.json'
import path2 from 'node:path'
import { dirname } from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * 根项目路径
 * @type {string}
 */
export const ROOT_PATH = path2.resolve(__dirname, '../')
export const ENTRY_NAME = path2.basename(pkg.main, path2.extname(pkg.main))

export default {
  ROOT_PATH,
  ENTRY_NAME
}
