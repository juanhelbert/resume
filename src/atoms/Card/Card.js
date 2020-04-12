import React from 'react'
import Fade from 'react-reveal/Fade';
import './Card.scss'

const linkIcon = <svg className="link-icon" viewBox="0 0 24 24" fill="#4b4b4b"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>

const Card = (props) => {
  const { title, className, description, link, tags } = props
  const tagsList = tags.map(item => <li key={item}>{item}</li>)

  return (
    <Fade duration={500} >
      <a target='_blank' href={link} rel="noopener noreferrer" className={`card ${className}`}>
        <h3>{title} {linkIcon}</h3>
        <p>{description}</p>
        <ul>
          {tagsList}
        </ul>
      </a>
    </Fade>
  )
}

export { Card }