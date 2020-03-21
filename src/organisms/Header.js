import React from 'react'
import Fade from 'react-reveal/Fade';
import './Header.scss'

const Header = () => {
  return (
    <header className='container'>
      <div class="box" />
      <div class="circle" />
      <Fade >
        <div className='me-wrapper'>
          <span>
            HELLO
          </span>
          <h1>
            I'm Juan
          </h1>
          <p>
            A Software Engineer, <br />
            a frontend developer.
          </p>
          <a className='button' href="pdf/CV JUAN HELBERT.pdf" target="_blank">
            RESUME
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
          </a>
        </div>
      </Fade>
    </header>
  )
}

export { Header }