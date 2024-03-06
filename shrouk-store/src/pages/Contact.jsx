import React from 'react'

const Contact = () => {
  return (
    <div className='contact container'> 
    <h2 className='title'>Contact Us</h2>
    <div className="contact-flex">
      <div className="contact-lift">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d440900.1479818071!2d32.0210103983948!3d30.307370585579257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1708119478288!5m2!1sar!2seg"></iframe>
      </div>
      <div className="contact-right">
        <input type='text' placeholder='Your Name'></input>
        <input type='text' placeholder='Your Phone'></input>
        <input type='text' placeholder='Your Email'></input>
       <textarea cols="60" rows='10' placeholder='Your Message'></textarea>
      </div>
    </div>
    </div>
  )
}

export default Contact
