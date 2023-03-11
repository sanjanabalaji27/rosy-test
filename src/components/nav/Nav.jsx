import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav