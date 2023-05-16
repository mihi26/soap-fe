import { useSelector } from "react-redux"
import { useLocation } from "react-router";

export default function OrderSummary() {
  const cart = useSelector((state) => state.cart.cartInfo);
  const location = useLocation()
  return (
    <>
      <ul className="list-unstyled">
        { cart.items ? cart.items.map((product) => (
          <li className="border-bottom mt-3" key={product.product._id}>
            <div className="d-flex justify-content-between">
              <p className="opacity-8 w-80">{product.product.name}</p>
              <p className={`fw-bold opacity-8`}>{product.product.price * product.quantity} VND</p>
            </div>
          </li>
        )) : null}
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5 className={location.pathname.includes('checkout') ? 'text-white' : ''}>Order Total</h5>
            <h5 className={location.pathname.includes('checkout') ? 'text-white' : ''}>
              {cart.total} VND
            </h5>
          </div>
        </li>
      </ul>
    </>
  );
}
