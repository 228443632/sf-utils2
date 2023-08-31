/**
 * 获取传递给 Node.js 脚本的命令行参数。
 * @return {string[]}
 * @example
 * // node my-script.js --name=John --age=30
 * getCmdArgs(); // ['--name=John', '--age=30']
 */
function getCmdArgs() {
  return process.argv.slice(2)
}
export default getCmdArgs
