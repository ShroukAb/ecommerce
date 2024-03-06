import React from 'react'
import './cart.css'
const Cart = ({cartItems , deletProduct , addToCart ,decreseProduct }) => {

  let total = 0
  return (
    <div className='cart container'>
      {cartItems.length == 0 &&  
      <h2 className='no-products'>No Exists products In Cart</h2>}
      <div className="cart-items">

      {cartItems.map(function(item){
        total = total + (item.price * item.qty)
        return(
          <div className="cart-item">
            <img src={item.image}/>
            <div className='counter'>
              <button onClick={() => addToCart(item)}>+</button>
              <h2>{item.qty}</h2>
              <button onClick={() => decreseProduct(item)}>-</button>
            </div>
            <h2>Price : {item.price * item.qty}$</h2>
            <button onClick={() => deletProduct(item)}>Remove Product</button>
          </div>
        )
      
        
      })}
      </div>
     {cartItems.length != 0 &&      <div className="total">
       <div>
        <h3>Total :</h3>
        <h3>{total}$</h3>
       </div>
       <hr/>
       </div>}
      </div>
   
  )
}

export default Cart
