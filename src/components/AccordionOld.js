import React from "react"

const Accordion = () => {
  return (
    <div className='container py-5'>
      <h1 className='text-center pb-5'>SKILLS</h1>
      <div className='row'>
        <div className='col-lg my-auto text-center pb-5 pb-lg-0'>
          <img
            src='https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif'
            alt='CODING'
            className='img-fluid'
          />
        </div>

        <div className='col-lg'>
          <div id='accordion'>
            <div className='card'>
              <div
                className='card-header cursor bg-dark text-light'
                id='headingOne'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <div className='d-flex justify-content-between'>
                  <h5 className='mb-0'>
                    <strong>WHAT AM I DOING?</strong>
                  </h5>
                  <p className='mb-0'>+</p>
                </div>
              </div>

              <div
                id='collapseOne'
                className='collapse show'
                aria-labelledby='headingOne'
                data-parent='#accordion'
              >
                <div className='card-body'>
                  Currently I am creating simple representational websites for
                  small or upcoming companies. If you want to work with someone
                  who is open-minded and adaptive with your ideas, than you are
                  welcomed to be friended with me!
                </div>
              </div>
            </div>

            <div className='card'>
              <div
                className='card-header cursor bg-dark text-light'
                id='headingOne'
                data-toggle='collapse'
                data-target='#collapseTwo'
                aria-expanded='true'
                aria-controls='collapseTwo'
              >
                <div className='d-flex justify-content-between'>
                  <h5 className='mb-0'>
                    <strong>WHAT COULD I DO?</strong>
                  </h5>
                  <p className='mb-0'>+</p>
                </div>
              </div>
              <div
                id='collapseTwo'
                className='collapse'
                aria-labelledby='headingTwo'
                data-parent='#accordion'
              >
                <div className='card-body'>
                  I will create You a website for your kickstart, our your long
                  working company. Presentational or blog. I am going to make
                  your digital appearance convincing. My scope is to make you
                  alive online!
                </div>
              </div>
            </div>
            <div className='card'>
              <div
                className='card-header cursor bg-dark text-light'
                id='headingOne'
                data-toggle='collapse'
                data-target='#collapseThree'
                aria-expanded='true'
                aria-controls='collapseThree'
              >
                <div className='d-flex justify-content-between'>
                  <h5 className='mb-0'>
                    <strong>WHAT ARE MY WISHES?</strong>
                  </h5>
                  <p className='mb-0'>+</p>
                </div>
              </div>
              <div
                id='collapseThree'
                className='collapse'
                aria-labelledby='headingThree'
                data-parent='#accordion'
              >
                <div className='card-body'>
                  I want to create native web applications based on React
                  Native, E-commerce websites and inventory management systems.
                  Dream big!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
