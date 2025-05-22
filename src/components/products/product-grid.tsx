"use client";

import Card from "@/components/core/itemCard";
import Loader from "../shared/loader";
import { Product } from "@/types/product";

export default function ProductGrid({
  products,
  isLoading,
  error,
}: {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
}) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader />
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

  if (products.length === 0 && !isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-white text-center">
          <h2 className="text-xl font-semibold mb-2">
            No products found that match your filters
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
