import React, { PureComponent } from 'react'
import { Icon } from 'components'
import { Modal } from 'antd'
import className from 'classnames'
import LoginForm from './loginForm'
import SingupForm from './singupForm'
import style from './style.less'

export default class User extends PureComponent {
  state = { visible: false, loginType: 'singIn' }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  toggle = type => {
    this.setState({ loginType: type })
  }

  render() {
    const { loginType } = this.state
    const active = type => {
      return className({
        [style.active]: type === loginType
      })
    }
    const renderLoginType = () => {
      switch (loginType) {
        case 'singIn':
          return <LoginForm />
        case 'singUp':
          return <SingupForm />
      }
    }
    return (
      <>
        <Icon type="user" onClick={this.showModal} />
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          closable={false}
          width={800}
          footer={null}>
          <div className={style.userModal}>
            <div className={style.left}></div>
            <div className={style.right}>
              <div className={style.header}>
                <div className={style.switch}>
                  <div onClick={() => this.toggle('singIn')} className={active('singIn')}>
                    登录
                  </div>
                  <div onClick={() => this.toggle('singUp')} className={active('singUp')}>
                    注册
                  </div>
                </div>
              </div>
              <div className={style.form}>{renderLoginType()}</div>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}
