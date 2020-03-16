import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { message } from 'antd'
import immer from 'immer'
import { validatorPassword1, validatorUserName } from './valiadtor'
import style from './style.less'

@connect()
class LoginForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: '',
        error: false
      },
      password: {
        value: '',
        error: false
      }
    }
  }

  setError = (type, error) => {
    const params = immer(this.state[type], draft => {
      draft.error = error
    })
    this.setState({ [type]: params })
  }

  setValue = (value, type) => {
    const params = immer(this.state[type], draft => {
      draft.value = value
      draft.error = false
    })
    this.setState({ [type]: params })
  }

  validate = () => {
    const { username, password } = this.state
    if (!validatorUserName(username.value)) {
      this.setError('username', true)
      return
    }
    if (!validatorPassword1(password.value)) {
      this.setError('password', true)
      return
    }
    const { handleCancel } = this.props
    const params = {
      username: username.value,
      password: password.value
    }
    this.props
      .dispatch({
        type: 'user/login',
        payload: params
      })
      .then(res => {
        if (res) {
          message.success('登录成功')
          handleCancel()
        }
      })
  }

  render() {
    const { username, password } = this.state
    return (
      <>
        <div className={style.item}>
          <h4>用户名</h4>
          <input
            placeholder="用户名"
            onChange={e => this.setValue(e.target.value, 'username')}
            className={username.error ? style.error : null}
          />
        </div>

        <div className={style.item}>
          <h4>密码</h4>
          <input
            placeholder="密码"
            onChange={e => this.setValue(e.target.value, 'password')}
            className={password.error ? style.error : null}
          />
        </div>

        <button onClick={this.validate}>登录</button>
      </>
    )
  }
}

export default LoginForm
