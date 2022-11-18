import React from 'react'
import { Link } from 'react-router-dom';

const DashboardBox = (props) => {
  const myStyle = {
    height: '120px',
    width: '120px',
    backgroundColor: props.color,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    textDecoration: 'none'
  }
  const imgStyle = {
    height: '50px',
    width: '50px',
    margin: '0',
  }
  const h3Style = {
    margin: '.2em 0 0', fontSize: '0.9rem', textAlign: 'center', textDecoration: 'none', color: 'white', lineHeight: '1.1' }
  return (
    <Link to={props.linkedTo} className='dbox' style={myStyle}>
      <img style={imgStyle} src={props.image} alt={props.alt} />
      <p style={h3Style}>{props.title}</p>
    </Link>
  )
}

export default DashboardBox