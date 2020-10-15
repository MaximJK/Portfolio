import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import Links from "../components/links/links";
import AnimationContainer from "../components/modules/animationContainer";
import { Helmet } from "react-helmet";
import aboutmeStyles from "./aboutme.module.css";
import headshot from "../../static/headshot.png";
import prev from "../../static/portPrev.png";
import { Canvas, useFrame } from 'react-three-fiber';
import  { Breakpoint, BreakpointProvider } from 'react-socks';


export default function Home() {
	
  const [body, setBody] = useState('aboutme');


  
  
  return (
    <div className='grad'>
      <BreakpointProvider>
		
        <Helmet>
        <title>Max Koiwai - About</title>
        <meta property='og:title' content='Max Koiwai'/>
        <meta property='og:image' content='https://i.ibb.co/SR51hjy/Screen-Shot-2020-10-14-at-8-52-59-PM.png'/>
        <meta property='og:description' content='Max Koiwai'/>
        <meta property='og:url' content='https://maximjk.com/' />
        <meta name="viewport" content="width=device-width, maximum-scale=1"/>
        </Helmet>

        <Breakpoint medium up>
		    <AnimationContainer>
        </AnimationContainer>
        </Breakpoint>


    <div className='flex'>
    <div className='grid'>
      
    
      <Header content={body} setBody={setBody}/>
      
      
      <div className={aboutmeStyles.aboutme}>
        
    <p>Hello! I'm a software engineer based in the USA. I code in <span className='skill'>Python</span>, <span className='skill'>JavaScript</span>, <span className='skill'>Ruby</span>, <span className='skill'>CSS3</span> and <span className='skill'>HTML5</span>.
      Some of my favorite technologies to work with are <span className='skill'>React</span>, <span className='skill'>Django</span>, <span className='skill'>Rails</span>, <span className='skill'>Node.js</span>, <span className='skill'>PostgreSQL</span>. When I'm not programming I'm painting, writing and reading.</p>
    
    
    
    <br></br>
    <img src={headshot} alt='maxkoiwai'></img>
  </div>

    </div>
    <Links content={body} setBody={setBody}/>
    </div>
    </BreakpointProvider>
    </div>
  )
}