
import React from 'react'
import Project from './Project'
import About from './About'
import Contact from './Contact'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      
     
      <div className='home-content'>
        <About/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
