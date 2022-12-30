/**
 * 前端自己分页
 * @param list 集合
 * @param page 当前页
 * @param size 当前页大小
 * @returns {{total: *, list: *, currentPage: *, currentSize: *}}
 */
function pageHelper({ list = [], page = 1, size }) {
  const tempList = list.slice(size * (page - 1), size * page)
  return {
    list: tempList,
    total: list.length,
    currentPage: page,
    currentSize: size
  }
}

export default pageHelper
