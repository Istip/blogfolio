import React from "react"

const NavbarMenu = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-sm navbar-light bg-light border-bottom drop-shadow'>
      <button
        className='navbar-toggler py-4 btn text-danger btn-block'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <small>trigger the</small>
        <br />
        <b>MENU</b>
      </button>
      <div className='collapse navbar-collapse text-center' id='navbarNav'>
        <ul className='navbar-nav mx-auto'>
          <li className='nav-item active'>
            <a
              className='nav-link px-4'
              href='https://istip.github.io/blogfolio/'
            >
              <i className='fas fa-home'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link px-4'
              href='https://istip.github.io/blogfolio/'
            >
              BLOG
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link px-4' href='#portfolio'>
              PORTFOLIO
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link px-4' href='#contact'>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarMenu
