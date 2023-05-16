import React from "react";
import { Outlet } from "react-router-dom";
import "./AuthPage.scss";
import logo from "../../assets/img/logo.png";

export const AuthPage = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0 navbar-z">
      <div className="container px-1" style={{ maxHeight: "50px" }}>
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/product">
          <img height={50} src={logo} alt="" style={{ scale: "1.5" }} />
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            {(
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 "
                  aria-current="categories"
                  id="pagesExample"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesExample">
                  <li>
                    <a className="dropdown-item" href="/auth-page">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/landing">
                      Landing Page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/product/">
                      Product Page
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
      <main className="auth-main">
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
