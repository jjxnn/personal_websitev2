import Link from "next/link"


const NavBar = () => {
    return(
        <nav>
        <h1>Jen Nguyen</h1>
        <ul className='navigation'>
          <li>Project</li>
          <li><Link href="#about" scroll={false}>About</Link></li>
          <li>Contact</li>
          <li className='resume-btn'><a href="files/resume.pdf" target="_blank">Resume</a></li>
        </ul>
      </nav>
    )
}

export default NavBar