import React, { PureComponent } from 'react'
import router from 'umi/router'
// import PerfectScrollbar from 'react-perfect-scrollbar'
import { Icon } from 'components'
import Menu from './menu.comfig'
import User from './User'
import style from './style.less'

export default class extends PureComponent {
  renderMenu = () => {
    const { location } = this.props
    return Menu.map(item => {
      return (
        <li
          className={item.route === location.pathname ? style.activeLi : null}
          key={item.name}
          onClick={() => this.changeRouter(item.route)}>
          <Icon type={item.icon} />
          {item.name}
        </li>
      )
    })
  }

  changeRouter = route => {
    router.push(route)
  }

  newArticle = () => {
    router.push('/article')
  }

  render() {
    const { children } = this.props
    return (
      <div className={style.main}>
        <div className={style.mainMenu}>
          <ul>
            {this.renderMenu()}
            <li>
              <Icon type="gmail" />
              <a href="mailto:lx70770@gmail.com">Gmail</a>
            </li>
          </ul>
          <div className={style.user}>
            <User />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon type="add" width={22} height={22} onClick={this.newArticle} />
          </div>
        </div>
        <div className={style.container} id="container">
          <div className={style.content}>{children}</div>
        </div>
      </div>
    )
  }
}
