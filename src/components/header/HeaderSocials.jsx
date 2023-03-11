import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rosy-banerjee-a33862109/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/rosybanerjee18/" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials

