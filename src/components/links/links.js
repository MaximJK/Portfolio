import React from "react";
import { Link } from "gatsby";
import linksStyles from "./links.module.css"
export default function Links(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }
  
  let about = <p onClick={() => handleBodyClick('aboutme') }id='aboutme'>About</p>
  let projects = <p onClick={() => handleBodyClick('projects')}id='project'>Projects</p>
  let resume = <p onClick={() => handleBodyClick('resume')}id='resume'>Resume</p>
  // let resume = <p onClick={() => handleBodyClick('resume')}id='resume'>Resume</p>
  // let resume = <p><a href="MaxKoiwaiResume.pdf" >Resume</a></p>
  // let contact = <p onClick={() => handleBodyClick('contact')}id='contact'>Contact</p>
  let contact = <p><a href="mailto:maxjacobkoiwai@gmail.com"  target="_blank">Contact</a></p>
  
  switch(props.content) {
    case 'aboutme':
        about = <span><p onClick={() => handleBodyClick('aboutme') }id='aboutme'>About</p></span>
        break
    case 'projects':
        projects = <span><p onClick={() => handleBodyClick('projects')}id='project'>Projects</p></span>
        break
    case 'resume':
        resume = <span><p onClick={() => handleBodyClick('resume')}id='resume'>Resume</p></span>
        break
    // case 'contact':
    //     contact = <span><p onClick={() => handleBodyClick('contact')}id='contact'>Contact</p></span>
    //     break
  }

  return (
     <div className={linksStyles.links}>
        <div>

 {about}
 {projects}
 {resume}
 {contact}
  
    </div>
  </div>
  )
}