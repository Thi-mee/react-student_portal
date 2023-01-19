import React from 'react'

const AcademicProfile = () => {

  const personalInformation = JSON.parse(localStorage.getItem("personalInformation")) || [];
  const academicInformation = JSON.parse(localStorage.getItem("academicInformation")) || [];


  return (
    <div>
      <h1>Academic Profile</h1>
      <pre>
        <h2>Personal Information</h2>
        Name: {personalInformation.name}
        Email: {personalInformation.email}
        Phone: {personalInformation.phone}
        Address: {personalInformation.address}
        City: {personalInformation.city}
        State: {personalInformation.state}


        <h2>Academic Information</h2>
        {academicInformation.map((academic, index) => {
          return (
            <div key={index}>
              <h3>Academic session {index + 1} - {academic.academicLabel}</h3>
              Start Year: {academic.startYear}      End Year: {academic.endYear}     Semester: {academic.semester}
            </div>
          )
        })}

      </pre>
    </div>
  )
}

export default AcademicProfile