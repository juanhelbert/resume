import React from 'react'
import Fade from 'react-reveal/Fade';
import './Content.scss'

const Content = () => {
  const age = Math.floor((new Date() - new Date('1996-01-20').getTime()) / 3.15576e+10)

  return (
    <div className='content'>
      <Fade bottom>
        <section className='container about-me'>
          <h2>About me</h2>
          <p>I'm a {age} years old Software Engineer, passionate about learning and solving problems, always working as part of a team. </p>
          <p>I love creating clean code, researching new technologies and growing in the process.</p>
          <p>I'm always looking for new challenges.</p>
        </section>
        <section className='container about-me'>
          <h2>About me</h2>
          <p>I'm a {age} years old Software Engineer, passionate about learning and solving problems, always working as part of a team. </p>
          <p>I love creating clean code, researching new technologies and growing in the process.</p>
          <p>I'm always looking for new challenges.</p>
        </section>
      </Fade>
    </div >
  )
}

export { Content }