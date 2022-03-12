import React from "react"
import { GiCheckMark } from "react-icons/gi"
import "./servises.css"
const Servises = () => {
  return (
    <section id="service">
      <h5>What I Done</h5>
      <h2>About of my details</h2>
      <div className="container servise_conatiner">
        <article className="service">
          <div className="service_heade">
            <h3>Working Experience</h3>
          </div>

          <ul className="sevice_list">
            <li>
              <h3>
                <GiCheckMark className="service_list-item" />
                June 2021-2021 Act{" "}
              </h3>
              <h2>Guvi Geek Network Pvt. Ltd (learing platform)</h2>
              <p>
                Full Stack Program: I have been Coding for around 6 months now.
                I look back to those days where it all began from blank screens
                to beautiful websites/web application nowadays and that's how
                far I have grown now I Love to create full stack applications
                using MERN stack preferably
              </p>
            </li>

            <li>
              <h3>
                <GiCheckMark className="service_list-item" />
                Nuv 2019-2021 May
              </h3>
              <h3>Inspirisys Solution Private Limited.(Helpdesk Executive)</h3>
              <p>
                Incident logging and troubleshooting.Assigning to respective
                Engineers.Customer coordination and handling the
                escalations.Preparing & maintaining the documents and reports
                for daily, weekly
              </p>
            </li>
          </ul>
        </article>
        {/* End the experinec */}
        <article className="service">
          <div className="service_heade">
            <h3>Educational Qualifications</h3>
          </div>
          <ul className="sevice_list">
            <li>
              <h3>
                <GiCheckMark className="service_list-item" />
                2015-2018
              </h3>
              <h2>
                BCA-Computer Application <span>71%</span>
              </h2>
              <p>Hindustan College of Arts and Science</p>
            </li>

            <li>
              <h3>
                <GiCheckMark className="service_list-item" />
                2013-2015
              </h3>
              <h2>
                HSC <span>68%</span>
              </h2>
              <p>St.Joseph’s Higher Secondary School</p>
            </li>

            <li>
              <h3>
                <GiCheckMark className="service_list-item" />
                2012-2013
              </h3>
              <h2>
                SSLC <span>70%</span>
              </h2>
              <p>St.Joseph’s Higher Secondary School</p>
            </li>
          </ul>
        </article>
        {/* end qualification */}
        {/*<article className="service">
          <div className="service_head">
            <h3>Bio Datat</h3>
          </div>
          <div className="data_list"></div>
        </article>*/}
      </div>
    </section>
  )
}

export default Servises
