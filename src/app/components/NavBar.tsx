"use client"

import Link from "next/link"
import '../styles/hamburger.scss'
import styles from "../page.module.scss";
import { useState } from "react"


const NavBar = () => {

  const [check, setCheck] = useState(false)
    return(
      <>
      <nav>
        <h1>Jen Nguyen</h1>
        
        <label>
      <input type="checkbox" id="check" onChange={() => setCheck(!check)}/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul className='navigation'>
          <li>Project</li>
          <li><Link href="#about" scroll={false}>About</Link></li>
          <li>Contact</li>
          <li className='resume-btn'><a href="files/resume.pdf" target="_blank">Resume</a></li>
        </ul>
      </nav>

      <ul className={`${styles.round_edge} nav-mobile navigation`} 
          style={{display: check ? 'block' : 'none'}}>
          <li>Project</li>
          <li><Link href="#about" scroll={false}>About</Link></li>
          <li>Contact</li>
          <li className='resume-btn'><a href="files/resume.pdf" target="_blank">Resume</a></li>
        </ul>
      </>
        
      
    )
}

export default NavBar