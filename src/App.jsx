// rfce
import { useEffect, useState } from 'react'

import ClickerBtn from './components/ClickerBtn/ClickerBtn'
import BugFixes from './components/BugFixes/BugFixes'
import s from './App.module.scss'
import Button from './UI/Button/Button'

function App() {
  // LineOfCode
  const [loc, setLoc] = useState(() => Number(localStorage.getItem("LoC")) || 0)
  // Баги
  const [bugs, setBugs] = useState(() => Number(localStorage.getItem("bugs")) || 0)
  // Базовый шанс бага
  const [bugChance, setBugChance] = useState(0.05)

  // LoC per Click
  const [locPerClick, serLocPerClick] = useState(() => Number(localStorage.getItem("locPerClick")) || 1)

  // реак хук для синхронизации с внешними данными
  useEffect(() => {
    localStorage.setItem("LoC", loc)
  }, [loc]) // зависимости

  useEffect(() => {
    localStorage.setItem("bugs", bugs)
  }, [bugs])

  useEffect(() => {
    localStorage.setItem("locPerClick", locPerClick)
  }, [locPerClick])

  const resetProgress = () => {
    setLoc(0)
    setBugs(0)
    serLocPerClick(1)
  }

  const updateLocPerClick = () => {
    if (loc >= locPerClick * 100) {
      serLocPerClick(prev => prev + 1)
      setLoc(prev => prev - (locPerClick * 100))
    }
  }
  
  return (
    <>
      <div className={s.main}>
        <div className={s.container}>
          <h1 className={s.gameName}>Developer Clicker</h1>
          <h2>{loc} <small>Line of Code (LoC)</small> </h2>
          <h2>{bugs} <small>Bugs</small> </h2>
          <h2>{(bugChance * 100).toFixed(2)}% <small>Bug Chance</small> </h2>
          <div className={s.mainBtn}>
            <ClickerBtn loc={loc} setLoc={setLoc} bugChance={bugChance} setBugChance={setBugChance} bugs={bugs} setBugs={setBugs} locPerClick={locPerClick}/>
            <BugFixes bugs={bugs} setBugs={setBugs}/>
          </div>
        </div>
        <div className={s.container}>
          <Button text={"Reset progress"} onClick={resetProgress}/>
          <Button text={"LoC Per Click +1"} onClick={updateLocPerClick} price={locPerClick * 100} loc={loc}/>
        </div>
      </div>


    </>
  )
}

export default App
