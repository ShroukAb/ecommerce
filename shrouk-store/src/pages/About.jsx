import React from 'react'
import NumberCounter from 'number-counter'
import Team from '../components/team/Team'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const About = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='about container'>
      <h1 className='title'> About Us</h1>
      <div className="about-counter">
        <NumberCounter start={500} end = {3000} delay = {5} postFix ="$" className = "n">
          <h2>3000</h2>
          <h3>Students</h3>
        </NumberCounter>

        <NumberCounter start={500} end = {3000} delay = {5} postFix ="$" className = "n">
          <h2>1800</h2>
          <h3>Instructors</h3>
        </NumberCounter>

        <NumberCounter start={0} end = {2000} delay = {5} postFix ="+" className = "n">
          <h2>2000</h2>
          <h3>Rooms</h3>
        </NumberCounter>

        <NumberCounter start={0} end = {2000} delay = {5} postFix ="%" className = "n">
          <h2>100 %</h2>
          <h3>Successfuly</h3>
        </NumberCounter>
      </div>
    <Team/>
    <div className="testimonials">
      <h2 className='title' style={{marginBottom : '80px'}}>Our Clint say</h2>
      <Slider {...settings}>
        <div className="testimonial">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ipsam qui, quidem sint quis dolores labore, consequuntur neque sit
            asperiores fuga unde sunt,
           ullam molestias? Quidem culpa quo molestias eligendi quibusdam?</p>
           <div>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           </div>
           <h2>Salma Ahmed</h2>
           <h3>Frontend Developer</h3>
        </div>

        <div className="testimonial">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ipsam qui, quidem sint quis dolores labore, consequuntur neque sit
            asperiores fuga unde sunt,
           ullam molestias? Quidem culpa quo molestias eligendi quibusdam?</p>
           <div>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           </div>
           <h2>Salma Ahmed</h2>
           <h3>Frontend Developer</h3>
        </div>

        <div className="testimonial">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ipsam qui, quidem sint quis dolores labore, consequuntur neque sit
            asperiores fuga unde sunt,
           ullam molestias? Quidem culpa quo molestias eligendi quibusdam?</p>
           <div>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           </div>
           <h2>Salma Ahmed</h2>
           <h3>Frontend Developer</h3>
        </div>

        <div className="testimonial">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ipsam qui, quidem sint quis dolores labore, consequuntur neque sit
            asperiores fuga unde sunt,
           ullam molestias? Quidem culpa quo molestias eligendi quibusdam?</p>
           <div>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           </div>
           <h2>Salma Ahmed</h2>
           <h3>Frontend Developer</h3>
        </div>

        <div className="testimonial">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ipsam qui, quidem sint quis dolores labore, consequuntur neque sit
            asperiores fuga unde sunt,
           ullam molestias? Quidem culpa quo molestias eligendi quibusdam?</p>
           <div>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           <FaStar className= 'star-icon'/>
           </div>
           <h2>Salma Ahmed</h2>
           <h3>Frontend Developer</h3>
        </div>
      </Slider>
    </div>
    </div>
    
  )
}

export default About
