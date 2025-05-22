"use client";

import { useState } from "react";
import IconFilter from "../icons/iconFilter";
import IconChevronDown from "../icons/iconChevronDown";
import IconSearch from "../icons/iconSearch";

interface FilterHeaderProps {
  showFilters: boolean;
  onToggleFilters: () => void;
}

export default function FilterHeader({ showFilters, onToggleFilters }: FilterHeaderProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <button
          className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#302E2E]"
          onClick={onToggleFilters}
        >
          <IconFilter />
          <span className="hidden md:block text-sm font-medium">Filters</span>
        </button>

        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IconSearch color="#9c9c9c" />
          </div>
          <input
            className="w-full pl-10 py-2  border border-[#302E2E] rounded-lg text-white placeholder:text-[#9c9c9c] placeholder:text-sm"
            placeholder="Search by name, set name, or anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="relative">
          <button
            className="cursor-pointer flex items-center justify-between gap-2 px-4 py-2 rounded-lg border border-[#302E2E] w-full md:w-auto"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            {sortOrder === "low-to-high"
              ? "Price low to high"
              : "Price high to low"}
            <IconChevronDown />
          </button>
          {showSortDropdown && (
            <div className="absolute right-0 mt-1 w-full bg-background border border-[#302E2E] rounded-lg shadow-lg z-10">
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
