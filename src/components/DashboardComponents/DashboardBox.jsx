import React from "react";
import { Link } from "react-router-dom";

const DashboardBox = (props) => {
  const myStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: '#bbc',
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "10px",
    padding: "10px",
    cursor: "pointer",
    textDecoration: "none",
  };
  const imgStyle = {
    height: "45px",
    width: "auto",
  };
  const h3Style = {
    margin: ".2em 0 0",
    fontSize: "1.3rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#225",
    lineHeight: "1.1",
  };
  return (
    <Link to={props.linkedTo} className="dbox" style={myStyle}>
      <img style={imgStyle} src={props.image} alt={props.alt} />
      <p style={h3Style}>{props.title}</p>
    </Link>
  );
};

export default DashboardBox;
