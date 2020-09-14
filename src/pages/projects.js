import React, { useState } from "react";
import projectsStyles from "./projects.module.css";
import op from "../../static/oplogo.png";
import sema from "../../static/semapreview.png";
import openbook from "../../static/openbookp.png";
import Header from "../components/header/header";
import Links from "../components/links/links";

export default function Projects(props) {
  const [body, setBody] = useState('projects');

  return (
    <div className='grad'>

<div className='bg'></div>

<div className='flex'>
<div className='grid'>
  <Header content={body} setBody={setBody}/>
  {/* <Link to="/contact/">Contact</Link> */}
  
  <div className={projectsStyles.projects}>
          <div>
            <div className={projectsStyles.projectBox}>
            <a href="https://github.com/MaximJK/Op." className="" target="_blank"> <img src={op} className={projectsStyles.op}></img></a>
   <p className={projectsStyles.title}>Op.</p>
   current project | <a href="https://github.com/MaximJK/Op." className="" target="_blank"> git</a>  
   <p>Social art production platform built on Django/React.</p>
   <br></br>
   </div>
   <div className={projectsStyles.projectBox}>
   <a href="https://maximjk.github.io/Sema/" className="" target="_blank"><img src={sema} className={projectsStyles.sema}></img></a>
    <p className={projectsStyles.title}>Sema</p>
    <a href="https://maximjk.github.io/Sema/" className="" target="_blank">live</a> | <a href="https://github.com/MaximJK/Sema" className="" target="_blank">git</a>
    <p>Node.js poetry reader applet.</p>
    <br></br>
    </div>
    <div className={projectsStyles.projectBox}>
    <a href="https://openbook-aa.herokuapp.com/#/" className="" target="_blank"><img src={openbook} className={projectsStyles.openbook}></img></a>
    <p className={projectsStyles.title}>OpenBook</p>
    <a href="https://openbook-aa.herokuapp.com/#/" className="" target="_blank">live</a> | <a href="https://github.com/MaximJK/OpenBook" className="" target="_blank">git</a>
      <p>Full stack literary social cataloging website, inspired by goodReads. Built on Rails/React.</p>
      </div>
      </div>
  </div>

</div>
  {/* <Footer /> */}
<Links content={body} setBody={setBody}/>
</div>
</div>
     
  )
}