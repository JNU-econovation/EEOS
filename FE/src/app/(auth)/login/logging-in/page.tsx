"use client";

import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useSlackLoginMutation } from "@/hooks/query/useLoginQuery";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginSlackCallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { mutate: loginSlack } = useSlackLoginMutation();

  useEffect(() => {
    if (code) {
      loginSlack(code);
    }
  }, [code]);

  return <LoadingSpinner />;
};
export default LoginSlackCallbackPage;
