"use client";

import { useState } from "react";
import IconChevronDown from "../icons/iconChevronDown";
import IconFilter from "../icons/iconFilter";
import CheckBox from "../ui/check-box";
import IconSearch from "../icons/iconSearch";
import IconX from "../icons/iconX";

interface FilterSidebarProps {
  showFilters: boolean;
  onClose: () => void;
}

function FilterSidebar({ showFilters, onClose }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState({
    status: false,
    setName: false,
    language: false,
    year: false,
    grader: false,
    grade: false,
    edition: false,
    cardNumber: false,
    cardType: false,
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className={`${showFilters ? "block" : "hidden"} w-full md:w-64 shrink-0`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <IconFilter/>
          <span>Filters</span>
        </div>
        <button
          className="md:hidden h-6 w-6 flex items-center justify-center"
          onClick={onClose}
        >
          <IconX/>
        </button>
      </div>

      {/* Status Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("status")}>
          <span className="font-medium">Status</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.status ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.status && (
          <div className="pt-2 space-y-2">
            <div className="flex items-center gap-2">
              <button
                className={`rounded-full text-xs px-3 py-1 ${activeFilters.includes("All") ? "bg-green-500 text-white" : "border border-zinc-600 bg-zinc-800"}`}
                onClick={() => toggleFilter("All")}
              >
                All
              </button>
              <button
                className={`rounded-full text-xs px-3 py-1 ${activeFilters.includes("For Sale") ? "bg-green-500 text-white" : "border border-zinc-600 bg-zinc-800"}`}
                onClick={() => toggleFilter("For Sale")}
              >
                For Sale
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Set Name Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("setName")}>
          <span className="font-medium">Set Name</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.setName ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.setName && (
          <div className="pt-2 space-y-2">
            <div className="relative mb-2">
              <IconSearch color="#9c9c9c" />
              <input
                className="w-full pl-8 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-white text-sm"
                placeholder="Search Set Name"
              />
            </div>
            <div className="space-y-2">
              <CheckBox
                id="pokemon151"
                label="Pokemon 151"
                checked={activeFilters.includes("Pokemon 151")}
                onChange={() => toggleFilter("Pokemon 151")}
              />
              <CheckBox
                id="legendary"
                label="Legendary Collection"
                checked={activeFilters.includes("Legendary Collection")}
                onChange={() => toggleFilter("Legendary Collection")}
              />
              <CheckBox
                id="scarlet"
                label="Scarlet & Violet"
                checked={activeFilters.includes("Scarlet & Violet")}
                onChange={() => toggleFilter("Scarlet & Violet")}
              />
              <CheckBox
                id="shinystar"
                label="Shiny Star V"
                checked={activeFilters.includes("Shiny Star V")}
                onChange={() => toggleFilter("Shiny Star V")}
              />
              <CheckBox
                id="teamrocket"
                label="Team Rocket Returns"
                checked={activeFilters.includes("Team Rocket Returns")}
                onChange={() => toggleFilter("Team Rocket Returns")}
              />
              <CheckBox
                id="tagteam"
                label="Tag Team GX: Tag All Stars"
                checked={activeFilters.includes("Tag Team GX: Tag All Stars")}
                onChange={() => toggleFilter("Tag Team GX: Tag All Stars")}
              />
              <CheckBox
                id="vmax"
                label="VMAX Climax"
                checked={activeFilters.includes("VMAX Climax")}
                onChange={() => toggleFilter("VMAX Climax")}
              />
            </div>
          </div>
        )}
      </div>

      {/* Language Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("language")}>
          <span className="font-medium">Language</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.language ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.language && (
          <div className="pt-2 space-y-2">
            <CheckBox
              id="japanese"
              label="Japanese"
              checked={activeFilters.includes("Japanese")}
              onChange={() => toggleFilter("Japanese")}
            />
            <CheckBox
              id="english"
              label="English"
              checked={activeFilters.includes("English")}
              onChange={() => toggleFilter("English")}
            />
          </div>
        )}
      </div>

      {/* Year Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("year")}>
          <span className="font-medium">Year</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.language ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.year && (
          <div className="pt-2">
            <CheckBox
              id="2023"
              label="2023"
              checked={activeFilters.includes("2023")}
              onChange={() => toggleFilter("2023")}
            />
            <CheckBox
              id="2020"
              label="2020"
              checked={activeFilters.includes("2020")}
              onChange={() => toggleFilter("2020")}
            />
          </div>
        )}
      </div>

      {/* Grader Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("grader")}>
          <span className="font-medium">Grader</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.grader ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.grader && (
          <div className="pt-2">
            <CheckBox
              id="psa"
              label="PSA"
              checked={activeFilters.includes("PSA")}
              onChange={() => toggleFilter("PSA")}
            />
            <CheckBox
              id="cgc"
              label="CGC"
              checked={activeFilters.includes("CGC")}
              onChange={() => toggleFilter("CGC")}
            />
            <CheckBox
              id="ags"
              label="AGS"
              checked={activeFilters.includes("AGS")}
              onChange={() => toggleFilter("AGS")}
            />
          </div>
        )}
      </div>

      {/* Grade Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("grade")}>
          <span className="font-medium">Grade</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.grade ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.grade && (
          <div className="pt-2">
            <CheckBox
              id="grade10"
              label="10"
              checked={activeFilters.includes("10")}
              onChange={() => toggleFilter("10")}
            />
            <CheckBox
              id="grade95"
              label="9.5"
              checked={activeFilters.includes("9.5")}
              onChange={() => toggleFilter("9.5")}
            />
          </div>
        )}
      </div>

      {/* Edition Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("edition")}>
          <span className="font-medium">Edition</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.edition ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.edition && <div className="pt-2">{/* Edition filter content */}</div>}
      </div>

      {/* Card Number Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("cardNumber")}>
          <span className="font-medium">Card Number</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.cardNumber ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.cardNumber && <div className="pt-2">{/* Card Number filter content */}</div>}
      </div>

      {/* Card Type Filter */}
      <div className="mb-4 border-b border-zinc-800 pb-4">
        <button className="flex w-full items-center justify-between" onClick={() => toggleSection("cardType")}>
          <span className="font-medium">Card Type</span>
          <span className={`flex items-center justify-center h-4 w-4 transition-transform ${openSections.cardType ? "rotate-180" : ""}`}>
            <IconChevronDown />
          </span>
        </button>
        {openSections.cardType && <div className="pt-2">{/* Card Type filter content */}</div>}
      </div>
    </div>
  );
}

export default FilterSidebar;
