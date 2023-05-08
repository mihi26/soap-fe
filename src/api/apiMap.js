const requireAccess = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTcyOTU2OWM1Nzk3M2IxNTJjMmI2ZSIsImlhdCI6MTY4MzQzMzk4NiwiZXhwIjoxNjg2MDI1OTg2fQ.5A2BZgOlbpwU_a2PZybnSYOSJsT2Q-Dc5iugoFWSIAs`,
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
  getProductDetail: (payload) => {
    return config("get", `api/v1/products/${payload}`, null, requireAccess);
  },
});

export default api;
