import { ReactNode } from "react";
import IconX from "../icons/iconX";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="bg-background rounded-2xl w-full max-w-md p-6 relative">
          <div className="flex items-center justify-between mb-6">
            {title && (
              <h2 className="text-xl font-medium text-white">{title}</h2>
            )}
            <button
              className="cursor-pointer h-6 w-6 flex items-center justify-center ml-auto"
              onClick={onClose}
            >
              <IconX color="#9c9c9c" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
