import React, { useState } from "react"
import HeroModal from "./HeroModal"

const Hero = () => {
  const [moreBtn, setMoreBtn] = useState(false)

  return (
    <div className='hero mb-0'>
      <div className='py-5 hero-cover'>
        <div className='container'>
          <h1 className='display-4 pb-3'>HI THERE!</h1>
          <p className='lead' style={{ fontSize: "24px" }}>
            Welcome! My name is <strong>Pasztor Istvan</strong>, spelled{" "}
            <i>
              <abbr title='A tourist van owned by Paz. 🚙'>
                /'Paz 's Tourist Van'/
              </abbr>
            </i>
            . But you can call me <strong>Isti</strong>. I am a freelancer web
            developer on my way to the top, as I hope!
          </p>

          <div className='collapse' id='collapseExample'>
            <HeroModal />
          </div>

          <hr />
          <div
            className='btn btn-danger btn-lg px-5 mt-2'
            data-toggle='collapse'
            href='#collapseExample'
            role='button'
            aria-expanded='false'
            aria-controls='collapseExample'
            onClick={() => setMoreBtn(!moreBtn)}
          >
            {moreBtn ? (
              <i className='fas fa-chevron-up'></i>
            ) : (
              <i className='fas fa-chevron-down'></i>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
