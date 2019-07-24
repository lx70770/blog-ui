import React, { PureComponent } from 'react'
import { connect } from 'dva'

@connect()
class Home extends PureComponent {
  constructor(props) {
    super(props)
    props.dispatch({ type: 'home/query' })
  }

  render() {
    return <div>首页</div>
  }
}

export default Home
