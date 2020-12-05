import React from "react"
import Download from "../assets/pasztor-istvan-cv.pdf"

const HeroModal = () => {
  return (
    <>
      <div className='py-3'></div>
      <p className='lead'>
        I live in Romania's heart at{" "}
        <i>
          <abbr title='Just like Dracula did once! 🧛‍♂️'>Transilvania.</abbr>
        </i>{" "}
        My left spare time is about learning JavaScript frameworks (mostly
        ReactJs) meanwhile perfecting my CSS / HTML. I want to become an
        experienced Full Stack Web Developer to escape the "9 to 5" job!
      </p>
      <p className='lead'>I want to work from 10 to 6. Joke!</p>
      <p className='lead'>
        I got obsessed with coding and creative expressions since I got my first
        computer. I started learning game development, web programming, graphic
        design and also music producing. Since that is why computers are made
        for, no?
      </p>
      <p className='lead'>
        Please be welcomed to my website after my introduction. Which now, looks
        like a Wikipedia article because of my{" "}
        <i>
          <abbr title='Actually using <abbr></abbr> 🤭'>tooltips!</abbr>
        </i>{" "}
        ...and I won't STOP!
      </p>
      <a href={Download}>
        <div className='btn btn-dark py-2 px-5'>
          <i className='fas fa-file-download pr-2'></i>Download my CV
        </div>
      </a>
    </>
  )
}

export default HeroModal
