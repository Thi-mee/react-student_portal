import React, { useEffect, useState } from 'react'
import Popup from './popup';
import style from '../../css/Academics.module.css'
import Option from './Option';

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
  const [whatToDisplay, setWhatToDisplay] = useState("");
  const [popupDisplay, setPopupDisplay] = useState("none");

  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

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
    let string = JSON.stringify(academicInformation)
    let formattedString = ""
    let indent = ""
    let indentation = "  "

    for (let i = 0; i < string.length; i++) {
      if (string[i] === '[' && string[i + 1] === '{') {
        formattedString += string[i]
        indent += indentation; 
        formattedString += '\n' + indent
      } else if (string[i] === '{' && string[i+1] === '"'){
        formattedString += string[i]
        indent += indentation;
        formattedString += '\n' + indent
      } else if (string[i] === ','){
        formattedString += string[i]
        formattedString += '\n' + indent
      } else if (string[i] === '}' && string[i + 1] === ']'){
        formattedString += string[i]
        indent = indent.slice(0, -2);
        formattedString += '\n' + indent
      } else if (string[i] === '"' && string[i + 1] === '}'){
        formattedString += string[i]
        indent = indent.slice(0, -2);
        formattedString += '\n' + indent
      }
      else {
        formattedString += string[i]
      }
    }
    setWhatToDisplay(formattedString)

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
  }, [academic, academicInformation])

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

  const showPopup = () => {
    setPopupDisplay("block");
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
        <select
          name="startYear"
          id="startYear"
          onChange={updateAcademic}
          value={academic.startYear}>
          <option hidden>Select Start Year</option>
          {years.map((year, index) => {
            return <Option key={index} value={year} />;
          })}
        </select>
      </div>
      <div className={style.flex__row}>
        <label>End Year: </label>
        <select
          name="endYear"
          id="endYear"
          onChange={updateAcademic}
          value={academic.endYear}>
          <option hidden>Select End Year</option>
          {years.map((year, index) => {
            return <Option key={index} value={year} />;
          })}
        </select>
      </div>
      <div className={style.flex__row}>
        <label>Semester</label>
        <select
          name=""
          id="semester"
          onChange={updateAcademic}
          value={academic.semester}>
          <option hidden>Select Semester</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
        </select>
      </div>
      <div className={style.flex__row}>
        <label>Academic Label</label>
        <input
          type="text"
          name="studentName"
          id="academicLabel"
          value={academic.academicLabel}
          onChange={updateAcademic}
          placeholder={`e.g. ${academic.startYear || "2021"}/${
            academic.endYear || "2022"
          } session`}
        />
      </div>
      <p className={style.important}>
        <span className={style.red}>NOTE: </span>This Academic Label is an
        Identifier for your Academic session.{" "}
        <span className={style.red}>
          DO NOT USE ANOTHER NAME FOR THIS SESSION
        </span>
      </p>
      <button disabled={isDisabled} style={{}} onClick={showPopup}>
        Add Academic semester
      </button>

      <div className={style.display}>
        <pre>
          <div style={{ color: "purple" }}># Academic-semester.json</div>

          {whatToDisplay}
        </pre>
      </div>
      <Popup
        text="Are you sure you want to add?"
        optionOne="No"
        optionTwo="Yes"
        display={popupDisplay}
        addAcademicInfo={addAcademicInfo}
        setPopupDisplay={setPopupDisplay}
      />
    </div>
  );
}

export default Academics