import React, { Fragment } from "react";

const Category: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Fragment>
      <div className="category-name">{name}</div>
    </Fragment>
  );
};

export default Category;
