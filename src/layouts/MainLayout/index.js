import React, { PureComponent } from 'react'
import moment from 'moment'
import style from './style.less'

export default class extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div className={style.main}>
        <div className={style.mainHeader}>
          <div className={style.left}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Element</li>
            </ul>
          </div>
          <div className={style.middle}>{moment().format('dddd')},很高兴遇见你</div>
          <div className={style.right}>
            <ul>
              <li>WeiChart</li>
              <li>Gmail</li>
            </ul>
          </div>
        </div>
        <div className={style.container}>{children}</div>
      </div>
    )
  }
}
