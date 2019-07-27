import React, { PureComponent } from 'react'
import QueueAnim from 'rc-queue-anim'
import TramsformBanner from 'components/TramsformBanner'
import style from './style.less'

export default class About extends PureComponent {
  render() {
    return (
      <div className={style.about}>
        <div className={style.selfComments}>
          <QueueAnim delay={300}>
            <div className={style.tagLine} key="b">
              我特别喜欢下雨天 所以这个博客诞生了
            </div>
            <div className={style.tagLine} key="c">
              作用是记录生活点滴 记录好点子
            </div>
            <div className={style.tagLine} key="d">
              所以它什么都有 技术文章、旅行趣事、美丽照片 或是一本好书
            </div>
          </QueueAnim>
        </div>
        <TramsformBanner>
          <div className={style.aboutProgmme}>
            <QueueAnim
              className={style.left}
              delay={600}
              animConfig={[{ opacity: [1, 0], translateY: [0, 50] }]}>
              <h4 key="a">关于我</h4>
              <span key="b">
                2018年重庆交通大学本科计算机专业毕业,前端开发工程师一枚,当然,我也有一颗全栈的心😝
              </span>
              <span key="c">漂泊于上海,在每天三点一线的生活中,我总是能找到一些生活里的小美好</span>
              <span key="d">如果对我滴博客感兴趣,请hover右上角的二维码我们一起学习进步</span>
              <span key="e">
                目前正在寻找上海和成都的工作,如果您的公司有前端开发职位空缺,也可以联系我哦
              </span>
            </QueueAnim>
            <div className={style.right}>
              <img src={require('assets/imgs/console.png')} alt="" />
            </div>
          </div>
        </TramsformBanner>

        <div className={style.aboutMe}>
          <div className={style.left}>
            <h4>关于本站</h4>
            <span>本站采用流行的React全家桶开发</span>
            <span>主要的技术栈:&nbsp;&nbsp;Ant-Design Redux Redux-saga G2 ES6 HTML5 CSS3</span>
            <span>后端则采用Express+MySQL开发 Nginx实现反向代理 Redis作为session数据库</span>
            <span>部署于阿里云ECS</span>
            <span>您可以在GitHub中找到本站所有相关代码</span>
            <div className={style.github}>
              <span>前端相关&gt;</span>
              <span>Express相关&gt;</span>
            </div>
          </div>
          <div className={style.right} />
        </div>
      </div>
    )
  }
}
