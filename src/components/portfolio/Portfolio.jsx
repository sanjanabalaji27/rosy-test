import React from 'react'
import './portfolio.css'
import project1 from '../../assets/c.jpg'
import project2 from '../../assets/renter.jpg'
import project3 from '../../assets/chats.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some Things I've Built</h5>
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={project1} alt=''/>
          <h3>C-19 Vaccine Management Database</h3>
          <p>A COVID vaccine management website that would help the user to find 
            the vaccination slots according to the search preferences.</p>
          <div className="portfolio__item-cta">
          <a href='https://github.com/rosybanerjee18' className='btn'>GitHub</a>
          </div>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={project2} alt=''/>
          <h3>Renters and Tenants Finder</h3>
          <p>A apartment app for apartment owners to find a tenant and tenants to find a place to stay.

          </p>
          <div className="portfolio__item-cta">
          <a href='https://github.com/rosybanerjee18' className='btn'>GitHub</a>
          </div>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={project3} alt=''/>
          <h3>Real-Time Chat Application</h3>
          <p>A real-time web chat application. It contains users and admins with groups and channels.</p>
          <div className="portfolio__item-cta">
          <a href='https://github.com/rosybanerjee18' className='btn'>GitHub</a>
          </div>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio