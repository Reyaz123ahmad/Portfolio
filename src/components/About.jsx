
import React from 'react'
import mypic from '../assets/mypic.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='intro-container'>
        <h2 className='about-head'>Introduction</h2>
        <p className='about-para'>Hello, my name is Ejaz Ahmad. I'm a student of B.tech 4th year with a strong interest in Computer Science. During my acacdemic career i have learn varoius skills and technologies like HTML, CSS, Javascript,React.js Node.js,Express.js and MongoDB.</p>
      </div>
      <div className='image-container'>
       <img src={mypic} alt="" className='about-image' />
      </div>
    
    </div>
  )
}

export default About
