import React from 'react'
import style from '../css/Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const sidebarRef = React.useRef(null)
  const [hamburgerState, setHamburgerState] = React.useState(false)

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle(style.show)
    setHamburgerState(!hamburgerState)
  }

  return (
    <>
    <nav className={style.nav}>
      <div 
        className={
          `
            ${style.hamburgerMenu} 
            ${hamburgerState ? style.open : ""}
          `
        }
        onClick={toggleSidebar}>
        <div className={style.hamburgerMenu__line}></div>
      </div>
      <div className={style.nav__Logo}>
        <h1>Logo</h1>
      </div>
      <h2>Student Portal</h2>
      <div className={`${style.nav__links} ${style.hide}`}>
        <Link to='/login' className={style.nav__link}>Log out</Link>
      </div>
    </nav>
    <nav 
      className={`${style.mobileNav} ${hamburgerState ? style.show : ""}`}
      ref={sidebarRef}>
      <div className={style.searchBox}>
      <label htmlFor="search">🔎</label>
        <input type="search" name="search" id="searchElement" placeholder='Search for courses, lessons and resources...'/>
      </div>
      <div className="">DashBoard</div>
      <div className="">Weekly Syllabus</div>
      <div className="">Courses</div>
      <div className="">Skill Practice</div>
      <div className="">Support</div>
      <div className="">Main Website</div>

    </nav>
    </>
  )
}

export default Navbar