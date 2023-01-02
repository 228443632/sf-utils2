/**
 * 方便处理异步promise错误处理
 * @param { Promise } promise
 * @param { Object } errorExt - 可以传递给err对象的其他信息
 * @return { Promise }
 * @description 对promise二次加工
 * @example
 * const [res, err] = await asyncTo(api.xxxx)
 */
function to(promise, errorExt = {}) {
  return promise
    .then(function (data) {
      return [data, undefined]
    })
    .catch(function (err) {
      if (errorExt) {
        Object.assign(err, errorExt)
      }
      return [undefined, err]
    })
}

export default to
