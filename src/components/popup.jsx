// import React, { useEffect, useState } from 'react'
import pop from '../css/popup.module.css'

const Popup = (props) => {
  // const [chosen, setChosen] = useState(0);


  // const handleClick = (e) => {
  //   if (e.target.id === "first"){
  //     setChosen(0);
  //   }
  //   else if (e.target.id === "second"){
  //     setChosen(1);
  //   }
  // }
  // useEffect(() => {
  //   props.chosen = chosen;
  // }, [chosen])

  return (
    <div className={pop.background} style={{display: props.display}}>
      <div className={pop.popup}>
        <h2>{props.text}</h2>
        <div className={pop.btns}>
          <button 
            id="first" 
            className={pop.btn} 
            // onClick={handleClick}
            >{props.optionOne}</button>
          <button 
            id='second' 
            className={pop.btn} 
            // onClick={handleClick}
            >{props.optionTwo}</button>
        </div>
      </div>
    </div>
  )
}

export default Popup