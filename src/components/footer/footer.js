import React from "react"
import footerStyles from "./footer.module.css"
export default function Footer(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }
  let backButton = ''
  if (props.content !== 'links') {
    backButton = <p onClick={() => handleBodyClick('links')}>back</p>

  }
  return (
     <div className={footerStyles.footer}>
        <div>
        {backButton}
  
    </div>
  </div>
  )
}