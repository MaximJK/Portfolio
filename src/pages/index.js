import React, { useState } from "react";
// import { Link } from "gatsby";
import Header from "../components/header/header";
import Links from "../components/links/links";
import Body from "../components/body/body";
export default function Home() {
  const [body, setBody] = useState('links');
  return (
    <div className='grid'>
      <Header />
      {/* <Link to="/contact/">Contact</Link> */}
      
      <Body content={`${body}`} setBody={setBody}/>
    </div>
  )
}