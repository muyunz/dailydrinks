import React from 'react'
import classNames from 'classnames'

export default function Col ({ className, children, size }) {
  const styles = classNames('col', className, {
    [`col-${size}`]: size !== undefined,
  })
  return (
    <div className={styles}>
      {children}
    </div>
  )
}