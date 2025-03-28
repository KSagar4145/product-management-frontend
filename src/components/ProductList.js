
// src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]); // Store products in state
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data); // Store the fetched products in the state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProducts(); // Call the function to fetch data
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>
      
      <Link to="/create" className="btn btn-success mb-4">Add Product</Link>

      {/* Table to display the list of products */}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>
                  {/* Edit, Delete, and View buttons with spacing */}
                  <Link to={`/edit/${product.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <Link to={`/delete/${product.id}`} className="btn btn-danger btn-sm me-2">Delete</Link>
                  <Link to={`/product/${product.id}`} className="btn btn-info btn-sm">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
