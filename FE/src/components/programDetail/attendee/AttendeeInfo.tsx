"use client";

import { useGetProgramMembersByAttend } from "@/hooks/query/useMemberQuery";
import { AttendStatus } from "@/types/member";
import MemberList from "./MemberList";
import AttendeeStatus from "./AttendeeStatus";
import AttendeeInfoLoader from "./AttendeeInfo.loader";

interface AttendeeInfoProps {
  programId: number;
  status: AttendStatus;
}

const AttendeeInfo = ({ programId, status }: AttendeeInfoProps) => {
  // TODO: getQueryClient로 프로그램 타입 가져오기
  const {
    data: members,
    isLoading,
    isError,
  } = useGetProgramMembersByAttend({
    programId: programId,
    status,
  });

  if (isLoading) return <AttendeeInfoLoader />;
  if (isError) return <div>에러 발생</div>;

  return (
    <div>
      <AttendeeStatus status={status} members={members} />
      <MemberList members={members} />
    </div>
  );
};
export default AttendeeInfo;
