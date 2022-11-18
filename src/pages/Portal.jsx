import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Outlet} from 'react-router-dom';

const Portal = () => {
  let profileName = "Ore Adewusi"
  return (
    <>
      <Navbar />
      <div className='page__flex'>
        <SideBar name={profileName} />
        <Outlet />
      </div>
    </>
  )
}

export default Portal