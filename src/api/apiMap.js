const requireAccess = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTg4MTZhMDJlZWU2YmFlZTA4ZGRkZSIsImlhdCI6MTY4MzUzNzM3MCwiZXhwIjoxNjg2MTI5MzcwfQ.0hbUY0kGtpFl6Ko-iVHMHt3WXaucpTpKHsfCueod_I0`,
};
const api = (config) => ({
  login: (payload) => {
    return config("post", "api/v1/auth/login", {
      username: payload.username,
      password: payload.password,
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
    return config("get", "api/v1/products", null, requireAccess);
  },
  deleteProduct: (payload) => {
    return config("delete", `api/v1/products/${payload}`, null, requireAccess);
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
      requireAccess
    );
  },
  getProductDetail: (payload) => {
    return config("get", `api/v1/products/${payload}`, null, requireAccess);
  },
  getCategories: () => {
    return config("get", "api/v1/categories", null, requireAccess);
  },
  getUserProfile: () => {
    return config("get", "api/v1/users/me", null, requireAccess);
  },
  updateUserAvatar: (payload) => {
    return config("post", "api/v1/users/avatar", {}, requireAccess);
  },
});

export default api;
