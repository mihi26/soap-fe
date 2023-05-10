import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./AuthPage.scss";

export const AuthPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="authPage">
          <div
            className="container"
            style={{ maxWidth: "500px", marginTop: "100px" }}
          >
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link link-primary"
                  id="tab-login"
                  data-mdb-toggle="pill"
                  href="/auth-page/login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link link-primary"
                  id="tab-register"
                  data-mdb-toggle="pill"
                  href="/auth-page/sign-up"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
