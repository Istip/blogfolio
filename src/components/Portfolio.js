import React, { useEffect } from "react"
import "../portfolio.css"
import Aos from "aos"
import "aos/dist/aos.css"

import Portfolio1 from "../assets/portfolio1.png"
import Portfolio2 from "../assets/portfolio2.png"
import Portfolio3 from "../assets/portfolio3.png"

import Portfolio1Big from "../assets/p1big.png"
import Portfolio2Big from "../assets/p2big.png"
import Portfolio3Big from "../assets/p3big.png"

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className='container-fluid bg-light pt-5'>
      <h1 className='display-4 text-center pb-5'>PORTFOLIO</h1>
      <div className='container'>
        <div data-aos='fade-up' className='pb-5'>
          <div className='border border-dark' style={{ maxWidth: "1000px" }}>
            <img src={Portfolio1} alt='Item1' className='img-fluid' />
            <div className='py-4 text-center'>
              <a href={Portfolio1Big} target='_blank' rel='noreferrer'>
                <div className='btn btn-sm btn-outline-danger px-3'>
                  Open full size
                </div>
              </a>
              <p className='small pt-3 pb-0'>
                Some segments of the page may be streched. This could happen due
                the processing of the screenshot creation.
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='pb-5'>
          <div className='border border-dark' style={{ maxWidth: "1000px" }}>
            <img src={Portfolio2} alt='Item1' className='img-fluid' />
            <div className='py-4 text-center'>
              <a href={Portfolio2Big} target='_blank' rel='noreferrer'>
                <div className='btn btn-sm btn-outline-danger px-3'>
                  Open full size
                </div>
              </a>
              <p className='small pt-3 pb-0'>
                Some segments of the page may be streched. This could happen due
                the processing of the screenshot creation.
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='pb-5'>
          <div className='border border-dark' style={{ maxWidth: "1000px" }}>
            <img src={Portfolio3} alt='Item1' className='img-fluid' />
            <div className='py-4 text-center'>
              <a href={Portfolio3Big} target='_blank' rel='noreferrer'>
                <div className='btn btn-sm btn-outline-danger px-3'>
                  Open full size
                </div>
              </a>
              <p className='small pt-3 pb-0'>
                Some segments of the page may be streched. This could happen due
                the processing of the screenshot creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
