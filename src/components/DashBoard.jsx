import React from 'react'
import firstIcon from '../assets/calendar-24.svg'
import DashboardBox from '../components/DashboardBox'
import '../css/dashboard.css'

const DashBoard = () => {
  let practiceName = "Timi"
  return (
    <div className='dashboard'>
      <h2>Welcome Back {practiceName},</h2>
      <h3>Section Title</h3>
      
      <div className='dashboard__boxes'>
        <DashboardBox image={firstIcon} alt='profile' color='#4F61C5' title="Course Registration"/>
        <DashboardBox image={firstIcon} alt='profile' color='#7F51C5' title="Academic Registration" linkedTo="addAcademicYear"/>
        <DashboardBox image={firstIcon} alt='profile' color='#3AA145' />
      </div>
    </div>
  )
}

export default DashBoard