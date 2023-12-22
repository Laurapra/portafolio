import React from 'react'
import  './header.css'
import CTA from './CTA'
import foto2 from '../../assets/foto2.png'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hola Soy</h5>
        <h1>Laura Rodríguez</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA></CTA>
        <HeaderSocials/>

        <div className="me">
          <img src={foto2} alt="me" />
        </div>
        <a href="#contact" className='scroll_dow'>Desplaza hacia abajo</a>
      </div>
    </header>
  )
}

export default Header;
