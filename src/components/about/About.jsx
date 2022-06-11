import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {FaLayerGroup} from 'react-icons/fa'
const About = () => {
  return (
   <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2> 

    <div className="container about__container">

      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      
      <div className="about__content">
         <div className="about__cards">

           <article className="about__card">
             <FaAward className='about__icon'/>
           <h5>Experience</h5>
           <small>1+ Years working</small>  
           </article>

           <article className="about__card">
             <FaUserFriends className='about__icon'/>
           <h5>Client</h5>
           <small>2+ Across INDIA</small>  
           </article>

           <article className="about__card">
             <FaLayerGroup className='about__icon'/>
           <h5>Projects</h5>
           <small>4+ Completed</small>  
           </article>

         </div>

         <p>
         Self motivated, always ready to learn and develop. Love Frontend developement and looking for a frontend role which
          allows me to continue learning and perfecting my skills as I will provide high quality software development assessment
          to the company which recognises the talent, coding skills, hard work and passion.
         </p>

         <a href='#contacts' className='btn btn-primary'>Let's Talk</a>

      </div>

    </div>

   </section>
 )
}

export default About