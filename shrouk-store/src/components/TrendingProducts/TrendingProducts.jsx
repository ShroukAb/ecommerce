import React from 'react'
import './trendingProducts.css'
import img1 from '../../assets/images/products/product-1.jpg'
import img2 from '../../assets/images/products/product-2.jpg'
import img3 from '../../assets/images/products/product-3.jpg'
import img4 from '../../assets/images/products/product-4.jpg'
import img5 from '../../assets/images/products/product-5.jpg'
import img6 from '../../assets/images/products/product-6.jpg'
import img7 from '../../assets/images/products/product-7.jpg'
import img8 from '../../assets/images/products/product-8.jpg'
import { FaStar } from "react-icons/fa";
const TrendingProducts = () => {
  return (
    <div className='trending-product container'>
      <h2 className='title'>Trending Product</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore invento
         ullam saepe placeat non odit quaerat sapiente </p>
         <div className="trending-flex">
            <div className="trending">
            <img src={img1}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img2}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img3}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img4}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img5}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img6}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img7}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
            <div className="trending">
            <img src={img8}/>
            <h3>Watches</h3>
            <h2>Xioami Mi Band 5</h2>
            <div className='h'>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
           < FaStar className='trend-icon'/>
        <div>
            <p>4.0 Review(s)</p>
        </div>
        <h5>$399.00</h5>
            </div>
            </div>
         </div>
    </div>
  )
}

export default TrendingProducts
