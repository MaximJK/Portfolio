import React, { useState } from "react";
import Header from "../components/header/header";
import Links from "../components/links/links";
import AnimationContainer from "../components/modules/animationContainer";
import contactStyles from "./contact.module.css";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import {
    faGithubSquare,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons'

  import {
    faEnvelopeSquare
  } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  const [body, setBody] = useState('contact');
  return (
    <div className='grad'>
      <BreakpointProvider>
        <Helmet>
        <title>Max Koiwai - Contact</title>
        <meta property='og:title' content='Max Koiwai'/>
        <meta property='og:image' content='https://i.ibb.co/SR51hjy/Screen-Shot-2020-10-14-at-8-52-59-PM.png'/>
        <meta property='og:description' content='Max Koiwai'/>
        <meta property='og:url' content='https://maximjk.com/' />
        <meta name="viewport" content="width=device-width, maximum-scale=1"/>
        </Helmet>
        <Breakpoint medium up>
		  <AnimationContainer/>
      </Breakpoint>
        <div className='flex'>
        <div className='grid'>
    
      <Header content={body} setBody={setBody}/>
      <div className = {contactStyles.contact}>
      <p >Let's code together. Reach out @	</p>
      <br/>
      <div className={contactStyles.iconDiv}>
      <div>
      <a href="https://github.com/MaximJK"  target="_blank">
      <FontAwesomeIcon className={contactStyles.icons} icon={faGithubSquare}  />
      <br/>
      GitHub 
      </a>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/maxkoiwai/"  target="_blank">
      <FontAwesomeIcon className={contactStyles.icons} icon={faLinkedin}  />
      <br/>
      LinkedIn
      </a>
      </div>
      <div>
      <a href="mailto:maxjacobkoiwai@gmail.com"  target="_blank">
      <FontAwesomeIcon className={contactStyles.icons}  icon={faEnvelopeSquare}  />
      <br/>
      Email
      </a>
      </div>
      </div>
      </div>
      </div>
      <Links content={body} setBody={setBody}/>
      </div>
      </BreakpointProvider>
      </div>
      
      )
      }