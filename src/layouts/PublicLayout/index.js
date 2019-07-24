import React, { PureComponent } from 'react'

export default class extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div>
        PublicLayout
        <div>{children}</div>
      </div>
    )
  }
}
