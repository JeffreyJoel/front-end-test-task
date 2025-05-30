"use client";

import { useState, useEffect } from "react";
import IconFilter from "../icons/iconFilter";
import IconChevronDown from "../icons/iconChevronDown";
import IconSearch from "../icons/iconSearch";
import { useFilter } from "@/contexts/filter-context";
import { useDebounce } from "@/hooks/useDebounce";
import IconDownUp from "../icons/iconDownUp";
import IconArrowLeft from "../icons/iconArrowLeft";
interface FilterHeaderProps {
  onToggleFilters: () => void;
}

export default function FilterHeader({
  onToggleFilters,
}: FilterHeaderProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const { searchQuery, setSearchQuery, sortOrder, setSortOrder } = useFilter();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const debouncedSearchQuery = useDebounce(localSearchQuery, 300);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  return (
    <div>
      <div className="flex flex-row gap-4 mb-6">
        <button
          className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#302E2E]"
          onClick={onToggleFilters}
        >
          <IconFilter />
          <span className="hidden md:block text-sm font-medium">Filters</span>
        </button>

        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IconSearch color="#9c9c9c" className="w-4 h-4" />
          </div>
          <input
            className="w-full px-10 py-2  border bg-background text-white border-[#302E2E] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F5A600] focus:border-transparent placeholder:text-sm"
            placeholder="Search by name, set name, or anything"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
          <div className="bg-transparent absolute inset-y-0 right-0 border border-l-[#302E2E] border-transparent flex items-center px-3 py-0 pointer-events-none">
            <IconArrowLeft color="#fff" />
          </div>
        </div>

        <div className="relative">
          <button
            className="cursor-pointer flex items-center justify-between gap-2 px-4 py-2 rounded-lg border border-[#302E2E] w-full md:w-auto"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            <span className="hidden md:flex items-center gap-2">
              {sortOrder === "low-to-high"
                ? "Price low to high"
                : "Price high to low"}
              <IconChevronDown />
            </span>
            <span className="md:hidden">
              <IconDownUp />
            </span>
          </button>
          {showSortDropdown && (
            <div className="absolute z-10 min-w-[200px] right-0 mt-2 text-base px-4 py-2 bg-background border border-[#302E2E] rounded-md shadow-lg overflow-y-auto">
              <div
                className="px-4 py-2 hover:bg-zinc-800 cursor-pointer"
                onClick={() => {
                  setSortOrder("low-to-high");
                  setShowSortDropdown(false);
                }}
              >
                Price low to high
              </div>
              <div
                className="px-4 py-2 hover:bg-zinc-800  cursor-pointer"
                onClick={() => {
                  setSortOrder("high-to-low");
                  setShowSortDropdown(false);
                }}
              >
                Price high to low
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
