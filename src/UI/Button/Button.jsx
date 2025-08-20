import React from 'react'
import s from './Button.module.scss'

function Button({text, onClick}) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
