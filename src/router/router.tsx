import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage.jsx";
import { CheckoutPage } from "../pages/CheckoutPage.jsx";
import { LandingPage } from "../pages/LandingPage.jsx";
import { ProductPage } from "../pages/ProductPage.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/newfeed" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="landing" element={<LandingPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="/home" replace={true} />} />
    </Route>
  ),
  {}
);
