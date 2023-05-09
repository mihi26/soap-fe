import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { store } from "./store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="1048363002123-fqknaran36ug5i39420d7d8o7r9mulhn.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
