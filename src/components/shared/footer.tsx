import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-12 py-20 border-t border-[#302E2E]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-10 items-center">
          <Image
            src="/images/logos/beezie-logo.png"
            alt="logo"
            width={230}
            height={100}
            priority
          />

          <div className="flex items-center gap-10">
            <span>
              <Image
                src="/icons/IconX.png"
                alt="twitter"
                width={24}
                height={24}
              />
            </span>
            <span>
              <Image
                src="/icons/IconInstagram.png"
                alt="instagram"
                width={24}
                height={24}
              />
            </span>
            <span>
              <Image
                src="/icons/IconDiscord.png"
                alt="discord"
                width={24}
                height={24}
              />
            </span>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-400 font-bold mb-4">Colony</h3>
              <ul className=" space-y-3 font-bold">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-bold mb-4">Support</h3>
              <ul className=" space-y-3 font-bold">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-beezie-yellow transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4 items-center">
          <h2 className="text-[26px] text-white font-semibold mb-4">
            Sign up to join our beta access
          </h2>
          <button className="bg-beezie-yellow text-black px-11 py-3 rounded-[10px] font-medium cursor-pointer hover:bg-[#E5A534] transition-colors">
            Join now
          </button>
        </div>
      </div>
    </footer>
  );
}
