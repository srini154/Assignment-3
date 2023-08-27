import React, { useState } from "react";
import "./Modal.css";
import Confirm from "../../Confirm/Confirm";

function Modal({ setopenModal, data, setList }) {
  const [openconfirm, setOpenconfirm] = useState(false);
  const handleSumbit = (e) => {
    e.preventDefault();
    setOpenconfirm(true);
  };
  return (
    <div className="modalback">
      {openconfirm ? (
        <Confirm setOpenconfirm={setOpenconfirm} />
      ) : (
        <div className="modalcontainer">
          <div className="title"></div>
          <div className="body">
            <div className="list1">
              <p>Confirm Your Details</p>
              {data.map((a, index) => (
                <ul key={index}>
                  <li>
                    {" "}
                    <span className="color1">Name: </span>
                    <span className="color2">{a.Name} </span>
                  </li>
                  <li>
                    <span className="color1">Username:</span>{" "}
                    <span className="color2">{a.Username} </span>
                  </li>
                  <li>
                    <span className="color1">password: </span>
                    <span className="color2">{a.Password} </span>
                  </li>
                  <li>
                    <span className="color1">Confirm Password: </span>
                    <span className="color2">{a.Cpassword} </span>
                  </li>
                  <li>
                    <span className="color1">DOB: </span>
                    <span className="color2">{a.DOB} </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="footer">
            <button
              className="Cancel"
              onClick={() => {
                setopenModal(false);
                setList([]);
              }}
              id="OKBtn"
            >
              Cancel
            </button>
            <button
              className="Cancel"
              onClick={(e) => {
                handleSumbit(e);
              }}
              id="OKBtn"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Modal;
