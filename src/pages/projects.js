import React, { useState } from "react";
import projectsStyles from "./projects.module.css";
import op from "../../static/oplogo.png";
import sema from "../../static/semapreview.png";
import openbook from "../../static/openbookp.png";
import Header from "../components/header/header";
import Links from "../components/links/links";
import AnimationContainer from "../components/modules/animationContainer";
import { Helmet } from "react-helmet";
import prev from "../../static/portPrev.png";
import  { Breakpoint, BreakpointProvider } from 'react-socks';

export default function Projects(props) {
  const [body, setBody] = useState('projects');

  return (
    <div className='grad'>
      <BreakpointProvider>
      <Helmet>
      <title>Max Koiwai - Projects</title>
        <meta property='og:title' content='Max Koiwai'/>
        <meta property='og:image' content='https://i.ibb.co/SR51hjy/Screen-Shot-2020-10-14-at-8-52-59-PM.png'/>
        <meta property='og:description' content='Max Koiwai'/>
        <meta property='og:url' content='https://maximjk.com/' />
        <meta name="viewport" content="width=device-width, maximum-scale=1"/>
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
  
  <div className={projectsStyles.projects}>
          <div>
            <div className={projectsStyles.projectBox}>
   <p className={projectsStyles.title}>Op.</p>
            <a href="https://github.com/MaximJK/Op." className="" target="_blank"> <img src={op} className={projectsStyles.op}></img></a>
   current project | <a href="https://github.com/MaximJK/Op." className="" target="_blank"> git</a>  
   <p>Social art production platform built on <span className='skill'>Django/React</span>.</p>
   <br></br>
   </div>
   <div className={projectsStyles.projectBox}>
    <p className={projectsStyles.title}>Sema</p>
   <a href="https://maximjk.github.io/Sema/" className="" target="_blank"><img src={sema} className={projectsStyles.sema}></img></a>
    <a href="https://maximjk.github.io/Sema/" className="" target="_blank">live</a> | <a href="https://github.com/MaximJK/Sema" className="" target="_blank">git</a>
    <p><span className='skill'>Node.js</span> poetry reader applet.</p>
    <br></br>
    </div>
    <div className={projectsStyles.projectBox}>
    <p className={projectsStyles.title}>OpenBook</p>
    <a href="https://openbook-aa.herokuapp.com/#/" className="" target="_blank"><img src={openbook} className={projectsStyles.openbook}></img></a>
    <a href="https://openbook-aa.herokuapp.com/#/" className="" target="_blank">live</a> | <a href="https://github.com/MaximJK/OpenBook" className="" target="_blank">git</a>
      <p>Full stack literary social cataloging web application, inspired by goodReads. Built on <span className='skill'>Rails/React</span>.</p>
      </div>
      
      </div>
  </div>

</div>
  {/* <Footer /> */}
<Links content={body} setBody={setBody}/>
</div>
</BreakpointProvider>
</div>
     
  )
}