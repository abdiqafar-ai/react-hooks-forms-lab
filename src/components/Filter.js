import React from "react";

const Filter = ({ onCategoryChange, onSearchChange, search }) => {
  return (
    <div>

      <select name="category" onChange={onCategoryChange}>
        <option value="All">All Categories</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>


      <input
        type="text"
        placeholder="Search"
        value={search} 
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Filter;
