import axios from "axios";
import { postTokenReissue } from "./auth";
import { setAccessToken, setTokenExpiration } from "@/utils/authWithStorage";

const https = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
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

https.interceptors.response.use((config) => {
  return config;
});

export { https };
