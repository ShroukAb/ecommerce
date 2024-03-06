import React, { useEffect, useState } from 'react'
import './fake.css'
import { Link } from 'react-router-dom'
const Fake = (props) => {

  let [products , setProducts] = useState([])

 useEffect(() =>{
  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(function(data){
    setProducts(data)
  })

 } , [])
  return (
    <div className='fake container'>
      <h2 className='title'>Fake Prouducts</h2>
      <div className="products container">
      {products.map(function(item){
        return(
          <div className="product" key={item.id}>
           <Link to={`/fakeDetails/${item.id}`}>
           < img src={item.image} alt=''/>
           </Link>
         <h2>{item.title.slice(0 , 15)}</h2>
         <button onClick={() => props.addToCart(item)}>Add To Cart</button>
          </div>
        )
      })}

      </div>
 
    </div>
  )
}

export default Fake

