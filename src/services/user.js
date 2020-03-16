import request from '../utils/request'

export function register(params) {
  return request('user/register', {
    method: 'post',
    data: { ...params }
  })
}

export function login(params) {
  return request('user/login', {
    method: 'post',
    data: { ...params }
  })
}
