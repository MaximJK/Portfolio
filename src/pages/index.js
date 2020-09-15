import React, { useState } from "react";
// import { Link } from "gatsby";
import Header from "../components/header/header";
import Links from "../components/links/links";
import { Helmet } from "react-helmet";
import aboutmeStyles from "./aboutme.module.css";
import headshot from "../../static/headshot.png";

export default function Home() {
  const [body, setBody] = useState('aboutme');
  return (
    <div className='grad'>
        <Helmet>
        <title>Max Koiwai</title>
        <meta property='og:title' content='Max Koiwai'/>
        <meta property='og:image' content='https://i.ibb.co/Wsch73L/Screen-Shot-2020-07-10-at-6-24-25-PM.png'/>
        <meta property='og:description' content='Max Koiwai'/>
        <meta property='og:url' content='https://maximjk.com/' />
        <meta name="viewport" content="width=device-width, maximum-scale=1"></meta>
        </Helmet>
    <div className='bg'></div>

    <div className='flex'>
    <div className='grid'>
    {/* <Footer /> */}
      <Header content={body} setBody={setBody}/>
      {/* <Link to="/contact/">Contact</Link> */}
      
      <div className={aboutmeStyles.aboutme}>
        {/* <h3>About Me</h3> */}
    <p>Hello! I'm a software engineer based in the USA. I code in Python, JavaScript, Ruby, CSS3 and HTML5.
      Some of my favorite technologies to work with are React, Django, Rails, Node.js, PostgreSQL. When I'm not programming I'm painting, writing and reading.</p>
    
    <p >Let's code together. Feel free to reach out:	</p>
    
    <ul>
      <li className={aboutmeStyles.linkId}>Email: <a href="mailto:maxjacobkoiwai@gmail.com"  target="_blank">maxjacobkoiwai@gmail.com</a></li>
      <br></br>
      <li className={aboutmeStyles.linkId}>LinkedIn: <a href="https://www.linkedin.com/in/maxkoiwai/"  target="_blank">@maxkoiwai</a></li>
      <br></br>
      <li className={aboutmeStyles.linkId}>Git: <a href="https://github.com/MaximJK"  target="_blank">@maximjk</a></li>
    </ul>
<br></br>
    <img src={headshot} alt='maxkoiwai'></img>
  </div>

    </div>
    <Links content={body} setBody={setBody}/>
    </div>
    </div>
  )
}