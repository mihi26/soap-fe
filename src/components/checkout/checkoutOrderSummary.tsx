import BillingInfo from "./billingInfo";
import OrderSummary from "../cart/orderSummary";
import CheckoutSingleItem from "../checkout/checkoutSingleItem";

export default function CheckoutSummary({ products, handlePayment }) {

  const onHandlePayment = () => {
    handlePayment()
  }
  return (
    <>
      <section>
        <div className="row">
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <h5 className="mb-4">Choose payment method</h5>
            <BillingInfo />
            <hr className="dark horizontal" />
            <button className="btn btn-primary float-end mt-2 mb-0" onClick={onHandlePayment}>
              Pay now
            </button>
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5 bg-dark bg-gradient rounded-end">
            <h3 className="text-white mb-4">Your order</h3>
            {products.map((product) => (
              <CheckoutSingleItem
                thumb_src={product.product.imageUrls[0]}
                title={product.product.name}
                price={product.product.price * product.quantity}
                key={product.product._id}
              />
            ))}
            <OrderSummary />
          </div>
        </div>
      </section>
    </>
  );
}
