import React from 'react'
import { Cards } from '../Cards/Cards'
import Fade from 'react-reveal/Fade';
import { Used } from '../../organisms/Used/Used'
import './Content.scss'

const Content = () => {
  const age = Math.floor((new Date() - new Date('1996-01-20').getTime()) / 3.15576e+10)
  const experience = new Date().getFullYear() - new Date('2018-01-01').getFullYear()

  return (
    <div className='content'>
      <section className='container about-me'>
        <Fade bottom>
          <h2>About me</h2>
          <p>I'm a {age} years old Software Engineer, passionate about learning and solving problems, always working as part of a team. </p>
          <p>I love creating clean code, researching new technologies and growing in the process.</p>
          <p>I'm always looking for new challenges.</p>
        </Fade>
      </section>

      <section className='container web-experiencie'>
        <Fade bottom>
          <h2>A web enthusiast</h2>
          <p>As a Frontend developer I have developed a lot of sites, always keeping the focus on <b>UI/UX</b>, the <b>accessibility</b> and never leaving aside the <b>performance</b>.</p>
          <br /><br />
          <p>Some great projects I've been envolved in</p>
        </Fade>
        <Cards />
        <span className='arrow'>
          <Fade>
            <p>You can scroll </p>
          </Fade>
          <svg viewBox="0 0 512 512"><path d="M506.134 241.843c-.006-.006-.011-.013-.018-.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104c.006-.006.011-.013.018-.019 7.833-7.818 7.808-20.522-.001-28.314z" /></svg>
        </span>
      </section>

      <section className='container what-used'>
        <Fade bottom>
          <h2>What I've used</h2>
          <p>The following are some of the technologies I've been learning and using for the last {experience} years </p>
        </Fade>
        <Used />
        <span className='arrow'>
          <Fade>
            <p>You can scroll too!</p>
          </Fade>
          <svg viewBox="0 0 512 512"><path d="M506.134 241.843c-.006-.006-.011-.013-.018-.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104c.006-.006.011-.013.018-.019 7.833-7.818 7.808-20.522-.001-28.314z" /></svg>
        </span>
      </section>

      <section className='container contact'>
        <Fade bottom>
          <h2>Contact</h2>
          <p>You can find me on</p>
          <div className='social'>
            <a target='_blank' aria-label="LinkedIn" href='https://www.linkedin.com/in/juan-helbert-30a65516a/' rel="noopener noreferrer">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a target='_blank' aria-label="Github" href='https://github.com/juanhelbert' rel="noopener noreferrer">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <a target='_blank' aria-label="Codepen" href='https://codepen.io/helbertjuan' rel="noopener noreferrer">
              <svg fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512">
                <defs />
                <path stroke="none" d="M241.239 303.936c-15.322-10.357-30.742-20.569-46.062-30.93-2.03-1.373-3.43-1.472-5.502-.029l-38.871 26.154C181.966 319.905 244 361.317 244 361.317v-53.786c-.012-1.224-1.553-2.78-2.761-3.595zm-46.147-63.27c15.454-10.16 30.851-20.409 46.109-30.86 1.486-1.018 2.775-3.509 2.799-5.334v-51.706s-62.033 41.124-93.262 61.942c13.7 9.159 26.671 17.913 39.787 26.443 1.02.662 3.396.284 4.567-.485zm74.746-31.312a4521.517 4521.517 0 0047.627 31.815c.916.604 2.92.602 3.839 0l39.751-26.467L268 152.484v53.35c.01 1.201.805 2.821 1.838 3.52zm-11.729 21.015c-1.21-.802-3.611-.528-4.743.168-4.817 2.962-9.463 6.203-14.164 9.355-8.248 5.53-25.356 17.023-25.356 17.023l38.842 25.865c1.748 1.157 4.436 1.22 6.26.111l39.014-25.993c.001 0-34.079-22.701-39.853-26.529zM141 237.116v39.609l29.622-19.838z" />
                <path stroke="none" d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm139 265.006c0 5.785-2.652 9.868-7.511 13.094a38019.909 38019.909 0 00-123.286 82.188c-5.854 3.918-11.174 3.754-16.984-.137-40.783-27.314-81.719-54.546-122.625-81.676-5.11-3.389-7.594-7.557-7.594-13.73v-79.729c0-6.141 2.521-10.332 7.624-13.716 40.906-27.13 81.939-54.363 122.724-81.676 5.818-3.896 11.094-4.007 16.938-.095a41090.004 41090.004 0 00123.261 82.195c4.678 3.106 7.453 6.943 7.453 12.66v80.622z" />
                <path stroke="none" d="M316.247 273.234a3826.352 3826.352 0 01-45.386 30.332c-2.412 1.588-2.888 3.318-2.861 6.189v51.346l93.039-62.004-38.527-25.882c-2.345-1.604-3.93-1.567-6.265.019zM370 276.676V237.06l-29.59 19.873z" />
              </svg>
            </a>
          </div>
          <br />
          <p>or write me at <a href='mailto:helbert.juan@gmail.com'>helbert.juan@gmail.com</a></p>
        </Fade>
      </section>
    </div >
  )
}

export { Content }