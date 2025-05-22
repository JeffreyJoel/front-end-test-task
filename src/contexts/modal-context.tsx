"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import SignInModal from "@/components/auth/sign-in-modal";

interface ModalContextType {
  showSignInModal: () => void;
  hideSignInModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const showSignInModal = () => setIsSignInModalOpen(true);
  const hideSignInModal = () => setIsSignInModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        showSignInModal,
        hideSignInModal,
      }}
    >
      {children}
      <SignInModal isOpen={isSignInModalOpen} onClose={hideSignInModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
