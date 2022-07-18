import React from 'react'
import './footer.css'
import {BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Laura Rodriguez</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#contact">Contactame</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/laura_pra17/"> <BsInstagram/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Laura Rodriguez. All rights reserved.</small>
      </div>
    </footer>
  )
}
 export default Footer;