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
      <div className="sidebar-list">
        {categories.map((category) => (
          <div
            className={`category-item ${
              currentCategoryId == category._id ? "category-item-active" : ""
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
