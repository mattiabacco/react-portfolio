import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MATTIA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://FiDribbble.com"><FiDribbble/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Mattia Bacco - Personal Portfolio
        </small>
      </div>
    </footer>
  )
}

export default Footer