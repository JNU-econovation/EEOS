"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ERROR } from "@/src/constants/ERROR";
import ROUTES from "@/src/constants/ROUTES";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-20">
      <h1 className=" text-5xl font-semibold">{ERROR.TITLE}</h1>
      <div className="mb-10 flex flex-col items-center gap-2">
        {ERROR.DESCRIPTION.map((description) => (
          <span className="text-lg font-light">{description}</span>
        ))}
      </div>
      <Image src={ERROR.IMAGE_URL} alt="error" width={270} height={210.7} />
      <button
        onClick={() => router.push(ROUTES.HOME)}
        className="border-b-[3px] border-stroke-base text-lg font-extrabold"
      >
        {ERROR.BUTTON_TEXT}
      </button>
    </div>
  );
};
export default ErrorPage;
