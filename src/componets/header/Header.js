import React from "react"
import "./header.css"
import CTA from "./CTA"
import HeaderSocial from "./HeaderSocial"
import me from "../../assets/pic4.png"
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello I' am </h2>
        <h1>Lakshmi</h1>
        <span>Front End Developer(MERM stack) </span>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className="imgheigh" src={me} alt="imeges" />
        </div>
        <a href="#contact" className="scroll_down">
          scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
