import axios from "axios";

// Simple axios instance
const api = axios.create({
  baseURL: "https://dummyjson.com",
});

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
