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
  let contact = <Link to='/contact' onClick={() => handleBodyClick('contact')}id='contact'>Contact</Link>
  
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
    case 'contact':
        contact = <span><Link to='/contact' onClick={() => handleBodyClick('contact')}id='contact'>Contact</Link></span>
        break
    default:
        about = <span><Link to='/' onClick={() => handleBodyClick('aboutme') }id='aboutme'>About</Link></span>

    // case 'contact':
    //     contact = <span><p onClick={() => handleBodyClick('contact')}id='contact'>Contact</p></span>
    //     break
  }

  return (
    <div className={linksStyles.links}>
        
      <ul>
        <li>
        {about}
        </li>
        <li>
        {projects}
        </li>
        <li>
        {resume}
        </li>
        <li>
        {contact}
        </li>
      </ul>
    
    </div>
  )
}