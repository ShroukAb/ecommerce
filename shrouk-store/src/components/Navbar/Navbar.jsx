import { useEffect, useState } from 'react'

import './navbar.css'

import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom'


const Navbar = ({cartItems}) => {
  const [open , setOpen] = useState(false)

  function isOpen(){
    setOpen(!open)
  }
  return (
    <nav>
      
      <div className="nav-left">
      < FaShoppingCart className='logo-icon'/>
      </div>
      <div className="nav-middle">
        <ul>
            <li><Link to='/'>Home</ Link></li>
            <li><Link to='/about'>About</ Link></li>
            <li><Link to='/shop'>Shop</ Link></li>
            <li><Link to='/services'>Services</ Link></li>
            <li><Link to='/contact'>Contact</ Link></li>
        </ul>
      </div>
      <div className="nav-right">
        < FaRegHeart className='nav-icon'/>
        <Link to="/cart">
        <MdOutlineShoppingBag className='nav-icon shopping'/>
        <span>{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
