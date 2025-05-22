"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/ui/search-bar";
import { useUserBalance } from "@/hooks/web3/useUserBalance";
import { useSignUp } from "@/hooks/auth/useSignUp";
import Loader from "./loader";
import { ethers } from "ethers";
import { useUsdcDecimals } from "@/hooks/web3/useUsdcDecimals";
import SignInModal from "../auth/sign-in-modal";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: balance, isLoading } = useUserBalance();
  const { data: usdcDecimals } = useUsdcDecimals();
  const { isSignedUp, signUp } = useSignUp();

  const processedUsdcBalance = ethers.formatUnits(
    balance?.toString() ?? "0",
    usdcDecimals
  );

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-60 bg-background px-14 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="/logos/beezie.svg"
                alt="logo"
                width={94}
                height={40}
                priority
              />
            </Link>
            <div className="hidden lg:block">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center gap-8 font-bold text-base text-white">
            <div className="hidden md:flex items-center gap-8">
              <Link href="/">Marketplace</Link>
              <Link href="/">Drops</Link>
              <Link href="/">More</Link>
            </div>
            {isSignedUp ? (
              <div className="flex items-center gap-4">
                <span className="text-beezie-yellow">
                  Balance:{" "}
                  {isLoading ? (
                    <Loader height={4} width={4} />
                  ) : (
                    `$${processedUsdcBalance}`
                  )}
                </span>
              </div>
            ) : (
              <button
                onClick={() => signUp()}
                className="bg-beezie-yellow text-black px-11 py-3 rounded-[10px] font-medium cursor-pointer hover:bg-[#E5A534] transition-colors"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
