import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import * as Yup from "yup";
export const SignUpPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "Ít nhất 6 kí tự")
        .required("Không được để trống"),
      password: Yup.string()
        .min(6, "Ít nhất 6 kí tự")
        .required("Không được để trống"),
      email: Yup.string()
        .email("Phải là định dạng email")
        .required("Không được để trống"),
      repeatPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Mật khẩu nhập lại không đúng"
      ),
    }),
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      let res = await api("signup", payload);
      if (res.success) {
        navigate('/auth-page/login');
      }
    },
  });
  return (
    <div
      className="tab-pane fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="registerUsername">
            Username
          </label>
          <input type="text" id="registerUsername" className={`form-control ${formik.touched.username && formik.errors.username ? 'input-error' : ''}`} {...formik.getFieldProps("username")}/>
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-text">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
          <input type="email" id="registerEmail" className={`form-control ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`} {...formik.getFieldProps("email")}/>
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-text">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
          <input
            type="password"
            id="registerPassword"
            className={`form-control ${formik.touched.password && formik.errors.password ? 'input-error' : ''}`}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-text">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label>
          <input
            type="password"
            id="registerRepeatPassword"
            className={`form-control ${formik.touched.repeatPassword && formik.errors.repeatPassword ? 'input-error' : ''}`}
            {...formik.getFieldProps("repeatPassword")}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <div className="invalid-text">{formik.errors.repeatPassword}</div>
          ) : null}
        </div>
        <div className="col text-center">
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 center "
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
