import isPromise from 'sf-utils2/base/isPromise'

/**
 * 方便处理异步promise错误处理
 * @param { Promise | any } promise
 * @param { Record<string, any> } errorExt - 可以传递给err对象的其他信息
 * @return { Promise<[any, any]> }
 * @description 对promise二次加工
 * @example
 * const [res, err] = await asyncTo(api.xxxx)
 */
async function to(promise, errorExt = {}) {
  if (isPromise(promise)) {
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

  try {
    const data = await promise
    return [data, undefined]
  } catch (err) {
    if (errorExt) {
      Object.assign(err, errorExt)
    }
    return [undefined, err]
  }
}

export default to
