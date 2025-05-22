"use client";

import ProductGrid from "@/components/products/product-grid";
import FilterHeader from "@/components/products/filter-header";
import { useState } from "react";
import FilterSidebar from "@/components/products/filter-sidebar";

export default function Home() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="mx-auto lg:px-14 px-4 py-8">
      <h1 className="text-white text-4xl mb-6 font-bold font-montserrat">
        Pokemon
      </h1>
      <FilterHeader
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />
      <div className="flex">
        <FilterSidebar
          showFilters={showFilters}
          onClose={() => setShowFilters(false)}
        />
        <div className="w-full flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
