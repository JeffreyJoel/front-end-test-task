import IconSearch from "../icons/iconSearch";

export default function SearchBar() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="search"
          className="w-full min-w-[300px] py-2 pl-10 pr-4 bg-background text-white border border-[#302E2E] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F5A600] focus:border-transparent placeholder-gray-100"
          placeholder="Search collectibles"
          aria-label="Search collectibles"
        />
      </div>
    </div>
  );
}
