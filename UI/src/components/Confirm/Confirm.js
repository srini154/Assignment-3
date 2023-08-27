import React, { useState } from "react";
import "./Confirm.css";

import sucess from "../../images/success.svg";

function confirm({ setOpenconfirm }) {
  return (
    <div className="Container">
      <img className="sucess-icon" src={sucess} alt="sucess" />
      <p>Thank You For Registering!</p>
      <p>Click the Login Button</p>
    </div>
  );
}

export default confirm;
