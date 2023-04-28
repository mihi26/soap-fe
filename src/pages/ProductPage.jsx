import React from 'react'
import data from '../mock/data.json';
import '../assets/scss/soap-ecommerce.scss';
import Navbar from '../components/navbar';
import UpperNavbar from '../components/store/upperNavbar';
import CardProduct from '../components/products/cardProduct';
import ProductOverviewGrid from '../components/products/productOverviewGrid';
import StoreDoubleColumn from '../components/store/storeDoubleColumn';
import ReviewSummaryChart from '../components/reviews/reviewSummaryChart';

export function ProductPage() {
  let productReviews = data.reviews.filter(x => x.productID == "01");
  return (
    <main>
    <UpperNavbar />
    <Navbar />
    <div class="container mt-5">
      <ProductOverviewGrid  
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
      />    

      <div class="my-5">
        <ReviewSummaryChart reviews = {productReviews}/>
      </div>

      <div class="row">
        <h5 class="mb-4">Customers also purchased</h5>
        {data.products.map(product => 
          <div class="col-md-6 col-lg-3">
            <CardProduct 
              thumb_src = {product.thumb_src}
              thumb_alt = {product.thumb_alt}
              color = {product.color}
              title = {product.title}
              price = {product.price}
              position = "left"
            />
          </div>
        )}        
      </div>
      <hr class="dark horizontal my-5" />
      <StoreDoubleColumn />
    </div>
  </main>
  )
}

