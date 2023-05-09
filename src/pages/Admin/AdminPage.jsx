import React from "react";

import SideBar from "../../components/Sidebar/index";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
import "./AdminPage.scss";
// import Orders from './pages/Orders';

export const AdminPage = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-body">
        <div className="dashboard-content ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
