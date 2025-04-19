
import React from 'react'
import logo from '../assets/download.jpeg'
import { NavLink } from 'react-router-dom'
import {FaPhone} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { useState,useEffect } from 'react';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen,setIsMenuOpen]=useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if(width>450){
        setIsMenuOpen(false)
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }



  return (
    <div className='navbar'>
      
       <img src={logo} alt="" className='logo'/>

       {
        width >450?(<div className='link-container'>
        
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
      
        
        </div>):(<div>
          <button className='humberger' onClick={toggleMenu}>{isMenuOpen?<FaTimes/>:<GiHamburgerMenu/>}</button>
          {
            isMenuOpen && (
              <div className='mobile-menu'>
                <NavLink to='/' className='mobile-link' onClick={toggleMenu}><p>Home</p></NavLink>
                <NavLink to='/about' className='mobile-link' onClick={toggleMenu}><p>About</p></NavLink>
                <NavLink to='/contact' className='mobile-link' onClick={toggleMenu}><p>Contact</p></NavLink>

              </div>
            )
          }
        </div>)
      }
      
    </div>
  )
}

export default Navbar





