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