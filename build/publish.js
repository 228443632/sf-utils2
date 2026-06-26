/**
 * @Description:
 * @Author 卞鹏飞 <228443632@qq.com>
 * @create 2026 6月 26 16:45
 */
const fs = require('node:fs')
const path = require('node:path')
// const shell = require('shelljs')

const pkgPath = path.resolve(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

const pkgClone = JSON.parse(JSON.stringify(pkg))

const devConfig = {
  exports: undefined
}

// 发布环境配置（用户安装后生效，指向 lib）
const releaseConfig = {
  // main: 'lib/index.umd.js',
  // module: 'lib/index.esm.js',
  // unpkg: 'lib/index.umd.min.js',
  // jsdelivr: 'lib/index.umd.min.js',
  // types: './lib/index.d.ts',
  exports: {
    '.': {
      import: './lib/index.esm.js',
      require: './lib/index.umd.js',
      types: './lib/index.d.ts'
    },
    './lib/*': {
      import: './lib/*',
      require: './lib/*',
      types: './lib/*.d.ts'
    },
    './types/*': {
      import: './types/*',
      require: './types/*',
      types: './types/*.d.ts'
    },
    './*': {
      import: './lib/*',
      require: './lib/*',
      types: './lib/*.d.ts'
    }
  }
}

const mode = process.argv[2]

const config = mode === 'release' ? releaseConfig : devConfig

Object.assign(pkg, config)

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
console.log(`✅ package.json 已切换为 ${mode === 'release' ? '发布' : '开发'} 模式`)

// const cmd = 'npm publish --access public --registry http://47.97.180.214:8200/'
// if (shell.exec(cmd).code !== 0) {
//   console.log(`发布成功`)
//   fs.writeFileSync(pkgPath, JSON.stringify(pkgClone, null, 2) + '\n')
//   shell.exit(1)
// }
