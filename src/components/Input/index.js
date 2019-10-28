import React, { useState } from 'react';
import className from 'classnames'
import './index.scss';

function ErrorMessage ({ error }) {
  return (
    <span>
      {error.message}
    </span>
  )
}

function Hint ({ hints, onItemClick }) {
  const hintItems = hints.map((hint, hintIndex) => (
    <div key={hintIndex} onClick={(e) => onItemClick(hint)} className="input-hint__item">選項一</div>
  ))
  return (
    <div className="input-hint">
      {hintItems}
    </div>
  )
}

function Input ({ value, label = '', type = 'text', hints = [], min = null, max = null, onChange, onFocus, onHintClick, onEnter, onBlur, placeholder, errors = [], block }) {
  const [focus, setFocus] = useState(false)
  const onKeyUp = e => e.keyCode === 13 && onEnter(e)
  const onHintItemClick = hint => onHintClick(hint)
  const onInputFocus = e => {
    setFocus(true)
    onFocus && onFocus(e)
  }
  const onInputBlur = e => {
    setFocus(false)
    onBlur && onBlur(e)
  }
  const classNames = className(
    'input',
    { 'input--error': !!errors.length },
    { 'input--block': block}
  )

  return (
    <div className={classNames}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        min={min}
        max={max}
        onChange={onChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        onKeyUp={onKeyUp}
      ></input>
      {
        errors.length ? <div className="input-error">
          <ErrorMessage error={errors[0]}></ErrorMessage>
        </div> : false
      }
      {
        focus && hints.length ? <Hint hints={hints} onItemClick={onHintItemClick}></Hint>: false
      }
    </div>
  )
}

export default Input;