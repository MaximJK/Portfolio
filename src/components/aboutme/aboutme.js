import React from "react"
import aboutmeStyles from "./aboutme.module.css"
import headshot from "../../../static/headshot.png"
export default function Aboutme(props) {
  return (
     <div className={aboutmeStyles.aboutme}>
        {/* <h3>About Me</h3> */}
    <p>Hello! I'm a software engineer based in NYC. I code in Python, JavaScript, Ruby, CSS3 and HTML5.
      Some of my favorite technologies to work with are React, Django, Rails, Node.js, PostgreSQL. When I'm not programming I'm painting, writing or reading.</p>
    
    <p>Let's code together. Feel free to reach out.</p>
    <ul>
      <li>email: <a href="mailto:maxjacobkoiwai@gmail.com" className="link" target="_blank">maxjacobkoiwai@gmail.com</a></li>
      <br></br>
      <li>github: <a href="https://github.com/MaximJK" className="link" target="_blank">@maximjk</a></li>
      <br></br>
      <li>linkedin: <a href="https://www.linkedin.com/in/maxkoiwai/" className="link" target="_blank">@maxkoiwai</a></li>
    </ul>
<br></br>
    <img src={headshot}></img>
  </div>
  )
}