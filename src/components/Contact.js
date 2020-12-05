import React, { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  const [formMessage, setFormMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "gmail",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormMessage("Your message sent successfully! Thank You!")
        },
        (error) => {
          console.log(error.text)
          setFormMessage(
            "There was a problem sending your mail! Try again later!"
          )
        }
      )
    e.target.reset()
  }

  return (
    <div className='hero'>
      <div className='hero-cover'>
        <div className='container-fluid'>
          <div className='container'>
            <div
              className='text-center pt-5 pb-5 mx-auto'
              style={{ width: "100%", maxWidth: "800px" }}
            >
              <h1>CONTACT ME</h1>
              <form onSubmit={sendEmail}>
                <div className='form-group'>
                  <label
                    className='col-form-label col-form-label-lg'
                    htmlFor='inputName'
                  >
                    Name: <span className='text-danger'>*</span>
                  </label>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text' id='btnGroupAddon'>
                        <i className='fas fa-user'></i>
                      </div>
                    </div>
                    <input
                      required
                      className='form-control form-control-lg'
                      type='text'
                      placeholder='Your pretty name goes here'
                      id='inputName'
                      name='name'
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <label
                    className='col-form-label col-form-label-lg'
                    htmlFor='inputEmail'
                  >
                    Email: <span className='text-danger'>*</span>
                  </label>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text'>
                        <i className='fas fa-envelope'></i>
                      </div>
                    </div>
                    <input
                      required
                      className='form-control form-control-lg'
                      type='email'
                      placeholder='Your email adress goes here'
                      id='inputEmail'
                      name='email'
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <label
                    className='col-form-label col-form-label-lg'
                    htmlFor='inputTextfield'
                  >
                    How could I help you? <span className='text-danger'>*</span>
                  </label>
                  <textarea
                    className='form-control form-control-lg'
                    id='inputTextfield'
                    rows='6'
                    placeholder='Your message goes here'
                    name='message'
                  ></textarea>
                </div>
                <p>
                  <span className='text-danger'>*</span> Means required!
                </p>
                {formMessage && (
                  <div
                    data-aos='fade-in'
                    className='alert alert-dismissible alert-success'
                  >
                    <button
                      type='button'
                      className='close'
                      data-dismiss='alert'
                    >
                      &times;
                    </button>
                    Your message was sent successfully! Thank You!
                  </div>
                )}
                <button type='submit' className='btn btn-lg px-5 btn-danger'>
                  <i className='fas fa-paper-plane'></i> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='container'>
          <hr />
          <div className='text-center pb-4 pt-3 lead'>
            Or you can contact me anytime at:{" "}
            <a href='mailto:isticsek@gmail.com' className='text-danger'>
              <strong>isticsek@gmail.com</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
