import React from 'react'
import './team.css'
import img1 from '../../assets/images/team/01.jpg'
import img2 from '../../assets/images/team/02.jpg'
import img3 from '../../assets/images/team/03.jpg'
import img4 from '../../assets/images/team/04.jpg'
import { FaFacebook ,FaTwitter , FaSkype} from "react-icons/fa"
const Team = () => {
  return (
    <div className='team container'>
      <h2 className='title'>Our Team</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quidem veniam
         tenetur ipsam optio eos eveniet doloremque mollitia quas cumque</p>

         <div className="chars">
            <div className="char">
                <img src={img1} alt=''/>
                <h2>Amal Ebrahim</h2>
                <h3>Frontend Developer</h3>
             <div>
                <FaFacebook className='team-icon'/>
                <FaTwitter className='team-icon'/>
                <FaSkype className='team-icon'/>
             </div>
            </div>
            <div className="char">
                <img src={img2} alt=''/>
                <h2>Amal Ebrahim</h2>
                <h3>Frontend Developer</h3>
             <div>
                <FaFacebook className='team-icon'/>
                <FaTwitter className='team-icon'/>
                <FaSkype className='team-icon'/>
             </div>
            </div>
            <div className="char">
                <img src={img3} alt=''/>
                <h2>Amal Ebrahim</h2>
                <h3>Frontend Developer</h3>
             <div>
                <FaFacebook className='team-icon'/>
                <FaTwitter className='team-icon'/>
                <FaSkype className='team-icon'/>
             </div>
            </div>
            <div className="char">
                <img src={img4} alt=''/>
                <h2>Amal Ebrahim</h2>
                <h3>Frontend Developer</h3>
             <div>
                <FaFacebook className='team-icon'/>
                <FaTwitter className='team-icon'/>
                <FaSkype className='team-icon'/>
             </div>
            </div>
         </div>
    </div>
  )
}

export default Team
