import router from 'umi/router'
import _ from 'lodash'

class HttpError extends Error {
  constructor(msg = ['something warong'], code = 400) {
    super()
    this.msg = msg
    this.code = code
  }
}

// 以后可以根据不同的code做不同的操作
const checkResponse = response => {
  if (response.data && _.isNumber(response.data.code)) {
    switch (response.data.code) {
      case 0:
        return response.data
      case -1: {
        router.replace('/public/login')
        break
      }
      default: {
        const { msg, code } = response.data
        throw new HttpError(msg, code)
      }
    }
  }
  return response
}

export default checkResponse
