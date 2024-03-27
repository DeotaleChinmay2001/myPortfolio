import React from 'react'
import './WorkExperience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {BsFillTriangleFill} from 'react-icons/bs'

const WorkExperience = () => {
  return (
    <section id='experience'>
      <h2>Work Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Suzlon Energy Limited<br/>(Jul 2023 - Present)</h3>
            <h3>Technology</h3>

            <div className="experience__content">

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJS</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node/Express</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MS-SQL</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Jira</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Jenkins</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Docker</h4>
                </div>
              </article>
            </div>
            <br/>
            <h3>Projects</h3>
                 <article className='experience__details'>
                <BsFillTriangleFill className='experience__details-icon'/>
                <div>
                  <h4>OPC-UA Data Source</h4>
                </div>
              </article>
              <br/>
              <article className='experience__details'>
                <BsFillTriangleFill className='experience__details-icon'/>
                <div>
                  <h4>Turbine Monitoring System</h4>
                </div>
              </article>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
        <h3>Aspect Ration Inc.<br/>(Sept 2022 - Jan 2023)</h3>
            <h3>Technology</h3>

            <div className="experience__content">

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Javascript</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Django</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tensorflow</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Seaborn</h4>
                </div>
              </article>
            </div>
            <br/>
            <h3>Projects</h3>
                 
              <article className='experience__details'>
                <BsFillTriangleFill className='experience__details-icon'/>
                <div>
                  <h4>Web Forecasting Model - EQFx Drug </h4>
                </div>
              </article>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience