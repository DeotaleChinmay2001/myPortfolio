import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Education</h5>
                  <small>B.Tech <br /><i>Vishwakarma Institute of Technology,Pune.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Final CGPA</h5>
                  <small>8.82</small>
              </article>

              

              

            </div>
            <p>
                    I'm a <b>Software Development Engineer</b> at the <b>Suzlon Energy Limited.</b> 
                    I'm a young innovative developer with stong foundation in programming and problem solving.
                    Proficient in multiple programming language and development tools experienced in <b>Full stack development, Agile Methodology and Testing</b>
                    Passionate about staying up to date with emerging Technologies and collaborating with cross functional teams to deliver cutting edge products.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About