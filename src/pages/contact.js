import React, { useState } from "react";
import Header from "../components/header/header";
import Links from "../components/links/links";
import contactStyles from "./contact.module.css";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons'

  import {
    faEnvelopeSquare
  } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  const [body, setBody] = useState('aboutme');
  return (
    <div className='grad'>
        <Helmet>
        <title>Max Koiwai</title>
        <meta property='og:title' content='Max Koiwai'/>
        <meta property='og:image' content='https://i.ibb.co/g7xJ3M0/portprev.png'/>
        <meta property='og:description' content='Max Koiwai'/>
        <meta property='og:url' content='https://maximjk.com/' />
        <meta name="viewport" content="width=device-width, maximum-scale=1"/>
        </Helmet>
        <div className='flex'>
        <div className='grid'>
    
      <Header content={body} setBody={setBody}/>
      <div className = {contactStyles.contact}>
      <div>
      <FontAwesomeIcon className={contactStyles.icons} icon={faGithubSquare}  />
      <br/>
      GitHub
      </div>
      <div>
      <FontAwesomeIcon className={contactStyles.icons} icon={faLinkedin}  />
      <br/>
      LinkedIn
      </div>
      <div>
      <FontAwesomeIcon className={contactStyles.icons}  icon={faEnvelopeSquare}  />
      <br/>
      Email
      </div>
      </div>
      </div>
      <Links content={body} setBody={setBody}/>
      </div>
      </div>
      )
      }