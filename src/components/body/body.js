import React from "react"
import bodyStyles from "./body.module.css"
import Links from "../links/links"
import Projects from "../projects/projects"

export default function Body(props) {
    let content
    switch(props.content) {
        case 'links':
            content = <Links setBody={props.setBody}/>
            break
        case 'projects':
            content = <Projects/>
            break
        // case resume:

        // case contact:
        
        default:
            content = <Links/>
            break
    }
  return (
     <div className={bodyStyles.body}>
        <div>
        {content}
  
    </div>
  </div>
  )
}