import React, { useState, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

// COMPS
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NavbarMenu from "./components/NavbarMenu"
import Accordion from "./components/Accordion"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"

function App() {
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth)
    })
  }, [])

  return (
    <div className='App'>
      <Navbar />
      {/*  */}
      {winWidth < 576 ? (
        <>
          <NavbarMenu />
          <div
            style={{
              transform: `translateY(${offsetY * 0.1}px)`,
              zIndex: "10",
            }}
          >
            <Hero />
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              transform: `translateY(${offsetY * 0.1}px)`,
              zIndex: "10",
            }}
          >
            <Hero />
          </div>
          <NavbarMenu />
        </>
      )}
      {/*  */}
      <div
        data-aos='fade-in'
        style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
      >
        <Cards />
      </div>
      <div
        data-aos='fade-up'
        style={{ transform: `translateY(${offsetY * 0.05}px)` }}
      >
        <Accordion />
      </div>
      <div data-aos='fade-up' id='portfolio'>
        <Portfolio />
      </div>
      <div data-aos='fade-in' id='contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
