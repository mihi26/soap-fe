import React from "react";
import "../assets/scss/soap-ecommerce.scss";
import ShoppingCart from "../components/cart/shoppingCart";
import { useSelector } from "react-redux";

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartInfo.items);
  return (
    <React.Fragment>
      <main>
        <ShoppingCart products={cartItems ? cartItems : []} />
      </main>
    </React.Fragment>
  );
}
