"use client";

import { FilterProvider } from "@/contexts/filter-context";
import { ModalProvider } from "@/contexts/modal-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </FilterProvider>
    </QueryClientProvider>
  );
}
