import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://instagram.com" target='_blank'><FaInstagram/></a>
        <a href="https://dribbble.com" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials