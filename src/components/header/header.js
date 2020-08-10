import React from "react"
import headerStyles from "./header.module.css"
export default function Header(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }

  let header = <p onClick={() => handleBodyClick('aboutme')} onKeyDown={() => handleBodyClick('aboutme')} id='aboutme'>Max Koiwai</p>
  return (
     <div className={headerStyles.header}>
        <div>
    {header}
  
      </div>
  </div>
  )
}