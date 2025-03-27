// src/pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the product id from the URL
import { getProductById } from '../services/ProductService'; // Function to get product by id

const ProductDetails = () => {
  const { id } = useParams(); // Get product id from the URL using react-router
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductById(id); // Fetch product by ID
        setProduct(response.data); // Set the product data to state
      } catch (error) {
        setError('Failed to fetch product details.');
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ); // Display loading spinner
  }

  if (error) {
    return <div className="alert alert-danger text-center" role="alert">{error}</div>; // Display error if there's any
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Product Details</h2>
      {product ? (
        <div className="row justify-content-center">
          <div className="col-md-8"> {/* Adjust width of the table box */}
            <div className="card shadow-sm rounded">
              <div className="card-body">
                <h5 className="card-title text-center mb-4 text-success">Product Information</h5>
                <table className="table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <th scope="row" className="bg-light">Product Name</th>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Price</th>
                      <td>${product.price}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-light">Description</th>
                      <td>{product.description}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <a href="/products" className="btn btn-primary btn-lg mt-3">Back to Products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
