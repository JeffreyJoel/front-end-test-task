"use client";

import { useProducts } from "@/hooks/products/useProducts";
import Card from "@/components/core/itemCard";
import Loader from "../shared/loader";
import { useFilter } from "@/contexts/filter-context";
import { useMemo } from "react";
import { useUsdcDecimals } from "@/hooks/web3/useUsdcDecimals";
import { ethers } from "ethers";

export default function ProductGrid() {
  const { data: products, isLoading, error } = useProducts();
  const { searchQuery, sortOrder, activeFilters } = useFilter();
  const { data: usdcDecimals, isLoading: isUsdcDecimalsLoading } =
    useUsdcDecimals();

  const processedProducts = useMemo(() => {
    if (!products || !usdcDecimals) return [];

    let processed = products.map((product) => ({
      ...product,
      priceUsdc: Number(
        ethers.formatUnits(product.priceUsdc, usdcDecimals)
      ).toString(),
    }));

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      processed = processed.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    if (activeFilters.length > 0) {
      processed = processed.filter((product) => {
        return activeFilters.some((filter) => {
          const filterLower = filter.toLowerCase();
          return product.name.toLowerCase().includes(filterLower);
        });
      });
    }

    processed.sort((a, b) => {
      const priceA = parseFloat(a.priceUsdc);
      const priceB = parseFloat(b.priceUsdc);
      return sortOrder === "low-to-high" ? priceA - priceB : priceB - priceA;
    });

    return processed;
  }, [products, searchQuery, sortOrder, activeFilters, usdcDecimals]);

  if (isLoading || isUsdcDecimalsLoading) {
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

  return (
    <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-8 lg: px-0">
      {processedProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
