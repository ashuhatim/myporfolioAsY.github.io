import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './Contacts.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2d3zqw8', 'template_uay84ad', form.current, 'yahvfZf7tDYwCFElh')
    e.target.reset();
  };

  return (
    <section id='contacts'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
       <div className="contact__options"> 
        
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>ashu.tosh31051997@gmail.com</h5>
          <a href="mailto:ashu.tosh31051997@gmail.com" target='_blank'>Send a message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>lets connect</h5>
          <a href="https://m.me/100009581415567" target='_blank'>Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>lets connect</h5>
          <a href="https://api.whatsapp.com/send?phone+9462331983" target='_blank'>Send a message</a>
        </article>
       </div> 

       <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
       </form>

     </div>

      
      
    </section>
  )
}

export default Contacts