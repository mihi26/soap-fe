interface Props {
  thumb_src: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
}
import api from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {setLoading} from "../../../store/loading/loadingSlice"
import {setCartInfo} from "../../../store/cart/cartSlice"
import "./productCartItem.scss";

export default function CartItem({ thumb_src, title, price, quantity, id }: Props) {
  const dispatch = useDispatch()
  const cartId = useSelector(state => state.cart.cartInfo._id)

  const handleDeleteItem = async () => {
    dispatch(setLoading(true))
    let payload = {
      cartId: cartId,
      productId: id,
    }
    let res = await api("deleteItemFromCart", payload)
    if(res.success) {
      let cartRes = await api("getUserCart")
      if (cartRes.success) {
        dispatch(setCartInfo(cartRes.data.data[0]))
      }
    }
    dispatch(setLoading(false))
  }
  return (
    <>
      <div className="d-block d-md-flex">
        <img
          className="w-50 w-md-30 rounded-3 shadow-xs border"
          src={thumb_src}
          alt="Product Image"
        />
        <div className="w-100 w-md-50 pt-2 ps-md-4">
          <h6 className="text-lg mb-1">{title}</h6>
          <h6 className="mb-1">{price} VND</h6>
          <h6 className="">Quantity: {quantity}</h6>
        </div>
        <div className="w-10 text-end ps-md-6">
          <i className="fas fa-times ms-3 del-icon" onClick={handleDeleteItem}></i>
        </div>
      </div>
    </>
  );
}
