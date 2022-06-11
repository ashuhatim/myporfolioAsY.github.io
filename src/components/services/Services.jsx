import React from 'react'
import './Services.css'
import {FcCheckmark} from 'react-icons/fc'
const Services = () => {
  return (
    <section id='services'>

    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      
      {/* UX/UI design section*/}
      <article className="service">
        <div className="service__head">
          <h3>UI/UX design</h3>
        </div>
        <ul className="service__list">

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

        </ul>

      </article>


      {/* Web development section*/}
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
          
          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

        </ul>

      </article>

      {/* Content creation*/}
      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className="service__list">
          
          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

          <li><FcCheckmark className="service__list-icon"/>
          <p>this is first task</p>
          </li>

        </ul>

      </article>

    </div>
         

    </section>
  )
}

export default Services