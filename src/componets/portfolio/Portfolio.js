import React from "react"
import "./portfolio.css"
import case1 from "../../image/cart.jpeg"
import case2 from "../../image/zoom.jpeg"
import case3 from "../../image/movies.jpg"
import case4 from "../../image/appimg.png"
import case5 from "../../image/meals.jpg"
import case6 from "../../image/caseTodo.png"
import case7 from "../../image/mapimg.jpg"
import case8 from "../../image/crud.jpeg"
import case9 from "../../image/project.jpg"
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case1} alt="project=img" />
          </div>
          <h3>Javascript</h3>

          <a
            href="https://github.com/Lakshmi5524/mobile-app-javascript"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Github
          </a>
          <a
            href="https://mobile-showroom.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Live Demo
          </a>
          <h3>Mobile showroom app</h3>
          <p>Using javascript with add to cart functions</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case2} alt="project=img" />
          </div>
          <h3>Nodejs</h3>

          <a
            href="https://github.com/Lakshmi5524/ZoomClone"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Github
          </a>
          <a
            href="https://aqueous-peak-05442.herokuapp.com/cdc3e8ac-9d18-4ee1-916a-fa9ac29ed843"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Live Demo
          </a>

          <h3>ZOOM clone</h3>
          <p>Using nodejs You can allow your camara</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case3} alt="project=img" />
          </div>
          <h3>reactjs</h3>

          <a
            href="https://github.com/Lakshmi5524/Movie-series"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Github
          </a>
          <a
            href="https://lakshmi-movie-series.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Live Demo
          </a>

          <h3>Movie Series</h3>
          <p>Using Reactjs You can Search Movies</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case4} alt="project=img" />
          </div>
          <h3>Reactjs</h3>

          <a
            href="https://github.com/Lakshmi5524/Context-shopingCart"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Github
          </a>
          <a
            href="https://reactjs-addto-cart.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Live Demo
          </a>
          <h3>ShoppingCart</h3>
          <p>Using Reactjs all the filter functionality Add to cart</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case5} alt="project=img" />
          </div>
          <h3>Reactjs</h3>

          <a
            href="https://github.com/Lakshmi5524/Food-api"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Github
          </a>
          <a
            href="https://searchfood-recipe-api.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Live Demo
          </a>

          <h3>Meals App</h3>
          <p>Using Reactjs, You can Search food Resipes Items</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case6} alt="project=img" />
          </div>
          <h3>Reactjs</h3>

          <a
            href="https://github.com/Lakshmi5524/simple-TodoApp-reactjs"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
          >
            Github
          </a>
          <a
            href="https://small-todo-list.netlify.app/"
            target="_blank"
            rel="noreferrer"
            //className="btn btn-primary"
            className="btns buttons"
          >
            Live Demo
          </a>

          <h3>simple-TodoApp</h3>
          <p>Using Reactjs, Enter the list Items</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case7} alt="project=img" />
          </div>
          <h3>MERN Project</h3>

          <a
            href="https://github.com/Lakshmi5524/Mern-map-frontend"
            target="_blank"
            rel="noreferrer"
            //className="btn"
            className="btns buttons"
          >
            Github FrontEnd
          </a>
          <a
            href="https://pin-map-mern.netlify.app/"
            target="_blank"
            rel="noreferrer"
            //className="btn btn-primary"
            className="btns buttons"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Lakshmi5524/Mern-map-backend"
            target="_blank"
            rel="noreferrer"
            //className="btn"
            className="btns buttons"
          >
            Github BackEnd
          </a>

          <h3>MERN-Map-pins</h3>
          <p>Choose your favourite country to carete pins</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case8} alt="project=img" />
          </div>
          <h3>MERN Project</h3>

          <a
            href="https://github.com/Lakshmi5524/crud-mern-client"
            target="_blank"
            rel="noreferrer"
            //className="btn"
            className="btns buttons"
          >
            Github FrontEnd
          </a>
          <a
            href="https://crud-mern-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
            //className="btn btn-primary"
            className="btns buttons"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Lakshmi5524/crud-mern-server"
            target="_blank"
            rel="noreferrer"
            //className="btn"
            className="btns buttons"
          >
            Github BackEnd
          </a>

          <h3>MERN CRUD proejct</h3>
          <p>You can Create Read Update and Delete Functions</p>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={case9} alt="project=img" />
          </div>
          <h3>MERN Project</h3>

          <a
            href="https://github.com/Lakshmi5524/mern-auth-clinet"
            target="_blank"
            rel="noreferrer"
            className="btns buttons"
            //style={{
            //  margin: 10,
            //  padding: 10,
            //  width: 100,
            //  height: 100,
            //  background: "red",
            //}}
          >
            {" "}
            Github FrontEnd
          </a>
          <a
            href="https://mern-auth-project.herokuapp.com/login"
            target="_blank"
            rel="noreferrer"
            // className="btn btn-primary"
            className="btns buttons"
            //style={{
            //  margin: 10,
            //  padding: 10,
            //  width: 100,
            //  height: 100,
            //  background: "red",
            //}}
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Lakshmi5524/mern-auth"
            target="_blank"
            rel="noreferrer"
            //className="btn"
            className="btns buttons"
            //style={{
            //  margin: 10,
            //  padding: 10,
            //  width: 100,
            //  height: 100,
            //  background: "red",
            //}}
          >
            Github BackEnd
          </a>

          <h3>User Authentication JWT project</h3>
          <p>Signup and login</p>
        </article>
      </div>
    </section>
  )
}

export default portfolio
