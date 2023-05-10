import ProductCartItem from "./productCartItem/productCartItem";
import OrderSummary from "./orderSummary";
import * as React from "react";

export default function ShoppingCart({ products }) {
  let subtotal = 0;
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-5">Shopping Cart</h2>
        <div className="row">
          <div className="col-12 col-lg-7">
            {products.map((product) => (
              <React.Fragment key={product.product._id}>
                <hr className="horizontal dark my-4" />
                <ProductCartItem
                  thumb_src={product.product.imageUrls[0]}
                  id={product.product._id}
                  title={product.product.name}
                  price={product.product.price}
                  quantity={product.quantity}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="col-12 col-lg-5 mt-5 mt-lg-4">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Order Summary</h5>
                <OrderSummary />
                <button className="btn btn-primary btn-lg w-100 mb-0">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
