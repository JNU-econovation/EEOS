"use client";

import Image from "next/image";
import Link from "next/link";

const SlackLoginButton = () => {
  const clientId = process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
  const redirectUrl = process.env.NEXT_PUBLIC_SLACK_REDIRECT_URL;
  const slackLoginUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&scope=&user_scope=users.profile:read&redirect_url=${redirectUrl}`;

  return (
    <Link
      className="flex w-64 justify-center gap-4 rounded-3xl bg-slack py-3"
      href={slackLoginUrl}
    >
      <Image src="/icons/slack.svg" alt="슬랙 로고" width={24} height={24} />
      <p className="text-center font-semibold text-white">슬랙으로 로그인</p>
    </Link>
  );
};
export default SlackLoginButton;
