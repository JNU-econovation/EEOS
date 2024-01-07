"use client";

import ROUTES from "@/constants/ROUTES";
import { deleteTokenInfo } from "@/utils/authWithStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Validate = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    console.log(accessToken, tokenExpiration);
    if (!accessToken || !tokenExpiration) {
      deleteTokenInfo();
      router.push(ROUTES.LOGIN);
    }
  }, []);

  return <></>;
};
export default Validate;
