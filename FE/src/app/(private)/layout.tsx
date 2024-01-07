import ROUTES from "@/constants/ROUTES";
import {
  removeAccessToken,
  removeTokenExpiration,
} from "@/utils/authWithStorage";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

const PrivateLayout = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();

  const deleteTokenAndRedirect = () => {
    removeAccessToken();
    removeTokenExpiration();
    router.push(ROUTES.LOGIN);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    if (!accessToken || !tokenExpiration) {
      deleteTokenAndRedirect();
    }
  }, []);

  return <>{children}</>;
};
export default PrivateLayout;
