import React from "react";
import { useEffect } from "react";
import "../assets/scss/soap-ecommerce.scss";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import { setCartInfo } from "../store/cart/cartSlice";
import { Outlet } from "react-router";

export function HomePage() {
  const dispatch = useDispatch();

  const handleUserCart = async () => {
    let cartRes = await api("getUserCart");
    if (cartRes.success) {
      if (!cartRes.data.data.length) {
        let createCartRes = await api("createUserCart");
        if (createCartRes.success) {
          const createCartPayload = {
            cartId: createCartRes.data.data._id,
            cartItemsLength: createCartRes.data.data.quantity,
          };
          dispatch(setCartInfo(createCartPayload));
        }
      } else {
        const cartPayload = {
          cartId: cartRes.data.data[0]._id,
          cartItemsLength: cartRes.data.data[0].quantity,
        };
        dispatch(setCartInfo(cartPayload));
      }
    }
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
