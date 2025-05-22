import { useQuery } from "@tanstack/react-query";
import { usdcContract } from "@/services/web3/contracts";
import { addresses } from "@/constants/addresses";
import { ethers } from "ethers";

async function fetchUserBalance(): Promise<string> {
  const balance = await usdcContract.balanceOf(addresses.user);
  return ethers.formatUnits(balance, 6);
}

export function useUserBalance() {
  return useQuery({
    queryKey: ["userBalance"],
    queryFn: fetchUserBalance,
    // refetchInterval: 30000,
  });
} 