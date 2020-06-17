import React from "react"
import bodyStyles from "./body.module.css"
import Links from "../links/links"
import Projects from "../projects/projects"
import Resume from "../resume/resume"
import Contact from "../contact/contact"
import Aboutme from "../aboutme/aboutme"

export default function Body(props) {
    let content
    switch(props.content) {
        // case 'links':
        //     content = <Links setBody={props.setBody}/>
        //     break
        case 'projects':
            content = <Projects/>
            break
        case 'resume':
            content = <Resume/>
            break
        case 'contact':
            content = <Contact/>
            break
        case 'aboutme':
            content = <Aboutme/>
            break
        // default:
        //     content = <Links/>
        //     break
    }
  return (
     <div className={bodyStyles.body}>
        <div>
        {content}
  
    </div>
  </div>
  )
}