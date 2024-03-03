"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import Title from "@/components/common/Title";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ERROR_MESSAGE from "@/constants/ERROR_MESSAGE";
import ROUTES from "@/constants/ROUTES";

export default function TeamBuildingResultError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const handleBackHome = () => {
    router.push(ROUTES.MAIN);
  };
  return (
    <div className="mt-32 flex w-full flex-col items-center justify-center gap-14">
      <h2 className="text-2xl font-medium">
        진행 중인 팀빌딩이 존재하지 않습니다.
      </h2>
      <button
        onClick={handleBackHome}
        className="border-b-2 border-stroke-30 font-bold"
      >
        홈으로
      </button>
    </div>
  );
}
