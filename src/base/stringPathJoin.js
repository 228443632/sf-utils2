/**
 * 连接任意多个路径字符串
 * @param {any} args
 * @return {string}
 */
function stringPathJoin(...args) {
  const startRegex = /^\/\/?/
  const endRegex = /\/\/?$/
  const paths = args
    .reduce((pre, cur, curIdx) => {
      cur = String(cur).trim().replace(startRegex, '')
      if (curIdx != args.length - 1) {
        // 如果是非最后一个
        cur = cur.replace(endRegex, '')
      }
      pre.push(cur)
      return pre
    }, [])
    .filter(Boolean)
  let pathString = paths.join('/')
  const $start = args.at(0) || '/'
  // const $end = args.at(-1)
  if (startRegex.test($start)) {
    // 开始，开头斜杠
    pathString = '/' + pathString
  }
  return pathString
}

export default stringPathJoin
