
import React, { useState } from 'react'
import {FaPhone} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const [formData,setFormData]=useState({name:'',phone:'',email:'',message:''})
  const [isSubmit,setIsSubmit]=useState(false)
  
  function changeHandler(event){
    setFormData((prevFormData)=>(
      {
        ...prevFormData,[event.target.name]:event.target.value
      }
    ))
  }
  function submitHandler(event){
   
    event.preventDefault();
    setIsSubmit(true)
    setTimeout(() => {
      console.log(formData)
      setFormData({
        name:'',
        email:'',
        phone:'',
        message:'',
        
      })
      setIsSubmit(false)
    }, 2000);
    
  }
  return (
    <div className='contact'>
      <h1 className='contact-head'>Our Contact Information</h1>
      <div className='contact-content'>
        <div className='contact-info'>
            <Link to='tel:+91 9661440544' className='contact-link1'>
                <p className='contact-para'><FaPhone/> : +91 9661440544</p>
            </Link>
            <Link to='mailto:ejazahmad96614@gamil.com' className='contact-link1'>
               <p className='contact-para'><MdEmail/> : ejazahmad96614@gamil.com</p>
            </Link>
            
            <Link to='https://wa.me/qr/HQMRINKQRIKTB1' className='contact-link1'>
               <p className='contact-para'><FaWhatsapp className='whatsapp'/> : +91 7250138929</p>
            </Link>
        </div>
       
       <form onSubmit={submitHandler} className='form'>
            <div className='input-field'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={changeHandler} className='input'required="true"/>
            </div>
            <div  className='input-field'>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" value={formData.phone} onChange={changeHandler} className='input' required="true"/>
            </div>
            <div  className='input-field'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={changeHandler} className='input'required="true"/>
            </div>
            <div  className='input-field'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="textarea" value={formData.message} onChange={changeHandler}/>
            </div>
            <button className='form-btn'disabled={isSubmit}>
              {
                isSubmit?'Submitting...':'Submit'
              }
            </button>
        </form>
       
      </div>
    </div>
  )
}

export default Contact
