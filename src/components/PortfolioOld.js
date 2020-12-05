import React, { useEffect } from "react"
import "../portfolio.css"
import Aos from "aos"
import "aos/dist/aos.css"

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='container-fluid bg-light pt-5'>
      <h1 className='display-4 text-center pb-5'>PORTFOLIO</h1>
      <div className='grid-container'>
        <div
          data-aos='fade-up'
          className='tall border border-secondary py-auto'
        >
          <div className='sub pt-5 px-3' style={{ height: "100%" }}>
            <h3>Meddison Recruitment</h3>
            <h5 className='pb-3'>
              <strong>New design</strong> ...is what you see in the background
            </h5>
            <p>
              <abbr title='www.meddison.eu'>Meddison Reqruitment</abbr>'s CEO
              was my first real client who contacted me with a plan. The CEO
              wanted to have a portal which would offer{" "}
              <abbr title='Pretty good ones actually..'>
                jobs in the Netherlands
              </abbr>
              .
            </p>
            <p>
              Okay. I said! But the thruth is that I was way too much shifted
              away from web developement!
            </p>
            <p>
              I started off everything with WordPress and playing with free
              themes. It gave an appealing result, but it was no fun for me!
              That is how I decided to recreate the whole website! I renewed my
              CSS and HTML knowledge, also adding some new doctrines from
              Bootstrap. Finally I got the result! Not only with a done website
              and money, but fulfiment! I have created something for a real{" "}
              <abbr title='WooHoo! 🎉'>client</abbr>!
            </p>
            <a href='https://www.meddison.eu' target='_blank' rel='noreferrer'>
              <p className='btn btn-sm btn-danger px-5 mb-5 mt-3'>
                Visit the old website
              </p>
            </a>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='long border border-secondary py-auto'
        >
          <div className='sub pt-5 px-3' style={{ height: "100%" }}>
            <h3>Meddison Recruitment</h3>
            <h5 className='pb-3'>
              <strong>Old design</strong> ...is what you see in the background
            </h5>
            <p>
              The Original website of{" "}
              <abbr title='www.meddison.eu'>Meddison Recruitment</abbr> was
              functioning very well! But there is always a{" "}
              <abbr title='Someimes two buts just like in this sentence.'>
                BUT
              </abbr>
              !
            </p>
            <p>
              Everytime the CEO needed to{" "}
              <abbr title='Create / Read / Update / Delete'>CRUD</abbr> a new
              post on the website, he was bind to me. Nothing could happen
              without me editing the markup. Doesn't matter how pretty was the
              frontend, he couldn't change. He is a business man, not a
              developer! Do'h!
            </p>
            <p>
              So everytime something needed to change that{" "}
              <abbr title='Poor him! 😢'>costed a lot for him</abbr>! So i
              reacreated everything, using React JavaScript with headless CMS
              bindness to outer backend territory. Now he could treat the
              essence of the portal from a single admin panel and we were{" "}
              <abbr title='Because that is what both developers and clients want!'>
                both happy!
              </abbr>
            </p>

            <a href='https://www.meddison.eu' target='_blank' rel='noreferrer'>
              <p className='btn btn-sm btn-danger px-5 mb-5 mt-3'>
                Visit the old website
              </p>
            </a>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='small1 border border-secondary py-auto'
        >
          <div className='sub pt-5 px-3' style={{ height: "100%" }}>
            <h3>Meddison Recruitment</h3>
            <h5 className='pb-3'>
              <strong>Old design</strong> ...is what you see in the background
            </h5>
            <p>
              The Original website of{" "}
              <abbr title='www.meddison.eu'>Meddison Recruitment</abbr> was
              functioning very well! But there is always a{" "}
              <abbr title='Someimes two buts just like in this sentence.'>
                BUT
              </abbr>
              !
            </p>
            <p>
              Everytime the CEO needed to{" "}
              <abbr title='Create / Read / Update / Delete'>CRUD</abbr> a new
              post on the website, he was bind to me. Nothing could happen
              without me editing the markup. Doesn't matter how pretty was the
              frontend, he couldn't change. He is a business man, not a
              developer! Do'h!
            </p>
            <p>
              So everytime something needed to change that{" "}
              <abbr title='Poor him! 😢'>costed a lot for him</abbr>! So i
              reacreated everything, using React JavaScript with headless CMS
              bindness to outer backend territory. Now he could treat the
              essence of the portal from a single admin panel and we were{" "}
              <abbr title='Because that is what both developers and clients want!'>
                both happy!
              </abbr>
            </p>

            <a href='https://www.meddison.eu' target='_blank' rel='noreferrer'>
              <p className='btn btn-sm btn-danger px-5 mb-5 mt-3'>
                Visit the old website
              </p>
            </a>
          </div>
        </div>

        <div
          data-aos='fade-up'
          className='small2 border border-secondary py-auto'
        >
          <div className='sub pt-5 px-3' style={{ height: "100%" }}>
            <h3>Meddison Recruitment</h3>
            <h5 className='pb-3'>
              <strong>Old design</strong> ...is what you see in the background
            </h5>
            <p>
              The Original website of{" "}
              <abbr title='www.meddison.eu'>Meddison Recruitment</abbr> was
              functioning very well! But there is always a{" "}
              <abbr title='Sometimes two buts just like in this sentence.'>
                BUT
              </abbr>
              !
            </p>
            <p>
              Everytime the CEO needed to{" "}
              <abbr title='Create / Read / Update / Delete'>CRUD</abbr> a new
              post on the website, he was bind to me. Nothing could happen
              without me editing the markup. Doesn't matter how pretty was the
              frontend, he couldn't change. He is a business man, not a
              developer! Do'h!
            </p>
            <p>
              So everytime something needed to change that{" "}
              <abbr title='Poor him! 😢'>costed a lot for him</abbr>! So i
              reacreated everything, using React JavaScript with headless CMS
              bindness to outer backend territory. Now he could treat the
              essence of the portal from a single admin panel and we were{" "}
              <abbr title='Because that is what both developers and clients want!'>
                both happy!
              </abbr>
            </p>

            <a href='https://www.meddison.eu' target='_blank' rel='noreferrer'>
              <p className='btn btn-sm btn-danger px-5 mb-5 mt-3'>
                Visit the old website
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
