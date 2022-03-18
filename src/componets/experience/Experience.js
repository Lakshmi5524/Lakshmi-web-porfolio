import React from "react"
import "./experience.css"
import { ImHtmlFive2 } from "react-icons/im"
import { IoLogoCss3 } from "react-icons/io"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { BsFillBootstrapFill } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_Frontend">
          <h3>Front End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <ImHtmlFive2 className="experience_details_icon" />
                <h4>HTML</h4>
                <small className="text-light">80%</small>
              </div>
            </article>

            <article className="experience_details">
              <IoLogoCss3 className="experience_details_icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">70%</small>
              </div>
            </article>

            <article className="experience_details">
              <SiJavascript className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">80%</small>
              </div>
            </article>

            <article className="experience_details">
              <FaReact className="experience_details_icon" />
              <div>
                <h4>Reactjs</h4>
                <small className="text-light">95%</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillBootstrapFill className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">70%</small>
              </div>
            </article>

            <article className="experience_details">
              <BsGithub className="experience_details_icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">65%</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_Backend">
          <h3>Back End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className="experience_details_icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">50%</small>
              </div>
            </article>

            <article className="experience_details">
              <SiExpress className="experience_details_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">50%</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMongodb className="experience_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">50%</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
