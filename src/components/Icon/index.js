import React, { PureComponent } from 'react'
import { Icon } from 'antd'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './style.less'

export default class extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    rotate: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
  }

  static defaultProps = {
    hoverable: false,
    width: 28,
    height: 28
  }

  render() {
    const { type, loading, width, height, className, style, onClick, rotate } = this.props
    if (typeof loading === 'boolean' && loading) {
      return <Icon type="loading" />
    } else if (type) {
      const imgClass = classNames({
        [className]: className,
        [styles.rotateIcon]: rotate
      })
      const dataUrl = require(`assets/icons/${type}.svg`)
      return (
        <img
          width={width}
          height={height}
          src={dataUrl}
          className={imgClass}
          style={style}
          onClick={onClick}
        />
      )
    } else return null
  }
}
