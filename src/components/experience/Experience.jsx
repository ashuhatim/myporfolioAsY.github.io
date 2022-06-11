import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
       
        <div className=" experience__frontend">
           <h3>Frontend Development</h3>
           <div className="experience__content">
              
              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className="text__light">Experienced</small>
                  </div>
              </article>
              
              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Javascript</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>React</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>

           </div>
           
        </div>
        {/*backend */}
        <div className=" experience__backend">
        <h3>Backend Development</h3>
           <div className="experience__content">

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Node JS</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>
              
              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className="text__light">Experienced</small>
                  </div>
              </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>JAVA</h4>
                  <small className="text__light">Experienced</small>
                  </div>
              </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>C++</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className="text__light">Intermediate</small>
                  </div>
              </article>

           </div>

        </div>

      </div>
      </section>
  )
}

export default Experience