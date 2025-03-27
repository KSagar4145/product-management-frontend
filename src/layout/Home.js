import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Product Management App</h1>

      {/* Success Button */}
      <button 
        type="button" 
        className="btn btn-success" 
        onClick={() => window.location.href = '/products'}
      >
        Show All Products
      </button>
    </div>
  );
}
