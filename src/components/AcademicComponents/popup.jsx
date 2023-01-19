// import React, { useEffect, useState } from 'react'
import pop from '../../css/popup.module.css'

const Popup = ({
  text,
  optionOne,
  optionTwo,
  display,
  addAcademicInfo,
  setPopupDisplay,
}) => {
  const handleYes = () => {
    addAcademicInfo();
    setPopupDisplay("none");
  };
  const handleNo = () => {
    setPopupDisplay("none");
  };

  return (
    <div className={pop.background} style={{ display: display }}>
      <div className={pop.popup}>
        <h2>{text}</h2>
        <div className={pop.btns}>
          <button id="first" className={pop.btn} onClick={handleNo}>
            {optionOne}
          </button>
          <button id="second" className={pop.btn} onClick={handleYes}>
            {optionTwo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup