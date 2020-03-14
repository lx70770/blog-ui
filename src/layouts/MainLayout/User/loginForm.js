import React, { PureComponent } from 'react'
import style from './style.less'

export default class loginForm extends PureComponent {
  render() {
    return (
      <>
        <div className={style.item}>
          <h4>用户名</h4>
          <input placeholder="用户名" />
        </div>

        <div className={style.item}>
          <h4>密码</h4>
          <input placeholder="密码" />
        </div>

        <button>登录</button>
      </>
    )
  }
}
