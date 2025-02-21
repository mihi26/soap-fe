import React from "react";
import data from "../mock/data.json";
import "../assets/scss/soap-ecommerce.scss";
import CardCategory from "../components/products/cardCategory";
import ProductFeature from "../components/products/productFeature";
import StoreDoubleColumn from "../components/store/storeDoubleColumn";
import TestimonialsFade from "../components/promo/testimonialsFade";
import PromoSectionLarge from "../components/promo/promoSectionLarge";

export function LandingPage() {
  return (
    <main>
      <PromoSectionLarge
        title={"Check out our new collection"}
        full_description={data.products[0].full_description}
        pageHeaderBgImg={
          "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        }
        pageHeaderMinVh="90vh"
      />
      <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h4>Shop by category</h4>
          <a class="text-primary text-sm font-weight-bold" href="#">
            Browse all categories
          </a>
        </div>
        <div class="row mb-5">
          {data.categories.map((category) => (
            <div class="col-md-6 col-lg-3">
              <CardCategory
                thumb_src={category.thumb_src}
                title={category.title}
              />
            </div>
          ))}
        </div>

        <PromoSectionLarge
          title={data.products[3].title}
          full_description={data.products[0].full_description}
          pageHeaderBgImg={
            "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          }
          pageHeaderMinVh="50vh"
          pageHeaderRadius="1rem"
        />
        <div class="my-5">
          <ProductFeature
            title={data.products[0].title}
            images={data.products[2].images}
            full_description={data.products[0].full_description}
            featuresDetails={data.products[0].featuresDetails}
          />
        </div>
        <div class="mt-5 mb-10">
          <TestimonialsFade
            pageHeaderBgImg={
              "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80"
            }
            pageHeaderMinVh="50vh"
          />
        </div>

        <StoreDoubleColumn />
      </div>
    </main>
  );
}
