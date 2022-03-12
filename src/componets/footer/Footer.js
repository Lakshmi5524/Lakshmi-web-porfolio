import React from "react"
import "./footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Footer
      </a>
      <ul className="permallinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#servises">Services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy:lakthanabca@gmail.com</small>
      </div>
    </footer>
  )
}

export default Footer
