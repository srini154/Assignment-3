import "../../App.css";
import Modal from "./Modal/Modal";
import axios from "axios";
import "./Register.css";
import { useState } from "react";
import Sign from "../../images/Sign.png";
import { useFormik } from "formik";
import { basicValidation } from "../../validations/indexs";

function Register1() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        cpassword: "",
        DOB: "",
      },
      validationSchema: basicValidation,
      onSubmit: () => {
        axios
          .post("http://localhost:5000/register", values)
          .then((res) => {})
          .catch((error) => {
            console.error("Error during registering:", error);
          });

        setList([
          {
            Name: values.name,
            Username: values.email,
            Password: values.password,
            Cpassword: values.cpassword,
            DOB: values.DOB,
          },
        ]);
        setopenModal(true);
      },
    });

  const [openModal, setopenModal] = useState(false);

  const [list, setList] = useState([]);

  return (
    <div className="Modal1">
      <div className="Modal2">
        {/* <div> */}
        {openModal ? (
          <Modal setopenModal={setopenModal} data={list} setList={setList} />
        ) : (
          <form
            id="container"
            className="labels"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <img className="img2" src={Sign} alt="Sign" />
            <h1 className="main">Sign Up</h1>

            <input
              type="text"
              name="name"
              id="register-input1"
              placeholder="Name"
              className={errors.name && touched.name ? "input-error" : ""}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}

            <input
              type="email"
              name="email"
              id="register-input"
              placeholder="Username"
              className={errors.email && touched.email ? "input-error" : ""}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              id="register-input2"
              className={
                errors.password && touched.password ? "input-error" : ""
              }
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}

            <input
              type="password"
              name="cpassword"
              id="register-input3"
              placeholder="Confirm Password"
              className={
                errors.cpassword && touched.cpassword ? "input-error" : ""
              }
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.cpassword && touched.cpassword && (
              <div className="error">{errors.cpassword}</div>
            )}

            <input
              type="date"
              name="DOB"
              placeholder="DOB"
              id="register-input4"
              className={errors.DOB && touched.DOB ? "input-error" : ""}
              value={values.DOB}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.DOB && touched.DOB && (
              <div className="error">{errors.DOB}</div>
            )}
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export default Register1;
