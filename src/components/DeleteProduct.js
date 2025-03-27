// src/pages/DeleteProduct.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct } from '../services/ProductService';

const DeleteProduct = () => {
  const { id } = useParams(); // Get the product id from the URL
  const navigate = useNavigate(); // To navigate back to the product list after deletion
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteProduct(id);
      navigate('/products'); // Navigate back to the product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCancel = () => {
    navigate('/products'); // Cancel deletion and navigate back to the product list
  };

  return (
    <div className="container mt-4">
      <h2>Are you sure you want to delete this product?</h2>
      <button
        className="btn btn-danger mr-2"
        onClick={handleDelete}
        disabled={loading}
      >
        {loading ? "Deleting..." : "Yes, Delete"}
      </button>
      <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default DeleteProduct;

