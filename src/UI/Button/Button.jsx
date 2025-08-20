import React from 'react'
import s from './Button.module.scss'

function Button({text, onClick, price, loc}) {
  return (
    <div>
      <button onClick={onClick} disabled={loc < price}>{text}</button>
      <small>{price}</small>
    </div>
  )
}

export default Button
