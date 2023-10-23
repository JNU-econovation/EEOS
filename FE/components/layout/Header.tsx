"use client";

import { PropsWithChildren } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export type headerLeft = "user" | "left";
export type headerRight = "btn" | "none";

interface HeaderProps {
  left: headerLeft;
  right: headerRight;
}

const Header = ({ left, right }: PropsWithChildren<HeaderProps>) => {
  const router = useRouter();
  const handleOnClickLeft = () => {
    if (left === "user") {
      console.log("구현 중...");
    }
    if (left === "left") {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 z-50 flex h-[5rem] w-full items-center justify-between rounded-b-md bg-background px-[7.5rem] py-2 shadow-sm">
      <div className="flex w-[10rem] justify-center">
        <Image
          src={`/icons/${left}.svg`}
          alt={left}
          width={26}
          height={26}
          onClick={handleOnClickLeft}
        />
      </div>
      <Image
        src="/text_logo.svg"
        alt="logo"
        width={64}
        height={48}
        onClick={() => router.push("/")}
      />
      <div className="w-[10rem]">
        {right === "btn" && (
          <Button
            color="primary"
            sizeType="base"
            leftIcon={true}
            children="행사 추가"
            onClick={() => router.push("/create")}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
