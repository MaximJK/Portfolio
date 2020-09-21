import React from "react";
import headerStyles from "./header.module.css";
import {Link} from 'gatsby';

export default function Header(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }

  let header = <div onClick={() => handleBodyClick('aboutme')} onKeyDown={() => handleBodyClick('aboutme')} id='aboutme'><Link to='/'><img src="maxlogot3dtest.png" alt='maxkoiwai3d'></img></Link></div>
  return (
     <div className={headerStyles.header}>
    {header}
  </div>
  )
}