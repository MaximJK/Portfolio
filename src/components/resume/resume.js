import React from "react"

import resumeStyles from "./resume.module.css"
export default function Resume(props) {
  return (
     <div className={resumeStyles.resume}>
       <a href="MaxKoiwaiResume.pdf" >
        <div className={resumeStyles.container}>
        <img src='ResumeThumb.png' className={resumeStyles.thumb}></img>
        <div className={resumeStyles.overlay}>
          <div class={resumeStyles.text}>Resume</div>
        </div>
        </div>
        </a>
        <br></br>
        <a href= 'MaxKoiwaiResume.pdf' download> Download</a>
  </div>
  )
}