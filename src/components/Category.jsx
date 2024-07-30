import React from "react";

const Category = ({ text, active }) => {
  return (
    <button
      className={`${
        active ? "bg-neutral-800 text-white" : "bg-neutral-50"
      } rounded-2xl py-2 px-4 `}
    >
      {text}
    </button>
  );
};

export default Category;
