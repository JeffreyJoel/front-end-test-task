import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const SIGN_UP_KEY = "signUpStatus";

export function useSignUp() {
  const queryClient = useQueryClient();

  const { data: isSignedUp } = useQuery({
    queryKey: [SIGN_UP_KEY],
    queryFn: () => {
      const status = localStorage.getItem(SIGN_UP_KEY);
      return status === "true";
    },
    initialData: false,
  });

  const { mutate: signUp } = useMutation({
    mutationFn: async () => {
      localStorage.setItem(SIGN_UP_KEY, "true");
      return Promise.resolve(true);
    },
    onSuccess: () => {
      queryClient.setQueryData([SIGN_UP_KEY], true);
    },
  });

  return {
    isSignedUp,
    signUp,
  };
} 