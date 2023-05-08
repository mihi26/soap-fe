import { React, useState, useEffect } from "react";
import ProductOverviewGallery from "../components/products/productOverviewGallery";
import { useParams } from "react-router-dom";
import api from "../api/api";

export function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();

  const getProductDetailFromApi = async () => {
    let res = await api("getProductDetail", productId);
    if (res.success) {
      setProductDetail(res.data.data);
    }
  };

  useEffect(() => {
    getProductDetailFromApi();
  }, []);

  return (
    <div className="container mt-5">
      <ProductOverviewGallery
        image={productDetail.imageUrls}
        title={productDetail.name}
        description={productDetail.description}
        price={productDetail.price}
        rating={productDetail.rating}
      />
    </div>
  );
}
