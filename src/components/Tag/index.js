import React from 'react'
import className from 'classnames'
import "./index.scss";

function Tag ({ children, onClick}) {
  const styleNames = className('tag',  {
  })

  return (
    <div onClick={onClick} className={styleNames}>{children}</div>
  )
}

export default Tag