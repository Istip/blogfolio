import React from "react"
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='my-auto'>
            <h1 className='pt-2 pl-2'>
              <a href='https://istip.github.io/blogfolio/'>
                <img src={Logo} alt='Logo' />
              </a>
            </h1>
          </div>
          <div className='my-auto pt-2'>
            <h6>
              <b>
                Social:
                <span className='text-danger'>
                  <a
                    href='https://www.facebook.com/pasztor.isti/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-danger'
                  >
                    <i className='fab fa-facebook-square pr-3 pl-3'></i>
                  </a>
                  <a
                    href='https://www.instagram.com/pasztor.isti/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-danger'
                  >
                    <i className='fab fa-instagram pr-3'></i>
                  </a>
                  <a
                    href='https://github.com/Istip'
                    target='_blank'
                    rel='noreferrer'
                    className='text-danger'
                  >
                    <i className='fab fa-github pr-3'></i>
                  </a>
                </span>
              </b>
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
