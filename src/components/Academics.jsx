import React, { useEffect, useState } from 'react'
import Popup from '../components/popup';
import style from '../css/Academics.module.css'

const Academics = () => {

  const [academic, setAcademic] = useState({
    startYear: "",
    endYear: "",
    semester: "",
    academicLabel: ""
  });
  const [academicInformation, setAcademicInformation] = useState(JSON.parse(localStorage.getItem("academicInformation")) || []);
  const [errMessage, setErrMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  let [chosen] = useState(0);
  console.log(chosen);


  const updateAcademic = (e) => {
    if (e.target.id === "startYear") {
      setAcademic({ ...academic, startYear: e.target.value })
    } else if (e.target.id === "endYear") {
      setAcademic({ ...academic, endYear: e.target.value })
    } else if (e.target.id === "semester") {
      setAcademic({ ...academic, semester: e.target.value })
    } else if (e.target.id === "academicLabel") {
      setAcademic({ ...academic, academicLabel: e.target.value })
    }
  }
  useEffect(() => {
    let temp = "";
    setIsDisabled(true);
    if (!(academic.startYear && academic.endYear && academic.semester && academic.academicLabel)) {
      temp = "Cannot leave fields empty";
      setErrMessage(temp);
    }
    else {
      setErrMessage('');
      setIsDisabled(false);
    }
  }, [academic])





  const addAcademicInfo = () => {
    let isAlreadyThere = academicInformation.some(info => {
      return info.academicLabel === academic.academicLabel && info.semester === academic.semester
    })
    if (academicInformation ===  []) {
      setAcademicInformation([academic])
    }
    else if (isAlreadyThere) {
      setErrMessage("This academic information already exists")
    }
    else {
      setAcademicInformation([...academicInformation, academic])
    }
  }





  useEffect(() => {
    localStorage.setItem("academicInformation", JSON.stringify(academicInformation))
  }, [academicInformation])




  return (
    <div className={style.container}>
      <h2>Academic Registration</h2>
      <div className={style.error}>{errMessage}</div>
      <div className={style.flex__row}>
        <label>Start Year: </label>
        <select name='startYear' id='startYear' onChange={updateAcademic} value={academic.startYear}>
          <option hidden>Select Start Year</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
          <option value='2027'>2027</option>
        </select>
      </div>
      <div className={style.flex__row}>
        <label>End Year: </label>
        <select name='endYear' id='endYear' onChange={updateAcademic} value={academic.endYear}>
          <option hidden>Select End Year</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
          <option value='2027'>2027</option>
          <option value='2028'>2028</option>
        </select>
      </div>
      <div className={style.flex__row}>
        <label>Semester</label>
        <select name='' id='semester' onChange={updateAcademic} value={academic.semester}>
          <option hidden>Select Semester</option>
          <option value='1'>1st Semester</option>
          <option value='2'>2nd Semester</option>
        </select>
      </div>
      <div className={style.flex__row}>
        <label>Academic Label</label>
        <input
          type='text'
          name='studentName'
          id='academicLabel'
          value={academic.academicLabel}
          onChange={updateAcademic}
          placeholder='Enter Academic Label'
        />
      </div>
      <p className={style.important}><span className={style.red}>NOTE: </span>This Academic Label is an Identifier for your Academic session. <span className={style.red}>DO NOT USE ANOTHER NAME FOR THIS SESSION</span></p>
      <button disabled={isDisabled} style={{}} onClick={addAcademicInfo}>Add Academic semester</button>

      <div className={style.display}><pre>{JSON.stringify(academicInformation)}</pre></div>
      <Popup text="Are you sure you want to add?" optionOne="No" optionTwo="Yes" display="none" chosen={chosen}/>
    </div>
  )
}

export default Academics