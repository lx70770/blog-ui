import { notification } from 'antd'

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({ message, description, duration: null })
}

const handleError = err => {
  const errObject = { ...err }
  let message = ''
  let description = ''
  if (err.message && err.message.indexOf('timeout') >= 0) {
    message = '接口超时'
    description = errObject.config.url
    openNotificationWithIcon('error', message, description)
  }
  if (errObject.response && errObject.response.status) {
    switch (errObject.response.status) {
      case 504: {
        message = '服务器无法连接，请稍后重试'
        description = errObject.config.url
        openNotificationWithIcon('error', message, description)
        return
      }
      case 500: {
        message = '服务器异常，请刷新重试'
        description = errObject.config.url
        openNotificationWithIcon('error', message, description)
        return
      }
      case 502: {
        message = '服务器无法连接'
        description = errObject.config.url
        openNotificationWithIcon('error', message, description)
        return
      }
      default: {
        message = '未知错误，稍后重试'
        openNotificationWithIcon('error', message)
        return
      }
    }
  }
}

export const dva = {
  config: {
    onError(err) {
      err.preventDefault()
      handleError(err)
    }
  }
}
