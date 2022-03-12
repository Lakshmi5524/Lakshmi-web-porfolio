import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/lakshmi-saravanan-584015214/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Lakshmi5524" target="_blank">
        <BsGithub />
      </a>
      <a href="https://linkedn.com" target="_blank"></a>
    </div>
  )
}

export default HeaderSocial
