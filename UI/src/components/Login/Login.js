import React, { useState } from "react";
import Register from "../Register/Register";
import ForgotPass from "../ForgotPass/ForgotPass";
import "./Login.css";
import Loginsucessful from "../LoginSucessful/Loginsucessful";
import Pic from "../../images/Pic.png";

const Login = () => {
  const [user, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [openforgot, setOpenforgot] = useState(false);
  const [opensucess, setOpensucess] = useState(false);
  const [list, setList] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [error, setError] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPassError("");
    setError("");

    if (!user && !Pass) {
      setEmailError("Email is required");
      setPassError("Password is required");
    } else if (user && Pass) {
      if (
        (user === "test@example.com" && Pass === "test123") ||
        (user === "test2@example.com" && Pass === "test2123")
      ) {
        setOpensucess(true);
      } else {
        setError("Invalid Credentials");
      }
    }

    setUser("");
    setPass("");
  };
  return (
    <div className="div1">
      <div className="app">
        {opensucess ? (
          <Loginsucessful setOpensucess={setOpensucess} setList={setList} />
        ) : openforgot ? (
          <ForgotPass
            setOpenforgot={setOpenforgot}
            setUser={setUser}
            setPass={setPass}
          />
        ) : (
          <div className="App1">
            <div className="loginpg">
              <img className="img1" src={Pic} alt="Pic"></img>
              <h1>Login</h1>
              <form onSubmit={handleSumbit}>
                <input
                  type="email"
                  name="Username"
                  autoComplete="off"
                  maxLength="20"
                  placeholder="Username"
                  value={user}
                  className="inpt-login"
                  onChange={(e) => setUser(e.target.value)}
                ></input>
                <div className="error">{emailError}</div>

                <input
                  type="Password"
                  name="Password"
                  autoComplete="off"
                  maxLength="15"
                  placeholder="Password"
                  className="inpt-login"
                  value={Pass}
                  onChange={(e) => setPass(e.target.value)}
                ></input>
                <div className="error">{passError}</div>
              </form>
              <div className="error">{error}</div>
              <div>
                <button
                  type="submit"
                  className="submit5"
                  onClick={handleSumbit}
                >
                  Log In
                </button>
              </div>
              <div>
                <button
                  className="forgot"
                  onClick={() => {
                    setOpenforgot(true);
                    setEmailError("");
                    setPassError("");
                  }}
                >
                  Forgot Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="cred">
        <p className="page">
          <span className="text1">Username:</span> test@example.com
         
          <span className="text1"> Password:</span> test123
        </p>
      </div> */}
    </div>
  );
};

export default Login;
