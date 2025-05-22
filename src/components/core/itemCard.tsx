import { useUsdcDecimals } from "@/hooks/web3/useUsdcDecimals";
import { ethers } from "ethers";
import Image from "next/image";
import { Product } from "@/types/product";
import Loader from "../shared/loader";
import { useSignUp } from "@/hooks/auth/useSignUp";
import { useUserBalance } from "@/hooks/web3/useUserBalance";
import { useModal } from "@/contexts/modal-context";

export default function Card({ product }: { product: Product }) {
  const { showSignInModal } = useModal();
  const { data: usdcDecimals, isLoading: isUsdcDecimalsLoading } =
    useUsdcDecimals();
  const { isSignedUp } = useSignUp();
  const { data: balance } = useUserBalance();
  const processedUsdcBalance = ethers.formatUnits(
    balance?.toString() ?? "0",
    usdcDecimals
  );

  const handleBuy = () => {
    if (!isSignedUp) {
      showSignInModal();
    } else {
      console.log(`${product.id}:`, product);
    }
  };

  return (
    <div
      key={product.id}
      className="rounded-[20px] overflow-hidden hover:border-[#F5B544] transition-colors"
    >
      <div className="aspect-square overflow-hidden w-full max-w-none mx-auto rounded-[20px]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto min-h-full min-w-full rounded-[20px]"
          height={512}
          width={512}
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-white text-base font-light mb-4">{product.name}</h3>
        <div className="flex items-center justify-between">
          {isUsdcDecimalsLoading ? (
            <Loader height={4} width={4} />
          ) : (
            <p className="text-2xl font-montserrat font-bold text-white">
              {" "}
              ${product.priceUsdc}{" "}
            </p>
          )}
          <button
            onClick={handleBuy}
            disabled={
              isSignedUp &&
              Number(processedUsdcBalance) < Number(product.priceUsdc)
            }
            className="
           cursor-pointer bg-beezie-yellow hover:bg-beezie-yellow/80 font-semibold text-black lg:px-6 px-4 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
