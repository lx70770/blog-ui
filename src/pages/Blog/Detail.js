import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { Pagination } from 'antd'
import style from './style.less'

export default class Detail extends PureComponent {
  state = {
    active: false
  }

  star = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const heartStyle = classNames({
      [style.heart]: true,
      [style['is-active']]: this.state.active
    })
    return (
      <div className={style.detail}>
        <div className={style.header}>
          <div className={heartStyle} onClick={this.star} />
          <Pagination simple defaultCurrent={2} total={50} />
        </div>
      </div>
    )
  }
}
