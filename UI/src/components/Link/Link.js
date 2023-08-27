import React from "react";
import "./Link.css";

function Link({ setOpenlink, setUser1 }) {
  return (
    <div className="back1">
      <div className="contain1">
        <p>Link sent to Registerd Email for Chainging the Password</p>
      </div>
      <button
        className="Linkbtn"
        onClick={() => {
          setOpenlink(false);
          setUser1("");
        }}
      >
        Ok
      </button>
    </div>
  );
}

export default Link;
