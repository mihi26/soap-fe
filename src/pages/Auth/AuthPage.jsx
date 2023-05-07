import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
export const AuthPage = () => {
  return (
    <React.Fragment>
      <main>
        <Navbar />
        <div className="authPage">
          <div
            class="container"
            style={{ maxWidth: "500px", marginTop: "100px" }}
          >
            <ul
              class="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link link-primary"
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
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link link-primary"
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
            <div class="tab-content">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
