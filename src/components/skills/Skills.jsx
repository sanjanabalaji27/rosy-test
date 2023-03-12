import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {GiFlexibleStar} from 'react-icons/gi'


const Skills = () => {
  return (
    <section id='skills'>
      <h5>Think of Something</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>80%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>90%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
              <h4>JavaScript (ES6+)</h4>
            <small className='text-light'>80%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>60%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>70%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>80%</small>
            </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Oracle SQL</h4>
            <small className='text-light'>90%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>90%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>80%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>70%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>90%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>70%</small>
            </div>
            </article>
          </div>
        </div>
        <div className="skills__languages">
        <h3>Programming Languages</h3>
          <div className="skills__content">
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>90%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>80%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>60%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>Scala</h4>
            <small className='text-light'>70%</small>
            </div>
            </article>
            <article className='skills__details'> 
            <GiFlexibleStar className='skills__details-icon'/>
            <div>
            <h4>SAP ABAP</h4>
            <small className='text-light'>80%</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills