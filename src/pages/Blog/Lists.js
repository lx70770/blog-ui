import React, { PureComponent } from 'react'
import { Icon } from 'components'
import { Button, Avatar, Typography } from 'antd'
import PerfectScrollbar from 'react-perfect-scrollbar'
import style from './style.less'

const { Paragraph, Title } = Typography

const listData = []
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    isNew: i === 0 || i === 1 || i === 2
  })
}

export default class Lists extends PureComponent {
  componentDidMount() {
    document.querySelector('#container').style.overflow = 'hidden'
  }
  componentWillUnmount() {
    document.querySelector('#container').style.overflow = 'auto'
  }
  render() {
    return (
      <div className={style.blogList}>
        <div className={style.search}>
          <input placeholder="Search with Enter" />
          <Icon type="search" />
        </div>
        <div className={style.action}>
          <Icon type="sort" widih={18} height={18} />
        </div>
        <PerfectScrollbar>
          {listData.map(item => {
            return (
              <div key={item.title} className={style.blog}>
                <div className={style.tag} />
                <div className={style.avatar}>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </div>
                <div className={style.content}>
                  <Title ellipsis={{ rows: 1 }} level={4}>
                    {item.title}
                    {item.title}
                    {item.title}
                  </Title>
                  <Paragraph ellipsis={{ rows: 2 }}>
                    Ant Design, a design language for background applications, is refined by Ant UED
                    Team. Ant Design, a design language for background applications, is refined by
                    Ant UED Team. Ant Design, a design language for background applications, is
                    refined by Ant UED Team. Ant Design, a design language for background
                    applications, is refined by Ant UED Team. Ant Design, a design language for
                    background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.
                  </Paragraph>
                </div>
              </div>
            )
          })}
          <div className={style.loadMore}>
            <Button type="primary" shape="round" size="small">
              加载更多
            </Button>
          </div>
        </PerfectScrollbar>
      </div>
    )
  }
}
