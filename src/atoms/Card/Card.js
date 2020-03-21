import React from 'react'
import Fade from 'react-reveal/Fade';
import './Card.scss'

const Card = (props) => {
  const { title, className, description, link, tags } = props
  const tagsList = tags.map(item => <li key={item}>{item}</li>)

  return (
    <Fade bottom delay={100} >
      <a target='_blank' href={link} rel="noopener noreferrer" className={`card ${className}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {tagsList}
        </ul>
      </a>
    </Fade>
  )
}

export { Card }