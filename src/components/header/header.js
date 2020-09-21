import React from "react";
import headerStyles from "./header.module.css";
import {Link} from 'gatsby';
import logo from "../../../static/maxlogot3dtest.png";

export default function Header(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }

  let header = <div onClick={() => handleBodyClick('aboutme')} onKeyDown={() => handleBodyClick('aboutme')} id='aboutme'><Link to='/'><img src={logo} alt='maxkoiwai3d'></img></Link></div>
  return (
     <div className={headerStyles.header}>
    {header}
  </div>
  )
}