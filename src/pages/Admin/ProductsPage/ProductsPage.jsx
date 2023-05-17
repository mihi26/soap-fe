import React, { useState, useEffect } from "react";
import loading from "../../../components/loading/loading";
import api from "../../../api/api";
import "./ProductsPage.scss";
import Swal from "sweetalert2";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoaing] = useState(true);
  const [categories, setCategories] = useState([]);
  const getProductsFromAPI = async () => {
    setLoaing(true);
    const res = await api("getProducts");
    if (res.success) {
      setProducts(res.data.data);
    }
    setLoaing(false);
  };
  const getCategoriesFromAPI = async () => {
    const res = await api("getCategories");
    if (res.success) {
      setCategories(res.data.data);
    }
  };
  const handleDeleteProduct = async (id) => {
    Swal.fire({
      title: "Do you really want to delete this product?",
      html: `<input type="text" hidden id="productId" value=${id} class="swal2-input">`,
      confirmButtonText: "Delete",
      focusConfirm: false,
      preConfirm: () => {
        const id = Swal.getPopup().querySelector("#productId").value;
        return { id: id };
      },
    }).then(async (result) => {
      await api("deleteProduct", result.value.id);
      getProductsFromAPI();
    });
  };

  const handleEditProduct = async ({
    id,
    name,
    description,
    price,
    rating,
    quantity,
  }) => {
    const htmlForm = `
                <input type="text" hidden id="productId" value="${id}" class="swal2-input">
                <input type="text" id="productName" value="${name}" class="swal2-input" placeholder="Name">
                <input type="text" id="productDes" value="${description}" class="swal2-input" placeholder="Description">
                <input type="number" id="productPrice" value="${price}" class="swal2-input" placeholder="Price">
                <input type="number" id="productQuantity" value="${quantity}" class="swal2-input" placeholder="Quantity">
                <input type="text" id="productRating" value="${rating}" class="swal2-input" placeholder="Rating">`;
    Swal.fire({
      title: "Edit product information",
      html: htmlForm,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#productName").value;
        const description = Swal.getPopup().querySelector("#productDes").value;
        const price = Swal.getPopup().querySelector("#productPrice").value;
        const quantity =
          Swal.getPopup().querySelector("#productQuantity").value;
        const rating = Swal.getPopup().querySelector("#productRating").value;
        if (!name || !description || !price || !quantity || !rating) {
          Swal.showValidationMessage(`Please filled out all the fields`);
        }
        if (price <= 0 || quantity <= 0 || rating <= 0) {
          Swal.showValidationMessage(`Please enter a value greater than 0`);
        }
        if (rating > 5) {
          Swal.showValidationMessage(
            `Please enter rating value less than or equal to 5`
          );
        }
        return { id, name, price, description, quantity, rating };
      },
    }).then(async (result) => {
      await api("updateProduct", result.value);
      getProductsFromAPI();
    });
  };
  const handleAddProduct = () => {
    const select = categories.map(
      (category) => `<option value="${category._id}">${category.name}</option>`
    );
    console.log(select);
    Swal.fire({
      title: "Add product",
      html: `
        <input type="text" id="productName" class="swal2-input" placeholder="Name">
        <input type="text" id="productDes"  class="swal2-input" placeholder="Desciption">
        <input type="number" id="productPrice" class="swal2-input" placeholder="Price">
        <input type="number" id="productQuantity" class="swal2-input" placeholder="Quantity">
        <input type="text" id="productRating"  class="swal2-input" placeholder="Rating">
        <select id="productCategory" class="swal2-input"> 
        ${select.join("")} </select>`,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#productName").value;
        const description = Swal.getPopup().querySelector("#productDes").value;
        const price = Swal.getPopup().querySelector("#productPrice").value;
        const quantity =
          Swal.getPopup().querySelector("#productQuantity").value;
        const rating = Swal.getPopup().querySelector("#productRating").value;
        const categories =
          Swal.getPopup().querySelector("#productCategory").value;
        if (!name || !description || !price || !quantity || !rating) {
          Swal.showValidationMessage(`Please filled out all the fields`);
        }
        if (price <= 0 || quantity <= 0 || rating <= 0) {
          Swal.showValidationMessage(`Please enter a value greater than 0`);
        }
        if (rating > 5) {
          Swal.showValidationMessage(
            `Please enter rating value less than or equal to 5`
          );
        }
        return { name, description, price, quantity, rating, categories };
      },
    }).then(async (result) => {
      await api("addProduct", result.value);
      getProductsFromAPI();
    });
  };

  useEffect(() => {
    getProductsFromAPI();
    getCategoriesFromAPI();
  }, []);
  return (
    <div>
      {isLoading ? (
        <loading />
      ) : (
        <div className="product-page">
          <button
            type="button"
            class="btn btn-success btn-sm px-3"
            onClick={() => handleAddProduct()}
          >
            Add product
          </button>
          <div class="custom-table col-12">
            <div
              class="card shadow-2-strong"
              style={{ backgroundColor: "#f5f7fa" }}
            >
              <div>
                <div class="table-responsive">
                  <table class="table-over table-borderless mb-0">
                    <thead>
                      <tr>
                        <th className="product-item" scope="col">
                          #
                        </th>
                        <th className="product-item" scope="col">
                          Image
                        </th>
                        <th className="product-item" scope="col">
                          Name
                        </th>
                        <th className="product-item" scope="col">
                          Description
                        </th>
                        <th className="product-item" scope="col">
                          Price
                        </th>
                        <th className="product-item" scope="col">
                          Quantity
                        </th>
                        <th className="product-item" scope="col">
                          Categories
                        </th>
                        <th className="product-item" scope="col">
                          Rating
                        </th>
                        <th className="product-item" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => {
                        return (
                          <tr>
                            <th className="product-item" scope="row">
                              {index + 1}
                            </th>
                            <td className="product-item">
                              <img
                                width={100}
                                src={
                                  product.imageUrls.length < 1
                                    ? "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000"
                                    : product.imageUrls
                                }
                              />
                            </td>
                            <td className="product-item">{product.name}</td>
                            <td className="product-item">
                              {product.description.length > 50
                                ? product.description.slice(0, 130) + "..."
                                : product.description}
                            </td>
                            <td className="product-item">{product.price}</td>
                            <td className="product-item">{product.quantity}</td>
                            <td className="product-item">
                              {product.categories.map(
                                (category) => `${category.name} `
                              )}
                            </td>
                            <td className="product-item">{product.rating}</td>
                            <td className="product-item">
                              <button
                                type="button"
                                class="btn btn-primary btn-sm px-3"
                                onClick={() =>
                                  handleEditProduct({
                                    id: product._id,
                                    name: product.name,
                                    description: product.description,
                                    price: product.price,
                                    quantity: product.quantity,
                                    rating: product.rating,
                                  })
                                }
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                class="btn btn-danger btn-sm px-3"
                                onClick={() => handleDeleteProduct(product._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
