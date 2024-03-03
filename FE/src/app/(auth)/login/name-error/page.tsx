"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import ErrorFallback from "@/components/common/ErrorFallback";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ERROR_MESSAGE from "@/constants/ERROR_MESSAGE";
import ROUTES from "@/constants/ROUTES";

const SlackNameErrorPage = () => {
  const router = useRouter();
  const error = {
    message: ERROR_MESSAGE[ERROR_CODE.AUTH.INVALID_NAME]?.message,
  };

  return (
    <div className="mt-36 flex flex-col items-center justify-center gap-6">
      <ErrorFallback error={error} retryButton={false} />
      {/** 로그인 페이지 이동 버튼 */}
      <Button
        color="error"
        type="button"
        onClick={() => router.replace(ROUTES.LOGIN)}
      >
        로그인 페이지로 이동
      </Button>
      <p className="mt-24 text-sm font-normal">
        <a
          href={process.env.NEXT_PUBLIC_NAME_MANUAL_URL}
          className="text-blue-500"
        >
          링크
        </a>
        에서 더 자세한 내용을 확인하실 수 있습니다.
      </p>
    </div>
  );
};
export default SlackNameErrorPage;
