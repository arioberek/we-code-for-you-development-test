import { Product } from "@/types";

const API_URL = import.meta.env.VITE_API_URL as string;

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
