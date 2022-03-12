import "./App.css"
import Header from "./componets/header/Header"
import Nav from "./componets/nav/Nav"
import About from "./componets/about/About"
import Experience from "./componets/experience/Experience"
import Servises from "./componets/servises/Servises"
import Portfolio from "./componets/portfolio/Portfolio"
import Testimonials from "./componets/testimonials/Testimonials"
import Contacts from "./componets/contacts/Contacts"
import Footer from "./componets/footer/Footer"
import Particle from "./componets/Particle"
function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Servises />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
