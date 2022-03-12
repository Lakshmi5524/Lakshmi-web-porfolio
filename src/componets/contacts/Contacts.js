import React from "react"
import "./contact.css"
import { AiOutlineMail } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"
import { useRef } from "react"

const Contacts = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_vg6wcma",
      "template_d2032zo",
      form.current,
      "O_rqQSyyw69PkXgC7"
    )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get in Tuch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <article className="contact_options">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>lakthanabca@gmail.com</h5>
            <a
              href="malito:lakthanabca@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>

          <article className="contact_options">
            <BsTelephone className="contact_option_icon" />
            <h4>Phone Number</h4>
            <h5>7397330045</h5>
          </article>

          <article className="contact_options">
            <GoLocation className="contact_option_icon" />
            <h4>location</h4>
            <h5>No 11 6th cross schoole street, solinganallur, chennai 119</h5>
          </article>

          <article className="contact_options">
            <BsWhatsapp className="contact_option_icon" />
            <h4>whatsapp</h4>
            <a
              href="https://web.whatsapp.com/send?phone=+917397330045"
              target="_blank"
              rel="noreferrer"
            >
              Send me a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
