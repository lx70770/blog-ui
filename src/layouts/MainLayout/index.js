import React, { PureComponent } from 'react'
import router from 'umi/router'
// import moment from 'moment'
import Menu from './menu.comfig'
import style from './style.less'

export default class extends PureComponent {
  renderMenu = () => {
    const { location } = this.props
    return Menu.map(item => {
      return (
        <li
          className={item.route === location.pathname ? style.activeLi : null}
          key={item.name}
          onClick={() => router.push(item.route)}>
          {item.name}
        </li>
      )
    })
  }

  render() {
    const { children } = this.props
    return (
      <div className={style.main}>
        <div className={style.mainHeader}>
          <div className={style.left}>
            <ul>{this.renderMenu()}</ul>
          </div>
          {/* <div className={style.middle}>{moment().format('dddd')},很高兴遇见你</div> */}
          <div className={style.right}>
            <ul>
              <li>
                <img src={require('assets/icons/github.svg')} width={21} height={21} />
              </li>
              <li className={style.weichat}>
                WeChat
                <img src={require('assets/imgs/weichatQrcode.png')} alt="" />
              </li>
              <li>
                <a href="mailto:lx70770@gmail.com">Gmail</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.container}>{children}</div>
        <div className={style.footer}>
          <div className={style.divider} />© 2019 lx70770. All rights reserved.
        </div>
      </div>
    )
  }
}
