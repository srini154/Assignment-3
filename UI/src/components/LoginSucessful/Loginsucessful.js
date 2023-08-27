import React from "react";
import "./Loginsucess.css";
import success from "../../images/Sucess.png";

function Loginsucessful({ setOpensucess, setList }) {
  return (
    <div className="back">
      <div className="contain">
        <div></div>
        <img className="imgsucess" src={success} alt="Sucess" />
        <p>You Have Sucessfully Logged In</p>
      </div>
      <button
        className="xbtn1"
        onClick={() => {
          setOpensucess(false);
          setList([]);
        }}
      >
        Ok
      </button>
    </div>
  );
}

export default Loginsucessful;
