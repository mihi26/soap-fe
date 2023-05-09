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
import { ProductDetailPage } from "../pages/ProductDetailPage.jsx";
import { AuthPage } from "../pages/Auth/AuthPage.jsx";
import { LoginPage } from "../pages/Auth/LoginPage/LoginPage.jsx";
import { SignUpPage } from "../pages/Auth/SignUpPage/SignUpPage.jsx";
import { UserPage } from "../pages/User/UserPage.jsx";
import { AdminPage } from "../pages/Admin/AdminPage.jsx";
import { ProductsPage } from "../pages/Admin/ProductsPage/ProductsPage.jsx";
import { CategoriesPage } from "../pages/Admin/CategoriesPage/CategoriesPage.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/newfeed" />} />
      {/* auth routes */}
      <Route path="auth-page" element={<AuthPage />}>
        <Route index element={<Navigate to="/auth-page/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="user/me" element={<UserPage />} />

      {/* admin routes */}
      <Route path="admin" element={<AdminPage />}>
        <Route index element={<Navigate to="/admin/products" />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Route>

      <Route path="home" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="landing" element={<LandingPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="product/:productId" element={<ProductDetailPage />} />
      {/* <Route path="*" element={<Navigate to="/home" replace={true} />} /> */}
    </Route>
  ),
  {}
);
