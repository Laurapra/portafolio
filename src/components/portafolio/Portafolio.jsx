import React from 'react'
import './portafolio.css'
import pelis from '../../assets/pelis.jpg'
import dasAdm from '../../assets/dasAdm.jpg'
import pagImg from '../../assets/pagImg.jpg'

export const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio_container">
        <article className='portafolio_item'>
          <div className="portafolio_item-img">
            <img src={pelis} alt="" />
          </div>
            <h3>Este es una aplicación web de películas</h3>
            <div className="portafolio_item-cta">
            <a href="https://github.com/Laurapra/pelisApp" className='btn'>Github page</a>
            <a href="https://pelis-nu.vercel.app/" className='btn btn-primary' target='_blank'>Link</a>
            </div>
        </article>

        <article className='portafolio_item'>
          <div className="portafolio_item-img">
            <img src={dasAdm} alt="" />
          </div>
            <h3>Este es un registroo para un administrador de una página. User: jperez PassW: admin123</h3>
            <div className="portafolio_item-cta">
            <a href="https://github.com/Laurapra/AngularMaterial" className='btn'>Github page</a>
            <a href="https://administradorpage.vercel.app/login" className='btn btn-primary' target='_blank'>Link</a>
            </div>
        </article>

        <article className='portafolio_item'>
          <div className="portafolio_item-img">
            <img src={pagImg} alt="" />
          </div>
            <h3>Este es una aplicación web de imágenes para diseñadores</h3>
            <div className="portafolio_item-cta">
            <a href="https://github.com/Laurapra/PaginaWebDeImagenes" className='btn'>Github page</a>
            <a href="https://paginaimg-53z3lp3m0-laurapra.vercel.app/" className='btn btn-primary' target='_blank'>Link</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portafolio;