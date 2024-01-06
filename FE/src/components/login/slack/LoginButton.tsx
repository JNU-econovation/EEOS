"use client";

import Image from "next/image";

interface SlackLoginButtonProps {
  handleClick: () => void;
}

const SlackLoginButton = ({ handleClick }: SlackLoginButtonProps) => {
  return (
    <button
      className="bg-slack flex w-64 justify-center gap-4 rounded-3xl py-3"
      onClick={handleClick}
    >
      <Image src="/icons/slack.svg" alt="슬랙 로고" width={24} height={24} />
      <p className="text-center font-semibold text-white">슬랙으로 로그인</p>
    </button>
  );
};
export default SlackLoginButton;
