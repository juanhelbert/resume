import React from 'react'
import { Card } from '../../atoms/Card/Card'
import './Cards.scss'

const Cards = () => {
  return (
    <>
      <div className='cards'>
        <Card
          title='Agrofy news'
          description='One of the biggest challenges I had, migrating a news site to a new app made 100% with React'
          tags={['React', 'SEO', 'Accessibility', 'Bootstrap']}
          link='https://news.agrofy.com.ar/'
          className='agr'
        />
        <Card
          title='Tu menu online'
          description="It's a personal project created to speed up the way food is ordered in restaurants"
          tags={['React', 'SVG', 'Figma']}
          link='https://tumenuonline.com/'
          className='tmo'
        />
        <Card
          title='Mountains'
          description='A minimalist app that lists mountains images. I made it to learn about Gatsby and PWA'
          tags={['React', 'PWA', 'Gatsby']}
          link='https://mountains-hj.netlify.com/'
          className='mou'
        />
        <Card
          title='Congress Members'
          description='An application that lists the congress members and offers you the possibility to filter and contact them'
          tags={['React', 'Rest API']}
          link='https://congressmembers.netlify.com/'
          className='con'
        />
        <Card
          title='Totallia'
          description="Totallia was my first site as a freelance developer. I knew very little about Wordpress, but that wasn't a barrier"
          tags={['Wordpress', 'HTML/CSS', 'Freelance']}
          link='https://totallia.com/'
          className='tot'
        />
        <Card
          title='Aibild'
          description="One of the biggest ecommerce I've ever done. I love the way it looks."
          tags={['Magento', 'Bootstrap', 'Ecommerce']}
          link='https://aibild.com/'
          className='aib'
        />
      </div>
    </>
  )
}

export { Cards }