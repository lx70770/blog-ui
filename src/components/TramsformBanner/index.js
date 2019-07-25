import React, { PureComponent } from 'react'
import style from './style.less'

export default class TramsformBanner extends PureComponent {
  componentDidMount() {
    const el = this.box
    if (el) {
      el.addEventListener('mousemove', this.tick)
      el.addEventListener('mouseleave', this.leaveTick)
    }
  }

  tick = e => {
    const el = this.box
    // todo 获取鼠标位置不准确
    let thisPX = el.getBoundingClientRect().left
    let thisPY = el.getBoundingClientRect().top
    let boxWidth = el.getBoundingClientRect().width
    let boxHeight = el.getBoundingClientRect().height

    let mouseX = e.pageX - thisPX
    let mouseY = e.pageY - thisPY
    let X
    let Y

    let ratio = boxWidth / boxHeight

    X = mouseX - boxWidth / 2
    Y = boxHeight / 2 - mouseY
    let Xdeg = Math.abs(X / 200 / ratio) > 7 ? 7 : X / 200 / ratio
    let Ydeg = Math.abs(Y / 100) > 2 ? 2 : Y / 100
    el.style.transform = `perspective(3000px) rotateY(${Xdeg}deg) rotateX(${Ydeg}deg)`
  }

  leaveTick = () => {
    const el = this.box
    el.style.transform = 'perspective(3000px) rotateY(0deg) rotateX(0deg)'
  }

  componentWillUnmount() {
    const el = this.box
    if (el) {
      el.removeEventListener('mousemove', this.tick)
      el.removeEventListener('mouseleave', this.leaveTick)
    }
  }
  render() {
    const { children } = this.props
    return (
      <div className={style.box}>
        <div className={style.banner} ref={n => (this.box = n)}>
          {children}
        </div>
      </div>
    )
  }
}
