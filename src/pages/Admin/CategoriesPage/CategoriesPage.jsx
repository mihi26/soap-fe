import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import "./CategoriesPage.scss";
import Swal from "sweetalert2";

export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const getCategoriesFromAPI = async () => {
    const res = await api("getCategories");
    if (res.success) {
      setCategories(res.data.data);
    }
  };
  const handleDeleteProduct = async (id) => {
    Swal.fire({
      title: "Do you really want to delete this category?",
      html: `<input type="text" hidden id="categoryId" value=${id} class="swal2-input">`,
      confirmButtonText: "Delete",
      focusConfirm: false,
      preConfirm: () => {
        const id = Swal.getPopup().querySelector("#categoryId").value;
        return { id: id };
      },
    }).then((result) => {
      console.log(result.value.id);
      api("deleteCategory", result.value.id);
      getCategoriesFromAPI();
    });
  };
  const handleEditProduct = async ({ id, name, description }) => {
    Swal.fire({
      title: "Edit category information",
      html: `
      <input type="text" hidden id="categoryId" value=${id} class="swal2-input">
      <input type="text" id="categoryName" value=${name} class="swal2-input">
      <input type="text" id="categoryDes" value=${description} class="swal2-input">`,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#categoryName").value;
        const description = Swal.getPopup().querySelector("#categoryDes").value;
        if (!name || !description) {
          Swal.showValidationMessage(`Please filled out all the fields`);
        }
        return { id, name, description };
      },
    }).then((result) => {
      const res = api("updateCategory", result.value);
      getCategoriesFromAPI();
    });
  };
  const handleAddCategory = () => {
    Swal.fire({
      title: "Edit category information",
      html: `
      <input type="text" hidden id="categoryId" class="swal2-input">
      <input type="text" id="categoryName" class="swal2-input">
      <input type="text" id="categoryDes" class="swal2-input">`,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#categoryName").value;
        const description = Swal.getPopup().querySelector("#categoryDes").value;
        if (!name || !description) {
          Swal.showValidationMessage(`Please filled out all the fields`);
        }
        return { id, name, description };
      },
    }).then((result) => {
      const res = api("updateCategory", result.value);
      getCategoriesFromAPI();
    });
  };

  useEffect(() => {
    getCategoriesFromAPI();
  }, []);
  return (
    <React.Fragment>
      <button
        type="button"
        class="btn btn-success btn-sm px-3"
        onClick={() => handleAddCategory()}
      >
        Add category
      </button>
      <div class="col-10">
        <div
          class="card shadow-2-strong"
          style={{ backgroundColor: "#f5f7fa" }}
        >
          <div class="card-body">
            <div class="table-responsive">
              <table class="table-borderless mb-0">
                <thead>
                  <tr>
                    <th className="category-itemm" scope="col">
                      #
                    </th>
                    <th className="category-itemm" scope="col">
                      Name
                    </th>
                    <th className="category-itemm" scope="col">
                      Description
                    </th>
                    <th className="category-itemm" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => {
                    return (
                      <tr>
                        <th className="product-itemm" scope="row">
                          {index + 1}
                        </th>
                        <td className="category-itemm">{category.name}</td>
                        <td className="category-itemm">
                          {category.description}
                        </td>
                        <td className="category-itemm">
                          <button
                            type="button"
                            class="btn btn-primary btn-sm px-3"
                            onClick={() =>
                              handleEditProduct({
                                id: category._id,
                                name: category.name,
                                description: category.description,
                              })
                            }
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm px-3"
                            onClick={() => handleDeleteProduct(category._id)}
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
    </React.Fragment>
  );
};
