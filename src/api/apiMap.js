const api = (config) => ({
  login: (payload) => {
    return config("post", "api/v1/auth/login", {
      username: payload.username,
      password: payload.password,
    });
  },
  googleLogin: (payload) => {
    return config("post", "/api/v1/auth/google/login", {
      code: payload.code,
    });
  },
  signup: (payload) => {
    return config("post", "api/v1/auth/register", {
      username: payload.username,
      password: payload.password,
      email: payload.email,
    });
  },
  getProducts: () => {
    return config("get", "api/v1/products", null, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
    });
  },
  deleteProduct: (payload) => {
    return config("delete", `api/v1/products/${payload}`, null, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
    });
  },
  updateProduct: (payload) => {
    return config(
      "put",
      `api/v1/products/${payload.id}`,
      {
        name: payload.name,
        description: payload.description,
        price: payload.price,
        quantity: payload.quantity,
        rating: payload.rating,
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  addProduct: (payload) => {
    return config(
      "post",
      `api/v1/products`,
      {
        name: payload.name,
        description: payload.description,
        price: payload.price,
        quantity: payload.quantity,
        rating: payload.rating,
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  getProductDetail: (payload) => {
    return config("get", `api/v1/products/${payload}`, null, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
    });
  },
  getCategories: () => {
    return config("get", "api/v1/categories", null, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
    });
  },
  updateCategory: (payload) => {
    return config(
      "put",
      `api/v1/categories/${payload.id}`,
      {
        name: payload.name,
        description: payload.description,
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  deleteCategory: (payload) => {
    return config("delete", `api/v1/categories/${payload}`, null, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
    });
  },
  getUserProfile: () => {
    return config("get", "api/v1/users/me", null, {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
    });
  },
  updateUserAvatar: () => {
    return config(
      "post",
      "api/v1/users/avatar",
      {},
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  changePassword: (payload) => {
    return config(
      "put",
      "api/v1/users/reset-password",
      {
        oldPassword: payload.oldPassword,
        newPassword: payload.newPassword,
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  getUserCart: () => {
    return config(
      "get",
      "api/v1/cart",
      {},
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  createUserCart: () => {
    return config(
      "post",
      "api/v1/cart",
      {
        status: "ACTIVE",
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  addItemsToCart: (payload) => {
    return config(
      "post",
      `api/v1/cart/${payload.cartId}/items`,
      {
        productId: payload.productId,
        quantity: payload.quantity,
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  deleteItemFromCart: (payload) => {
    return config(
      "delete",
      `api/v1/cart/${payload.cartId}/items/${payload.productId}`,
      {},
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
  createOrder: (payload) => {
    return config(
      "post",
      "api/v1/order",
      {
        items: payload.items,
      },
      {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
      }
    );
  },
});

export default api;
