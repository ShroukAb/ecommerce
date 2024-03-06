import React from 'react'
import img1 from '../../assets/images/featured-categories/fetured-item-1.png'
import img2 from '../../assets/images/featured-categories/fetured-item-2.png'
import img3 from '../../assets/images/featured-categories/fetured-item-3.png'
import img4 from '../../assets/images/featured-categories/fetured-item-4.png'
import img5 from '../../assets/images/featured-categories/fetured-item-5.png'
import img6 from '../../assets/images/featured-categories/fetured-item-6.png'
import './featureCategories.css'

const FeatureCategories = () => {
  return (
    <section className='feature-categories container'>
      <h2 className='title'>Featured Categories</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet quam 
        beatae non saepe molestias nam ratione</p>
         <div className="features">
            <div className="feature">
                <div className='feature-text'>
                <h3>TV & Audios</h3>
                <h3>Smart TV</h3>
                <h3>Qled TV</h3>
                <h3>Audios</h3>
                <h3>HeadPhones</h3>
                </div>
                <div>
                    <img src={img1}/>
                </div>
            </div>
            <div className="feature">
                <div className='feature-text'>
                <h3>TV & Audios</h3>
                <h3>Smart TV</h3>
                <h3>Qled TV</h3>
                <h3>Audios</h3>
                <h3>HeadPhones</h3>
                </div>
                <div>
                    <img src={img2}/>
                </div>
            </div>
            <div className="feature">
                <div className='feature-text'>
                <h3>TV & Audios</h3>
                <h3>Smart TV</h3>
                <h3>Qled TV</h3>
                <h3>Audios</h3>
                <h3>HeadPhones</h3>
                </div>
                <div>
                    <img src={img3}/>
                </div>
            </div>
            <div className="feature">
                <div className='feature-text'>
                <h3>TV & Audios</h3>
                <h3>Smart TV</h3>
                <h3>Qled TV</h3>
                <h3>Audios</h3>
                <h3>HeadPhones</h3>
                </div>
                <div>
                    <img src={img4}/>
                </div>
            </div>
            <div className="feature">
                <div className='feature-text'>
                <h3>TV & Audios</h3>
                <h3>Smart TV</h3>
                <h3>Qled TV</h3>
                <h3>Audios</h3>
                <h3>HeadPhones</h3>
                </div>
                <div>
                    <img src={img5}/>
                </div>
            </div>
            <div className="feature">
                <div className='feature-text'>
                <h3>TV & Audios</h3>
                <h3>Smart TV</h3>
                <h3>Qled TV</h3>
                <h3>Audios</h3>
                <h3>HeadPhones</h3>
                </div>
                <div>
                    <img src={img6}/>
                </div>
            </div>
  
         </div>
    </section>
  )
}

export default FeatureCategories
