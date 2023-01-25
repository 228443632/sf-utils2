/**
 * 执行异步队列，异步请求函数数组
 * @param {array<Promise>} asyncTasks
 * @param {*} initValue 初始化值
 * @returns {*}
 */
function queuePromises(asyncTasks, initValue) {
  return asyncTasks.reduce((pre, cur) => pre.then(cur), Promise.resolve(initValue))
}

export default queuePromises
