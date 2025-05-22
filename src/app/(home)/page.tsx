"use client";

import ProductGrid from "@/components/products/product-grid";
import FilterHeader from "@/components/products/filter-header";
import { useState } from "react";
import FilterSidebar from "@/components/products/filter-sidebar";

export default function Home() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="mx-auto 2xl:max-w-7xl xl:px-14 lg:px-12 px-4 py-8">
      <h1 className="text-white text-4xl mb-6 font-extrabold font-montserrat">
        Pokemon
      </h1>
      <FilterHeader
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />
      <div className="flex relative">
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
