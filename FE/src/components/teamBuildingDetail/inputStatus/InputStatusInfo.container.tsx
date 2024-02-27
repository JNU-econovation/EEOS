"use client";

import { ErrorBoundary } from "react-error-boundary";
import InputStatusInfo from "./InputStatusInfo";
import ErrorFallback from "@/components/common/ErrorFallback";

const InputStatusInfoContainer = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="space-y-16">
        <InputStatusInfo status="complete" />
        <InputStatusInfo status="incomplete" />
      </div>
    </ErrorBoundary>
  );
};
export default InputStatusInfoContainer;
