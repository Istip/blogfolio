import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

export default function Example() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <React.StrictMode>
      <Button variant='dark' size='sm' onClick={handleShow}>
        <div className='px-5'>More information</div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Meddison Recruitment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <abbr title='Create / Read / Update / Delete'>CRUD</abbr> a new post
            on the website, he was bind to me. Nothing could happen without me
            editing the markup. Doesn't matter how pretty was the frontend, he
            couldn't change. He is a business man, not a developer! Do'h!
          </p>
          <p>
            So everytime something needed to change that{" "}
            <abbr title='Poor him! 😢'>costed a lot for him</abbr>! So i
            reacreated everything, using React JavaScript with headless CMS
            bindness to outer backend territory. Now he could treat the essence
            of the portal from a single admin panel and we were{" "}
            <abbr title='Because that is what both developers and clients want!'>
              both happy!
            </abbr>
          </p>
          <p className='text-center'>
            <a href='https://www.meddison.eu' target='_blank' rel='noreferrer'>
              Visit the old website
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' size='sm' block onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.StrictMode>
  )
}
