import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import Links from "../components/links/links"

export default function Home() {
  return (
    <div className='grid'>
      <Header />
      {/* <Link to="/contact/">Contact</Link> */}
      
      <Links/>
    </div>
  )
}