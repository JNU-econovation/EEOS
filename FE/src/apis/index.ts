import axios from "axios";

const https = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

https.interceptors.request.use((config) => {
  return config;
});

https.interceptors.response.use((config) => {
  return config;
});

export { https };
