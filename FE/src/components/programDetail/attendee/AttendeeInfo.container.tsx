"use client";

import { ErrorBoundary } from "react-error-boundary";
import AttendeeInfo from "./AttendeeInfo";
import ErrorFallback from "@/components/common/ErrorFallback";

interface AttendeeInfoContainerProps {
  programId: number;
}

const AttendeeInfoContainer = ({ programId }: AttendeeInfoContainerProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="space-y-16">
        <AttendeeInfo programId={programId} status="attend" />
        <AttendeeInfo programId={programId} status="late" />
        <AttendeeInfo programId={programId} status="absent" />
        <AttendeeInfo programId={programId} status="nonResponse" />
      </div>
    </ErrorBoundary>
  );
};
export default AttendeeInfoContainer;
