import React, { PureComponent } from 'react'
import { Icon } from 'antd'
import Axios from 'axios'
import { connect } from 'dva'
import { ReactComponent as Suona } from 'assets/icons/suona.svg'
import style from './style.less'

@connect()
class Home extends PureComponent {
  state = { content: '', note: '', picture2: '', tts: '' }
  constructor(props) {
    super(props)
    props.dispatch({ type: 'home/query' })
  }

  componentDidMount() {
    Axios.get('/dsapi/')
      .then(res => {
        const { content, note, picture2, tts } = res.data
        this.setState({ content, note, picture2, tts })
      })
      .catch(() => {
        //
      })
  }

  saveAudio = n => {
    this.audio = n
  }

  // 点击播放英文音频  再次点击暂停
  playAudio = () => {
    if (this.audio) {
      if (this.audio.paused) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    }
  }

  render() {
    const { content, note, picture2, tts } = this.state
    return (
      <div className={style.title}>
        <div className={style.en}>
          {content}
          <audio ref={this.saveAudio} src={tts}></audio>
          {tts ? <Icon component={Suona} onClick={this.playAudio} /> : null}
        </div>
        <div className={style.ch}>{note}</div>
        <div className={style.from}>———— &nbsp;&nbsp;金山词霸</div>
        <img className={style.img} src={picture2} alt="" />
      </div>
    )
  }
}

export default Home
