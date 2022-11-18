import React, { useState } from "react";
import log from "../css/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginInfo, setLoginInfo] = useState({
    loginNo: "",
    password: "", 
  });
  const [linkedTo, setLinkedTo] = React.useState("#");
  const [error, setError] = React.useState("");

  const handleLogin = (e) => {
    setLinkedTo("#");
    // == == Update states == ==
    if (e.target.id === "loginNo") {
      setLoginInfo({ ...loginInfo, loginNo: e.target.value });
    } else if (e.target.id === "password") {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
    // == == Validate states == ==
    let temp = ""
    if (loginInfo.loginNo.length < 1 || loginInfo.password.length < 1) {
      temp = "Cannot leave fields empty";
    } else if (loginInfo.loginNo.length !== 9) {
      temp = "Matric / Admission number must be 9 digits";
    } else if (loginInfo.password.length < 8) {
      temp = "Password must be at least 8 characters";
    } else {
      temp = "";
      alert("Login successful");
      setLinkedTo("/");
    }
    setError(temp)

  };

  return (
    <div className={log.container}>
      <h1>Login</h1>

      {/* Form Begins Here */}
      <form className={log.form}>
        {/* Form Inputs */}
        <div className={log.form__group}>
          <label htmlFor="loginNo">Application No / Matric No</label>
          <input
            type="number"
            name="loginNo"
            id="loginNo"
            value={loginInfo.loginNo}
            onChange={handleLogin}
          />
        </div>
        <div className={log.form__group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={loginInfo.password}
            onChange={handleLogin}
          />
        </div>
        <div className={log.err__Message}>{error}</div>

        {/* Call to Action Button */}
        <Link to={linkedTo}>
          <button type="button">Login</button>
        </Link>
      </form>
      {/* Form Ends here */}
    </div>
  );
};

export default Login;
