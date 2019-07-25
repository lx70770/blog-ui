import request from '../utils/request'

export function getBlogList() {
  return request('blog/list')
}
