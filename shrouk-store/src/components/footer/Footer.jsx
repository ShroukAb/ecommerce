import React from 'react'
import './footer.css'
import logo from '../../assets/images/team/logo.svg'
import { FaFacebook, FaInstagram, FaLightbulb, FaTwitter, FaYoutube } from 'react-icons/fa'
import img1 from '../../assets/images/footer visa/1.png'
import img2 from '../../assets/images/footer visa/2.png'
import img3 from '../../assets/images/footer visa/3.png'
import img4 from '../../assets/images/footer visa/4.png'
import img5 from '../../assets/images/footer visa/5.png'
import img6 from '../../assets/images/footer visa/6.png'
const Footer = () => {
  return (
    <footer>
     <div className="footer-content container">
     <div className="footer-up">
        <img src={logo}/>
        <div className="footer-up-middle">
            <h2>Subscribe to Our Newsletter</h2>
            <h3>Get all the latest information sales and offers</h3>
        </div>
        <div className="subscribe">
            <input type='text' placeholder='Enter Your Email'></input>
            <button>Subscribe</button>
        </div>
      </div>
      <hr/>
      <div className="footer-middle">
        <div className="footer-middle-lift">
            <h2>Bravo Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Tempore esse at rerum tenetur saepe veniam obcaecati, qui atque ipsum 
                ab, odit aperiam quae 
                explicabo non laboriosam harum, ratione hic officia.</p>
        </div>
        <div className="footer-middle-links">
            <h2>Social Meddia</h2>
            <ul>
                <li><a href='#'><FaFacebook/></a></li>
                <li><a href='#'><FaTwitter/></a></li>
                <li><a href='#'><FaInstagram/></a></li>
                <li><a href='#'><FaYoutube/></a></li>
                <li><a href='#'><FaLightbulb/></a></li>
            </ul>
        </div>
        <div className="footer-middle-social">
            <h2>Usful Link</h2>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Service</a></li>
                <li><a href='#'>Content</a></li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className="footer-down">
        <p>Copy Right by@Bravo Team - 2024</p>
        <div>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
        <img src={img6}/>
        </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer
