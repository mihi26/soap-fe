import React from "react";
import "./login.css";
export const LoginPage = () => {
  // formik and yup
  return (
    <div
      class="tab-pane fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form>
        <div class="text-center mb-3">
          <p>Sign in with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
        </div>

        <p class="text-center">or:</p>

        <div class="form-outline mb-4">
          <input type="email" id="loginName" class="form-control" />
          <label class="form-label" for="loginName">
            Username
          </label>
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="loginPassword" class="form-control" />
          <label class="form-label" for="loginPassword">
            Password
          </label>
        </div>
        <div class="row mb-4">
          <div class="col-md-6 d-flex justify-content-center">
            <div class="form-check mb-3 mb-md-0">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                checked
              />
              <label class="form-check-label" for="loginCheck">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div className="col text-center">
          <button type="submit" class="btn btn-primary btn-block mb-4 center ">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
