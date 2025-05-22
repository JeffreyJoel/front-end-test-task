"use client";

import { useState } from "react";
import IconChevronDown from "../icons/iconChevronDown";
import IconFilter from "../icons/iconFilter";
import CheckBox from "../ui/check-box";
import IconSearch from "../icons/iconSearch";
import IconX from "../icons/iconX";
import { useFilter } from "@/contexts/filter-context";

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

  const { activeFilters, setActiveFilters } = useFilter();

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  
  const toggleFilter = (filter: string) => {
    setActiveFilters((prev: string[]) =>
      prev.includes(filter)
        ? prev.filter((f: string) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleShowResults = () => {
    onClose();
  };

  return (
    <>
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />
      )}
      
      <div
        className={`${
          showFilters 
            ? "fixed top-0 right-0 w-full h-full z-50 md:static md:block md:w-64" 
            : "hidden md:block md:w-64"
        } bg-background shrink-0 md:mt-8 flex flex-col`}
      >
        <div className="flex items-center justify-center md:justify-between p-6 md:p-0 md:mb-4 border-b border-[#302E2E] md:border-[#302E2E] md:pb-4">
          <div className="flex items-center gap-2">
            <IconFilter />
            <span className="text-xl md:text-base font-medium text-white">Filters</span>
          </div>
          <button
            className="absolute top-6 right-6 md:static md:top-auto md:right-auto h-6 w-6 flex items-center justify-center"
            onClick={onClose}
          >
            <IconX color="#9c9c9c" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-0">
          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("status")}
            >
              <span className="font-medium text-white text-lg md:text-base">Status</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.status ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.status && (
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    className={`rounded-xl text-base px-4 py-2 ${
                      activeFilters.includes("All")
                        ? "bg-white text-black"
                        : "bg-[#302E2E] text-[#9c9c9c]"
                    }`}
                    onClick={() => toggleFilter("All")}
                  >
                    All
                  </button>
                  <button
                    className={`rounded-xl text-base px-4 py-2 ${
                      activeFilters.includes("For Sale")
                        ? "bg-white text-black"
                        : "bg-[#302E2E] text-[#9c9c9c]"
                    }`}
                    onClick={() => toggleFilter("For Sale")}
                  >
                    For Sale
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("setName")}
            >
              <span className="font-medium text-white text-lg md:text-base">Set Name</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.setName ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.setName && (
              <div className="pt-2 space-y-2">
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 w-[32px] h-[32px] left-0 top-0 bottom-0 my-auto flex items-center pl-3 pointer-events-none">
                    <IconSearch color="#9c9c9c" />
                  </div>
                  <input
                    className="w-full pl-10 py-2 border bg-background text-white border-[#302E2E] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F5A600] focus:border-transparent placeholder:text-sm"
                    placeholder="Search Set Name"
                  />
                </div>
                <div className="space-y-4">
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

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("language")}
            >
              <span className="font-medium text-white text-lg md:text-base">Language</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.language ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.language && (
              <div className="pt-2 space-y-4">
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

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("year")}
            >
              <span className="font-medium text-white text-lg md:text-base">Year</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.year ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.year && (
              <div className="pt-2 space-y-4">
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

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("grader")}
            >
              <span className="font-medium text-white text-lg md:text-base">Grader</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.grader ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.grader && (
              <div className="pt-2 space-y-4">
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

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("grade")}
            >
              <span className="font-medium text-white text-lg md:text-base">Grade</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.grade ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.grade && (
              <div className="pt-2 space-y-4">
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

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("edition")}
            >
              <span className="font-medium text-white text-lg md:text-base">Edition</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.edition ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.edition && (
              <div className="pt-2">{/* Edition filter content */}</div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("cardNumber")}
            >
              <span className="font-medium text-white text-lg md:text-base">Card Number</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.cardNumber ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.cardNumber && (
              <div className="pt-2">
                <div className="pt-2 space-y-4">
                  <CheckBox
                    id="3"
                    label="#3"
                    checked={activeFilters.includes("#3")}
                    onChange={() => toggleFilter("#3")}
                  />
                  <CheckBox
                    id="14"
                    label="#14"
                    checked={activeFilters.includes("#14")}
                    onChange={() => toggleFilter("#14")}
                  />
                  <CheckBox
                    id="103"
                    label="#103"
                    checked={activeFilters.includes("#103")}
                    onChange={() => toggleFilter("#103")}
                  />
                  <CheckBox
                    id="150"
                    label="#150"
                    checked={activeFilters.includes("#150")}
                    onChange={() => toggleFilter("#150")}
                  />
                  <CheckBox
                    id="223"
                    label="#223"
                    checked={activeFilters.includes("#223")}
                    onChange={() => toggleFilter("#223")}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4 mb-20 md:mb-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("cardType")}
            >
              <span className="font-medium text-white text-lg md:text-base">Card Type</span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.cardType ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.cardType && (
              <div className="pt-2">{/* Card Type filter content */}</div>
            )}
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-[#302E2E] p-6 flex gap-8">
          <button
            onClick={clearAllFilters}
            className="cursor-pointer flex-1 py-3 text-[#8EC400] font-medium text-lg bg-transparent border border-[#302E2E] rounded-lg"
          >
            Clear All
          </button>
          <button
            onClick={handleShowResults}
            className="cursor-pointer flex-1 py-3 bg-[#F5A600] text-black font-medium text-lg rounded-lg"
          >
            Show results
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSidebar;