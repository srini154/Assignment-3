import "../../App.css";
import Modal from "./Modal/Modal";

import "./Register.css";
import { useState } from "react";
import Sign from "../../images/Sign.png";

function Register() {
  const [openModal, setopenModal] = useState(false);
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [list, setList] = useState([]);
  const [passError, setPassError] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassError("");
    setError("");
    // console.log(Name, Username, Password, Cpassword, DOB);
    const dat = { Name, Username, Password, Cpassword, DOB };
    if (Name && Username && Password && Cpassword && DOB) {
      if (Password !== Cpassword) {
        setPassError("Password and Confirm password does not match");
      } else {
        setList([dat]);
        setopenModal(true);
        setName("");
        setUsername("");
        setPassword("");
        setDOB("");
        setCpassword("");
      }
    } else {
      setError("All fields are mandatory");
    }
  };

  return (
    <div className="Modal1">
      <div className="Modal2">
        {/* <div> */}
        {openModal ? (
          <Modal setopenModal={setopenModal} data={list} setList={setList} />
        ) : (
          <form id="container" className="labels" onSubmit={handleSubmit}>
            <img className="img2" src={Sign} alt="Sign" />
            <h1 className="main">Sign Up</h1>
            <div className="error">{error}</div>
            <input
              type="text"
              name="name"
              value={Name}
              className="register-input"
              // onChange={(e) => console.log(e)}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              maxLength="30"
              placeholder="Name"
            ></input>

            <input
              type="email"
              name="Username"
              value={Username}
              autoComplete="off"
              maxLength="20"
              className="register-input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <input
              type="password"
              name="password"
              value={Password}
              autoComplete="off"
              placeholder="Password"
              maxLength="15"
              className="register-input"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <input
              type="password"
              name="cpassword"
              value={Cpassword}
              autoComplete="off"
              maxLength="15"
              className="register-input"
              placeholder="Confirm Password"
              onChange={(e) => setCpassword(e.target.value)}
            ></input>
            <div className="error">{passError}</div>

            <input
              type="date"
              name="DOB"
              value={DOB}
              autoComplete="off"
              placeholder="DOB"
              className="register-input"
              onChange={(e) => setDOB(e.target.value)}
            ></input>
            <button
              className="submit"
              onClick={(e) => {
                // setopenModal(true);
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export default Register;
