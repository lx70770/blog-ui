import React, { PureComponent } from 'react'
import { connect } from 'dva'
import immer from 'immer'
import { message } from 'antd'
import {
  validatorEmail,
  validatorPassword1,
  validatorPassword2,
  validatorUserName
} from './valiadtor'
import style from './style.less'

@connect()
class SingupForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: '',
        error: false
      },
      password1: {
        value: '',
        error: false
      },
      password2: {
        value: '',
        error: false
      },
      email: {
        value: '',
        error: false
      }
    }
  }

  setError = (type, error, value) => {
    const params = immer(this.state[type], draft => {
      draft.error = error
      draft.value = value
    })
    this.setState({ [type]: params })
  }

  validate = (value, type) => {
    switch (type) {
      case 'username':
        this.setError('username', !validatorUserName(value), value)
        return
      case 'password1':
        this.setError('password1', !validatorPassword1(value), value)
        return
      case 'password2':
        this.setError('password2', !validatorPassword2(this.state.password1.value, value), value)
        return
      case 'email':
        this.setError('email', !validatorEmail(value), value)
        return
    }
  }
  register = () => {
    const { username, password1, password2, email } = this.state
    this.validate(username.value, 'username')
    this.validate(password1.value, 'password1')
    this.validate(password2.value, 'password2')
    this.validate(email.value, 'email')
    if (username.error || password1.error || password2.error || email.error) {
      return
    }
    if (
      username.value === '' ||
      password1.value === '' ||
      password2.value === '' ||
      email.value === ''
    ) {
      return
    }
    const params = {
      username: username.value,
      password1: password1.value,
      password2: password2.value,
      email: email.value
    }
    const { toggle } = this.props
    this.props
      .dispatch({
        type: 'user/register',
        payload: params
      })
      .then(res => {
        if (res.code === 0) {
          message.success('注册成功，请登录')
          toggle('signIn')
        }
      })
  }

  render() {
    const { username, password1, password2, email } = this.state
    return (
      <>
        <div className={style.item}>
          <h4>用户名</h4>
          <input
            className={username.error ? style.error : null}
            placeholder="用户名"
            autoComplete="off"
            value={username.value}
            onChange={e => this.validate(e.target.value, 'username')}
          />
        </div>

        <div className={style.item}>
          <h4>密码</h4>
          <input
            className={password1.error ? style.error : null}
            type="password"
            placeholder="请输入密码"
            autoComplete="off"
            value={password1.value}
            onChange={e => this.validate(e.target.value, 'password1')}
          />
        </div>

        <div className={style.item}>
          <h4>确认密码</h4>
          <input
            className={password2.error ? style.error : null}
            type="password"
            id="password"
            placeholder="请输入密码"
            autoComplete="nope"
            οnfοcus="this.type='password'"
            value={password2.value}
            onChange={e => this.validate(e.target.value, 'password2')}
          />
        </div>

        <div className={style.item}>
          <h4>Email</h4>
          <input
            placeholder="Email"
            className={email.error ? style.error : null}
            value={email.value}
            onChange={e => this.validate(e.target.value, 'email')}
          />
        </div>

        <button onClick={this.register}>注册</button>
      </>
    )
  }
}

export default SingupForm
