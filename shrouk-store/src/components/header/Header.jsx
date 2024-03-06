import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header className='container'>
      <div className="header-lift">
        <div className="header-lift-text">
            <h2>No Restoking fee ($35 savings)</h2>
            <h3>m75 sport watch</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perspiciatis voluptatibus maxime similique suscipit saepe quaerat libero quo dolor in cum, molestias necessitatibus rem numquam optio.
                 Aspernatur rem dolorum sint.</p>
                 <h4>Now Only $320.99</h4>
                 <button>Shop Now</button>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-up">
        <div>
        <h2>Now line Requaired</h2>
            <h3>Iphon 12 pro max</h3>
            <h4>$259.99</h4>
        </div>
        </div>
        <div className="header-right-down">
   <div>
   <h2>Wakly Sale!</h2>
            <h3>Saving up 50% off all online store item this week</h3>
            <button>Shop Now</button>
   </div>
        </div>
      </div>
    </header>
  )
}

export default Header
