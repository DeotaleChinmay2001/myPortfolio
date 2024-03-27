import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMailbox} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://in.linkedin.com/in/chinmay-deotale-5a7361240" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/DeotaleChinmay2001" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://medium.com/@thakshiladb2000" target="_blank" rel='noreferrer'><BsMailbox/></a>
    </div>
  )
}

export default HeaderSocials