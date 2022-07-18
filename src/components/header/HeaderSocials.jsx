import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/laurarodriguez17" target="_blanck"><BsLinkedin/></a>
        <a href="https://github.com/Laurapra" target="_blanck"> <FaGithub/> </a>
        <a href="https://www.instagram.com/laura_pra17/" target="_blanck"> <BsInstagram/> </a>
    </div>
  )
}
export default HeaderSocials;