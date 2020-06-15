import React from "react"
import linksStyles from "./links.module.css"
export default function Links(props) {
  function handleBodyClick(comp) {
    // Similar to this.setState({ fruit: 'orange' })
    props.setBody(comp);
  }
  return (
     <div className={linksStyles.links}>
        <div>
  <p onClick={() => handleBodyClick('projects')}>Projects</p>
  <p onClick={() => handleBodyClick('resume')}>Resume</p>
  <p onClick={() => handleBodyClick('contact')}>Contact</p>
  
    </div>
  </div>
  )
}