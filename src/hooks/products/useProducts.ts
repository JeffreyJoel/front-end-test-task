import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  name: string;
  priceUsdc: string;
  imageUrl: string;
}

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("/api/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
} 