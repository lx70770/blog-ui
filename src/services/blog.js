import request from '../utils/request'

export function getBlogList() {
  return request('article/list?limit=10&offset=0')
}
