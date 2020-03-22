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
        <Fade>
          <h2>About me</h2>
          <p>I'm a {age} years old Software Engineer, passionate about learning and solving problems, always working as part of a team. </p>
          <p>I love creating clean code, researching new technologies and growing in the process.</p>
          <p>I'm always looking for new challenges.</p>
        </Fade>
      </section>
      <section className='container web-experiencie'>
        <Fade>
          <h2>A web enthusiast</h2>
          <p>As a Frontend developer I have developed a lot of sites, always keeping the focus on <b>UI/UX</b>, the <b>accessibility</b> and never leaving aside the <b>performance</b>.</p>
          <br /><br />
          <p>Some great projects I've been envolved in</p>
        </Fade>
        <Cards />
        <span className='arrow'>
          <p>You can scroll </p>
          <svg viewBox="0 0 512 512"><path d="M506.134 241.843c-.006-.006-.011-.013-.018-.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104c.006-.006.011-.013.018-.019 7.833-7.818 7.808-20.522-.001-28.314z" /></svg>
        </span>
        <Fade delay={400}>
          <p style={{ marginTop: '30px' }}>You can check more about my works in my resume</p>
        </Fade>
      </section>
      <section className='container what-used'>
        <Fade>
          <h2>What I've used</h2>
          <p>The following are some of the technologies I've been learning and using for the last {experience} years </p>
        </Fade>
        <Used />
        <span className='arrow'>
          <p>You can scroll </p>
          <svg viewBox="0 0 512 512"><path d="M506.134 241.843c-.006-.006-.011-.013-.018-.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104c.006-.006.011-.013.018-.019 7.833-7.818 7.808-20.522-.001-28.314z" /></svg>
        </span>
      </section>
      <section className='container contact'>
        <Fade>
          <h2>Contact</h2>
          <p>You can write me at <a href='mailto:helbert.juan@gmail.com'>helbert.juan@gmail.com</a></p>
        </Fade>
      </section>
    </div >
  )
}

export { Content }