import React, { PureComponent } from 'react'
import { List, Tag, Icon, Button } from 'antd'
import style from './style.less'

const listData = []
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    isNew: i === 0 || i === 1 || i === 2
  })
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export default class Lists extends PureComponent {
  render() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        loadMore={
          <div className={style.loadMore}>
            <Button onClick={this.loadMore} type="primary" shape="round" size="small">
              加载更多
            </Button>
          </div>
        }
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />
            ]}
            extra={
              <img
                width={180}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }>
            <List.Item.Meta
              title={
                <>
                  {item.isNew ? <Tag color="red">new</Tag> : null}
                  <div href={item.href}>{item.title}</div>
                </>
              }
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }
}
