import { React, useState, useEffect } from "react";
import ProductOverviewGallery from "../components/products/productOverviewGallery/ProductOverviewGallery";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loadingSlice";
import api from "../api/api";

export function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();
  const dispatch = useDispatch();

  const getProductDetailFromApi = async () => {
    dispatch(setLoading(true));
    let res = await api("getProductDetail", productId);
    if (res.success) {
      setProductDetail(res.data.data);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getProductDetailFromApi();
  }, []);

  return (
    <div className="container my-5">
      <ProductOverviewGallery
        image={productDetail.imageUrls}
        title={productDetail.name}
        description={productDetail.description}
        quantity={productDetail.quantity}
        price={productDetail.price}
        rating={productDetail.rating}
      />
    </div>
  );
}
