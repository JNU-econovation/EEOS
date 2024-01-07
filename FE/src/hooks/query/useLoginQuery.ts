import { postSlackLogin } from "@/apis/auth";
import ROUTES from "@/constants/ROUTES";
import { setAccessToken, setTokenExpiration } from "@/utils/authWithStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSlackLoginMutation = () => {
  const router = useRouter();
  return useMutation(
    ["slackLogin"],
    async (code: string) => {
      return await postSlackLogin(code);
    },
    {
      onSuccess: (data) => {
        const { accessToken, accessExpiredTime } = data;
        setAccessToken(accessToken);
        setTokenExpiration(accessExpiredTime);

        router.replace(ROUTES.MAIN);
      },
      onError: (error) => {},
    },
  );
};
