import { React, useEffect, useState } from "react";
import data from "../mock/data.json";
import api from "../api/api";
import "../assets/scss/soap-ecommerce.scss";
import CardProduct from "../components/products/cardProduct/cardProduct";
import ProductOverviewGrid from "../components/products/productOverviewGrid";
import ReviewSummaryChart from "../components/reviews/reviewSummaryChart";

export function ProductPage() {
  let productReviews = data.reviews.filter((x) => x.productID == "01");
  const [productList, setProductList] = useState([]);
  const getProductsFromApi = async () => {
    let res = await api("getProducts");
    if (res.success) {
      setProductList(res.data.data);
    }
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <main>
      {/* {productList} */}
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

        {/* <ProductOverviewGrid
          colors={data.products[0].colors}
          images={data.products[0].images}
          title={data.products[0].title}
          full_description={data.products[0].full_description}
          price={data.products[0].price}
          highlights={data.products[0].highlights}
          details={data.products[0].details}
          rating={data.products[0].rating}
          reviews={data.products[0].reviews}
          sizes={data.products[0].sizes}
        /> */}

        {/* <div class="my-5">
          <ReviewSummaryChart reviews={productReviews} />
        </div> */}

        {/* <div class="row">
          <h5 class="mb-4">Customers also purchased</h5>
          {data.products.map((product) => (
            <div class="col-md-6 col-lg-3">
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                color={product.color}
                title={product.title}
                price={product.price}
                position="left"
              />
            </div>
          ))}
        </div> */}
        {/* <hr class="dark horizontal my-5" /> */}
      </div>
    </main>
  );
}
