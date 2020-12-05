import React from "react"
import Download from "../assets/pasztor-istvan-cv.pdf"

const Footer = () => {
  return (
    <>
      <footer className='bg-dark text-light py-3'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md pb-2 my-auto'>
              <h5 className='pb-2'>
                <strong>Navigate back to:</strong>
              </h5>
              <div
                className='btn-group'
                role='group'
                aria-label='Footer Menu Buttons'
              >
                <a href='https://istip.github.io/blogfolio/'>
                  <button type='button' className='btn btn-secondary px-4'>
                    Home
                  </button>
                </a>
                <a href='https://istip.github.io/blogfolio/'>
                  <button type='button' className='btn btn-secondary px-4'>
                    Blog
                  </button>
                </a>
                <a href='#portfolio'>
                  <button type='button' className='btn btn-secondary px-4'>
                    Portfolio
                  </button>
                </a>
              </div>
            </div>
            <div className='col-md pt-4 my-auto'>
              <h5>
                <strong>Latest Blog post:</strong>
              </h5>
              <p className='lead'>Blog posts coming very soon! 🙄</p>
              <a href={Download}>
                <div className='btn btn-danger py-2 px-5'>
                  <i className='fas fa-file-download pr-2'></i>Download my CV
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        className='text-center py-2 text-light'
        style={{ background: "#222" }}
      >
        Coyright © 2020 by{" "}
        <a href='https://istip.github.io/blogfolio/' className='text-danger'>
          <strong>Pasztor Istvan</strong>
        </a>
      </div>
    </>
  )
}

export default Footer
