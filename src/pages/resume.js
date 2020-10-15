import React, { useState } from "react"
import { Helmet } from "react-helmet";
import resumeStyles from "./resume.module.css";
import AnimationContainer from "../components/modules/animationContainer";
import Header from "../components/header/header";
import Links from "../components/links/links";
import thumb from "../../static/ResumeThumb.png";
import  { Breakpoint, BreakpointProvider } from 'react-socks';

export default function Resume(props) {
  const [body, setBody] = useState('resume');

  return (
    <div className='grad'>
      <BreakpointProvider>
    <Helmet>
    <title>Max Koiwai - Resume</title>
    <meta property='og:title' content='Max Koiwai'/>
    <meta property='og:image' content='MaxKoiwaiResume.pdf'/>
    <meta property='og:description' content='Max Koiwai'/>
    <meta property='og:url' content='https://maximjk.com/' />
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    
    </Helmet>
    <div>
    <Breakpoint medium up>
		<AnimationContainer/>
    </Breakpoint>
    </div>

<div className='flex'>
<div className='grid'>
  <Header content={body} setBody={setBody}/>
  {/* <Link to="/contact/">Contact</Link> */}
     <div className={resumeStyles.resume}>
       <a href="MaxKoiwaiResume.pdf" >
        <div className={resumeStyles.container}>
        <img src={thumb} alt='resume' className={resumeStyles.thumb}></img>
        <div className={resumeStyles.overlay}>
          <div class={resumeStyles.text}>Resume</div>
        </div>
        </div>
        </a>
        <br></br>
        <a href= 'MaxKoiwaiResume.pdf' download> Download</a>
        </div>
</div>
 {/* <Footer /> */}
 <Links content={body} setBody={setBody}/>
 </div>
</BreakpointProvider>
 
</div>
  )
}