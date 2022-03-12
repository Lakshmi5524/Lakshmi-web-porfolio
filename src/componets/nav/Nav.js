import React, { useState } from "react"
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUserAdd } from "react-icons/ai"
import { BsBook } from "react-icons/bs"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageAltDetail } from "react-icons/bi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUserAdd />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>

      <a
        href="#service"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  )
}

export default Nav
