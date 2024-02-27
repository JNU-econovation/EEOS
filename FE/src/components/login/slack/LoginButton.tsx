"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSlackLoginMutation } from "@/hooks/query/useAuthQuery";

const SlackLoginButton = () => {
  const clientId = process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_SLACK_REDIRECT_URI;
  const teamId = process.env.NEXT_PUBLIC_SLACK_TEAM_ID;

  const slackLoginUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&team_id=${teamId}&scope=&user_scope=users.profile:read&redirect_uri=${redirectUri}`;

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { mutate: loginSlack } = useSlackLoginMutation();

  useEffect(() => {
    if (code) {
      loginSlack({ code, redirect_uri: redirectUri });
    }
  }, [code]);

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
