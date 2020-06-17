import React from "react"
import linksStyles from "./links.module.css"
export default function Links(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }
  return (
     <div className={linksStyles.links}>
        <div>
  <p onClick={() => handleBodyClick('aboutme')}>About</p>
  <p onClick={() => handleBodyClick('projects')}>Projects</p>
  <p onClick={() => handleBodyClick('resume')}>Resume</p>
  <p onClick={() => handleBodyClick('contact')}>Contact</p>
  
    </div>
  </div>
  )
}