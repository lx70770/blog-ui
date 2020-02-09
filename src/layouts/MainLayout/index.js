import React, { PureComponent } from 'react'
import router from 'umi/router'
import PerfectScrollbar from 'react-perfect-scrollbar'
// import moment from 'moment'
import Menu from './menu.comfig'
import style from './style.less'

export default class extends PureComponent {
  componentDidMount() {
    const { location } = this.props
    if (location.pathname === '/main/about') {
      document.body.style.backgroundColor = '#222'
    }
  }
  renderMenu = () => {
    const { location } = this.props
    return Menu.map(item => {
      return (
        <li
          className={item.route === location.pathname ? style.activeLi : null}
          key={item.name}
          onClick={() => this.changeRouter(item.route)}>
          {item.name}
        </li>
      )
    })
  }

  changeRouter = route => {
    router.push(route)
    if (route === '/main/about') {
      document.body.style.backgroundColor = '#222'
    } else {
      document.body.style.backgroundColor = '#fff'
    }
  }

  render() {
    const { children, location } = this.props
    let isAboutRouter = location.pathname === '/main/about'
    return (
      <div className={style.main}>
        <div className={style.mainHeader}>
          <div className={style.left}>
            <ul style={{ color: isAboutRouter ? '#ddd4d4' : '#131313' }}>{this.renderMenu()}</ul>
          </div>
          <div className={style.middle}>
            {/* <img src={require('assets/imgs/logo.png')} alt="" /> */}
          </div>
          <div className={style.right}>
            <ul style={{ color: isAboutRouter ? '#ddd4d4' : '#131313' }}>
              <li className={style.weichat}>
                WeChat
                <img src={require('assets/imgs/weichatQrcode.png')} alt="" />
              </li>
              <li>
                <a
                  style={{ color: isAboutRouter ? '#ddd4d4' : '#131313' }}
                  href="mailto:lx70770@gmail.com">
                  Gmail
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.container}>
          <PerfectScrollbar>{children}</PerfectScrollbar>
        </div>
        <div className={style.footer} style={{ color: isAboutRouter ? '#ddd4d4' : '#131313' }}>
          <div
            className={style.divider}
            style={{ backgroundColor: isAboutRouter ? '#ddd4d4' : '#131313' }}
          />
          © 2019 lx70770. All rights reserved.
        </div>
      </div>
    )
  }
}
