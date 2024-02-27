import { LoginDto } from "./dtos/auth.dto";
import { https } from "./instance";
import API from "@/constants/API";

/**
 * 슬랙 리다이렉트 후 토큰 정보 요청
 */
export const postSlackLogin = async (
  code: string,
  redirect_uri: string,
): Promise<LoginDto> => {
  const { data } = await https({
    url: API.AUTH.SLACK_LOGIN,
    method: "POST",
    params: { code, redirect_uri },
  });
  return new LoginDto(data?.data);
};

/**
 * 토큰 재발급 요청
 */
export const postTokenReissue = async (): Promise<LoginDto> => {
  const { data } = await https({
    url: API.AUTH.TOKEN_REISSUE,
    method: "POST",
  });
  return new LoginDto(data?.data);
};
