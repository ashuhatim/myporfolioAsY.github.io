import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Ashutosh Yadav</h1>
        <h5 className=".text-light">Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#footer" className='scroll__down'>Scroll to Bottom</a>
      </div>
    </header>
  )
}

export default Header