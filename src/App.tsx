import { useState } from "react";
import Navbar from "./components/navbar";
import StoreDoubleColumn from "./components/store/storeDoubleColumn";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="container mt-5">
        <StoreDoubleColumn />
      </div>
    </>
  );
}

export default App;
