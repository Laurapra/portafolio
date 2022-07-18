import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    /*emailjs.sendForm('service_pfc465u', 'template_i5uk6s4', form.current, 'JLa7JymGsOUTh_q6D')*/
    emailjs.send("service_pfc465u","template_i5uk6s4");
  };


  return (
    <section id='contact'>
      <h5>Ponte en Contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>laurapra17@gmail.com</h5>
            <a href="mailto:laurapra17@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram Direct message</h4>
            <h5>laura_pra17</h5>
            <a href="https://www.instagram.com/laura_pra17/" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 3154460967</h5>
            <a href="https://wa.me/573154460967" target="_blank">Send a message</a>
          </article>
        </div>
        {/*FIN DE LAS OPCIONES DE CONTACTO*/}

        <form ref={form} on submit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="email" name="email" placeholder='Email'  required/>
          <textarea name="message" rows="7" placeholder='Escribe tu mensaje' required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;