"use client";

import { useGetProgramMembersByAttend } from "@/hooks/query/useMemberQuery";
import { AttendStatus } from "@/types/member";
import MemberList from "./MemberList";
import AttendeeStatus from "./AttendeeStatus";
import AttendeeInfoLoader from "./AttendeeInfo.loader";
import { useQueryClient } from "@tanstack/react-query";
import { ProgramType } from "@/types/program";

interface AttendeeInfoProps {
  programId: number;
  status: AttendStatus;
}

const AttendeeInfo = ({ programId, status }: AttendeeInfoProps) => {
  const queryClient = useQueryClient();

  const {
    data: members,
    isLoading,
    isError,
  } = useGetProgramMembersByAttend({
    programId: programId,
    status,
  });

  const programType = queryClient.getQueryData<ProgramType>([
    "programType",
    programId,
  ]);

  if (isLoading) return <AttendeeInfoLoader />;
  if (isError) return <div>에러 발생</div>;

  const isRender =
    programType === "demand" && status === "nonResponse" ? false : true;

  return (
    <>
      {isRender && (
        <div>
          <AttendeeStatus status={status} members={members} />
          <MemberList members={members} />
        </div>
      )}
    </>
  );
};
export default AttendeeInfo;
