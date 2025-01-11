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

/**
 * dts 文件路径
 * @type {string}
 */
const DTS_PATH = path2.join(ROOT_PATH, 'index.d.ts')

/**
 * 文档编译输出目录
 * @type {string}
 */
const DOCS_DIST = path2.join(ROOT_PATH, 'docs', '.vuepress', 'compile', 'fr', 'bianpengfei-utils')

/**
 *
 * @param {object} serverOps
 * @param {string} [serverOps.host] 服务器ip
 * @param {string} [serverOps.port] 端口一般默认22
 * @param {string} [serverOps.username] 用户名
 * @param {string} [serverOps.password] 密码
 * @param {string} [serverOps.distPath] 上传到服务器的位置
 * @param {string} [serverOps.localPath] 本地dist地址
 * @return {Promise<unknown>}
 */
const uploadFiles = (serverOps = {}) => {
  const cwd = process.cwd()
  // 上传文件
  serverOps = {
    host: '10.85.21.59', // 服务器ip 116.62.4.240 49.235.180.55
    port: '22', // 端口一般默认22
    username: 'root', // 用户名
    password: 'zsamc2023', // 密码
    distPath: '/data/app/zsamc-pages/frontEnd/micro-authv2', // 上传到服务器的位置
    localPath: path.resolve(cwd, 'dist'), // 本地打包的存放的地址
    ...serverOps
  }
  return new Promise((resolve, reject) => {
    // 引入scp2
    const client = require('scp2')
    const ora = require('ora')
    const spinner = ora('正在发布到服务器...')

    const { Client } = require('ssh2')
    const conn = new Client()

    console.log('开始建立连接...')
    conn
      .on('ready', () => {
        console.log(`已连接，正在删除 ${serverOps.distPath}/* 下文件`)
        conn.exec(`mkdir -p ${serverOps.distPath}; rm -rf ` + serverOps.distPath + '/*', err => {
          if (err) throw err
          console.log('删除成功，正在开始上传...')
          spinner.start()
          client.scp(
            serverOps.localPath,
            {
              host: serverOps.host,
              port: serverOps.port,
              username: serverOps.username,
              password: serverOps.password,
              path: serverOps.distPath
            },
            err => {
              spinner.stop()
              if (!err) {
                resolve()
                console.log(`项目发布完毕 👏👏👏，地址：${serverOps.host}:${serverOps.distPath}`)
              } else {
                console.log('err', err)
                reject(err)
              }
              conn.end()
            }
          )
        })
      })
      .connect({
        host: serverOps.host,
        port: serverOps.port,
        username: serverOps.username,
        password: serverOps.password
        // privateKey: '' // 私秘钥
      })
  })
}

module.exports = {
  ROOT_PATH,
  ENTRY_NAME,
  DTS_PATH,
  uploadFiles,
  DOCS_DIST
}
