import React from 'react'
import { Card } from '../../atoms/Card/Card'
import projects from '../../projects'
import './Cards.scss'

const Cards = () => {
  return (
    <div className='cards'>
      {projects.map(card => <Card key={card.title} {...card} />)}
    </div>
  )
}

export { Cards }