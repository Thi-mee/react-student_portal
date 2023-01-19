import React, { useState, useEffect } from "react";
import log from "../css/login.module.css";
import { Link, useNavigate } from "react-router-dom";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [disabledStatus, setDisabledStatus] = React.useState(true);
  const [error, setError] = React.useState("");

  useEffect(() => {
    if (loginInfo.email?.length >= 1 || loginInfo.password.length >= 1) {
      setDisabledStatus(false);
    }
  }, [loginInfo]);
  const handleLogin = (e) => {
    e.preventDefault();
    // == == Validate states == ==
    let temp = "";
    if (loginInfo.email.length < 1 || loginInfo.password.length < 1) {
      temp = "Cannot leave fields empty";
    } else if (!emailRegex.test(loginInfo.email)) {
      temp = "Invalid email";
    } else if (loginInfo.password.length < 8) {
      temp = "Password must be at least 8 characters";
    } else {
      temp = "";
      alert("Login successful");
      navigate("/");
    }
    setError(temp);
  };

  return (
    <div className={log.page}>
      <div className={log.container}>
        <nav>
          <Link to="/">
            <div className="logo">NIHEL</div>
          </Link>
        </nav>
        <h1>Login</h1>
        <p>
          Don't have an account, <a href="">sign up for one here</a>
        </p>

        {/* Form Begins Here */}
        <form className={log.form} onSubmit={handleLogin}>
          {/* Form Inputs */}
          <div className={log.form__group}>
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              name="email"
              id="userEmail"
              value={loginInfo.email}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, email: e.target.value })
              }
              required
              style={{ background: "#eee" }}
            />
          </div>
          <div className={log.form__group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              required
              style={{ background: "#eee" }}
            />
          </div>
          <div className={log.err__Message}>{error}</div>

          {/* Call to Action Button */}
          <button type="submit" disabled={disabledStatus}>
            Login
          </button>
        </form>
        {/* Form Ends here */}
      </div>
    </div>
  );
};

export default Login;
