
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/ProductService'; // Import createProduct function

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });
  const [error, setError] = useState('');  // To handle and display errors
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing when submitting the form

    try {
      // Log the product data to ensure it's being passed correctly
      console.log('Submitting product:', product);
      
      // Send POST request to backend to save the product using createProduct
      const response = await createProduct(product);

      // If the product was successfully created, navigate to the product list
      if (response.status === 201) {
        console.log('Product created successfully:', response.data);
        navigate('/products'); // Navigate to the products list page after successful creation
      } else {
        setError('Failed to create product. Please try again.');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      
      // Display error from the backend response if available
      if (error.response) {
        setError(`Error: ${error.response.data.message || 'Unknown error'}`);
      } else {
        setError('Failed to create product. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Add Product</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Display error if any */}
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={product.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Price */}
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                value={product.price}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={product.description}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Save Product Button */}
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Save Product
            </button>
          </form>

          {/* Back to Product List Button */}
          <button 
            type="button" 
            className="btn btn-secondary mt-3 w-100" 
            onClick={() => navigate('/products')}
          >
            Back to Product List
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
