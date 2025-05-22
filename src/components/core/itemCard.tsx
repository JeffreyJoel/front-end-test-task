import { useUsdcDecimals } from "@/hooks/web3/useUsdcDecimals";
import { ethers } from "ethers";
import Image from "next/image";

interface CardProps {
  id: number;
  name: string;
  priceUsdc: string;
  imageUrl: string;
}

export default function Card({ id, name, priceUsdc, imageUrl }: CardProps) {
 
  const usdcDecimals = useUsdcDecimals();
  const price = ethers.formatUnits(priceUsdc, usdcDecimals.data);
  return (
    <div
      key={id}
      className="rounded-[20px] overflow-hidden hover:border-[#F5B544] transition-colors"
    >
      <Image
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-[20px]"
        height={512}
        width={512}
      />
      <div className="p-4">
        <h3 className="text-white text-base font-light mb-4">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-white">${price}</p>
          <button
            onClick={() => {
              console.log();
            }}
            className="
           cursor-pointer bg-beezie-yellow hover:bg-beezie-yellow/80 font-semibold text-black lg:px-6 px-4 py-2 rounded-xl"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
