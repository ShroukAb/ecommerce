import React from 'react'
import Fake from '../components/fake/Fake'


const Shop = (props) => {
  return (
    <div>
      <Fake addToCart = {props.addToCart}/>
    </div>
  )
}

export default Shop

