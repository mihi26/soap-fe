import React from "react";
import { useEffect } from "react";
import "../assets/scss/soap-ecommerce.scss";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import { setCartInfo } from "../store/cart/cartSlice";
import { setLoading } from "../store/loading/loadingSlice";
import { Outlet } from "react-router";

export function HomePage() {
  const dispatch = useDispatch();
  const handleUserCart = async () => {
    dispatch(setLoading(true));
    let cartRes = await api("getUserCart");
    if (cartRes.success) {
      if (!cartRes.data.data.length) {
        let createCartRes = await api("createUserCart");
        if (createCartRes.success) {
          dispatch(setCartInfo(createCartRes.data.data));
        }
      } else {
        dispatch(setCartInfo(cartRes.data.data[0]));
      }
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    handleUserCart();
  }, []);

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
