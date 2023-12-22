import React from 'react'
import CV from '../../assets/LR_english_cv_software_developer.pdf'

export const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='btn' >Descarga mi CV</a>
            <a href="#contact" className='btn btn-primary' >Hablemos</a>
        </div>
    </div>
  )
}
export default CTA;
