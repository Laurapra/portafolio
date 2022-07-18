import React from 'react'
import './about.css'
import foto4 from '../../assets/foto4.jpg'
import {FiAward} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Llega a saber</h5>
      <h2>Sobre mí</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={foto4} alt="about img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_card">
            <article className="about_card">
              <FiAward className='about_icon'/>
              <h5>Experiencia</h5>
              <small>1+ Año desarrollando</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Proyectos</h5>
              <small>10+ Proyectos completados</small>
            </article>
          </div>
          <p>Cuento con más de un año de experiencia personal, realizando diferentes proyectos en los cuáles pongo en práctica mis concimientos y mejorando cada vez!</p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>


        </div>
      </div>
    </section>
  )
}

export default About;