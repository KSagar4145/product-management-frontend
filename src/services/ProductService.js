import axios from "axios";

//const API_URL = 'http://localhost:8081/api/products'; // Your backend URL
const API_URL = "http://ec2-13-203-205-16.ap-south-1.compute.amazonaws.com:8081/api/products";


export const getAllProducts = () => {
  return axios.get(API_URL);
};

export const getProductById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createProduct = (product) => {
  return axios.post(API_URL, product);
};

export const updateProduct = (id, product) => {
  return axios.put(`${API_URL}/${id}`, product);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};