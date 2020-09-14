import React from "react"; 
import {Link} from 'gatsby';
import linksStyles from "./links.module.css";

export default function Links(props) {
  function handleBodyClick(comp) {
    props.setBody(comp);
  }
  
  let about = <Link to='/' onClick={() => handleBodyClick('aboutme') }id='aboutme'>About</Link>
  let projects = <Link to='/projects' onClick={() => handleBodyClick('projects')}id='project'>Projects</Link>
  let resume = <Link to='/resume' onClick={() => handleBodyClick('resume')}id='resume'>Resume</Link>
  // let resume = <p onClick={() => handleBodyClick('resume')}id='resume'>Resume</p>
  // let resume = <p><a href="MaxKoiwaiResume.pdf" >Resume</a></p>
  // let contact = <p onClick={() => handleBodyClick('contact')}id='contact'>Contact</p>
  let contact = <a href="mailto:maxjacobkoiwai@gmail.com"  target="_blank">Contact</a>
  
  switch(props.content) {
    case 'aboutme':
        about = <span><Link to='/' onClick={() => handleBodyClick('aboutme') }id='aboutme'>About</Link></span>
        break
    case 'projects':
        projects = <span><Link to='/projects' onClick={() => handleBodyClick('projects')}id='project'>Projects</Link></span>
        break
    case 'resume':
        resume = <span><Link to='/resume' onClick={() => handleBodyClick('resume')}id='resume'>Resume</Link></span>
        break
    default:
        about = <span><Link to='/' onClick={() => handleBodyClick('aboutme') }id='aboutme'>About</Link></span>

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