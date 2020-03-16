import React from 'react'
import { notification } from 'antd'
import _ from 'lodash'

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({ message, description, duration: 5 })
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
  if (_.isNumber(errObject.code) && errObject.msg) {
    const { msg, code } = errObject
    const renderMessage = () => {
      if (_.isArray(msg)) {
        return msg.map((item, index) => {
          return (
            <div key={item}>
              {index + 1}.{item}
            </div>
          )
        })
      }
      if (_.isString(msg)) {
        return msg
      }
      return 'we make some mistake!!!'
    }
    openNotificationWithIcon(
      'error',
      <div>
        <span>code:</span>
        <span>{code}</span>
      </div>,
      <>
        <div>
          <span>error mssage:</span>
          {renderMessage()}
        </div>
      </>
    )
    switch (code) {
      case 10004:
        localStorage.removeItem('token')
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
