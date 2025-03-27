import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./layout/Home";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/delete/:id" element={<DeleteProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />

        {/* Static pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
