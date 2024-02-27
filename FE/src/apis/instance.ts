import axios from "axios";
import { toast } from "react-toastify";
import { postTokenReissue } from "./auth";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ERROR_MESSAGE from "@/constants/ERROR_MESSAGE";
import {
  deleteTokenInfo,
  setAccessToken,
  setTokenExpiration,
} from "@/utils/authWithStorage";

const https = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

https.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken")?.replace(/"/g, "");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (accessToken && tokenExpiration) {
      const currentTime = new Date().getTime();
      const timeToExpiration = Number(tokenExpiration) - currentTime;
      const TOKEN_REISSUE_THRESHOLD = Number(
        process.env.NEXT_PUBLIC_TOKEN_REISSUE_THRESHOLD,
      );

      if (timeToExpiration < TOKEN_REISSUE_THRESHOLD) {
        const { accessToken, accessExpiredTime } = await postTokenReissue();
        setAccessToken(accessToken);
        setTokenExpiration(accessExpiredTime);
      }

      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

https.interceptors.response.use(
  async (config) => {
    return config;
  },
  async (error) => {
    const { config: originalRequest, response } = error;
    const errorCode = response?.data?.code;
    const errorMessage =
      ERROR_MESSAGE[errorCode]?.message || ERROR_MESSAGE.UNKNOWN.message;

    if (errorCode === ERROR_CODE.AUTH.EXPIRED_ACCESS_TOKEN) {
      const { accessToken, accessExpiredTime } = await postTokenReissue();

      setAccessToken(accessToken);
      setTokenExpiration(accessExpiredTime);
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

      return await axios(originalRequest);
    }

    if (errorCode === ERROR_CODE.AUTH.INVALID_NAME) {
      toast.error(errorMessage, {
        toastId: errorCode,
      });
      return Promise.reject(error);
    }

    if (Object.values(ERROR_CODE.AUTH).includes(errorCode)) {
      toast.error(errorMessage, {
        toastId: errorCode,
      });
      deleteTokenInfo();
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
    error.message = errorMessage;
    return Promise.reject(error);
  },
);

export { https };
