import React from "react";

const Category: React.FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <div className="category-name">{name}</div>
    </>
  );
};

export default Category;
