import React from 'react'
import './experience.css'
import {FiCheck} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <div className= "experience__hss">
        <h2>Experience</h2>
        <div className="container experience__container">
          <article className="experience">
            <div className="experience__head">
              <h4>Software Engineer</h4>
              <h4>Infosys Ltd.</h4>
              <h5 className='text-light'>(Mar 20 – Dec 21)</h5>
            </div>
            <ul className='experience__list'>
            <li>
              <FiCheck className='experience__list-icon'/>
              <p>
              Worked as a DevOps Engineer in the Finance Management Business Unit of Citibank to develop microservices using
              Spring Boot and Maven.

              </p>
              </li>
            <li>
            <FiCheck className='experience__list-icon'/>
              <p>
              Devised an information portal website for tracking critical finance data attributes from payment systems using Apache
              Spark Streaming and Kafka.

              </p>
              </li>
            <li>
            <FiCheck className='experience__list-icon'/>
              <p>
              Created a CI/CD pipeline using Bitbucket to automate Service Builds and Database Migrations in Prod and Non-Prod
              Environments.
              </p>
              </li>
              <li>
            <FiCheck className='experience__list-icon'/>
              <p>
              Optimized web traffic using Nginx Server Configuration to create reverse-proxies and redirect API to defined domains.

              </p>
              </li>
            </ul>
          </article>
          <article className="experience">
            <div className="experience__head">
              <h4>Systems Engineer Trainee</h4>
              <h4>Infosys Ltd.</h4>
              <h5 className='text-light'>(Dec 19 – Feb 20)</h5>
            </div>
            <ul className='experience__list'>
            <li>
              <FiCheck className='experience__list-icon'/>
              <p>
              Implemented Spring Boot components of an E-Commerce website to design service side logic of user data.

              </p>
              </li>
            <li>
            <FiCheck className='experience__list-icon'/>
              <p>
              Incorporated Object-Oriented design and implemented Web services and micro-services to 
              identify fraudulent ecommerce orders.
              </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience