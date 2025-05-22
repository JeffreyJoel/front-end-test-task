import { useQuery } from "@tanstack/react-query";
import { usdcContract } from "@/services/web3/contracts";
import { addresses } from "@/constants/addresses";

async function fetchUserBalance(): Promise<bigint> {
  const balance = await usdcContract.balanceOf(addresses.user);
  return balance;
}

export function useUserBalance() {
  return useQuery({
    queryKey: ["userBalance"],
    queryFn: fetchUserBalance,
  });
}
