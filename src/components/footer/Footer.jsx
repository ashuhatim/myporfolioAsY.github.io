import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">About Me</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portofolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://linkedin.com/in/ashutosh-yadav-449aaa149/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/ashuhatim' target="_blank"><BsGithub/></a>
      <a href='https://facebook.com/profile.php?id=100009581415567' target="_blank"><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ashu.tosh31051997@gmail.com. All copyrights reserved</small>
      </div>
    </footer>
  )
}

export default Footer