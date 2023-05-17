import React from "react";
import "./CategorySidebar.scss";

function CategorySidebar({
  categories,
  handleCurrentCategory,
  currentCategoryId,
}) {
  const handleClickCategory = (category) => {
    handleCurrentCategory(category);
  };

  return (
    <div className="sidebar-wrapper">
      <h5 className="text-white px-3 pt-3">Categories</h5>
      <div className="sidebar-list">
        {categories.map((category) => (
          <div
            className={`sidebar-item ${
              currentCategoryId == category._id ? "sidebar-item-active" : ""
            }`}
            key={category._id}
            onClick={() => handleClickCategory(category._id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySidebar;
