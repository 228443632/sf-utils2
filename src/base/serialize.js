import {PlainObjectType} from '@/_helper/_types'
// import 'core-js/stable/url-search-params'

/**
 * 序列化查询参数
 * @param {PlainObjectType} query
 * @return {string}
 * @example
 * serialize({id: 123, name: 'test1'} => id=123&name=test1
 */
function serialize(query) {
	query ||= {}
	const params = new URLSearchParams();
	for (let [key, value] of Object.entries(query)) {
		params.append(key, value)
	}
	return params.toString()
}

export default serialize
