import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 lg:px-14 py-12 lg:py-20 border-t border-[#302E2E]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
        <div className="flex flex-col gap-6 lg:gap-10 items-center">
          <Image
            src="/logos/beezie.svg"
            alt="logo"
            width={200}
            height={87}
            className="w-48 sm:w-56 lg:w-[230px] h-auto"
            priority
          />

          <div className="flex items-center gap-6 lg:gap-10">
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/icons/IconX.png"
                alt="twitter"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/icons/IconInstagram.png"
                alt="instagram"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/icons/IconDiscord.png"
                alt="discord"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </span>
          </div>
        </div>

        <div className="order-3 lg:order-2">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 lg:gap-16 text-center sm:text-left">
            <div>
              <h3 className="text-gray-400 font-bold mb-4 text-sm sm:text-base">
                Colony
              </h3>
              <ul className="space-y-3 font-bold">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-bold mb-4 text-sm sm:text-base">
                Support
              </h3>
              <ul className="space-y-3 font-bold">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors text-sm sm:text-base"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center text-center order-2 lg:order-3">
          <h2 className="text-lg sm:text-xl lg:text-[26px] text-white font-semibold mb-2 lg:mb-4 max-w-xs lg:max-w-none">
            Sign up to join our beta access
          </h2>
          <button className="bg-beezie-yellow text-black px-6 sm:px-8 lg:px-11 py-2.5 sm:py-3 rounded-[10px] font-medium cursor-pointer hover:bg-[#E5A534] transition-colors text-sm sm:text-base w-full sm:w-auto max-w-xs">
            Join now
          </button>
        </div>
      </div>
    </footer>
  );
}
