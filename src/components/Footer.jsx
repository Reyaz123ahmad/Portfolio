
import React from 'react'
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram,FaTelegram,FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer-second-container'>
        <div className='icon-container'>
          <h2>Social Networks</h2>
            <Link to='https://github.com/Ejaz786Ahmad' className='link1'><FaGithub/> Github</Link>
            <Link to='https://www.linkedin.com/in/ejaz-ahmad-1691a9321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='link1'><FaLinkedin/> Linkedin</Link>
            <Link to='https://www.instagram.com/ejaz_ahmad.?igsh=MTBzdHNoODh1YWlhYg==' className='link1'><FaInstagram/> Instagram</Link>
            <Link to='https://www.facebook.com/share/19Ja8PxyFN/?mibextid=qi2Omg' className='link1'><FaFacebook/> Facebook</Link>
            <Link to='https://telegram.org/dl' className='link1'><FaTelegram/> Telegram</Link>
            <Link to='/' className='link1'><FaTwitter/> Twitter</Link>
        </div>
        <div className='info-container'>
          <h2>Info</h2>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Our Stories</p>
        </div>
        <div className='policy-container'>
          <h2>Policy</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Security</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className='line-parent'><div className='line'></div></div>
      <div className='copyright'>
        <p>&copy; {year} Ejaz - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
