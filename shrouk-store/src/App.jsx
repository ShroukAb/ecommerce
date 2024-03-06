import React, { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import FakeDetails from './components/fake/FakeDetails'
import Cart from './pages/cart/Cart'


const App = () => {

const [cartItems , setCartItems] = useState([])

function addToCart(product){
  let selectedItem = cartItems.find(item => item.id == product.id)

if(selectedItem){
  setCartItems(cartItems.map(item => item.id == product.id ?
    {...selectedItem , qty : selectedItem.qty + 1 } : item
   
    ))

}else{
    setCartItems([...cartItems , {...product , qty : 1}])

  }
}



function deletProduct(product){
  setCartItems(cartItems.filter(item => item.id !=product.id))


}


function decreseProduct(product){
 let selectedItem = cartItems.find(item => item.id == product.id)

  if (selectedItem.qty == 1){
    setCartItems(cartItems.filter(item => item.id != product.id))
  }else{
    setCartItems(cartItems.map(item => item.id == product.id ?
      {...selectedItem , qty : selectedItem.qty - 1} : item
      ))
  }
}

  return (
    <BrowserRouter>
    <Navbar cartItems = {cartItems}/>
    <Routes>
    <Route path= '/' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/shop' element = {<Shop addToCart = {addToCart}/>}/>
    <Route path='/services' element = {<Services/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/fakeDetails/:id' element = {<FakeDetails/>}/>
    <Route path='/cart' element = {<Cart decreseProduct={decreseProduct} addToCart={addToCart} cartItems={cartItems} deletProduct={deletProduct}/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
