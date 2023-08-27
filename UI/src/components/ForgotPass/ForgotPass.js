import React, { useState } from "react";
import "./Forgot.css";
import Link from "../Link/Link";
import Forgot from "../../images/Forgot.png";
import axios from "axios";

function ForgotPass({ setOpenforgot, setPass, setUser }) {
  const [openlink, setOpenlink] = useState(false);
  const [user1, setUser1] = useState("");
  const [error, setError] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      let forgotpass = await axios.post("http://localhost:5000/forgot", {
        email: user1,
      });
      // console.log(forgotpass);
      if (user1) {
        if (forgotpass.data === "success") {
          setOpenlink(true);
          setError("");
        } else {
          setError("Email Does not exixts");
        }
      } else {
        setError("Email Mandatory");
      }
    } catch (error) {}
    // setError("");
    // if (user1) {
    //   if (user1 === "test@example.com" || user1 === "test2@example.com") {
    //     setOpenlink(true);
    //   } else {
    //     setError("Invalid User Id");
    //   }
    // } else {
    //   setError("Enter Username or Email Id");
    // }
  };

  return (
    <>
      {openlink ? (
        <Link setOpenlink={setOpenlink} setUser1={setUser1} />
      ) : (
        <div className="main2">
          <img src={Forgot} alt="LoginPic"></img>
          <p>Trouble Logging in?</p>

          <p className="para-forgot">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
          <div className="error">{error}</div>

          <input
            type="email,text,number"
            placeholder="Email,Phone or Username"
            className="in1"
            value={user1}
            onChange={(e) => setUser1(e.target.value)}
          ></input>

          <div className="btn-forgot">
            <div>
              <button
                onClick={() => {
                  setOpenforgot(false);
                  // setPass("");
                  // setUser("");
                }}
                className="bt1"
              >
                Back to login{" "}
              </button>
            </div>
            <div>
              <button
                className="bt1"
                onClick={(e) => {
                  handleSumbit(e);
                }}
              >
                Send Login Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPass;
