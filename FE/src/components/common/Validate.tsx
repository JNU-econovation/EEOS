"use client";

import ALERT from "@/constants/ALERT";
import { useDeleteTokenAndRedirect } from "@/hooks/useDeleteTokenAndRedirect";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Validate = () => {
  const router = useRouter();
  const deleteTokenAndRedirect = useDeleteTokenAndRedirect();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    console.log(accessToken, tokenExpiration);
    if (!accessToken || !tokenExpiration) {
      deleteTokenAndRedirect();
    }
  }, []);

  return <></>;
};
export default Validate;
