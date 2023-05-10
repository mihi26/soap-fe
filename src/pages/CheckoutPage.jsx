import React from "react";
import { useEffect } from "react";
import data from "../mock/data.json";
import CheckoutOrderSummary from "../components/checkout/checkoutOrderSummary";
import { setLoading } from "../store/loading/loadingSlice";
import api from "../api/api";

export function CheckoutPage() {
  let testItems = [];
  data.shoppingCart.map((id) =>
    data.products.filter((x) => x.id == id).map((x) => testItems.push(x))
  );

  return (
    <React.Fragment>
      <div className="container my-5">
        <CheckoutOrderSummary products={testItems} />
      </div>
    </React.Fragment>
  );
}
