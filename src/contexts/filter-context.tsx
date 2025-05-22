"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOrder: "low-to-high" | "high-to-low";
  setSortOrder: (order: "low-to-high" | "high-to-low") => void;
  activeFilters: string[];
  setActiveFilters: (
    filters: string[] | ((prev: string[]) => string[])
  ) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"low-to-high" | "high-to-low">(
    "low-to-high"
  );
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
        activeFilters,
        setActiveFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
