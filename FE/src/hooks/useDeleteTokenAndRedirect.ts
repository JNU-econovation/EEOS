import ALERT from "@/constants/ALERT";
import API from "@/constants/API";
import {
  removeAccessToken,
  removeTokenExpiration,
} from "@/utils/authWithStorage";
import { useRouter } from "next/navigation";

export const useDeleteTokenAndRedirect = () => {
  return function deleteTokenAndRedirect() {
    const router = useRouter();
    alert(ALERT.AUTH.LOGIN_REQUIRED);
    removeAccessToken();
    removeTokenExpiration();
    router.push(API.AUTH.SLACK_LOGIN);
  };
};
