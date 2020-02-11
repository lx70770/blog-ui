import React from 'react'
import Lists from './Lists'
import Detail from './Detail'
import style from './style.less'

const Blog = () => {
  return (
    <div className={style.wrap}>
      <Lists />
      <Detail />
    </div>
  )
}

export default Blog
