import { useSignUp } from "@/hooks/auth/useSignUp";
import Modal from "../ui/modal";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const { signUp } = useSignUp();

  const handleSignIn = () => {
    signUp();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign In Required">
      <div className="text-center">
        <p className="text-white mb-6">
          Please sign in to view your wallet balance and make purchases.
        </p>
        <button
          onClick={handleSignIn}
          className="bg-beezie-yellow text-black px-8 py-3 rounded-[10px] font-medium cursor-pointer hover:bg-[#E5A534] transition-colors w-full"
        >
          Sign In
        </button>
      </div>
    </Modal>
  );
} 