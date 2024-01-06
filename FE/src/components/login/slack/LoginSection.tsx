"use client";

import SlackLoginButton from "./LoginButton";

const SlackLoginSection = () => {
  // TODO: Slack OAuth 구현
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-light">에코노베이션 슬랙으로 로그인</p>
      <SlackLoginButton handleClick={() => {}} />
    </div>
  );
};

export default SlackLoginSection;
