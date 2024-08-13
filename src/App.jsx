
import About from "./components/About"
import BackToTop from "./components/BackToTop"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import "./style.css"
function App() {
  

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App
