import router from 'umi/router'

// 以后可以根据不同的code做不同的操作
const checkResponse = response => {
  if (response.data && response.data.code) {
    switch (response.data.code) {
      case 0:
        return response
      case -1: {
        router.replace('/public/login')
        break
      }
      default: {
        throw new Error('未登录')
      }
    }
  }
  return response
}

export default checkResponse
