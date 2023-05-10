import { React, useEffect, useState } from "react";
import { setLoading } from "../store/loading/loadingSlice";
import { useDispatch } from "react-redux";
import api from "../api/api";
import "../assets/scss/soap-ecommerce.scss";
import CardProduct from "../components/products/cardProduct/cardProduct";

export function ProductPage() {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const getProductsFromApi = async () => {
    dispatch(setLoading(true));
    let res = await api("getProducts");
    if (res.success) {
      setProductList(res.data.data);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <main>
      <div className="container mt-5">
        <div className="row">
          {productList.map((product) => (
            <div className="col-md-6 col-lg-3" key={product._id}>
              <CardProduct
                id={product._id}
                thumb_src={product.imageUrls}
                title={product.name}
                description={product.description}
                price={product.price}
                position="left"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
