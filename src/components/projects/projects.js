import React from "react"
import projectsStyles from "./projects.module.css"
import op from "../../../static/op.logo.png"
import sema from "../../../static/semapreview.png"
import openbook from "../../../static/openbookp.png"

export default function Projects(props) {
  return (
     <div className={projectsStyles.projects}>
       {/* <div className={projectsStyles.type}>
       <p >
          current project:
       </p>
      <br></br>
       <p>
         recent projects:
       </p>
       </div> */}
        
          <div>
            <div className={projectsStyles.projectBox}>
     <img src={op} className={projectsStyles.op}></img>
   <p className={projectsStyles.title}>Op.</p>
   current project | <a href="https://github.com/MaximJK/Op." className="link" target="_blank"> git
   </a>
   <p>Social art production platform built on Django/React.</p>
   <br></br>
   </div>
   <div className={projectsStyles.projectBox}>
    <img src={sema} className={projectsStyles.sema}></img>
    <p className={projectsStyles.title}>Sema</p>
    <a href="https://maximjk.github.io/Sema/" className="link" target="_blank">live</a> | <a href="https://github.com/MaximJK/Sema" className="link" target="_blank">git</a>
    <p>Node.js poetry reader applet.</p>
    <br></br>
    </div>
    <div className={projectsStyles.projectBox}>
    <img src={openbook} className={projectsStyles.openbook}></img>
    <p className={projectsStyles.title}>OpenBook</p>
    <a href="https://openbook-aa.herokuapp.com/#/" className="link" target="_blank">live</a> | <a href="https://github.com/MaximJK/OpenBook" className="link" target="_blank">git</a>
      <p>Full stack literary social cataloging website, inspired by goodReads. Built on Rails/React.</p>
      </div>
      </div>
  </div>
  )
}