import React from "react"

const Cards = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light mt-0'>
      <button
        className='navbar-toggler py-4 btn text-danger btn-block'
        type='button'
        data-toggle='collapse'
        data-target='#optionsNav'
        aria-controls='optionsNav'
        aria-expanded='false'
        aria-label='Toggle Options'
      >
        <small>trigger the</small>
        <br />
        <b>INFO CARDS</b>
      </button>
      <div className='collapse navbar-collapse text-center' id='optionsNav'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-lg pb-3'>
              <div className='card card-showcase mt-3'>
                <div className='card-header pb-0'>
                  <h1>
                    <i className='fab fa-html5'></i>
                  </h1>
                </div>
                <div className='card-body'>
                  I started learning <strong>HTML</strong> when i wrote my first{" "}
                  <abbr title='The best chat software ever created! 🔝'>
                    mIRC
                  </abbr>{" "}
                  bot which needed a website because it kicked ass! (Seriously
                  it could kick your ass of from a chat channel)
                  <br />
                  After I have started developing{" "}
                  <abbr title='Obviously with Game Maker 6.0. ♥'>2D games</abbr>
                  , every game of mine needed a website. So that is how I got
                  familiar and learned the{" "}
                  <strong>Hypertext Markup Language</strong>. As easy it was, i
                  enjoyed a lot creating HTML skeleton websites!
                </div>
              </div>
            </div>
            <div className='col-lg pb-3'>
              <div className='card card-showcase mt-3'>
                <div className='card-header pb-0'>
                  <h1>
                    <i className='fab fa-css3-alt'></i>
                  </h1>
                </div>
                <div className='card-body'>
                  Previously mentioning bare HTML website creation, I also
                  needed to learn <strong>Cascading Style Sheets </strong>{" "}
                  because i hated:
                  <br />
                  <ul style={{ listStyle: "none" }}>
                    <li style={{ fontFamily: "Times New Roman" }}>
                      Times New Roman
                    </li>
                    <li className='underline'>
                      <a href='/'>
                        <u>Anchor elements with underlines</u>
                      </a>
                    </li>
                  </ul>
                  Beneath that, playing with <strong>CSS</strong> sometimes was
                  a better game than my previously mentioned{" "}
                  <abbr title='😢'>2D Games</abbr>.
                </div>
              </div>
            </div>
            <div className='col-lg pb-3'>
              <div className='card card-showcase mt-3'>
                <div className='card-header pb-0'>
                  <h1>
                    <i className='fab fa-js'></i>
                  </h1>
                </div>
                <div className='card-body'>
                  Now the fun part! After an entrepreneur asked me to create a
                  fully functional website for his kickstarter, I met again with{" "}
                  <strong>JavaScript</strong>.
                  <br />
                  This was the moment when from a snippet stealing JavaScript
                  user I became 👉 JavaScript learner. I started learning the
                  language with <abbr title='True or False? 🤷‍♀️'>enjoyment</abbr>
                  .
                  <br />
                  Than I have discovered the <strong>ReactJS</strong> framework,
                  and I <abbr title='Now this is true!'>fell with love</abbr>{" "}
                  with JavaScript again!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Cards
