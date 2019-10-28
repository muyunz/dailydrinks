import React from 'react'
import className from 'classnames'
import "./index.scss";

function Button ({ primary, label, onClick, ghost, small, danger}) {
  const styles = className('btn',  {
    'btn--primary': primary,
    'btn--danger': danger,
    'btn--small': small,
    'btn--ghost': ghost
  })

  return (
    <button onClick={onClick} className={styles}>{label}</button>
  )
}

export default Button