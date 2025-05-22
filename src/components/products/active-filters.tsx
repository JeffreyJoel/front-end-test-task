import { useFilter } from "@/contexts/filter-context";
import IconX from "../icons/iconX";

interface ActiveFiltersProps {
  resultCount: number;
}

export default function ActiveFilters({ resultCount }: ActiveFiltersProps) {
  const { activeFilters, setActiveFilters } = useFilter();

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const handleClearAll = () => {
    setActiveFilters([]);
  };

  const displayableFilters = activeFilters.filter(
    (filter) => filter !== "All" && filter !== "For Sale"
  );

  if (displayableFilters.length === 0) {
    return <div className="ext-base font-light text-[#9c9c9c] mb-4">{resultCount} Results</div>;
  }

  return (
    <div className="mb-4">
     
      <div className="flex flex-wrap gap-2 items-center">
        {displayableFilters.map((filter) => (
          <button
            key={filter}
            className="cursor-pointer bg-background border border-[#302E2E] text-white text-base font-light rounded-lg px-3 py-2 flex items-center gap-2"
            onClick={() => handleRemoveFilter(filter)}
          >
            {filter}
            <IconX color="#ffffff" className="w-4 h-4" />
          </button>
        ))}
        <button
          onClick={handleClearAll}
          className="text-[#8EC400] text-sm hover:underline"
        >
          Clear All
        </button>
      </div>
      <div className="text-base font-light text-[#9c9c9c] mt-4 mb-0">{resultCount} Results</div>
    </div>
  );
} 