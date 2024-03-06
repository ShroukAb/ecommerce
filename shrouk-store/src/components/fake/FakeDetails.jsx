import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const FakeDetails = () => {
  let {id} = useParams()

  
  let [product , setProduct] = useState([])

 useEffect(() =>{
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res => res.json())
  .then(function(data){
    setProduct(data)
  })

 } , [])
  return (
    <div className='single-product container'>
     <img src={product.image}/>
     <div className="product-details">
     <h2>{product.category}</h2>
     <h3>{product.title}</h3>
     
     <div>
      < FaStar className='star-icon'/>
      < FaStar className='star-icon'/>
      < FaStar className='star-icon'/>
      < FaStar className='star-icon'/>
      < FaStar className='star-icon'/>
     </div>
     <div>
      <p>{product.description}</p>
      <h2>Price : {product.price}$</h2>
      <button>Add To Cart</button>
     </div>
     </div>
   
    </div>
  )
}

export default FakeDetails
