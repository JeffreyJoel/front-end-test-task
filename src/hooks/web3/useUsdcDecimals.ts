import { useQuery } from "@tanstack/react-query";
import { usdcContract } from "@/services/web3/contracts";

async function fetchUsdcDecimals(): Promise<bigint> {
  const decimals = await usdcContract.decimals();
  return decimals;
}

export function useUsdcDecimals() {
  return useQuery({
    queryKey: ["usdcDecimals"],
    queryFn: fetchUsdcDecimals,
  });
}
