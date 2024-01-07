import API from "@/constants/API";
import { https } from "./instance";
import { LoginDto } from "./dtos/auth.dto";

/**
 * 슬랙 리다이렉트 후 토큰 정보 요청
 */
export const postSlackLogin = async (code: string): Promise<LoginDto> => {
  const { data } = await https({
    url: API.AUTH.SLACK_LOGIN,
    method: "POST",
    params: { code },
  });
  return new LoginDto(data.data);
};

/**
 * 토큰 재발급 요청
 */
export const postTokenReissue = async (): Promise<LoginDto> => {
  const { data } = await https({
    url: API.AUTH.TOKEN_REISSUE,
    method: "POST",
  });
  return new LoginDto(data.data);
};
