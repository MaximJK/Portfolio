import React, { useState } from "react";
// import { Link } from "gatsby";
import Header from "../components/header/header";
import Links from "../components/links/links";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import { Helmet } from "react-helmet";

export default function Home() {
  const [body, setBody] = useState('aboutme');
  return (
    <div className='grad'>
        <Helmet>
        <meta property='og:title' content='Max Koiwai'/>
        <meta property='og:image' content='../../static/portPrev.png'/>
        <meta property='og:description' content='Max Koiwai'/>
        <meta property='og:url' content='www.maximjk.com' />
        </Helmet>
    <div className='bg'></div>

    <div className='flex'>
    <div className='grid'>
      <Header content={body} setBody={setBody}/>
      {/* <Link to="/contact/">Contact</Link> */}
      
      <Body content={body} setBody={setBody}/>

    </div>
      <Footer />
    <Links content={body} setBody={setBody}/>
    </div>
    </div>
  )
}