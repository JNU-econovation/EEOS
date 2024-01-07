import ALERT from "@/constants/ALERT";
import ROUTES from "@/constants/ROUTES";
import { redirect, useRouter } from "next/navigation";

export const setAccessToken = (token: string) => {
  localStorage.removeItem("accessToken");
  localStorage.setItem("accessToken", token);
};

export const setTokenExpiration = (accessExpiredTime: number) => {
  localStorage.removeItem("tokenExpiration");
  const accessExpiredTimeDate = new Date().getTime() + accessExpiredTime;
  localStorage.setItem("tokenExpiration", accessExpiredTimeDate.toString());
};

export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const removeTokenExpiration = () => {
  localStorage.removeItem("tokenExpiration");
};

export const deleteTokenInfo = () => {
  alert(ALERT.AUTH.LOGIN_REQUIRED);
  removeAccessToken();
  removeTokenExpiration();
};
