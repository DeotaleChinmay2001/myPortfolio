import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/2.png'
import IMG2 from '../../assets/4.png'
import IMG3 from '../../assets/5.png'
import IMG4 from '../../assets/port.png'
import IMG5 from '../../assets/6.png'
import IMG6 from '../../assets/App.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Airbus Hackathon(Aircraft Sustinability Platform)</h3>
            <small className='text-light'>React, Django, PostgreSQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/DeotaleChinmay2001/aerothon" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Pakdarphan</h3>
            <small className='text-light'>HTML | CSS | JS | Django | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/DeotaleChinmay2001/myPortfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs | Typescript</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/DeotaleChinmay2001/myPortfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/DeotaleChinmay2001/myPortfolio" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Web Forecast Model</h3>
            <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a  target="_blank" rel='noreferrer' className='btn'>Internship Project</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Wind Farm Monitoring</h3>
            <small className='text-light'>React | Vite | Express-Node | Docker | Jenkins| PM2</small>
            <div className="portfolio__item-cta">
              <a  target="_blank" rel='noreferrer' className='btn'>Suzlon Project</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Wind Farm App(Client)</h3>
            <small className='text-light'>React Native | Typescript</small>
            <div className="portfolio__item-cta">
              <a target="_blank" rel='noreferrer' className='btn'>Suzlon Project</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects