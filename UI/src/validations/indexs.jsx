import React from "react";
import * as yup from "yup";

const passwordFormat =
  "^(?=.*[0-9])" +
  "(?=.*[a-z])(?=.*[A-Z])" +
  "(?=.*[@#$%^&+=])" +
  "(?=\\S+$).{8,20}$";
export const basicValidation = yup.object().shape({
  name: yup.string().required("Name Required").min(5),

  email: yup
    .string()
    .email("Please enter valid username")
    .required(" Username Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordFormat, { message: "please enter stronger password" })
    .required("password Required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password Must match")
    .required("Confirm Password Required"),
  DOB: yup.date().required("Date Of Birth Required"),
});
