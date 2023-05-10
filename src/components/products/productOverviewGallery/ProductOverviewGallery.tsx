import ProductRating from "../productRating";
import ProductImages from "../productImages";
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../store/loading/loadingSlice"
import { setCartInfo } from "../../../store/cart/cartSlice"
import api from "../../../api/api"
import "./productOverviewGallery.scss";

interface Props {
  title: string;
  price: number;
  image: string;
  quantity: number;
  rating: number;
  description: string;
}

export default function ProductOverviewGallery({
  title,
  price,
  image,
  quantity,
  rating,
  description,
}: Props) {

  const cartId = useSelector(state => state.cart.cartId)
  const { productId } = useParams()
  const dispatch = useDispatch()
  const [buyQuantity, setBuyQuantity] = useState(0)

  const handleChangeBuyQuantity = e => {
    if (Number(e.target.value) <= quantity) setBuyQuantity(Number(e.target.value))
  }

  const handleAddCart = async () => {
    dispatch(setLoading(true))
    let payload = {
      cartId: cartId,
      productId: productId,
      quantity: buyQuantity,
    }
    let res = await api("addItemsToCart", payload)
    if (res.success) {
      console.log(res.data.data)
      let payload = {
        cartId: res.data.data._id,
        cartItemsLength: res.data.data.quantity,
      }
      dispatch(setCartInfo(payload))
    }
    dispatch(setLoading(false))
  }

  return (
    <>
      <div className="card card-product card-plain">
        <div className="row">
          <ProductImages image={image} />
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            {title && <h2>{title}</h2>}
            {price != 0 && (
              <>
                <div className="d-flex mb-1">
                  <h3 className="font-weight-normal">{price} VND</h3>
                  <input className="opacity-0" defaultValue={price} />
                </div>
              </>
            )}
            <ProductRating rating={rating} />
            <h6 className={`w-100 mt-4 ${quantity > 0 ? "" : "red-quantity"}`}>
              {quantity > 0 ? `In stock: ${quantity}` : "Out of stock"}
            </h6>
            <p className="mt-4">{description}</p>
            <div className="d-flex align-items-center justify-content-between mt-4">
              <input
                type="number"
                min={0}
                max={quantity}
                className="form-control w-20 w-md-20 mt-4 mt-md-0"
                aria-label="amount"
                value={buyQuantity}
                onInput={handleChangeBuyQuantity}
              />
              <button
                className="btn btn-primary btn-lg mb-0 me-4"
                disabled={!quantity || !buyQuantity}
                onClick={handleAddCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
