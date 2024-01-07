"use client";

import { useDeleteTokenAndRedirect } from "@/hooks/useDeleteTokenAndRedirect";
import { useEffect } from "react";

const Validate = () => {
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
