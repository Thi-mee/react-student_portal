import React from 'react'
import style from  '../../css/coursereg.module.css'
import CourseRow from './CourseRow';

const Coursereg = () => {
  let academicInformation = JSON.parse(localStorage.getItem("academicInformation")) || [];
  let courses = [
    {code: "MTH 301", name: "Numerical Methods", units: 4},
    {code: "CPE 302", name: "Computer Programming", units: 2},
    {code: "EEG 321", name: "Electrical Machines", units: 3}
  ]
  return (
    <div>
      <h1>Coursereg</h1>
      <label>Select Academic semester to register for: </label>
      <select>
        {academicInformation.map((academic, index) => {
          return (
            <option key={index} value={academic.academicLabel}>{academic.academicLabel} - Semester {academic.semester}</option>
          )
        })}
      </select>
      <table className={style.table}>
        <tr>
          <th className='formControl'></th>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Units</th>
        </tr>
        {courses.map((course, index) => {
          return (
            <CourseRow key={index} course={course} />
          );
        })}
                
      </table>
      <div>Total Units: {courses.map(i => i.units).reduce((a,b) => a + b)}</div>
    </div>
  )
}

export default Coursereg