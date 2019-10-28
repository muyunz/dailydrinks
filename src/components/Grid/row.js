import React from 'react'
import classNames from 'classnames'

export default function Row ({ children, className }) {
  const styleNames = classNames('row', className)
  return (
    <div className={styleNames}>
      {children}
    </div>
  )
}