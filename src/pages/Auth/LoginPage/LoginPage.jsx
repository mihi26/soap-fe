import React from "react";
import "./LoginPage.scss";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'
import api from "../../../api/api";
import * as Yup from "yup";

export const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(6, "Ít nhất 6 kí tự").required("Không được để trống"),
      password: Yup.string().min(6, "Ít nhất 6 kí tự").required("Không được để trống"),
    }),
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        password: values.password,
      }
      let res = await api('login', payload)
      if (res.success) {
        navigate('/home')
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="tab-pane fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <div className="text-center mb-3">
          <p>Sign in with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>
        </div>

        <p className="text-center">or:</p>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`form-control ${formik.touched.username && formik.errors.username ? 'input-error' : ''}`}
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-text">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`form-control ${formik.touched.password && formik.errors.password ? 'input-error' : ''}`}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-text">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="row mb-4">
          {/* <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                checked
              />
              <label className="form-check-label" htmlFor="loginCheck">
                Remember me
              </label>
            </div>
          </div> */}

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div className="col text-center">
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 center "
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};
