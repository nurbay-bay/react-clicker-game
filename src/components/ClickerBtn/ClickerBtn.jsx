import React from 'react'
import { useRef } from "react";
import clickerImg from '../../assets/copy-paste.png'
import s from './ClickerBtn.module.scss'

const k = 0.04 // коффициент увеличение шанса бага
const delay = 500 // пауза (мсек) нужная для сброса шанса

function ClickerBtn({loc, setLoc, bugChance, setBugChance, bugs, setBugs}) {
  // реакт хук для ссылки на значение без рендора
  // использую для назначения ID на таймер
  const timerRef = useRef(null)

  // при клике
  const handleClick = () => {
    // чистка таймера по идентификатору
    if (timerRef.current) clearTimeout(timerRef.current)
    setLoc(prev => prev + 1)
    // вероятность бага
    if (Math.random() <= bugChance) setBugs(prev => prev + 1) // функциональный setState для правильной работы при кликании и будущих асинхронных обнавлениях

    // вероятность бага растет при частом клике
    setBugChance(prev => prev + (1 - prev) * k)
    timerRef.current = setTimeout(() => {
      setBugChance(0.05)
    }, delay)
  }
  

  return (
    <div>
      <button className={s.btn} onClick={handleClick}>
        <img src={clickerImg} alt="copy-paste" draggable="false"/>
      </button>
    </div>
  )
}

export default ClickerBtn
