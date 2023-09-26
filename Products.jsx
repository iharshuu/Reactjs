// src/pages/Products/Products.js
import React, { useState } from 'react';
import './Products.scss';
import List from '../../Components/List/List';

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('');
  const [categories, setCategories] = useState([]); // State for selected categories

  // Define your product categories
  const productCategories = ['Shoes', 'Shirt', 'T-Shirt', 'Hoodie'];

  // Function to toggle selected categories
  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <div className="products">
      <div className="left">
        {/* Filter and sort options */}
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              checked={sortBy === 'asc'}
              onChange={() => setSortBy('asc')}
            />
            <label  htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              checked={sortBy === 'desc'}
              onChange={() => setSortBy('desc')}
            />
            <label  htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Product Categories</h2>
          {productCategories.map((category) => (
            <div className="inputItem" key={category}>
              <input
                type="checkbox"
                id={category}
                value={category}
                checked={categories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <label  htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <List maxPrice={maxPrice} sortBy={sortBy} categories={categories} />
      </div>
    </div>
  );
};

export default Products;
