
import React, { useState, useEffect } from 'react'
import './css/navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [menu, setMenu] = useState(true)
  const [close, setClose] = useState(false)


  const toggleButton = () => {
    setClose(!close)
    setMenu(!menu)
  }

  return (
    <>
      <div className="container-fluid top bg-primary text-light text-center justify-content-center align-item-center py-3">
        Become a Member <span className='line'>|</span>  <span className="text-decoration-underline"> Click here to register</span>
      </div>



      <nav className='py-1'>

        <div className='navbar'>
          <img src={logo} alt="" className='' />


          <div className="res">
            <div className="functionable">
              <button onClick={toggleButton}>{menu ? <i className="fa fa-bars" aria-hidden="true"></i> : <i className=" fa fa-window-close" aria-hidden="true"></i>}</button>
            </div>
            {menu ?
              <ul className='unorder'>
                <Link to="/" className='black-link' style={{textDecoration:"none"}}><li>Home</li></Link>
                <Link to="/about" className='black-link' style={{textDecoration:"none"}}><li>About Us</li></Link>
                <Link to="/blog" className='black-link' style={{textDecoration:"none"}}><li>Blog</li></Link>
                <Link to="/presence" className='black-link' style={{textDecoration:"none"}}><li>Presence</li></Link>
                <Link to="contact" className='black-link' style={{textDecoration:"none"}}><li>Contact</li></Link>
              </ul>
              : <i className="fa fa-bars" aria-hidden="true"></i>
            }
          </div>
          <button className='btn text-center mt-4'>Join Us</button>
        </div>

      </nav>

    </>
  )
}

export default Navbar