import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/ui/search-bar";
export default function Navbar() {
  return (
    <div className="w-full px-12 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/images/logos/beezie-logo.png"
              alt="logo"
              width={94}
              height={40}
            />
          </Link>
          <SearchBar />
        </div>
        <div className="flex items-center gap-8 font-bold text-base text-white">
          <Link href="/">Marketplace</Link>

          <Link href="/">Drops</Link>

          <Link href="/">More</Link>
          <button className="bg-beezie-yellow text-black px-11 py-3 rounded-[10px] font-medium cursor-pointer hover:bg-[#E5A534] transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
