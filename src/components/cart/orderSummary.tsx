import { useSelector } from "react-redux"

export default function OrderSummary() {
  const cart = useSelector((state) => state.cart.cartInfo);
  return (
    <>
      <ul className="list-unstyled">
        { cart.items ? cart.items.map((product) => (
          <li className="border-bottom mt-3" key={product.product._id}>
            <div className="d-flex justify-content-between">
              <p className="opacity-8">{product.product.name}</p>
              <p className={`fw-bold opacity-8`}>{product.product.price * product.quantity} VND</p>
            </div>
          </li>
        )) : null}
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5>Order Total</h5>
            <h5>
              {cart.total} VND
            </h5>
          </div>
        </li>
      </ul>
    </>
  );
}
