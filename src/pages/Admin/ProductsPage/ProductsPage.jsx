import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import "./ProductsPage.scss";
import Swal from "sweetalert2";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const getProductsFromAPI = async () => {
    const res = await api("getProducts");
    if (res.success) {
      setProducts(res.data.data);
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
    }).then((result) => {
      console.log(result.value.id);
      api("deleteProduct", result.value.id);
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
    Swal.fire({
      title: "Edit product information",
      html: `
      <input type="text" hidden id="productId" value=${id} class="swal2-input">
      <input type="text" id="productName" value=${name} class="swal2-input">
      <input type="text" id="productDes" value=${description} class="swal2-input">
      <input type="number" id="productPrice" value=${price} class="swal2-input">
      <input type="number" id="productQuantity" value=${quantity} class="swal2-input">
      <input type="text" id="productRating" value=${rating} class="swal2-input">`,
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
    }).then((result) => {
      const res = api("updateProduct", result.value);
      getProductsFromAPI();
    });
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  return (
    <div class="col-12">
      <div class="card shadow-2-strong" style={{ backgroundColor: "#f5f7fa" }}>
        <div class="card-body">
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
                    Category
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
                        <img width={100} src={product.imageUrls} />
                      </td>
                      <td className="product-item">{product.name}</td>
                      <td className="product-item">
                        {product.description.length > 50
                          ? product.description.slice(0, 130) + "..."
                          : product.description}
                      </td>
                      <td className="product-item">{product.price}</td>
                      <td className="product-item">{product.quantity}</td>
                      <td className="product-item">Electric device</td>
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
  );
};
