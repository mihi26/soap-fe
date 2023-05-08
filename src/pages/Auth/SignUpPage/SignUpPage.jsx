import React from "react";
export const SignUpPage = () => {
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
          <p>Sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
        </div>

        <p class="text-center">or:</p>
        <div class="form-outline mb-2">
          <input type="text" id="registerUsername" class="form-control" />
          <label class="form-label" for="registerUsername">
            Username
          </label>
        </div>
        <div class="form-outline mb-2">
          <input type="email" id="registerEmail" class="form-control" />
          <label class="form-label" for="registerEmail">
            Email
          </label>
        </div>
        <div class="form-outline mb-2">
          <input type="password" id="registerPassword" class="form-control" />
          <label class="form-label" for="registerPassword">
            Password
          </label>
        </div>
        <div class="form-outline mb-2">
          <input
            type="password"
            id="registerRepeatPassword"
            class="form-control"
          />
          <label class="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
        </div>
        <div class="form-check d-flex justify-content-center mb-4">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
          />
          <label class="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
        <div className="col text-center">
          <button type="submit" class="btn btn-primary btn-block mb-4 center ">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
