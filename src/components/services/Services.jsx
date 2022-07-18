import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que yo ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Desing</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Investigación de Usuarios</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Diseño de la página web</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Crear experiencias satisfactorias para el usuario</p>
              </li>
            </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className="service">
          <div className="service_head">
            <h3>Desarrollo Web</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Diseño e implementación de la aplicación web</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Diseño e implementación de una base de Datos relacional o no relacional</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Subir la aplicación web a un  Hosting</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Testing de la aplicación</p>
              </li>
            </ul>
        </article>
        {/*web development*/}

        <article className="service">
          <div className="service_head">
            <h3>Contenidos desarrollados</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Páginas web completas</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Página de redes sociales inspirada en Instagram</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Página de registro de predios para monitorear los cultivos</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Página de registro de tareas diarias inspirada en Notion </p>
              </li>
            </ul>
        </article>
        {/*web development*/}
      </div>
    </section>
  )
}

export default Services;