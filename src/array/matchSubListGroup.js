import isArray from 'sf-utils2/base/isArray'

/**
 * 匹配子列表,形成树状
 * @param {Array} data
 * @example
 *data = [
            {
              parent: { list: data_1, id: 'id' },
              child: { list: data_2, pId: 'parentGId' },
              fieldName: '_1children'
            }
          ]
 其中parent是父列表对象，属性：list是父列表，id是列表里面每一项主键名  （必传）
 其中child是子列表对象，属性：list是子列表，pId是列表里面每一项上级（父级）主键名 （必传）
 fieldName是生成子列表的键名, 默认值是children
 * @returns {{}}
 */
function matchSubListGroup(data = []) {
  if (isArray(data)) {
    data.forEach(v => {
      const { parent, child, fieldName = 'children' } = v
      if (isArray(parent.list) && isArray(child.list)) {
        parent.list.forEach(o => {
          if (!o[fieldName]?.length) o[fieldName] = []
          child.list.forEach(k => {
            if (k[child.pId] == o[parent.id]) {
              o[fieldName].push(k)
            }
          })
        })
      }
    })
  }
  return data[0]?.parent?.list || []
}

export default matchSubListGroup
