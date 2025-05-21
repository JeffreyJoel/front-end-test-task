'use client';

import { useProducts } from "@/hooks/products/useProducts";
import Card from "@/components/core/itemCard";

export default function ProductGrid() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F5A600]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-semibold mb-2">Error Loading Products</h2>
          <p>Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          priceUsdc={product.priceUsdc}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
} 