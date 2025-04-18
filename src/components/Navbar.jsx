
import React from 'react'
import logo from '../assets/download.jpeg'
import { NavLink } from 'react-router-dom'
import {FaPhone} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState,useEffect } from 'react';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className='navbar'>
      
       <img src={logo} alt="" className='logo'/>

       {
        width >400?(<div className='link-container'>
        
          <NavLink to='/' className='link'>
            <p>Home</p>
          </NavLink>

          <NavLink to='/about' className='link'>
            <p>About</p>
          </NavLink>

          <NavLink to='/contact' className='link'>
            <p>Contact</p>
          </NavLink>

          <NavLink to='tel:+919661440544' className='link'>
            <button className='phone-btn'><FaPhone/> +91 9661440544</button>
            
          </NavLink>
      
        
        </div>):(<button className='humberger'><GiHamburgerMenu/></button>)
       }
      
      
        
     
    </div>
  )
}

export default Navbar
