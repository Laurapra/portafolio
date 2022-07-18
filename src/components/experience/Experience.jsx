import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Que habilidades tengo</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Flask</h4>
              <small className='text-light'>Básico</small>
            </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            </div>
          </div>
        
        {/*END OF THE FRONT END */}
        <div className="experience_backend">
          <h3>BackEndDevelopment</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience;