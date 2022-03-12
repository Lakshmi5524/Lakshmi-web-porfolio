import React from "react"
import "./about.css"
import mypic from "../../assets/img.jpg"
import { FaAward } from "react-icons/fa"
import { CgExport } from "react-icons/cg"
import { VscFolderActive } from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="about-title">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={mypic} alt="aboutimage" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <CgExport className="about_icon" />
              <h4>Experience</h4>
              <small>6 Months of hands on experience</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Certification</h5>
              <small>I have Certification of MERN stack programming</small>
            </article>

            <article className="about_card">
              <VscFolderActive className="about_icon" />
              <h4>Projects</h4>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I have been Coding for around 6 months now. I look back to those
            days where it all began from blank screens to beautiful websites/web
            application nowadays and that's how far I have grown now. I Love to
            create full stack applications using MERN stack preferably. Intended
            to structure my growth in pace with the ever-changing corporate
            environment. Make my learning curve to move in a linear fashion
            along with the growth of functional skills coupled with overall
            personality development to face the challenging times ahead
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
