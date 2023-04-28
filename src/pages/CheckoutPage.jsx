import React from 'react'
import data from '../mock/data.json';
import '../assets/scss/soap-ecommerce.scss';
import Navbar from '../components/navbar';
import UpperNavbar from '../components/store/upperNavbar';
import CardProduct from '../components/products/cardProduct';
import ShoppingCart from '../components/cart/shoppingCart';
import StoreDoubleColumn from '../components/store/storeDoubleColumn';
export function CheckoutPage() {
  let cartItems = [];
data.shoppingCart.map(id => 
  data.products.filter(x => x.id == id).map(x => cartItems.push(x))
)
  return (
    <React.Fragment>
      <main>
    <UpperNavbar />
    <Navbar />
    <ShoppingCart products = {cartItems}/>
    <div class="container mt-5">
      <div class="row">
        <h5 class="mb-4">You may also like...</h5>
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
    </React.Fragment>
  )
}
