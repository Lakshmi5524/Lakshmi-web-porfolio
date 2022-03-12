import React from "react"
import "./testimonial.css"
import pic1 from "../../assets/play1.png"
import pic2 from "../../assets/play2.png"
import pic3 from "../../assets/play3.png"
import pic4 from "../../assets/play4.png"
import pic5 from "../../assets/play5.png"
import pic6 from "../../assets/play6.png"
import pic7 from "../../assets/play7.png"
import pic8 from "../../assets/play8.png"

import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import "swiper/css/pagination"

const data = [
  {
    avatar: pic1,
    name: "HTML",
    review:
      "HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet. Each retrieval unit is known as a Web page (from World Wide Web), and such pages frequently contain hypertext links that allow related pages to be retrieved.",
  },

  {
    avatar: pic2,
    name: "CSS3",
    review:
      "CSS Cascading Style Sheets handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.",
  },

  {
    avatar: pic3,
    name: "Javascript",
    review:
      "JavaScript, on the other hand, is a dynamic programming language that supports Math calculations, allows you to dynamically add HTML contents to the DOM, creates dynamic style declarations, fetches contents from another website, and lots more",
  },

  {
    avatar: pic4,
    name: "ReactJs",
    review:
      "ReactJS is JavaScript library used for building reusable UI components.React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. ",
  },

  {
    avatar: pic5,
    name: "NodeJs",
    review:
      "A Node.js developer is responsible for writing server-side web application logic in JavaScript and/or variants of it, such as CoffeeScript, IcedCoffeeScript, etc. Node.js developers usually develop back-end components, connect the application with the other (often third-party) web services, and support the front-end developers by integrating their work with the Node.js application.",
  },
  {
    avatar: pic6,
    name: "MongoDB",
    review:
      "MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.",
  },

  {
    avatar: pic7,
    name: "Github",
    review:
      "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
  },

  {
    avatar: pic8,
    name: "Visual Studio Code",
    review:
      "Visual Studio Code combines the simplicity of a source code editor with powerful developer tooling, like IntelliSense code completion and debugging.",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>My play things</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h3 className="toolName">{name}</h3>
              <small className="review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
