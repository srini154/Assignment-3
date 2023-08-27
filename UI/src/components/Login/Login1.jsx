import { useFormik } from "formik";
import React, { useState } from "react";
import Pic from "../../images/Pic.png";
import { basicValidation } from "../../validations/indexs";
import "./Login.css";
import Loginsucessful from "../LoginSucessful/Loginsucessful";
import ForgotPass from "../ForgotPass/ForgotPass";
import axios from "axios";

const Login1 = () => {
  const [opensucess, setOpensucess] = useState(false);
  const [list, setList] = useState([]);
  const [openforgot, setOpenforgot] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      let loginresponce = await axios.post(
        "http://localhost:5000/login",
        values
      );

      if (loginresponce.data === "success") {
        setOpensucess(true);
        resetForm();
        setIsFormSubmitted(false);
      } else {
        setIsFormSubmitted(true);
        alert("Invalid Credentials");
      }
    } catch (error) {
      // console.log("");
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicValidation,
    onSubmit: onSubmitForm,
  });
  return (
    <div className="div1">
      {opensucess ? (
        <Loginsucessful setOpensucess={setOpensucess} setList={setList} />
      ) : openforgot ? (
        <ForgotPass setOpenforgot={setOpenforgot} />
      ) : (
        <div className="app">
          <div className="App1">
            <div className="loginpg">
              <img className="img1" src={Pic} alt="Pic"></img>
              <h1>Login</h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                {isFormSubmitted &&
                  (values.email === "" || values.password === "") && (
                    <div className="error">All fields are mandatory</div>
                  )}
                <input
                  id="inpt-login"
                  name="email"
                  type="email"
                  placeholder="Username"
                  className={
                    errors.email && (touched.email || isFormSubmitted)
                      ? "input-error"
                      : ""
                  }
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}

                <input
                  id="inpt-login1"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && (touched.password || isFormSubmitted)
                      ? "input-error"
                      : ""
                  }
                ></input>
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}

                <div>
                  <button
                    type="submit"
                    onClick={onSubmitForm}
                    className="submit5"
                  >
                    Log In
                  </button>
                </div>
                <div></div>
              </form>
              <button
                className="forgot"
                onClick={() => {
                  setOpenforgot(true);
                }}
              >
                Forgot Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login1;
