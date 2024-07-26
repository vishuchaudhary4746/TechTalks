import React from 'react'
import './Welcome.css'
import GenAI from './Gen_AI.png'
import {Link} from 'react-router-dom'


const WelcomePage = () => {
  return (
    <div className='welcomepage'>
      <div className="welcome-left">
        <p className='welcome-heading'>With Google in its sights, OpenAI unveils SearchGPT</p>
        <p className='welcome-author'>Kyle Wiggers</p>
          <img className='welcome-img' src={GenAI} alt="" />
      </div>
      <div className="welcome-right">
        <div className="welcome-right1">
          <Link className="welcome-right-head" to='/Startup'>
              Startups
          </Link>
          <div className="welcome-right-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates, laboriosam.
          </div>
          <div className="welcome-right-author">
              Lorem, ipsum.
          </div>
        </div>
        <div className="welcome-right2">
          <a className="welcome-right-head" href='/'>
              Gadgets
          </a>
          <div className="welcome-right-content">
              Lorem ipsum dolor sit amet.
          </div>
          <div className="welcome-right-author">
            Lorem, ipsum.
          </div>
        </div>
        <div className="welcome-right3">
          <a className="welcome-right-head" href='/'>
              lorem
          </a>
          <div className="welcome-right-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="welcome-right-author">
            Lorem, ipsum dolor.
          </div>
        </div>
        <div className="welcome-right4">
          <a className="welcome-right-head" href='/'>
              lorem
          </a>
          <div className="welcome-right-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="welcome-right-author">
            Lorem, ipsum dolor.
          </div>
        </div>
        <div className="welcome-right5">
          <a className="welcome-right-head" href='/'>
              lorem
          </a>
          <div className="welcome-right-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="welcome-right-author">
            Lorem, ipsum dolor.
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default WelcomePage
