"use client";

import { useState } from "react";
import IconChevronDown from "../icons/iconChevronDown";
import IconFilter from "../icons/iconFilter";
import CheckBox from "../ui/check-box";
import IconSearch from "../icons/iconSearch";
import IconX from "../icons/iconX";
import { useFilter } from "@/contexts/filter-context";
import {
  setNames,
  cardNumbers,
  languages,
  years,
  graders,
  grades,
} from "@/constants/filter-items";

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

  const [searchQueries, setSearchQueries] = useState({
    setName: "",
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

  const handleSearchChange = (
    section: keyof typeof searchQueries,
    value: string
  ) => {
    setSearchQueries((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const filteredSetNames = setNames.filter((set) =>
    set.label.toLowerCase().includes(searchQueries.setName.toLowerCase())
  );

  return (
    <>
      <div
        className={`${
          showFilters
            ? "fixed top-0 right-0 w-full h-full md:z-10 z-50 md:relative md:h-auto"
            : "hidden"
        } bg-background shrink-0 md:w-64 flex flex-col`}
      >
        <div className="flex items-center justify-center md:justify-between p-6 md:p-0 md:mb-4 border-b border-[#302E2E] md:border-[#302E2E] md:pb-4">
          <div className="flex items-center gap-2">
            <IconFilter />
            <span className="text-xl md:text-base font-medium text-white">
              Filters
            </span>
          </div>
          <button
            className="cursor-pointer absolute top-6 right-6 md:static md:top-auto md:right-auto h-6 w-6 flex items-center justify-center"
            onClick={() => {
              onClose();
            }}
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
              <span className="font-medium text-white text-lg md:text-base">
                Status
              </span>
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
              <span className="font-medium text-white text-lg md:text-base">
                Set Name
              </span>
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
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 w-[32px] h-[32px] left-0 top-0 bottom-0 my-auto flex items-center pl-3 pointer-events-none">
                    <IconSearch color="#9c9c9c" />
                  </div>
                  <input
                    className="w-11/12 mx-auto pl-12 py-2 border bg-background text-white border-[#302E2E] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F5A600] focus:border-transparent placeholder:text-sm"
                    placeholder="Search Set Name"
                    value={searchQueries.setName}
                    onChange={(e) =>
                      handleSearchChange("setName", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-4">
                  {filteredSetNames.map((set) => (
                    <CheckBox
                      key={set.id}
                      id={set.id}
                      label={set.label}
                      checked={activeFilters.includes(set.label)}
                      onChange={() => toggleFilter(set.label)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("language")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Language
              </span>
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
                {languages.map((lang) => (
                  <CheckBox
                    key={lang.id}
                    id={lang.id}
                    label={lang.label}
                    checked={activeFilters.includes(lang.label)}
                    onChange={() => toggleFilter(lang.label)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("year")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Year
              </span>
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
                {years.map((year) => (
                  <CheckBox
                    key={year.id}
                    id={year.id}
                    label={year.label}
                    checked={activeFilters.includes(year.label)}
                    onChange={() => toggleFilter(year.label)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("grader")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Grader
              </span>
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
                {graders.map((grader) => (
                  <CheckBox
                    key={grader.id}
                    id={grader.id}
                    label={grader.label}
                    checked={activeFilters.includes(grader.label)}
                    onChange={() => toggleFilter(grader.label)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("grade")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Grade
              </span>
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
                {grades.map((grade) => (
                  <CheckBox
                    key={grade.id}
                    id={grade.id}
                    label={grade.label}
                    checked={activeFilters.includes(grade.label)}
                    onChange={() => toggleFilter(grade.label)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("cardNumber")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Card Number
              </span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.cardNumber ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.cardNumber && (
              <div className="pt-2 space-y-4">
                {cardNumbers.map((card) => (
                  <CheckBox
                    key={card.id}
                    id={card.id}
                    label={card.label}
                    checked={activeFilters.includes(card.label)}
                    onChange={() => toggleFilter(card.label)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("edition")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Edition
              </span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.edition ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.edition && <div className="pt-2"></div>}
          </div>

          <div className="border-b border-[#302E2E] py-6 md:py-4 mb-20 md:mb-4">
            <button
              className="flex w-full items-center justify-between mb-4"
              onClick={() => toggleSection("cardType")}
            >
              <span className="font-medium text-white text-lg md:text-base">
                Card Type
              </span>
              <span
                className={`flex items-center justify-center h-6 w-6 transition-transform ${
                  openSections.cardType ? "rotate-180" : ""
                }`}
              >
                <IconChevronDown color="#9c9c9c" />
              </span>
            </button>
            {openSections.cardType && <div className="pt-2"></div>}
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
