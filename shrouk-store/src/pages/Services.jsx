import React from 'react'
import { FaTruck } from "react-icons/fa";
import { MdBrowserNotSupported , MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
const Services = () => {
  return (
    <div className='services container'>
      <h1 className='title'>Our Services</h1>
      <div className="services-flex">
        <div className="service">
          <FaTruck className='service-icon'/>
          <h2>Free Shipping</h2>
        </div>

        <div className="service">
          <MdBrowserNotSupported  className='service-icon'/>
          <h2>24/7 Support</h2>
        </div>

        <div className="service">
          <MdOutlinePayment className='service-icon'/>
          <h2>Online payment</h2>
        </div>

        <div className="service">
          <TfiReload  className='service-icon'/>
          <h2>Return</h2>
        </div>
      </div>
    </div>
  )
}

export default Services
