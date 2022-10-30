import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {/* if you don't have id or unique value then you can pass second arguments as index it will give you the index of the array and you can use it as unique value */}
      {categories.map((category, index) => {
        // console.log(category, index);
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
