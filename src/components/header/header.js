import React from "react";
import headerStyles from "./header.module.css";

export default function Header(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }

  let header = <div onClick={() => handleBodyClick('aboutme')} onKeyDown={() => handleBodyClick('aboutme')} id='aboutme'><img src="maxlogot3dtest.png" alt='maxkoiwai3d'></img></div>
  return (
     <div className={headerStyles.header}>
    {header}
  </div>
  )
}