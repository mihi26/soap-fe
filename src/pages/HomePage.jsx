import React from "react";
import data from "../mock/data.json";
import "../assets/scss/soap-ecommerce.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router";

export function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}
