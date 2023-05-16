import React from "react";
import CheckoutOrderSummary from "../components/checkout/checkoutOrderSummary";
import api from "../api/api";
import { setLoading } from "../store/loading/loadingSlice";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { replace } from "formik";

export function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.cartInfo.items);
  const navigate = useNavigate();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const sendPaymentRequest = async () => {
    dispatch(setLoading(true));
    let res = await api("orderPayment", orderId);
    if (res.success) {
      window.location.replace(res.data.data.payUrl);
    }
    dispatch(setLoading(false));
  };
  return (
    <React.Fragment>
      <div className="container my-5">
        <CheckoutOrderSummary
          products={cartItems}
          handlePayment={sendPaymentRequest}
        />
      </div>
    </React.Fragment>
  );
}
