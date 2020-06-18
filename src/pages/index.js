import React, { useState } from "react";
// import { Link } from "gatsby";
import Header from "../components/header/header";
import Links from "../components/links/links";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";
export default function Home() {
  const [body, setBody] = useState('aboutme');
  return (
    <div className='flex'>
    <div className='grid'>
      <Header />
      {/* <Link to="/contact/">Contact</Link> */}
      
      <Body content={body} setBody={setBody}/>

      {/* <Footer content={body} setBody={setBody}/> */}
    </div>
    <Links content={body} setBody={setBody}/>
    </div>
  )
}