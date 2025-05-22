"use client";

import ProductGrid from "@/components/products/product-grid";
import FilterHeader from "@/components/products/filter-header";
import { useState, useEffect } from "react";
import FilterSidebar from "@/components/products/filter-sidebar";
import ActiveFilters from "@/components/products/active-filters";
import { useProducts } from "@/hooks/products/useProducts";
import { useFilter } from "@/contexts/filter-context";
import { useUsdcDecimals } from "@/hooks/web3/useUsdcDecimals";
import { useMemo } from "react";
import { ethers } from "ethers";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  const [showFilters, setShowFilters] = useState(width ? width >= 768 : false);
  
  // Update showFilters when window size changes
  useEffect(() => {
    if (width) {
      setShowFilters(width >= 768);
    }
  }, [width]);

  const { data: products, isLoading, error } = useProducts();
  const { searchQuery, sortOrder, activeFilters } = useFilter();
  const { data: usdcDecimals } = useUsdcDecimals();

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

    // This filters by active filters and excludes "All" and "For Sale". I assume all items are for sale.
    if (activeFilters.length > 0) {
      const actualFilters = activeFilters.filter(
        (filter) => filter !== "All" && filter !== "For Sale"
      );

      if (actualFilters.length > 0) {
        processed = processed.filter((product) => {
          return actualFilters.some((filter) => {
            const filterLower = filter.toLowerCase();
            return product.name.toLowerCase().includes(filterLower);
          });
        });
      }
    }

    processed.sort((a, b) => {
      const priceA = parseFloat(a.priceUsdc);
      const priceB = parseFloat(b.priceUsdc);
      return sortOrder === "low-to-high" ? priceA - priceB : priceB - priceA;
    });

    return processed;
  }, [products, searchQuery, sortOrder, activeFilters, usdcDecimals]);

  return (
    <>
      <div className="mx-auto 2xl:max-w-7xl xl:px-14 lg:px-8 px-4 py-8">
        <h1 className="text-white text-4xl mb-6 font-bold font-montserrat">
          Pokemon
        </h1>
        <FilterHeader
          onToggleFilters={() => setShowFilters(!showFilters)}
        />
        <div className="flex relative">
          <FilterSidebar
            showFilters={showFilters}
            onClose={() => setShowFilters(false)}
          />
          <div className="w-full mx-auto max-w-5xl flex-1 sm:px-6 md:px-8">
            <ActiveFilters resultCount={processedProducts.length} />
            <ProductGrid
              products={processedProducts}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
}
