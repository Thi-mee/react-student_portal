import React from 'react'

const NoMatch = () => {
  const myStyle = {
    color: 'red',
    fontSize: '50px',
    paddingTop: '100px',
    marginTop: '0'
  }
  return (
    <div style={{ width: "60%", textAlign: "center", marginInline: "auto" }}>
      <h1 style={myStyle}>ERROR 404:</h1>
      <h2>Page not found</h2>
      <p style={{fontSize: "1.2rem"}}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
    </div>
  )
}

export default NoMatch