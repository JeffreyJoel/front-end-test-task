import { USDC__factory } from "@/typechain-types";
import { addresses } from "@/constants/addresses";
import { provider } from "./provider";

export const usdcContract = USDC__factory.connect(addresses.usdc, provider);
