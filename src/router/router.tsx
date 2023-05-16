import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage.jsx";
import { CartPage } from "../pages/CartPage.jsx";
import { LandingPage } from "../pages/LandingPage.jsx";
import { ProductPage } from "../pages/ProductPage/ProductPage.jsx";
import { ProductDetailPage } from "../pages/ProductDetailPage.jsx";
import { AuthPage } from "../pages/Auth/AuthPage.jsx";
import { LoginPage } from "../pages/Auth/LoginPage/LoginPage.jsx";
import { SignUpPage } from "../pages/Auth/SignUpPage/SignUpPage.jsx";
import { UserPage } from "../pages/User/UserPage.jsx";
import { AdminPage } from "../pages/Admin/AdminPage.jsx";
import { ProductsPage } from "../pages/Admin/ProductsPage/ProductsPage.jsx";
import { CategoriesPage } from "../pages/Admin/CategoriesPage/CategoriesPage.jsx";
import { CheckoutPage } from "../pages/CheckoutPage.jsx";
import AuthGuard from "../components/guards/AuthGuard";
import GuessGuard from "../components/guards/GuessGuard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="auth-page"
        element={
          <GuessGuard>
            <AuthPage />
          </GuessGuard>
        }
      >
        <Route index element={<Navigate to="/auth-page/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
      <Route
        path=""
        element={
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        }
      >
        <Route index element={<Navigate to="/product" />} />
        <Route path="user/me" element={<UserPage />} />
        <Route path="admin" element={<AdminPage />}>
          <Route index element={<Navigate to="/admin/products" />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout/:orderId" element={<CheckoutPage />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/:productId" element={<ProductDetailPage />} />
      </Route>
    </Route>
  ),
  {}
);
