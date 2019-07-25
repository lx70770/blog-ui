import React, { PureComponent } from 'react'
import TramsformBanner from 'components/TramsformBanner'
import style from './style.less'

export default class About extends PureComponent {
  render() {
    return (
      <div className={style.about}>
        <div className={style.tagLine}>Hey There.</div>
        <div className={style.tagLine}>Just Another Font-End Progmmer.</div>
        <div className={style.tagLine}>And know a little about Life.</div>
        <TramsformBanner>
          <div className={style.aboutProgmme}>
            <div className={style.left}>
              <h4>关于本站</h4>
              <span>我特别喜欢下雨天,所以这个博客诞生了</span>
              <br />
              <span>作用是记录生活点滴,记录好点子</span>
              <br />
              <span>所以它什么都有,技术文章、旅行趣事、美丽照片,或者是一本好书</span>
            </div>
            <div className={style.right}>
              <img src={require('assets/imgs/console.png')} alt="" />
            </div>
          </div>
        </TramsformBanner>

        <div className={style.aboutMe}>
          <div className={style.left}>
            <h4>关于我</h4>
            <span>
              2018年重庆交通大学本科计算机专业毕业,前端开发工程师一枚,当然,我也有一颗全栈的心😝
            </span>
            <br />
            <span>目前漂泊于上海,在每天三点一线的生活中,我总是能找到一些生活里的小美好</span>
            <br />
            <span>如果对我滴博客感兴趣,请hover上面的二维码我们一起学习进步</span>
          </div>
          <div className={style.right}></div>
        </div>
      </div>
    )
  }
}
