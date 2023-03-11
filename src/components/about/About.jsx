import React from 'react'
import './about.css'
import AR from'../../assets/about.jpg'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsCalendar2Date} from 'react-icons/bs'
import {FiAward} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AR} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineMailOutline className='about__icon'/>
              <h5>E-Mail ID</h5>
              <small>rosybanerjee18@gmail.com</small>
            </article>

            <article className='about__card'>
              <BsCalendar2Date className='about__icon'/>
              <h5>Date Of Birth</h5>
              <small>18 September 1996</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>
          </div>

          <p>
          Hello! My name is Rosy Banerjee, and I am a full stack developer with 2 years of experience creating beautiful, 
          responsive and dynamic web applications. I am passionate about building seamless user experiences that leverage 
          the latest front-end frameworks, while also creating robust and scalable back-end systems.
            
          </p>
          <p>
          Throughout my career, I have developed a deep understanding of web technologies, including HTML, CSS, JavaScript, React, and Angular on the front-end, and Node.js, Express.js, and Python on the back-end. I am also experienced with various databases such as MySQL, MongoDB, and PostgreSQL, and I'm well-versed in version control tools such as Git.
          </p>
          <p>
          Overall, I am excited about the endless possibilities of web development, and I am constantly learning and exploring new technologies to stay on the cutting edge of the industry. I am excited to bring my skills and passion to any project, and I look forward to working with you!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About