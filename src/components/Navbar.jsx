import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <h1>Logo</h1>
      </div>
      <h2>Student Portal</h2>
      <div className='nav__links'>
        <Link to='/login' className='nav__link'>Log out</Link>
      </div>
    </nav>
  )
}

export default Navbar