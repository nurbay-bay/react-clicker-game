import React from 'react'
import bugFixesImg from '../../assets/bug-fixes.png'
import s from './BugFixes.module.scss'

function BugFixes({bugs, setBugs}) {
  return (
    <div>
      <button className={s.btn} disabled={bugs === 0}>
        <img src={bugFixesImg} alt="bug-fixes" draggable="false"/>
      </button>
    </div>
  )
}

export default BugFixes
