import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import "./CategoriesPage.scss";
export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const getCategoriesFromAPI = async () => {
    const res = await api("getCategories");
    if (res.success) {
      setCategories(res.data.data);
    }
  };
  useEffect(() => {
    getCategoriesFromAPI();
  }, []);
  return (
    <div class="col-6">
      <div class="card shadow-2-strong" style={{ backgroundColor: "#f5f7fa" }}>
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
                        {category.description.length > 50
                          ? category.description.slice(0, 130) + "..."
                          : category.description}
                      </td>
                      <td className="category-itemm">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm px-3"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm px-3"
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
