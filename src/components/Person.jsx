import React from 'react'
import { useState } from 'react'


const Person = () => {
  const [studentName, setStudentName] = useState("")
  const [studentAge, setStudentAge] = useState("")
  const [studentGender, setStudentGender] = useState("")

  const updateName = (e) => {
    setStudentName(e.target.value)
  }
  const updateAge = (e) => {
    setStudentAge(e.target.value)
  }
  const updateGender = (e) => {
    setStudentGender(e.target.value)
  }
  const studentInfo = {
    name: studentName,
    age: studentAge,
    Gender: studentGender
  }
  return (
    <div className='container'>
      <h2>Student Profile</h2>
      <div className='flex flex__row'>
        <label>Name</label>
        <input type='text' name='studentName' value={studentName} onChange={updateName} />
      </div>
      <div className='flex flex__row'>
        <label>Age</label>
        <select name='age' onChange={updateAge} value={studentAge}>
          <option hidden>Select Age</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
        </select>
      </div>
      <div className='flex flex__row'>
        <label>Gender</label>
        <select name='' onChange={updateGender} value={studentGender}>
          <option hidden>Select Age</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
      

      <textarea value={JSON.stringify(studentInfo)}></textarea>
    </div>
  )
}

export default Person