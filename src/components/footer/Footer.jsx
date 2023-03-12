import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ROSY BANERJEE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rosy-banerjee-a33862109/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/rosybanerjee18" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rosy Banerjee. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer