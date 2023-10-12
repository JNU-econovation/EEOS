"use client";

import { PropsWithChildren, use } from "react";
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

  return (
    <header className="flex justify-between items-center w-full h-[5rem] px-[7.5rem] py-2 rounded-b-md shadow-sm sticky top-0 bg-background">
      <div className="flex justify-center w-[10rem]">
        <Image
          src={`/icons/${left}.svg`}
          alt="user icon"
          width={26}
          height={26}
          onClick={() => router.back()}
        />
      </div>
      {/* <h1 className="font-extrabold text-2xl">EEOS</h1> */}
      <Image
        src="./eeos_logo.svg"
        alt="logo"
        width={44.5}
        height={40}
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
