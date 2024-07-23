import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import SendOtp from "./otpModal";
import { useFormik } from "formik";
import * as Yup from "yup";

const Forgot = ({ setForgotPwd }) => {
  const [otp, setOtp] = useState();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please enter Username"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setOtp(true);
    },
  });
  return (
    <div>
      <div className="loginheader mt-5">Forgot Password</div>
      <div className="logLink" style={{ color: "#A7A9C0" }}>
        Back to &nbsp;
        <Link
          to=""
          onClick={() => setForgotPwd(false)}
          style={{ color: "#0DA3DE" }}
        >
          Login
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-5">
          <div className="inputLabel">
            Username{" "}
            <span
              className={` ${
                formik.touched.username && formik.errors.username
                  ? "input-error1"
                  : "inputLabel1"
              }`}
            >
              *
            </span>
          </div>
          <Input
            name="username"
            placeholder="Username"
            className={`mt-2 ${
              formik.touched.username && formik.errors.username
                ? "input-error"
                : ""
            }`}
            size="large"
            style={{ width: "348px", height: "45px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="mt-5 mx-auto d-flex justify-content-center">
          <Button type="primary" className="logbtn" htmlType="submit">
            Get Password
          </Button>
        </div>
        <div style={{ fontWeight: 500, fontSize: "12px" }} className="mt-5">
          Enter your username. We will send password to your email address.
        </div>
      </form>
      <SendOtp
        open={otp}
        close={() => setOtp(false)}
        setForgotPwd={setForgotPwd}
      />
    </div>
  );
};

export default Forgot;
