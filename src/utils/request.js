import axios from 'axios'
import environment from 'environment'

/**
 *
 * @param {*string} url
 * @param {*object} option
 */
export default function request(url, option = {}) {
  // 处理method
  option.method = option.method || 'get'
  option.method = option.method.toLowerCase()
  // 处理headers
  option.headers = Object.assign(
    {
      'cache-control': 'no-cache',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    option.headers ? option.headers : {}
  )
  // 设置baseUrl
  option.baseURL = environment.baseUrl
  // 请求超时时间
  option.timeout = 10000

  return new Promise((resolve, reject) => {
    axios
      .request({ ...option, url })
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}
