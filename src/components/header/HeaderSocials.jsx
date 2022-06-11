import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ashutosh-yadav-449aaa149/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/ashuhatim' target="_blank"><BsGithub/></a>
      <a href='https://www.facebook.com/profile.php?id=100009581415567' target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials