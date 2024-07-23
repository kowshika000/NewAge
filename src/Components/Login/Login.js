import React, { useState, useEffect } from "react";
import logo from "../../assets/logLogo.svg";
import wall from "../../assets/logWall.png";
import "./Login.css";
import { Input, Checkbox, Button } from "antd";
import Forgot from "./Forgot";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginRequest } from "../../Redux/Actions/LoginAction";
import Cookies from "js-cookie";
import { LogRequest } from "../../Redux/Actions/LogAction";

const Login = () => {
  const [forgotPwd, setForgotPwd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  console.log(
    useSelector((state) => state.log),
    "log"
  );
  const jwtToken1 = useSelector((state) => state.Login.loginData1.Token);
  const jwtToken = useSelector((state) => state?.log?.loginData2?.token);
  const formik = useFormik({
    initialValues: {
      saas_id: "",
      susername: "",
      spassword: "",
    },
    validationSchema: Yup.object({
      saas_id: Yup.string().required("Please enter Saas Id"),
      susername: Yup.string().required("Please enter Username"),
      spassword: Yup.string().required("Please enter Password"),
    }),
    onSubmit: (values) => {
      dispatch(LoginRequest({ values }));
      console.log(jwtToken1, "mva");

      if (jwtToken1) {
        const modifiedValues = {
          ...values,
          spassword: jwtToken1,
        };
        dispatch(LogRequest({ values: modifiedValues }));
      }
    },
  });
  console.log(jwtToken, "token");

  useEffect(() => {
    if (jwtToken) {
      Cookies.set("jwtToken", jwtToken);
      // localStorage.setItem("jwtToken", jwtToken)
      navigate("/shipment");
    }
  }, [jwtToken]);
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={wall} alt="Wall" />
      </div>
      <div className="mx-auto login-form-container">
        <div className="pt-3 login-form" style={{ width: "348px" }}>
          <div>
            <img src={logo} alt="Logo" />
          </div>
          {forgotPwd ? (
            <Forgot setForgotPwd={setForgotPwd} />
          ) : (
            <div className="login-form">
              <div className="loginheader">Welcome to Webtool</div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-5">
                  <div className="inputLabel">
                    SaaS Id{" "}
                    <span
                      className={` ${
                        formik.touched.saas_id && formik.errors.saas_id
                          ? "input-error1"
                          : "inputLabel1"
                      }`}
                    >
                      *
                    </span>
                  </div>
                  <Input
                    name="saas_id"
                    placeholder="Saas Id"
                    className={`mt-2 ${
                      formik.touched.saas_id && formik.errors.saas_id
                        ? "input-error"
                        : ""
                    }`}
                    size="large"
                    style={{ width: "348px", height: "45px" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.saas_id}
                  />
                  {formik.touched.saas_id && formik.errors.saas_id ? (
                    <div className="error">{formik.errors.saas_id}</div>
                  ) : null}
                </div>
                <div className="mt-4">
                  <div className="inputLabel">
                    Username{" "}
                    <span
                      className={` ${
                        formik.touched.susername && formik.errors.susername
                          ? "input-error1"
                          : "inputLabel1"
                      }`}
                    >
                      *
                    </span>
                  </div>
                  <Input
                    name="susername"
                    placeholder="Username"
                    className={`mt-2 ${
                      formik.touched.susername && formik.errors.susername
                        ? "input-error"
                        : ""
                    }`}
                    size="large"
                    style={{ width: "348px", height: "45px" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.susername}
                  />
                  {formik.touched.susername && formik.errors.susername ? (
                    <div className="error">{formik.errors.susername}</div>
                  ) : null}
                </div>
                <div className="mt-4 pswdinput">
                  <div className="inputLabel">
                    Password{" "}
                    <span
                      className={` ${
                        formik.touched.spassword && formik.errors.spassword
                          ? "input-error1"
                          : "inputLabel1"
                      }`}
                    >
                      *
                    </span>
                  </div>
                  <Input.Password
                    name="spassword"
                    placeholder="Password"
                    className={`mt-2 ${
                      formik.touched.spassword && formik.errors.spassword
                        ? "input-error"
                        : ""
                    }`}
                    size="large"
                    style={{ width: "348px", height: "45px" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spassword}
                    iconRender={(visible) =>
                      visible ? <EyeFilled /> : <EyeInvisibleFilled />
                    }
                  />
                  {formik.touched.spassword && formik.errors.spassword ? (
                    <div className="error">{formik.errors.spassword}</div>
                  ) : null}
                </div>
                <div className="mt-4">
                  <Checkbox onChange={onChange} className="checkText">
                    <span className="checkText">Remember me?</span>
                  </Checkbox>
                </div>
                <div className="mt-4 mx-auto d-flex justify-content-center">
                  <Button type="primary" className="logbtn" htmlType="submit">
                    Sign In
                  </Button>
                </div>
              </form>
              <div
                style={{ fontWeight: 500, fontSize: "16px", cursor: "pointer" }}
                className="mt-3 text-center"
                onClick={() => setForgotPwd(true)}
              >
                Forgot your Password?
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
